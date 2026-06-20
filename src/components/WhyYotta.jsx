import { Flag, Lock, TrendingUp, FileCheck, Lightbulb, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const pillars = [
  {
    icon: Flag,
    title: 'Sovereign by Design',
    description:
      'Every byte stays in India. Our infrastructure is purpose-built to meet data residency and sovereignty requirements across industries.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
    border: 'border-brand-cyan/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
  },
  {
    icon: Lock,
    title: 'Security-First Architecture',
    description:
      '15+ layers of physical security, military-grade cybersecurity, 24/7 CSOC, and zero-trust networking across all facilities.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
  },
  {
    icon: TrendingUp,
    title: 'Hyperscale Capacity',
    description:
      'Built for the future — 500MW+ of data center capacity, 40,000+ racks, and elastic cloud to handle any workload at any scale.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
  },
  {
    icon: FileCheck,
    title: 'Compliance Ready',
    description:
      'ISO 27001, SOC 2 Type II, PCI-DSS, MEITY empanelled. Pre-audited infrastructure so your team can focus on building, not compliance.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
  },
  {
    icon: Lightbulb,
    title: 'AI-Native Platform',
    description:
      'End-to-end AI factory with GPU clusters, Shakti Studio inference, and enterprise-grade MLOps — purpose-built for the AI era.',
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
    border: 'border-brand-purple/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
  },
  {
    icon: Users,
    title: 'Expert Partnership',
    description:
      "Deep partnerships with NVIDIA, Intel, Dell, Cisco, Microsoft, and more — plus 24/7 expert support from India's most experienced DC team.",
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    glow: 'group-hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]',
  },
]

export default function WhyYotta() {
  const ref = useReveal()

  return (
    <section className="py-24 bg-space-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-brand-blue/6 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-80 h-64 bg-brand-cyan/5 rounded-full blur-[80px]" />
      </div>

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Why Yotta</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Built Different.{' '}
            <span className="text-gradient-brand">Built for India.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Six pillars that make Yotta the most trusted digital infrastructure partner
            for forward-looking enterprises across India.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, description, color, bg, border, glow }, i) => (
            <div
              key={title}
              className={`
                group flex flex-col gap-4 p-6 rounded-2xl
                glass-light border ${border}
                transition-all duration-300 card-hover ${glow}
              `}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Bottom accent */}
              <div className={`h-0.5 rounded-full bg-gradient-to-r ${color.replace('text-', 'from-')} to-transparent w-0 group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Values strip */}
        <div className="mt-16 py-8 px-8 rounded-2xl glass border border-slate-800/60 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-medium">
            Our Core Values
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              'Customer Centricity',
              'Integrity',
              'Trust & Transparency',
              'Agility',
              'Innovation',
              'Happiness for All',
            ].map((v, i) => (
              <span key={v} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-default">
                  {v}
                </span>
                {i < 5 && <span className="w-1 h-1 rounded-full bg-slate-600" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
