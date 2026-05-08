import { Gem, HeartHandshake, ShieldCheck, Wand2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const values = [
  { title: 'Estilo', icon: Gem, text: 'Prendas que expresan personalidad con elegancia.' },
  { title: 'Presencia', icon: Wand2, text: 'Detalles que elevan tu imagen en cada momento.' },
  { title: 'Confianza', icon: ShieldCheck, text: 'Diseños para vestir con seguridad en cualquier ocasión.' },
  { title: 'Versatilidad', icon: HeartHandshake, text: 'Opciones adaptables para tus distintas versiones.' },
]

export default function About() {
  return (
    <section id="sobre" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="reveal overflow-hidden rounded-lg bg-nelyan-cream p-4 shadow-soft">
          <img
            src="/assets/brand/paleta-nelyan.webp"
            alt="Paleta visual de NELYAN en capuchino, negro y blanco"
            className="h-full min-h-[360px] w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <SectionHeading eyebrow="Sobre NELYAN" title="Una marca para vestir tu esencia" align="left">
            NELYAN nace de la unión entre un nombre y una visión clara: crear una marca de ropa
            femenina que se adapta a diferentes estilos, momentos y versiones de ti.
          </SectionHeading>
          <p className="reveal mt-6 text-lg leading-8 text-neutral-600">
            La marca representa versatilidad, elegancia y libertad para vestir con seguridad en
            cualquier ocasión. Prendas que acompañan tu estilo y resaltan tu esencia.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map(({ title, icon: Icon, text }) => (
              <article
                key={title}
                className="reveal rounded-lg border border-nelyan-latte bg-nelyan-ivory p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-nelyan-cappuccino shadow-sm">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-2xl text-nelyan-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
