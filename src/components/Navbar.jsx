import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import WhatsappButton from './WhatsappButton'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Sobre NELYAN', href: '#sobre' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/92 shadow-soft backdrop-blur-xl' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img src="/assets/brand/logo-nelyan.png" alt="NELYAN" className="h-11 w-auto" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-nelyan-cappuccino"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsappButton />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-nelyan-latte bg-white text-nelyan-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-nelyan-latte bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-nelyan-cream"
            >
              {link.label}
            </a>
          ))}
          <WhatsappButton className="mt-2 w-full" />
        </div>
      </div>
    </header>
  )
}
