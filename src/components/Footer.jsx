import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 py-10 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#4cc9f0] to-indigo-500" />
          <span className="text-white">SyncQora</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Status</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
