import { useState } from 'react'
import { Customise, Header, NavMenu, Pricing, WorkManagement } from './ui/components'
import { HeroSection } from './ui/components/heroSection'

function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <WorkManagement />
      <Customise />
      <Pricing />
  
    </div>
    
  )
}

export default App
