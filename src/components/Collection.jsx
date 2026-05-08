import { Filter, MessageCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { categories, productMessage, products } from '../data/products'
import SectionHeading from './SectionHeading'

export default function Collection() {
  const [active, setActive] = useState('Todos')

  const filteredProducts = useMemo(() => {
    if (active === 'Todos') return products
    return products.filter((product) => product.category === active)
  }, [active])

  return (
    <section id="coleccion" className="section bg-nelyan-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Colección" title="Prendas que acompañan tu estilo">
          Explora una selección visual extraída del catálogo NELYAN. Consulta disponibilidad,
          colores y modelos directamente por WhatsApp.
        </SectionHeading>

        <div className="reveal mt-10 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                active === category
                  ? 'border-nelyan-black bg-nelyan-black text-white'
                  : 'border-nelyan-latte bg-white text-neutral-700 hover:border-nelyan-cappuccino hover:text-nelyan-cappuccino'
              }`}
            >
              {category === 'Todos' && <Filter size={16} strokeWidth={1.8} />}
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              className="reveal group overflow-hidden rounded-lg border border-white bg-white shadow-[0_12px_40px_rgba(31,28,25,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-nelyan-ivory">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-nelyan-cappuccino">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl leading-tight text-nelyan-ink">{product.name}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-600">
                  {product.description}
                </p>
                <a
                  href={productMessage(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-nelyan-black px-4 py-3 text-sm font-semibold text-nelyan-black transition-all duration-300 hover:bg-nelyan-black hover:text-white"
                >
                  <MessageCircle size={17} strokeWidth={1.8} />
                  Consultar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
