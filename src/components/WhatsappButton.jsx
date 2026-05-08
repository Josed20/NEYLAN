import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../data/products'

export default function WhatsappButton({
  children = 'Comprar por WhatsApp',
  href = WHATSAPP_URL,
  variant = 'dark',
  className = '',
}) {
  const styles =
    variant === 'light'
      ? 'border border-white/70 bg-white/95 text-nelyan-ink hover:bg-nelyan-cream'
      : 'bg-nelyan-black text-white hover:bg-nelyan-cappuccino'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow ${styles} ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.8} />
      {children}
    </a>
  )
}
