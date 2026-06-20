import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const techPartners = [
  { name: 'NVIDIA', category: 'AI Hardware' },
  { name: 'Intel', category: 'Processing' },
  { name: 'Dell Technologies', category: 'Infrastructure' },
  { name: 'Cisco', category: 'Networking' },
  { name: 'VMware', category: 'Virtualization' },
  { name: 'Red Hat', category: 'Open Source' },
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'NetApp', category: 'Storage' },
  { name: 'Palo Alto Networks', category: 'Security' },
  { name: 'Fortinet', category: 'Security' },
  { name: 'Juniper', category: 'Networking' },
  { name: 'Pure Storage', category: 'Storage' },
]

const alliances = [
  { name: 'NASSCOM', type: 'Industry' },
  { name: 'NAREDCO', type: 'Association' },
  { name: 'iMasons', type: 'Community' },
  { name: 'UPTIME Institute', type: 'Standards' },
  { name: 'TiE India', type: 'Ecosystem' },
  { name: 'ASSOCHAM', type: 'Industry' },
]

function LogoCard({ name, sub }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 min-w-[140px] h-16 px-6 glass-light rounded-xl border border-slate-800/60 hover:border-brand-blue/30 transition-all duration-200 hover:bg-brand-blue/5 group cursor-default select-none shrink-0">
      <span className="font-display font-semibold text-slate-400 group-hover:text-slate-200 transition-colors text-sm">
        {name}
      </span>
      {sub && (
        <span className="text-[10px] text-slate-600 group-hover:text-slate-500 transition-colors">
          {sub}
        </span>
      )}
    </div>
  )
}

export default function Partners() {
  const ref = useReveal()
  const double = [...techPartners, ...techPartners]

  return (
    <section className="py-24 bg-space-900 relative overflow-hidden">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="default" className="mb-4">Ecosystem</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Building with{' '}
            <span className="text-gradient-brand">the Best</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Deep partnerships with global technology leaders to deliver world-class products and services.
          </p>
        </div>

        {/* Scrolling logo row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div
            className="flex gap-4 items-center"
            style={{ animation: 'ticker 35s linear infinite', width: 'max-content' }}
          >
            {double.map((p, i) => (
              <LogoCard key={`${p.name}-${i}`} name={p.name} sub={p.category} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-space-900 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-space-900 to-transparent pointer-events-none z-10" />
        </div>

        {/* Scrolling logo row 2 (reverse) */}
        <div className="relative overflow-hidden mb-16">
          <div
            className="flex gap-4 items-center"
            style={{
              animation: 'ticker 28s linear infinite reverse',
              width: 'max-content',
            }}
          >
            {[...double].reverse().map((p, i) => (
              <LogoCard key={`rev-${p.name}-${i}`} name={p.name} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-space-900 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-space-900 to-transparent pointer-events-none z-10" />
        </div>

        {/* Alliances */}
        <div className="p-8 rounded-2xl glass border border-slate-800/60">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium text-center mb-6">
            Industry Alliances & Associations
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {alliances.map(({ name, type }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-slate-700/60 hover:border-slate-600 transition-colors"
              >
                <span className="text-sm font-medium text-slate-300">{name}</span>
                <span className="text-xs text-slate-600 hidden sm:block">· {type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
