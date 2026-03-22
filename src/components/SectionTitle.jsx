function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80 backdrop-blur-md">
        {eyebrow}
      </span>
      <div className="max-w-2xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
      </div>
    </div>
  )
}

export default SectionTitle
