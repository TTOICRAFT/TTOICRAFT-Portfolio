import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Work from './sections/Work'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  return <div className="min-h-screen overflow-x-hidden">
    {showWelcome && <Loader onDone={() => setShowWelcome(false)} />}
    <div className="fixed inset-0 -z-10 pointer-events-none shadow-glow" />
    <Navbar />
    <main className="container pt-32 md:pt-40 space-y-28 md:space-y-36">
      <Hero /><Work /><Services /><About /><Contact />
    </main>
    <Footer />
  </div>
}
