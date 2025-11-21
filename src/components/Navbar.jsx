import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/sync-engine', label: 'Sync Engine' },
  { to: '/ai-mapping', label: 'AI Mapping' },
  { to: '/trust-layer', label: 'Trust Layer' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/documentation', label: 'Documentation' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/60 border-b border-slate-700/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4cc9f0] to-indigo-500 shadow-[0_0_25px_rgba(76,201,240,0.6)]" />
          <span className="text-white font-semibold tracking-tight">SyncQora</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'text-[#4cc9f0] bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700/40 bg-slate-900/90">
          <nav className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'text-[#4cc9f0] bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
