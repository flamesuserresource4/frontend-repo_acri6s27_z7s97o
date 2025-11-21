import React from 'react'
import SectionContainer from '../components/SectionContainer'
import FeatureCard from '../components/FeatureCard'

function FeaturesPage() {
  const features = [
    { title: 'AI Mapping', description: 'automatic field matching' },
    { title: 'Delta Sync Engine', description: 'only changed rows update' },
    { title: 'Trust Layer™', description: 'detect and prevent silent data drift' },
    { title: 'Rollback Snapshots', description: 'restore data in one click' },
    { title: 'Cron Automation', description: 'auto-sync every hour' },
    { title: 'Multi-source Sync (future)', description: 'Airtable, ClickUp, etc.' },
  ]

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Features">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}

export default FeaturesPage
