import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left">
        <span className="text-white font-medium">{question}</span>
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-slate-300 text-sm">{answer}</div>
      )}
    </div>
  )
}

export default FAQItem
