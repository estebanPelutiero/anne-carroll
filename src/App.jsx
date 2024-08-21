import './App.css'
import About from './components/About'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import Workshops from './components/Workshops'
import GiftCard from './components/GiftCard'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <GiftCard />
      <About />
      <Testimonials />
      <Workshops />
      <Footer />
    </>
  )
}

export default App
