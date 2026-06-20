import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const stats = [
  { value: 3, suffix: '+', label: 'Tier IV\nData Centers', decimal: false },
  { value: 500, suffix: '+', label: 'Enterprise\nClients', decimal: false },
  { value: 99.9999, suffix: '%', label: 'Uptime\nSLA', decimal: true },
  { value: 500, suffix: 'MW', label: 'Total DC\nCapacity', decimal: false },
  { value: 40000, suffix: '+', label: 'Rack\nCapacity', decimal: false, format: (v) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v },
  { value: 24, suffix: '/7', label: 'CSOC\nMonitoring', decimal: false },
]

function CountUp({ target, suffix, decimal, format, active }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 2000
    const start = Date.now()
    const startVal = 0

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startVal + (target - startVal) * eased
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])

  const formatted = format
    ? format(Math.round(display))
    : decimal
    ? display.toFixed(4)
    : Math.round(display).toLocaleString()

  return (
    <span className="font-display text-4xl lg:text-5xl font-black text-white tabular-nums">
      {formatted}
      <span className="text-gradient-brand">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useReveal(0.1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Watch for the 'revealed' class to be added, then start counters
    const mo = new MutationObserver(() => {
      if (el.classList.contains('revealed')) { setActive(true); mo.disconnect() }
    })
    mo.observe(el, { attributes: true, attributeFilter: ['class'] })
    if (el.classList.contains('revealed')) setActive(true)
    return () => mo.disconnect()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden bg-space-900">
      {/* Radial gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-64 bg-brand-cyan/4 blur-[100px] rounded-full" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
            The Future is Built on{' '}
            <span className="shimmer-text">Yotta</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Numbers that reflect our commitment to scale, performance, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-slate-800/60">
          {stats.map(({ value, suffix, label, decimal, format }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-4 py-8 gap-3 group"
            >
              <CountUp
                target={value}
                suffix={suffix}
                decimal={decimal}
                format={format}
                active={active}
              />
              <p className="text-sm text-slate-500 font-medium leading-tight whitespace-pre-line group-hover:text-slate-400 transition-colors">
                {label}
              </p>
              {/* Underline accent */}
              <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
