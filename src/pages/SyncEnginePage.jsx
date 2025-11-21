import React from 'react'
import SectionContainer from '../components/SectionContainer'

function SyncEnginePage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Sync Engine">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Delta Detection</h3>
              <p className="text-slate-300 mt-2">Compares timestamps and hashes. Syncs only changed records.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Conflict Resolution</h3>
              <p className="text-slate-300 mt-2">Latest timestamp wins. Flag anomalies.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Snapshots</h3>
              <p className="text-slate-300 mt-2">Automatic “pre-sync checkpoint” saved.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Run Logs Viewer</h3>
              <p className="text-slate-300 mt-2">Colored success/error states.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="text-slate-300">Diagram</div>
              <div className="mt-3 bg-slate-900/60 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="px-3 py-2 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">Notion</div>
                  <div className="flex-1 mx-3 h-1.5 rounded bg-gradient-to-r from-indigo-400 via-[#4cc9f0] to-cyan-300" />
                  <div className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-cyan-200">SyncQora</div>
                  <div className="flex-1 mx-3 h-1.5 rounded bg-gradient-to-r from-cyan-300 via-[#4cc9f0] to-emerald-300" />
                  <div className="px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-200">Sheets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default SyncEnginePage
