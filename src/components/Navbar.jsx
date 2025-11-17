import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Vakmanschap', href: '#vakmanschap' },
    { label: 'Diensten', href: '#diensten' },
    { label: 'Projecten', href: '#projecten' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-inner"></div>
          <div>
            <p className="text-lg font-bold tracking-tight text-gray-900">Dakwerkers Van den Berg</p>
            <p className="text-xs text-gray-600">Ambacht. Betrouwbaarheid. Service.</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-amber-700 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-white font-medium shadow hover:bg-amber-700 transition-colors">
            Offerte aanvragen
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-white font-medium shadow">
              Offerte aanvragen
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
