import React from 'react'

function TrustGauge({ value = 72 }) {
  const circumference = 2 * Math.PI * 56
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="relative w-40 h-40">
      <svg width="160" height="160" viewBox="0 0 160 160" className="rotate-[-90deg]">
        <circle cx="80" cy="80" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="14" fill="transparent" />
        <circle cx="80" cy="80" r="56" stroke="#4cc9f0" strokeWidth="14" strokeLinecap="round" fill="transparent" strokeDasharray={`${circumference} ${circumference}`} strokeDashoffset={offset} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="text-xs text-slate-400">Trust Score</div>
      </div>
    </div>
  )
}

export default TrustGauge
