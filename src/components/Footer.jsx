import WhatsappButton from './WhatsappButton'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Sobre NELYAN', href: '#sobre' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-nelyan-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <img src="/assets/brand/logo-nelyan.png" alt="NELYAN" className="h-16 w-auto bg-white p-2" />
            <p className="mt-5 font-serif text-3xl">Tu estilo, tu esencia.</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/64">
              Moda femenina elegante, adaptable y con identidad.
            </p>
          </div>
          <WhatsappButton variant="light">Comprar por WhatsApp</WhatsappButton>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/55">© 2026 NELYAN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
