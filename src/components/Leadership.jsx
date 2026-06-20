import { Linkedin, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useReveal } from '@/hooks/useReveal'

const leaders = [
  {
    name: 'Darshan Hiranandani',
    title: 'Chairman & Co-founder',
    bio: 'CEO of the Hiranandani Group with an MBA from Rochester Institute of Technology. Pioneered Hiranandani Group\'s diversification into data centers, cloud, and energy.',
    initial: 'DH',
    gradient: 'from-brand-blue-dark via-brand-blue to-brand-cyan',
    accentColor: 'text-brand-blue',
    bgColor: 'from-brand-blue/20 to-brand-cyan/10',
  },
  {
    name: 'Sunil Gupta',
    title: 'Co-founder, MD & CEO',
    bio: 'Known as the "Data Center Man of India" — built and operated 19+ third-party data centers across India including the largest hyperscale DCs serving global OTT players.',
    initial: 'SG',
    gradient: 'from-brand-cyan via-teal-500 to-emerald-500',
    accentColor: 'text-brand-cyan',
    bgColor: 'from-brand-cyan/20 to-emerald-500/10',
  },
  {
    name: 'Dr. Niranjan Hiranandani',
    title: 'Chairman Emeritus',
    bio: 'Visionary founder of the Hiranandani Group. Transformed India\'s real estate landscape and shaped economic policy through leadership in NAREDCO, HUDCO, and ASSOCHAM.',
    initial: 'NH',
    gradient: 'from-brand-gold via-amber-500 to-orange-500',
    accentColor: 'text-brand-gold',
    bgColor: 'from-brand-gold/20 to-orange-500/10',
  },
]

const executiveTeam = [
  'Nitin Jadhav', 'Bhavesh Adhia', 'Rajesh Garg', 'Viren Wadhwa',
  'KB Shiv Kumar', 'Pratap Patjoshi', 'Sashishekar Panda', 'Tilakraj Parmar',
]

export default function Leadership() {
  const ref = useReveal()

  return (
    <section className="py-24 bg-space-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Leadership</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Built by{' '}
            <span className="text-gradient-brand">Visionaries</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A leadership team with unmatched expertise in data centers, enterprise technology,
            and India's digital transformation.
          </p>
        </div>

        {/* Founders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {leaders.map(({ name, title, bio, initial, gradient, accentColor, bgColor }) => (
            <div
              key={name}
              className="group flex flex-col gap-5 p-6 rounded-2xl glass-light border border-slate-800/60 card-hover"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                  <span className="font-display font-black text-xl text-white">{initial}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">{name}</h3>
                  <p className={`text-sm font-medium ${accentColor}`}>{title}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{bio}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${accentColor}`}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${gradient} animate-pulse`} />
                  Yotta Leadership
                </div>
                <button className="text-slate-500 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Executive team strip */}
        <div className="p-6 rounded-2xl glass border border-slate-800/60">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm font-semibold text-slate-300">Executive Team</p>
            <Button variant="link" className="text-xs">
              View all <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {executiveTeam.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-space-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-cyan/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-blue">{name[0]}</span>
                </div>
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-space-900/60 border border-dashed border-slate-700/60 text-slate-500 text-sm">
              +8 more
            </div>
          </div>
        </div>

        {/* Culture callout */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-transparent border border-brand-blue/20">
            <h3 className="font-display font-semibold text-white mb-2">Life at Yotta</h3>
            <p className="text-sm text-slate-400 mb-4">
              Where purpose meets passion. Every idea, every breakthrough begins with our people —
              united by shared purpose and collective passion.
            </p>
            <Button variant="link" className="text-sm p-0">
              Explore Careers <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20">
            <h3 className="font-display font-semibold text-white mb-2">Yotta Innovators Club</h3>
            <p className="text-sm text-slate-400 mb-4">
              Join India's fastest-growing community of builders, technologists, and entrepreneurs
              shaping the AI landscape.
            </p>
            <Button variant="link" className="text-sm p-0 text-brand-gold hover:text-brand-gold-light">
              Join the Club <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
