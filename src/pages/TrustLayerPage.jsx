import React from 'react'
import SectionContainer from '../components/SectionContainer'
import TrustGauge from '../components/TrustGauge'
import DriftChart from '../components/DriftChart'

function TrustLayerPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SectionContainer title="Trust Layer">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Trust Score Gauge</h3>
              <p className="text-slate-300 mt-2">0–100 score calculated using drift %, success rate, and mapping stability.</p>
              <div className="mt-6"><TrustGauge value={82} /></div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Drift Detection</h3>
              <p className="text-slate-300 mt-2">Detects mismatched rows, broken formulas, missing keys.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Rollback History</h3>
              <p className="text-slate-300 mt-2">Shows snapshot timeline. Revert to last stable version.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold">Drift Forecasting</h3>
              <p className="text-slate-300 mt-2">Uses AI to predict chance of next sync failure.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="text-slate-300 mb-3">Drift Over Time</div>
              <DriftChart />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default TrustLayerPage
