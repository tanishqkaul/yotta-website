import { ArrowRight, Brain, Cloud, Film, Eye, Zap, Server, Shield, Archive } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const products = [
  {
    icon: Brain,
    name: 'Shakti Cloud',
    tag: 'AI Factory',
    tagVariant: 'ai',
    description: 'Sovereign AI cloud platform — high-performance, low-latency GPU infrastructure for LLMs, inference, and AI innovation.',
    gradient: 'from-brand-purple-dark/20 via-brand-purple/10 to-transparent',
    border: 'hover:border-brand-purple/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]',
    iconBg: 'bg-gradient-to-br from-brand-purple-dark to-brand-purple',
    href: '#',
  },
  {
    icon: Cloud,
    name: 'Yotta Cloud',
    tag: 'Cloud Platform',
    tagVariant: 'default',
    description: "India's sovereign hyperscale cloud — flexible, secure, end-to-end public, private, hybrid, and edge deployments.",
    gradient: 'from-brand-blue-dark/20 via-brand-blue/10 to-transparent',
    border: 'hover:border-brand-blue/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]',
    iconBg: 'bg-gradient-to-br from-brand-blue-dark to-brand-blue',
    href: '#',
  },
  {
    icon: Film,
    name: 'Render Cloud',
    tag: 'Creative',
    tagVariant: 'secondary',
    description: 'Cloud platform delivering accessible, high-performance rendering — scalable, secure supercomputing for creators.',
    gradient: 'from-pink-600/20 via-pink-500/10 to-transparent',
    border: 'hover:border-pink-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
    iconBg: 'bg-gradient-to-br from-pink-700 to-pink-500',
    href: '#',
  },
  {
    icon: Eye,
    name: 'Smart Surveillance',
    tag: 'AI Security',
    tagVariant: 'cyan',
    description: 'Cloud-based, AI-powered VMS with real-time threat detection — facial recognition, ANPR, and secure video analytics.',
    gradient: 'from-brand-cyan/15 via-teal-500/8 to-transparent',
    border: 'hover:border-brand-cyan/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    iconBg: 'bg-gradient-to-br from-teal-700 to-brand-cyan',
    href: '#',
  },
  {
    icon: Zap,
    name: 'Shakti Studio',
    tag: 'AI Inference',
    tagVariant: 'gold',
    description: 'All-in-one AI inference platform — explore, fine-tune, and deploy instantly with enterprise-grade GPUs.',
    gradient: 'from-brand-gold/15 via-amber-500/8 to-transparent',
    border: 'hover:border-brand-gold/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    iconBg: 'bg-gradient-to-br from-amber-700 to-brand-gold',
    href: '#',
  },
  {
    icon: Server,
    name: 'Colocation',
    tag: 'Data Center',
    tagVariant: 'secondary',
    description: 'Scalable, secure, high-performance data center infrastructure — AI-ready, always-on across India.',
    gradient: 'from-slate-600/20 via-slate-500/10 to-transparent',
    border: 'hover:border-slate-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(100,116,139,0.2)]',
    iconBg: 'bg-gradient-to-br from-slate-700 to-slate-500',
    href: '#',
  },
  {
    icon: Shield,
    name: 'Smart Cybersecurity',
    tag: 'Security',
    tagVariant: 'success',
    description: 'Unified cybersecurity — managed EDR, threat detection, application scanning, identity access, and 24/7 CSOC.',
    gradient: 'from-emerald-600/20 via-emerald-500/10 to-transparent',
    border: 'hover:border-emerald-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    iconBg: 'bg-gradient-to-br from-emerald-800 to-emerald-500',
    href: '#',
  },
  {
    icon: Archive,
    name: 'Media Archive',
    tag: 'Media & AI',
    tagVariant: 'ai',
    description: 'Transform your archive into an intelligent, searchable content vault — metadata-rich AI with airtight compliance.',
    gradient: 'from-violet-600/20 via-violet-500/10 to-transparent',
    border: 'hover:border-violet-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    iconBg: 'bg-gradient-to-br from-violet-800 to-violet-500',
    href: '#',
  },
]

export default function Products() {
  const sectionRef = useReveal()

  return (
    <section id="products" className="py-24 bg-space-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={sectionRef} className="section-reveal text-center mb-16">
          <Badge variant="cyan" className="mb-4">Full Stack Portfolio</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            India's Tech Stack for{' '}
            <span className="text-gradient-brand">the Future</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From AI and cloud to media, security, and colocation — platforms engineered for
            scale, performance, and sovereignty.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <a
                key={product.name}
                href={product.href}
                className={`
                  group relative flex flex-col gap-4 p-5 rounded-2xl
                  bg-space-600/50 border border-slate-800/60
                  transition-all duration-300 card-hover
                  ${product.border} ${product.glow}
                  overflow-hidden
                `}
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* Gradient bg overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Icon */}
                <div className={`relative w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-white text-base leading-tight">{product.name}</h3>
                    <Badge variant={product.tagVariant} className="text-[10px] px-2 py-0.5 shrink-0">
                      {product.tag}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{product.description}</p>
                </div>

                {/* Link */}
                <div className="relative flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-brand-cyan transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
