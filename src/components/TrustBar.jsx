import { ShieldCheck } from 'lucide-react'

const certs = [
  { name: 'ISO 27001', color: 'text-emerald-400' },
  { name: 'SOC 2 Type II', color: 'text-brand-blue' },
  { name: 'PCI-DSS', color: 'text-brand-gold' },
  { name: 'ISO 9001', color: 'text-brand-cyan' },
  { name: 'TIER IV', color: 'text-brand-purple' },
  { name: 'MEITY Empanelled', color: 'text-pink-400' },
  { name: 'ISO 50001', color: 'text-emerald-400' },
  { name: 'CSA STAR', color: 'text-brand-blue' },
]

const partners = [
  'NVIDIA', 'Intel', 'Dell Technologies', 'Cisco', 'VMware',
  'Red Hat', 'Microsoft', 'AWS', 'Google Cloud', 'NetApp',
  'Palo Alto', 'Fortinet',
]

export default function TrustBar() {
  const allPartners = [...partners, ...partners]

  return (
    <section className="py-12 border-y border-slate-800/50 bg-space-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {certs.map(({ name, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 glass-light rounded-full px-4 py-2 border border-slate-700/50 hover:border-slate-600/80 transition-colors"
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${color}`} />
              <span className="text-xs font-semibold text-slate-300 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          <span className="text-xs text-slate-500 font-medium tracking-widest uppercase whitespace-nowrap">
            Technology Partners
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        {/* Scrolling partner ticker */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 items-center whitespace-nowrap"
            style={{ animation: 'ticker 28s linear infinite' }}
          >
            {allPartners.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold text-slate-500 hover:text-slate-300 transition-colors cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-space-800 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-space-800 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
