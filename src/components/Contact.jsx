import { Instagram, Phone } from 'lucide-react'
import { WHATSAPP_URL } from '../data/products'
import WhatsappButton from './WhatsappButton'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contacto" className="section bg-nelyan-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Contacto" title="Hablemos de tu próximo look" align="left">
            Moda femenina elegante, adaptable y con identidad. Atención directa para ayudarte a
            elegir prendas que acompañan tu estilo y resaltan tu esencia.
          </SectionHeading>
          <div className="reveal mt-8 flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-lg border border-nelyan-latte bg-white p-5 text-nelyan-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nelyan-black text-white">
                <Phone size={20} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-nelyan-cappuccino">
                  WhatsApp
                </span>
                <span className="mt-1 block font-serif text-2xl">902862020</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-nelyan-latte bg-white p-5 text-nelyan-ink">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nelyan-cappuccino text-white">
                <Instagram size={20} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-nelyan-cappuccino">
                  Instagram
                </span>
                <span className="mt-1 block font-serif text-2xl">Por definir</span>
              </span>
            </div>
          </div>
        </div>

        <div className="reveal rounded-lg bg-white p-6 shadow-soft">
          <div className="overflow-hidden rounded-lg bg-nelyan-cream">
            <img
              src="/assets/brand/hero-nelyan-catalogo.webp"
              alt="Modelos y prendas de NELYAN"
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nelyan-cappuccino">
                NELYAN
              </p>
              <p className="mt-2 font-serif text-3xl text-nelyan-ink">Gracias por apoyar lo hecho con amor.</p>
            </div>
            <WhatsappButton>Contactar</WhatsappButton>
          </div>
        </div>
      </div>
    </section>
  )
}
