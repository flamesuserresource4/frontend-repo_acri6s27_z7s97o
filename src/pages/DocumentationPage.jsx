import React from 'react'
import SectionContainer from '../components/SectionContainer'

function DocumentationPage() {
  const sidebar = [
    'Getting Started',
    'Connecting Notion',
    'Connecting Google Sheets',
    'How Delta Sync Works',
    'Trust Layer',
    'Rollback',
    'Limitations',
    'Troubleshooting',
  ]

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Documentation">
        <div className="grid md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 space-y-2">
            {sidebar.map((item) => (
              <div key={item} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">{item}</div>
            ))}
          </aside>
          <main className="md:col-span-3 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Getting Started</h3>
              <p className="text-slate-300 mt-2">Connect Notion and Google Sheets. Configure your mapping. Run your first sync safely.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">How Delta Sync Works</h3>
              <p className="text-slate-300 mt-2">We compute hashes of rows and compare timestamps to detect changes. Only the diffs are applied.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Rollback</h3>
              <p className="text-slate-300 mt-2">Each run creates a pre-sync snapshot. Roll back with one click if anything looks off.</p>
            </div>
          </main>
        </div>
      </SectionContainer>
    </div>
  )
}

export default DocumentationPage
