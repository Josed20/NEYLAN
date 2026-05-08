import { useEffect } from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import Collection from './components/Collection'
import Contact from './components/Contact'
import FeaturedLooks from './components/FeaturedLooks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StrongCta from './components/StrongCta'

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection />
        <Benefits />
        <FeaturedLooks />
        <StrongCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
