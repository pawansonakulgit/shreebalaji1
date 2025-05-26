import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Navbar2 from './components/layout/Navbar2' // Add this line
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  // Update page title on route change
  useEffect(() => {
    document.title = 'Shree Balaji Electronics - TV Repair Services in Pune'
  }, [])

  // Check if current route is not found
  const isNotFoundRoute = location.pathname !== '/' &&
    !['/about', '/services', '/reviews', '/contact'].includes(location.pathname)

  return (
    <>
      {/* Conditional Navbar */}
      {isNotFoundRoute ? <Navbar2 /> : <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App
