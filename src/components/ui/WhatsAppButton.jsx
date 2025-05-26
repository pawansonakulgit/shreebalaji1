import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300
      if (isScrolled !== visible) {
        setVisible(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [visible])

  const buttonClasses = `fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full shadow-lg transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
    } hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2`

  return (
    <a
      href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
      className={buttonClasses}
      aria-label="Contact on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}

export default WhatsAppButton