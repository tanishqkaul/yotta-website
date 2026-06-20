import { Cpu, ArrowRight, CheckCircle2, Layers, Globe2, Lock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const features = [
  { icon: Cpu, text: 'High-performance H100 / A100 GPU clusters' },
  { icon: Layers, text: 'Ingest, train, fine-tune & deploy at scale' },
  { icon: Globe2, text: 'Serverless compute with low latency endpoints' },
  { icon: Lock, text: 'Full sovereign compliance — data never leaves India' },
  { icon: Zap, text: 'Integrated with Shakti Studio inference platform' },
  { icon: CheckCircle2, text: '24/7 expert ML engineering support' },
]

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated scan lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-px opacity-10"
          style={{
            top: `${(i + 1) * 12.5}%`,
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(236,72,153,0.8), transparent)',
            animation: `shimmer ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px opacity-8"
          style={{
            left: `${(i + 1) * 16.66}%`,
            background: 'linear-gradient(180deg, transparent, rgba(168,85,247,0.4), transparent)',
          }}
        />
      ))}
    </div>
  )
}

export default function AIFactory() {
  const ref = useReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/20 via-space-900 to-space-900" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <AnimatedGrid />

      {/* Corner glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-b from-brand-purple/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink/8 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="section-reveal relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <Badge variant="ai" className="mb-5 gap-2">
                <Cpu className="w-3 h-3" />
                AI Factory · Rudra Program
              </Badge>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Full-Stack AI Factory{' '}
                <span className="text-gradient-ai">Powered by</span>
                <br />
                Shakti Cloud
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Yotta's AI Factory enables enterprises to ingest, train, fine-tune, and deploy AI models at
                scale — with high-performance GPUs, serverless compute, low latency, and full sovereign compliance.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-3">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button variant="ai" size="lg" className="group">
                Explore AI Factory
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-purple/40 text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple">
                Apply for Rudra →
              </Button>
            </div>
          </div>

          {/* Right — GPU Credits Card */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-purple/30 bg-space-600/60 backdrop-blur-sm p-8 glow-purple">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent pointer-events-none" />

              <div className="relative flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ai flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">RUDRA PROGRAM</p>
                      <p className="font-display font-bold text-white text-lg">Free GPU Credits</p>
                    </div>
                  </div>
                  <Badge variant="ai">Active</Badge>
                </div>

                {/* Credit amount */}
                <div className="py-6 px-4 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/10 border border-brand-purple/20 text-center">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Up to</p>
                  <p className="font-display text-6xl font-black text-gradient-ai">$50K</p>
                  <p className="text-slate-400 text-sm mt-2">of free GPU cloud credits</p>
                </div>

                {/* What you get */}
                <div className="grid gap-3">
                  {[
                    'Access to H100 & A100 GPU clusters',
                    'Dedicated ML engineering support',
                    'Compliance & sovereignty by default',
                    'Scale from inference to production',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ai" className="w-full">
                  Shape the AI Landscape — Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 border border-slate-700/50 shadow-xl">
              <p className="text-xs text-slate-400">AI Startups Supported</p>
              <p className="font-display text-2xl font-bold text-gradient-ai">200+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
