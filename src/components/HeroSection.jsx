import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(76,201,240,0.15),transparent_40%)] pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              SyncQora: AI-powered sync with built-in truth.
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-4 text-lg md:text-xl text-slate-300">
              Notion ↔ Google Sheets sync with delta detection, drift protection, and instant AI mapping.
            </motion.p>

            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.25}} className="mt-8 flex flex-wrap gap-4">
              <Link to="/features" className="px-5 py-3 rounded-xl bg-[#4cc9f0] text-slate-900 font-semibold shadow-[0_0_20px_rgba(76,201,240,0.5)] hover:shadow-[0_0_35px_rgba(76,201,240,0.65)] transition-shadow">Explore Features</Link>
              <Link to="/documentation" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition-colors">View Demo</Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">No more broken syncs.</div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">No more mismatched columns.</div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">No more silent data drift.</div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
