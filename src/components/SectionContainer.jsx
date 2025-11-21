import React from 'react'

function SectionContainer({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full py-16 md:py-24 ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,201,240,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(76,201,240,0.04),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        {title && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-slate-300">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
