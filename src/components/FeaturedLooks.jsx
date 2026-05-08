import { looks } from '../data/products'
import SectionHeading from './SectionHeading'

const labels = ['Casual elegante', 'Salida especial', 'Look diario', 'Estilo sofisticado', 'Temporada fresca']

export default function FeaturedLooks() {
  return (
    <section className="section bg-nelyan-black text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionHeading
            eyebrow="Looks destacados"
            title="Combinaciones para cada ocasión"
            align="left"
            tone="dark"
          >
            Viste con seguridad en cualquier ocasión: del look diario a una salida especial.
          </SectionHeading>
          <div className="reveal flex flex-wrap gap-3 lg:justify-end">
            {labels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {looks.map((look) => (
            <article
              key={look.title}
              className="reveal group relative min-h-[430px] overflow-hidden rounded-lg bg-white/8 shadow-soft"
            >
              <img
                src={look.image}
                alt={look.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-nelyan-ink">
                  {look.tag}
                </span>
                <h3 className="mt-4 font-serif text-3xl">{look.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
