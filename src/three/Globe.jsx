import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const SPHERE_RADIUS = 2.2
const PARTICLE_COUNT = 2800
const STAR_COUNT = 600

function latLonToVec3(lat, lon, radius) {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((lon + 180) * Math.PI) / 180
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

const DATA_CENTERS = [
  { lat: 19.1, lon: 73.0, label: 'Navi Mumbai' },
  { lat: 28.7, lon: 77.1, label: 'Delhi NCR' },
  { lat: 23.2, lon: 72.7, label: 'GIFT City' },
]

export default function Globe() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 1400 : PARTICLE_COUNT

    let width = container.clientWidth
    let height = container.clientHeight

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.z = 5.5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ─── Particle sphere ───────────────────────────────────────────────────────
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const goldenRatio = (1 + Math.sqrt(5)) / 2
    for (let i = 0; i < particleCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount)

      const jitter = 1 + (Math.random() - 0.5) * 0.03
      const r = SPHERE_RADIUS * jitter
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi)
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)

      const t = Math.random()
      if (t < 0.55) {
        colors[i * 3] = 0.232; colors[i * 3 + 1] = 0.510; colors[i * 3 + 2] = 0.965 // blue #3B82F6
      } else if (t < 0.82) {
        colors[i * 3] = 0.024; colors[i * 3 + 1] = 0.714; colors[i * 3 + 2] = 0.831 // cyan #06B6D4
      } else {
        colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.86; colors[i * 3 + 2] = 1.0 // bright
      }

      sizes[i] = Math.random() * 1.8 + 0.6
    }

    const sphereGeo = new THREE.BufferGeometry()
    sphereGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    sphereGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    sphereGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

    const sphereMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;
        uniform float uTime;

        void main() {
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          float dist = -mvPos.z;
          vOpacity = smoothstep(8.0, 3.0, dist);
          gl_PointSize = aSize * (280.0 / dist);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float alpha = (1.0 - smoothstep(0.25, 0.5, d)) * vOpacity * 0.85;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
    })

    const spherePoints = new THREE.Points(sphereGeo, sphereMat)
    scene.add(spherePoints)

    // ─── Outer glow ring ───────────────────────────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(SPHERE_RADIUS + 0.08, 0.005, 8, 120)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.25,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI * 0.3
    scene.add(ring)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(SPHERE_RADIUS + 0.2, 0.003, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.12 })
    )
    ring2.rotation.x = Math.PI * 0.6
    ring2.rotation.y = Math.PI * 0.3
    scene.add(ring2)

    // ─── Star field ────────────────────────────────────────────────────────────
    const starPositions = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT; i++) {
      const spread = 18
      starPositions[i * 3] = (Math.random() - 0.5) * spread
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * spread
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * spread - 2
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.018,
      transparent: true,
      opacity: 0.55,
    })
    scene.add(new THREE.Points(starGeo, starMat))

    // ─── Data center nodes ─────────────────────────────────────────────────────
    const nodeGroup = new THREE.Group()
    const nodePulseRings = []

    DATA_CENTERS.forEach(({ lat, lon }, i) => {
      const pos = latLonToVec3(lat, lon, SPHERE_RADIUS + 0.04)
      // Bright core dot
      const coreGeo = new THREE.SphereGeometry(0.04, 12, 12)
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00ffff })
      const core = new THREE.Mesh(coreGeo, coreMat)
      core.position.copy(pos)
      nodeGroup.add(core)

      // Pulse ring 1
      const pr1Geo = new THREE.RingGeometry(0.05, 0.085, 32)
      const pr1Mat = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      })
      const pr1 = new THREE.Mesh(pr1Geo, pr1Mat)
      pr1.position.copy(pos)
      pr1.lookAt(new THREE.Vector3(0, 0, 6))
      nodeGroup.add(pr1)
      nodePulseRings.push({ mesh: pr1, mat: pr1Mat, offset: i * 1.1 })

      // Pulse ring 2 (outer)
      const pr2Geo = new THREE.RingGeometry(0.09, 0.14, 32)
      const pr2Mat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      })
      const pr2 = new THREE.Mesh(pr2Geo, pr2Mat)
      pr2.position.copy(pos)
      pr2.lookAt(new THREE.Vector3(0, 0, 6))
      nodeGroup.add(pr2)
      nodePulseRings.push({ mesh: pr2, mat: pr2Mat, offset: i * 1.1 + 0.5 })
    })

    // Connection arcs between nodes
    const dcPositions = DATA_CENTERS.map(({ lat, lon }) =>
      latLonToVec3(lat, lon, SPHERE_RADIUS + 0.06)
    )
    const pairs = [[0, 1], [1, 2], [0, 2]]
    pairs.forEach(([a, b]) => {
      const pointA = dcPositions[a]
      const pointB = dcPositions[b]
      const mid = new THREE.Vector3()
        .addVectors(pointA, pointB)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(SPHERE_RADIUS * 1.25)

      const curve = new THREE.QuadraticBezierCurve3(pointA, mid, pointB)
      const pts = curve.getPoints(40)
      const arcGeo = new THREE.BufferGeometry().setFromPoints(pts)
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.35,
      })
      nodeGroup.add(new THREE.Line(arcGeo, arcMat))
    })

    scene.add(nodeGroup)

    // ─── Ambient glow sprite ───────────────────────────────────────────────────
    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = 128; glowCanvas.height = 128
    const glowCtx = glowCanvas.getContext('2d')
    const grad = glowCtx.createRadialGradient(64, 64, 0, 64, 64, 64)
    grad.addColorStop(0, 'rgba(59,130,246,0.5)')
    grad.addColorStop(0.4, 'rgba(6,182,212,0.15)')
    grad.addColorStop(1, 'rgba(0,0,0,0)')
    glowCtx.fillStyle = grad
    glowCtx.fillRect(0, 0, 128, 128)

    const glowTex = new THREE.CanvasTexture(glowCanvas)
    const glowMat = new THREE.SpriteMaterial({ map: glowTex, transparent: true, opacity: 0.6, depthWrite: false })
    const glowSprite = new THREE.Sprite(glowMat)
    glowSprite.scale.set(8, 8, 1)
    glowSprite.position.z = -1
    scene.add(glowSprite)

    // ─── Mouse parallax ────────────────────────────────────────────────────────
    let targetRX = 0, targetRY = 0, currentRX = 0, currentRY = 0

    const onMouseMove = (e) => {
      targetRY = ((e.clientX / window.innerWidth) - 0.5) * 0.4
      targetRX = -((e.clientY / window.innerHeight) - 0.5) * 0.25
    }
    window.addEventListener('mousemove', onMouseMove)

    // ─── Animation loop ────────────────────────────────────────────────────────
    let frameId
    let t = 0
    const mainGroup = new THREE.Group()
    mainGroup.add(spherePoints)
    mainGroup.add(nodeGroup)
    mainGroup.add(ring)
    mainGroup.add(ring2)
    scene.remove(spherePoints)
    scene.remove(nodeGroup)
    scene.remove(ring)
    scene.remove(ring2)
    scene.add(mainGroup)

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.008

      sphereMat.uniforms.uTime.value = t
      mainGroup.rotation.y += 0.0025

      // Smooth parallax
      currentRX += (targetRX - currentRX) * 0.05
      currentRY += (targetRY - currentRY) * 0.05
      mainGroup.rotation.x = currentRX
      mainGroup.rotation.y += currentRY * 0.01

      // Pulse rings
      nodePulseRings.forEach(({ mesh, mat, offset }) => {
        const pulse = (Math.sin(t * 1.8 + offset) + 1) / 2
        const scale = 1 + pulse * 0.6
        mesh.scale.setScalar(scale)
        mat.opacity = (1 - pulse) * 0.7
      })

      // Ring rotation
      ring.rotation.z += 0.001
      ring2.rotation.z -= 0.0008

      renderer.render(scene, camera)
    }
    animate()

    // ─── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full absolute inset-0" />
}
