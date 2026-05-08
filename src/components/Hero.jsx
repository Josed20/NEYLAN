import { ArrowDown, Sparkles } from 'lucide-react'
import WhatsappButton from './WhatsappButton'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-nelyan-black pt-24 text-white md:min-h-[94vh]"
    >
      <img
        src="/assets/brand/hero-nelyan-catalogo.webp"
        alt="Catálogo NELYAN con prendas femeninas"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.88),rgba(17,17,17,0.50),rgba(17,17,17,0.12))]" />
      <div className="absolute inset-0 boutique-texture opacity-35" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 px-5 pb-12 md:px-8 md:pb-16 lg:grid-cols-[1fr_0.72fr]">
        <div className="reveal max-w-3xl">
          <img
            src="/assets/brand/logo-nelyan.png"
            alt="Logo NELYAN"
            className="mb-8 h-24 w-auto rounded-sm bg-white/90 p-4 shadow-soft md:h-28"
          />
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-nelyan-latte backdrop-blur-md">
            <Sparkles size={14} />
            Tu estilo, tu esencia.
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.03] md:text-7xl lg:text-8xl">
            Moda femenina para cada versión de ti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Descubre prendas elegantes, versátiles y modernas que resaltan tu esencia en cada
            ocasión.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#coleccion"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-nelyan-ink"
            >
              Ver colección
              <ArrowDown size={18} />
            </a>
            <WhatsappButton variant="light" />
          </div>
        </div>

        <div className="reveal hidden rounded-lg border border-white/18 bg-white/12 p-5 shadow-glow backdrop-blur-xl lg:block">
          <p className="font-serif text-3xl leading-tight">Moda femenina elegante, adaptable y con identidad.</p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.18em] text-white/74">
            <span className="rounded-full bg-white/12 px-3 py-3">Estilo</span>
            <span className="rounded-full bg-white/12 px-3 py-3">Presencia</span>
            <span className="rounded-full bg-white/12 px-3 py-3">Versatilidad</span>
          </div>
        </div>
      </div>
    </section>
  )
}
