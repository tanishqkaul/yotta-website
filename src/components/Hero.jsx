import { ArrowRight, Play, Shield, Server, Cpu, Globe2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Globe from '@/three/Globe'

const quickStats = [
  { icon: Server, value: '3+', label: 'Tier IV Data Centers' },
  { icon: Cpu, value: '500+', label: 'Enterprise Clients' },
  { icon: Shield, value: '99.9999%', label: 'Uptime SLA' },
  { icon: Globe2, value: '500MW', label: 'DC Capacity' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-space-900">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-brand-cyan/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-purple/6 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="flex flex-col gap-8"
            style={{ animation: 'fadeUp 0.7s ease-out both' }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3">
              <Badge variant="cyan" className="gap-1.5 font-medium">
                <span className="text-base leading-none">🇮🇳</span>
                Sovereign Digital Infrastructure
              </Badge>
              <Badge variant="gold" className="gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                AI-Ready
              </Badge>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                India's Trusted{' '}
                <br />
                <span className="text-gradient-brand">Sovereign Cloud</span>
                <br />
                <span className="text-slate-200">& AI Infrastructure</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Full-stack cloud, data center, AI, and cybersecurity services — secure, scalable,
              and fully operated in India to power compliant, local digital transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="group">
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); alert('Watch demo video: https://yotta.com/demo'); }}>
                <Button size="lg" variant="outline" className="group gap-2">
                  <span className="w-8 h-8 rounded-full border border-brand-blue/50 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                    <Play className="w-3 h-3 text-brand-blue fill-brand-blue" />
                  </span>
                  Watch Demo
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {quickStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-xl glass-light border border-slate-800/60"
                >
                  <Icon className="w-4 h-4 text-brand-cyan" />
                  <span className="text-2xl font-bold font-display text-white">{value}</span>
                  <span className="text-xs text-slate-500 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Three.js Globe */}
          <div
            className="relative h-[480px] lg:h-[620px]"
            style={{ animation: 'fadeIn 1.2s ease-out 0.2s both' }}
          >
            <Globe />

            {/* DC Labels (floating cards on globe edge) */}
            <div className="absolute top-12 right-4 glass-light rounded-xl px-3 py-2 border border-brand-cyan/20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-medium text-brand-cyan">Delhi NCR</span>
              </div>
            </div>
            <div className="absolute bottom-20 right-12 glass-light rounded-xl px-3 py-2 border border-brand-blue/20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-medium text-brand-blue-light">Navi Mumbai</span>
              </div>
            </div>
            <div className="absolute bottom-36 right-4 glass-light rounded-xl px-3 py-2 border border-brand-purple/20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-xs font-medium text-brand-purple">GIFT City</span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 glass-light rounded-full px-4 py-2 border border-slate-700/50">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-slate-300 font-medium">Live Infrastructure · All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-900 to-transparent pointer-events-none" />
    </section>
  )
}
