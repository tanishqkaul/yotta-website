import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Products',
    href: '#products',
    children: [
      { label: 'Shakti Cloud (AI)', href: '#products', desc: 'Sovereign GPU cloud platform' },
      { label: 'Yotta Cloud', href: '#products', desc: 'Hyperscale cloud platform' },
      { label: 'Render Cloud', href: '#products', desc: 'High-performance rendering' },
      { label: 'Smart Surveillance', href: '#products', desc: 'AI-powered VMS' },
      { label: 'Shakti Studio', href: '#products', desc: 'AI inference platform' },
      { label: 'Smart Cybersecurity', href: '#products', desc: 'Unified security suite' },
    ],
  },
  {
    label: 'Solutions',
    href: '#ai-factory',
    children: [
      { label: 'Enterprise', href: '#ai-factory', desc: 'For large organizations' },
      { label: 'Startups', href: '#ai-factory', desc: 'Scale-ready infrastructure' },
      { label: 'Government', href: '#ai-factory', desc: 'Compliant sovereign stack' },
      { label: 'BFSI', href: '#ai-factory', desc: 'Financial sector ready' },
    ],
  },
  { label: 'Data Centers', href: '#data-centers' },
  { label: 'Resources', href: '#why-yotta' },
  { label: 'About', href: '#leadership' },
]

function DropdownMenu({ items }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 glass rounded-xl border border-slate-700/50 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-50 animate-fade-in">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex flex-col px-4 py-3 hover:bg-brand-blue/10 transition-colors group"
        >
          <span className="text-sm font-medium text-slate-200 group-hover:text-white">
            {item.label}
          </span>
          {item.desc && (
            <span className="text-xs text-slate-500 group-hover:text-slate-400 mt-0.5">
              {item.desc}
            </span>
          )}
        </a>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-slate-800/60 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-brand">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              Yotta
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        activeDropdown === link.label && 'rotate-180'
                      )}
                    />
                  )}
                </a>
                {link.children && activeDropdown === link.label && (
                  <DropdownMenu items={link.children} />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2">
              Sign In
            </a>
            <a href="#contact"><Button size="sm" className="shadow-brand">
              Get Started
            </Button></a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-800/60">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex gap-3">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
