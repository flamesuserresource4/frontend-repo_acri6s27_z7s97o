import React from 'react'
import HeroSection from '../components/HeroSection'
import SectionContainer from '../components/SectionContainer'
import FeatureCard from '../components/FeatureCard'

function HomePage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <HeroSection />

      <SectionContainer title="Product Highlights">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="AI schema mapping" description="Automatic alignment of fields across Notion and Sheets." />
          <FeatureCard title="Trust Layer (drift detection)" description="Detect and prevent silent data drift before it grows." />
          <FeatureCard title="Rollback snapshots" description="Revert to a stable state anytime with one click." />
          <FeatureCard title="Delta-based sync engine" description="Only changed rows update for speed and safety." />
        </div>
      </SectionContainer>

      <SectionContainer title="Why It’s Different" subtitle="Sync you can trust.">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Transparent run logs and checkpoints.</div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">AI understands your schema, not just cell positions.</div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Guardrails to catch drift before it breaks workflows.</div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default HomePage
