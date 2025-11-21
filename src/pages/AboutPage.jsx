import React from 'react'
import SectionContainer from '../components/SectionContainer'

function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="About SyncQora">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Story</h3>
              <p className="text-slate-300 mt-2">SyncQora was built for teams that trust their data more than luck. After breaking too many Notion↔Sheets syncs, we built a system that explains itself.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Mission</h3>
              <p className="text-slate-300 mt-2">To create transparent, auditable workspace automation.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Vision & Founder</h3>
              <p className="text-slate-300 mt-2">Building trustworthy data plumbing for modern teams. Founded by makers who obsess over reliability.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Timeline</h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                <li>2024: Concept + prototypes</li>
                <li>2025: Private beta</li>
                <li>2026: Public launch</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default AboutPage
