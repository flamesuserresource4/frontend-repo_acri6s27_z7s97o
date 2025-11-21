import React from 'react'
import SectionContainer from '../components/SectionContainer'

function RoadmapPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Roadmap">
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Q1</h3>
            <ul className="mt-2 list-disc list-inside text-slate-300">
              <li>Sync Engine MVP</li>
              <li>AI Mapping</li>
              <li>Trust Layer v1</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Q2</h3>
            <ul className="mt-2 list-disc list-inside text-slate-300">
              <li>Rollback Snapshots</li>
              <li>Automation Scheduler</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Q3</h3>
            <ul className="mt-2 list-disc list-inside text-slate-300">
              <li>Workspace + Teams</li>
              <li>Drift Forecasting ML model</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Q4</h3>
            <ul className="mt-2 list-disc list-inside text-slate-300">
              <li>Multi-app sync engine (Airtable, ClickUp)</li>
              <li>Custom domain dashboards</li>
              <li>Slack alerts</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default RoadmapPage
