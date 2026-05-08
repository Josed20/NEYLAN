export default function SectionHeading({ eyebrow, title, children, align = 'center', tone = 'light' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-nelyan-ink'
  const textColor = tone === 'dark' ? 'text-white/72' : 'text-neutral-600'

  return (
    <div className={`reveal flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.34em] text-nelyan-cappuccino">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-4xl leading-tight md:text-5xl ${titleColor}`}>{title}</h2>
      {children && <p className={`text-base leading-8 md:text-lg ${textColor}`}>{children}</p>}
    </div>
  )
}
