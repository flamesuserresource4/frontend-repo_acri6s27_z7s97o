import React from 'react'
import SectionContainer from '../components/SectionContainer'
import PricingCard from '../components/PricingCard'

function PricingPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Pricing">
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard name="Free" price="₹0" features={["1 sync job","100 rows","AI Mapping (basic)"]} />
          <PricingCard name="Pro" price="₹499/month" features={["Unlimited jobs","Trust Layer","Cron scheduling","Rollback snapshots"]} highlight />
          <PricingCard name="Business" price="₹1,999/month" features={["Team workspace","Priority AI mapping","Drift Forecasting","Dedicated support"]} />
        </div>
        <div className="mt-8 text-center">
          <button className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition-colors">Contact for Enterprise</button>
        </div>
      </SectionContainer>
    </div>
  )
}

export default PricingPage
