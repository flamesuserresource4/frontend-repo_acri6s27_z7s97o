import React from 'react'
import { motion } from 'framer-motion'

function FeatureCard({ title, description }) {
  return (
    <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-slate-300/90 text-sm">{description}</p>
    </motion.div>
  )
}

export default FeatureCard
