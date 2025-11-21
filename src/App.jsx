import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import SyncEnginePage from './pages/SyncEnginePage'
import AIMappingPage from './pages/AIMappingPage'
import TrustLayerPage from './pages/TrustLayerPage'
import PricingPage from './pages/PricingPage'
import DocumentationPage from './pages/DocumentationPage'
import RoadmapPage from './pages/RoadmapPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/sync-engine" element={<SyncEnginePage />} />
          <Route path="/ai-mapping" element={<AIMappingPage />} />
          <Route path="/trust-layer" element={<TrustLayerPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
