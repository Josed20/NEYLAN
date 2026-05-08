import WhatsappButton from './WhatsappButton'

export default function StrongCta() {
  return (
    <section className="bg-nelyan-cappuccino px-5 py-20 text-white md:px-8">
      <div className="reveal mx-auto grid max-w-6xl gap-8 rounded-lg border border-white/25 bg-nelyan-black px-6 py-10 shadow-glow md:grid-cols-[1fr_auto] md:items-center md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-nelyan-latte">
            Tu estilo, tu esencia.
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Encuentra la prenda que conecta con tu estilo
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
            Escríbenos por WhatsApp y consulta disponibilidad, colores y modelos.
          </p>
        </div>
        <WhatsappButton variant="light">Escribir al WhatsApp</WhatsappButton>
      </div>
    </section>
  )
}
