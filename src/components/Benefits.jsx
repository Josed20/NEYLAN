import { BadgeCheck, MessagesSquare, Palette, Repeat, Shirt, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const benefits = [
  { title: 'Prendas versátiles', text: 'Piezas pensadas para diferentes ocasiones.', icon: Repeat },
  { title: 'Estilo femenino moderno', text: 'Siluetas actuales con una lectura elegante.', icon: Shirt },
  { title: 'Diseño adaptable', text: 'Opciones que se integran a tus momentos y versiones.', icon: Sparkles },
  { title: 'Atención directa', text: 'Consulta modelos, colores y disponibilidad por WhatsApp.', icon: MessagesSquare },
  { title: 'Identidad sofisticada', text: 'Paleta capuchino, negro y blanco con aire boutique.', icon: Palette },
  { title: 'Looks completos', text: 'Propuestas para estilos casuales, elegantes y modernos.', icon: BadgeCheck },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Por qué elegir NELYAN" title="Estilo, presencia, confianza y versatilidad.">
          Cada prenda está pensada para ayudarte a crear combinaciones con intención, equilibrio y
          seguridad.
        </SectionHeading>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="reveal rounded-lg border border-nelyan-latte bg-nelyan-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nelyan-cappuccino hover:shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-nelyan-black text-white">
                <Icon size={21} strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-2xl text-nelyan-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
