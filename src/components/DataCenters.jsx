import { MapPin, Zap, Wifi, Thermometer, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const dataCenters = [
  {
    id: 'NM1',
    name: 'NM1 Navi Mumbai',
    state: 'Maharashtra',
    lat: '61%',
    lon: '40%',
    color: '#22D3EE',
    specs: ['200MW capacity', '20,000+ racks', 'Tier IV', 'Operational'],
  },
  {
    id: 'D1',
    name: 'D1 Delhi NCR',
    state: 'Haryana',
    lat: '22%',
    lon: '50%',
    color: '#3B82F6',
    specs: ['200MW capacity', '15,000+ racks', 'Tier IV', 'Operational'],
  },
  {
    id: 'G1',
    name: 'G1 GIFT City',
    state: 'Gujarat',
    lat: '44%',
    lon: '26%',
    color: '#A855F7',
    specs: ['100MW capacity', '5,000+ racks', 'Tier IV', 'Upcoming'],
  },
]

const specs = [
  { icon: Zap, label: 'Total Capacity', value: '500MW+' },
  { icon: Shield, label: 'Security Layers', value: '15+' },
  { icon: Thermometer, label: 'PUE Rating', value: '< 1.3' },
  { icon: Wifi, label: 'Uptime SLA', value: '99.9999%' },
]

function IndiaMap({ centers }) {
  return (
    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
      {/* India SVG outline — simplified */}
      <svg
        viewBox="0 0 300 420"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow */}
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="150" cy="210" rx="140" ry="190" fill="url(#mapGlow)" />

        {/* India outline path (simplified/stylized) */}
        <path
          d="M 120 20
             L 170 18 L 200 30 L 220 50 L 230 75 L 225 95
             L 240 115 L 250 140 L 245 165 L 255 185
             L 260 210 L 250 235 L 235 255 L 215 270
             L 200 295 L 185 320 L 175 340 L 168 360
             L 162 380 L 158 400 L 154 415
             L 150 400 L 145 380 L 140 360 L 132 340
             L 118 320 L 100 295 L 80 275 L 60 250
             L 48 220 L 45 195 L 50 170 L 42 145
             L 40 120 L 50 100 L 48 78 L 58 58
             L 78 40 L 100 28 Z"
          fill="rgba(13,27,46,0.8)"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />

        {/* Grid lines inside */}
        {[60, 100, 140, 180, 220, 260, 300, 340].map((y) => (
          <line key={y} x1="40" y1={y} x2="260" y2={y}
            stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
        ))}
        {[80, 120, 160, 200, 240].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="415"
            stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
        ))}

        {/* Data center nodes */}
        {centers.map(({ id, lat, lon, color, name }) => {
          // Parse percentages to SVG coords
          const x = parseFloat(lon) / 100 * 300
          const y = parseFloat(lat) / 100 * 420
          return (
            <g key={id}>
              {/* Outer ring pulsing */}
              <circle cx={x} cy={y} r="18" fill="none"
                stroke={color} strokeWidth="1" strokeOpacity="0.2"
                style={{ animation: `ping 2.5s ease-out infinite`, transformOrigin: `${x}px ${y}px` }}
              />
              <circle cx={x} cy={y} r="12" fill="none"
                stroke={color} strokeWidth="1" strokeOpacity="0.4"
                style={{ animation: `ping 2.5s ease-out infinite 0.8s`, transformOrigin: `${x}px ${y}px` }}
              />
              {/* Inner dot */}
              <circle cx={x} cy={y} r="5" fill={color} opacity="0.9" filter="url(#glow)" />
              <circle cx={x} cy={y} r="3" fill="white" opacity="0.9" />
              {/* Label */}
              <text x={x + 12} y={y + 4} fill={color} fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">
                {id}
              </text>
            </g>
          )
        })}

        {/* Connection lines */}
        {[
          [centers[0], centers[1]],
          [centers[1], centers[2]],
          [centers[0], centers[2]],
        ].map(([a, b], i) => {
          const ax = parseFloat(a.lon) / 100 * 300
          const ay = parseFloat(a.lat) / 100 * 420
          const bx = parseFloat(b.lon) / 100 * 300
          const by = parseFloat(b.lat) / 100 * 420
          return (
            <line key={i} x1={ax} y1={ay} x2={bx} y2={by}
              stroke="rgba(59,130,246,0.25)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function DataCenters() {
  const ref = useReveal()

  return (
    <section id="data-centers" className="py-24 bg-space-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/6 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            <MapPin className="w-3 h-3 mr-1.5" />
            Physical Infrastructure
          </Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Where Your Data{' '}
            <span className="text-gradient-brand">Calls Home</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Yotta operates sovereign hyperscale Tier IV data centers scalable across GW range campuses
            — built with energy-efficient design and multi-layered security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — DC cards */}
          <div className="flex flex-col gap-5">
            {/* Spec grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center p-4 rounded-xl glass-light border border-slate-800/60">
                  <Icon className="w-5 h-5 text-brand-cyan mx-auto mb-2" />
                  <p className="text-xl font-bold font-display text-white">{value}</p>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {dataCenters.map(({ id, name, state, color, specs: dcSpecs }) => (
              <div
                key={id}
                className="group flex items-start gap-4 p-5 rounded-xl glass-light border border-slate-800/60 card-hover"
                style={{ '--glow-color': color }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-black text-sm"
                  style={{ background: `${color}20`, border: `1px solid ${color}40`, color }}
                >
                  {id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-white">{name}</p>
                    <span className="text-xs text-slate-500">{state}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dcSpecs.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-full bg-space-900/60 text-slate-400 border border-slate-700/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full shrink-0 mt-2 animate-pulse" style={{ background: color }} />
              </div>
            ))}
          </div>

          {/* Right — India Map */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[360px]">
              <IndiaMap centers={dataCenters} />
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
