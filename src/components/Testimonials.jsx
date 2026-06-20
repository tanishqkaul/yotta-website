import { useEffect, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const testimonials = [
  {
    quote:
      "Yotta's infrastructure optimized our inferencing costs and ensured high uptime, allowing us to maintain top-tier rendering performance.",
    name: 'Bhagaban Behera',
    title: 'CEO & Co-Founder',
    company: 'RenderNet AI',
    gradient: 'from-brand-cyan/20 to-brand-blue/10',
    accentColor: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/20',
  },
  {
    quote:
      "Shakti Cloud's scalable infrastructure significantly reduced our training times, allowing us to focus more on innovation and less on infrastructure hurdles.",
    name: 'Manu Santhanam',
    title: 'Dean IC&SR',
    company: 'IIT Madras',
    gradient: 'from-brand-blue/20 to-brand-purple/10',
    accentColor: 'text-brand-blue',
    borderColor: 'border-brand-blue/20',
  },
  {
    quote:
      "Yotta's scalable and compliant GPU infrastructure has optimized our AI workflows, reducing costs and accelerating innovation for our language models.",
    name: 'Vivek Raghavan',
    title: 'Co-founder',
    company: 'Sarvam AI',
    gradient: 'from-brand-purple/20 to-pink-600/10',
    accentColor: 'text-brand-purple',
    borderColor: 'border-brand-purple/20',
  },
  {
    quote:
      "Yotta Smart Cybersecurity has revolutionized our security infrastructure. We are provided with comprehensive protection ensuring utmost security of our customer data.",
    name: 'Devdutta Chandgadkar',
    title: 'CEO',
    company: 'Saraswat Infotech',
    gradient: 'from-emerald-600/20 to-teal-600/10',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
  {
    quote:
      "We were thoroughly impressed by the comprehensive Yotta Infrastructure — meeting our requirements across digital security, 15 layers of physical security, and robust cyber security.",
    name: 'Jijaba Sitaram Pawar',
    title: 'Chairman',
    company: 'Dnyandeep Co-op Credit Society',
    gradient: 'from-brand-gold/15 to-amber-600/8',
    accentColor: 'text-brand-gold',
    borderColor: 'border-brand-gold/20',
  },
]

function TestimonialCard({ testimonial, active }) {
  const { quote, name, title, company, gradient, accentColor, borderColor } = testimonial
  return (
    <div
      className={`
        relative flex flex-col gap-6 p-8 rounded-2xl
        glass border ${borderColor}
        transition-all duration-500
        ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}
        bg-gradient-to-br ${gradient}
      `}
    >
      <Quote className={`w-8 h-8 ${accentColor} opacity-60`} />
      <blockquote className="text-slate-200 text-lg leading-relaxed font-medium flex-1">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border ${borderColor} flex items-center justify-center`}>
          <span className={`font-display font-bold text-lg ${accentColor}`}>
            {name[0]}
          </span>
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{title} · <span className={accentColor}>{company}</span></p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useReveal()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-space-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">Customer Stories</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="text-gradient-brand">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From AI startups to premier institutions — see how India's top organizations
            power their digital future with Yotta.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main testimonial */}
          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} active={i === current} />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-gradient-brand'
                      : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini grid below */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16">
          {testimonials.slice(0, 3).map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`
                text-left p-4 rounded-xl border transition-all duration-300
                ${i === current
                  ? `border-brand-blue/40 bg-brand-blue/5`
                  : 'border-slate-800/60 bg-space-600/40 hover:border-slate-700'
                }
              `}
            >
              <p className="text-sm text-slate-400 line-clamp-2 mb-3">"{t.quote.slice(0, 80)}..."</p>
              <p className="text-xs font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-500">{t.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
