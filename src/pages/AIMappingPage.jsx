import React from 'react'
import SectionContainer from '../components/SectionContainer'

function AIMappingPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="AI Mapping">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">How AI Mapping Works</h3>
              <p className="text-slate-300 mt-2">SyncQora analyzes both schemas and auto-aligns fields.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">AI Suggestions</h3>
              <p className="text-slate-300 mt-2">We noticed duplicated field: ‘Created Time’. Keep or remove?</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="text-slate-300 mb-3">Mapping Editor (UI Example)</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Notion Column</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Sheets Column</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Title</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Task Name</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Due Date</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Deadline</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Status</div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Status</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default AIMappingPage
