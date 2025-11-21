import React from 'react'

function PricingCard({ name, price, features, highlight=false }) {
  return (
    <div className={`relative rounded-2xl p-6 border ${highlight ? 'border-[#4cc9f0]/60 bg-white/[0.07] shadow-[0_0_30px_rgba(76,201,240,0.2)]' : 'border-white/10 bg-white/5'}`}>
      {highlight && (
        <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-[#4cc9f0] text-slate-900 font-semibold">Popular</div>
      )}
      <div className="text-white text-xl font-semibold">{name}</div>
      <div className="mt-2 text-3xl font-bold text-[#4cc9f0]">{price}</div>
      <ul className="mt-4 space-y-2 text-slate-300 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4cc9f0]/80" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full px-4 py-2 rounded-xl font-semibold transition-colors ${highlight ? 'bg-[#4cc9f0] text-slate-900' : 'bg-white/10 text-white hover:bg-white/15'}`}>Choose</button>
    </div>
  )
}

export default PricingCard
