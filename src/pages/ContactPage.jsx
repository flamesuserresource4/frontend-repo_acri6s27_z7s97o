import React, { useState } from 'react'
import SectionContainer from '../components/SectionContainer'

function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Contact">
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input required className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#4cc9f0]" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" required className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#4cc9f0]" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea required rows={5} className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#4cc9f0]" />
          </div>
          <button type="submit" className="px-5 py-3 rounded-xl bg-[#4cc9f0] text-slate-900 font-semibold shadow-[0_0_20px_rgba(76,201,240,0.5)] hover:shadow-[0_0_35px_rgba(76,201,240,0.65)] transition-shadow">Send Message</button>
          {sent && <div className="text-emerald-300">Message sent successfully.</div>}
        </form>
      </SectionContainer>
    </div>
  )
}

export default ContactPage
