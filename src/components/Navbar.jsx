import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border border-white/60 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="font-extrabold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">YourName</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" className="p-2 rounded-lg hover:bg-slate-100">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
