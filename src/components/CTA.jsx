import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useReveal } from '@/hooks/useReveal'

function FloatingOrb({ className, style }) {
  return (
    <div
      className={`absolute rounded-full blur-[80px] pointer-events-none ${className}`}
      style={style}
    />
  )
}

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="py-32 relative overflow-hidden bg-space-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/20 via-space-900 to-brand-purple-dark/15" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <FloatingOrb
          className="w-[500px] h-[300px] bg-brand-blue/15 top-1/4 left-1/4"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <FloatingOrb
          className="w-[400px] h-[250px] bg-brand-cyan/10 bottom-1/4 right-1/4"
          style={{ animation: 'float 10s ease-in-out infinite 2s' }}
        />
        <FloatingOrb
          className="w-[300px] h-[200px] bg-brand-purple/10 top-1/2 right-1/3"
          style={{ animation: 'float 7s ease-in-out infinite 4s' }}
        />
      </div>

      {/* Border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      <div ref={ref} className="section-reveal relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-brand-blue/30 mb-8">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
          </span>
          <span className="text-sm text-slate-300 font-medium">Talk to our experts today</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
          Unlock the Power of{' '}
          <span className="text-gradient-brand">Yotta</span>
          <br />
          for Your Business
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Connect with our experts today to accelerate your business with sovereign cloud,
          AI infrastructure, and enterprise-grade security — built entirely in India.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="xl" className="group min-w-[200px] glow-blue">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="outline" className="min-w-[200px]">
            View Product Demos
          </Button>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:marketing@yotta.com"
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl glass border border-slate-700/60 group-hover:border-brand-blue/40 flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Email us</p>
              <p className="text-sm font-medium">marketing@yotta.com</p>
            </div>
          </a>
          <div className="w-px h-8 bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-10 h-10 rounded-xl glass border border-slate-700/60 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Our office</p>
              <p className="text-sm font-medium">Powai, Mumbai, MH 400076</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
