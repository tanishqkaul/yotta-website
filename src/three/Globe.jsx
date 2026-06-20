import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'

const COUNTRIES_URL = '/countries.geojson'

const DCS = [
  { lat: 19.07, lng: 72.87, name: 'Navi Mumbai', color: '#22d3ee', size: 1.0 },
  { lat: 28.61, lng: 77.2,  name: 'Delhi NCR',   color: '#3b82f6', size: 1.0 },
  { lat: 23.16, lng: 72.68, name: 'GIFT City',   color: '#a855f7', size: 0.85 },
]

const ENDPOINTS = [
  { lat: 1.35,   lng: 103.8,  name: 'Singapore' },
  { lat: 25.2,   lng: 55.27,  name: 'Dubai'     },
  { lat: 51.5,   lng: -0.12,  name: 'London'    },
  { lat: 40.71,  lng: -74.0,  name: 'New York'  },
  { lat: 35.68,  lng: 139.7,  name: 'Tokyo'     },
  { lat: -33.87, lng: 151.2,  name: 'Sydney'    },
  { lat: 50.11,  lng: 8.68,   name: 'Frankfurt' },
]

function buildArcs() {
  const arcs = []
  DCS.forEach((dc, di) => {
    ENDPOINTS.forEach((ep, ei) => {
      if ((di + ei) % 2 !== 0) return
      arcs.push({
        startLat: dc.lat, startLng: dc.lng,
        endLat: ep.lat,   endLng: ep.lng,
        color: [dc.color, '#7dd3fc'],
        dashInitGap: Math.random() * 3,
      })
    })
  })
  arcs.push({ startLat: DCS[0].lat, startLng: DCS[0].lng, endLat: DCS[1].lat, endLng: DCS[1].lng, color: ['#22d3ee','#3b82f6'], dashInitGap: 0 })
  arcs.push({ startLat: DCS[0].lat, startLng: DCS[0].lng, endLat: DCS[2].lat, endLng: DCS[2].lng, color: ['#22d3ee','#a855f7'], dashInitGap: 0.5 })
  arcs.push({ startLat: DCS[1].lat, startLng: DCS[1].lng, endLat: DCS[2].lat, endLng: DCS[2].lng, color: ['#3b82f6','#a855f7'], dashInitGap: 1.0 })
  return arcs
}

// All points: DCs + global endpoints (smaller)
function buildPoints() {
  return [
    ...DCS.map(d => ({ ...d, altitude: 0.015, radius: 0.55 })),
    ...ENDPOINTS.map(e => ({ ...e, color: '#7dd3fc', altitude: 0.008, radius: 0.25, size: 0.5 })),
  ]
}

export default function Globe() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let width = container.clientWidth
    let height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000)
    camera.position.z = 290

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.shadowMap.enabled = true
    container.appendChild(renderer.domElement)

    // Lights — subtle to keep globe dark so hex polygons pop
    const ambient = new THREE.AmbientLight(0x112244, 1.2)
    scene.add(ambient)
    const keyLight = new THREE.DirectionalLight(0x4488cc, 1.8)
    keyLight.position.set(-150, 180, 220)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0x0a2040, 0.6)
    rimLight.position.set(200, -80, -150)
    scene.add(rimLight)

    // Globe
    const globe = new ThreeGlobe({ animateIn: true })
      .showGlobe(true)
      .showAtmosphere(true)
      .atmosphereColor('#1e90ff')
      .atmosphereAltitude(0.22)

    // Custom material — very dark ocean so continents contrast sharply
    const globeMat = globe.globeMaterial()
    globeMat.color        = new THREE.Color(0x020b18)
    globeMat.emissive     = new THREE.Color(0x020b18)
    globeMat.emissiveIntensity = 0.1
    globeMat.specular     = new THREE.Color(0x1155aa)
    globeMat.shininess    = 12

    // Arcs
    globe
      .arcsData(buildArcs())
      .arcColor('color')
      .arcAltitude(() => 0.2 + Math.random() * 0.15)
      .arcStroke(0.6)
      .arcDashLength(0.45)
      .arcDashGap(1.4)
      .arcDashInitialGap('dashInitGap')
      .arcDashAnimateTime(2200)

    // Points — DCs brighter, endpoints smaller
    globe
      .pointsData(buildPoints())
      .pointLat('lat')
      .pointLng('lng')
      .pointColor('color')
      .pointAltitude('altitude')
      .pointRadius('radius')

    // Rings on DCs only
    globe
      .ringsData(DCS)
      .ringLat('lat')
      .ringLng('lng')
      .ringColor((d) => (t) => {
        const c = new THREE.Color(d.color)
        const r = Math.round(c.r * 255)
        const g = Math.round(c.g * 255)
        const b = Math.round(c.b * 255)
        return `rgba(${r},${g},${b},${1 - t})`
      })
      .ringMaxRadius(6)
      .ringPropagationSpeed(2.5)
      .ringRepeatPeriod(850)

    // Labels for DCs
    globe
      .labelsData(DCS)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(0.5)
      .labelDotRadius(0.3)
      .labelColor('color')
      .labelResolution(3)
      .labelAltitude(0.025)

    scene.add(globe)

    // Countries hex polygons
    fetch(COUNTRIES_URL)
      .then(r => r.json())
      .then(countries => {
        globe
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.3)
          .hexPolygonAltitude(0.004)
          .hexPolygonColor(() => 'rgba(14,165,233,0.7)')
      })
      .catch(() => {})

    // Clouds (semi-transparent sphere slightly above globe)
    const cloudsMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    })
    const cloudsMesh = new THREE.Mesh(
      new THREE.SphereGeometry(102.5, 48, 48),
      cloudsMat
    )
    globe.add(cloudsMesh)

    // Initial orientation
    globe.rotation.y = -Math.PI * 0.55
    globe.rotation.x = Math.PI * 0.08

    // Starfield — two layers for depth
    function addStars(count, rMin, rMax, color, size, opacity) {
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        const r  = rMin + Math.random() * (rMax - rMin)
        const th = Math.random() * Math.PI * 2
        const ph = Math.acos(2 * Math.random() - 1)
        pos[i * 3]     = r * Math.sin(ph) * Math.cos(th)
        pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
        pos[i * 3 + 2] = r * Math.cos(ph)
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
      scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
        color, size, transparent: true, opacity, sizeAttenuation: true,
      })))
    }
    addStars(800,  650, 900,  0xaaccff, 1.8, 0.6)
    addStars(400,  900, 1200, 0xffffff, 1.2, 0.4)
    addStars(200,  500, 650,  0x88ddff, 2.2, 0.35)

    // Drag-to-rotate + mouse parallax
    let isDragging = false
    let prevMouse = { x: 0, y: 0 }
    let autoRotate = true
    let dragVelX = 0, dragVelY = 0

    const canvas = renderer.domElement
    canvas.style.cursor = 'grab'

    const onDown = e => {
      isDragging = true
      autoRotate = false
      dragVelX = 0
      dragVelY = 0
      prevMouse = { x: e.clientX, y: e.clientY }
      canvas.style.cursor = 'grabbing'
    }
    const onUp = () => {
      isDragging = false
      canvas.style.cursor = 'grab'
      // Resume auto-rotate after 2s of no drag
      setTimeout(() => { autoRotate = true }, 2000)
    }
    const onMove = e => {
      if (isDragging) {
        const dx = (e.clientX - prevMouse.x) * 0.005
        const dy = (e.clientY - prevMouse.y) * 0.004
        globe.rotation.y += dx
        globe.rotation.x += dy
        dragVelX = dx
        dragVelY = dy
        prevMouse = { x: e.clientX, y: e.clientY }
      }
    }
    canvas.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mousemove', onMove)

    const baseTilt = Math.PI * 0.08
    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      if (autoRotate) {
        globe.rotation.y += 0.0016
      } else if (!isDragging) {
        // Inertia
        dragVelX *= 0.95
        dragVelY *= 0.95
        globe.rotation.y += dragVelX
        globe.rotation.x += dragVelY
      }
      cloudsMesh.rotation.y -= 0.0004
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      width  = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full absolute inset-0" />
}
