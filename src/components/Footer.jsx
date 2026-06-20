import { Zap, Linkedin, Twitter, Youtube, Github } from 'lucide-react'

const footerLinks = {
  Company: [
    'About Us',
    'Leadership',
    'Life at Yotta',
    'Careers',
    'Media',
    'Partner Program',
    'Investor Relations',
    'Yotta Innovators Club',
  ],
  Products: [
    'Shakti Cloud (AI)',
    'Yotta Cloud',
    'Render Cloud',
    'Smart Surveillance',
    'Shakti Studio',
    'Colocation',
    'Smart Cybersecurity',
    'Media Archive',
  ],
  'Data Centers': [
    'Overview',
    'NM1 Navi Mumbai',
    'D1 Delhi NCR',
    'G1 GIFT City',
  ],
  Resources: [
    'Blogs',
    'Case Studies',
    'Videos',
    'Newsletters',
    'Documentation',
    'API Reference',
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
]

const certBadges = ['ISO 27001', 'SOC 2', 'PCI-DSS', 'TIER IV', 'MEITY']

export default function Footer() {
  return (
    <footer className="relative bg-space-950 border-t border-slate-800/60 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-brand">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white">Yotta</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              India's Trusted Sovereign Cloud & AI Infrastructure — enabling digital transformation
              through end-to-end hyperscale data centers, cloud, AI, and cybersecurity.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-light border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mt-6">
              {certBadges.map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] font-semibold px-2 py-1 rounded-md bg-space-800 border border-slate-700/50 text-slate-500"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="py-6 px-6 rounded-xl glass-light border border-slate-800/60 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Get in Touch</p>
            <a href="mailto:marketing@yotta.com" className="text-sm font-medium text-white hover:text-brand-cyan transition-colors">
              marketing@yotta.com
            </a>
          </div>
          <div className="h-px sm:h-8 sm:w-px bg-slate-800 w-full sm:w-auto" />
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Registered Office</p>
            <p className="text-sm text-slate-400">
              BG House, Hiranandani Gardens, Powai, Mumbai — 400076
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/60">
          <p className="text-sm text-slate-600">
            © 2026 Yotta Data Services. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600">
            {['Privacy Policy', 'Cookie Policy', 'Acceptable Use', 'Grievance Officer', 'Whistle Blower Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
