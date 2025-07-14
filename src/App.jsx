import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-6">
          <FeatureSection />
          <Workflow />
          <Testimonials />
          <AboutUs />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
