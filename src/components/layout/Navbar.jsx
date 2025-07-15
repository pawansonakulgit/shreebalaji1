import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`

  const activeClass = 'font-semibold underline underline-offset-4'
  const linkClass = `px-4 py-2 text-base transition-all duration-200 ${scrolled ? 'text-slate-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
    }`

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center space-x-2 whitespace-nowrap truncate overflow-hidden max-w-[70%] ${scrolled ? 'text-primary-600' : 'text-white'
            }`}
        >
          <span className="text-2xl font-bold leading-none">Shree Balaji</span>
          <span className="text-lg font-medium leading-none">Electronics</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {['/', '/about', '/services', '/reviews', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Services', 'Reviews', 'Contact']
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? `${linkClass} ${activeClass}` : linkClass
                }
                end={path === '/'}
              >
                {labels[i]}
              </NavLink>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+919890031628"
            className="flex items-center px-4 py-2 font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all"
          >
            <HiPhone className="mr-2" />
            Call Now
          </a>
          <a
            href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
            className="flex items-center px-4 py-2 font-medium text-white bg-green-600 hover:bg-green-700 rounded-full transition-all"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`p-2 md:hidden transition-colors duration-200 ${scrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 h-full z-40 bg-white/90 backdrop-blur-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-xl font-bold text-primary-600">Menu</span>
          <button onClick={toggleMenu} className="text-gray-700">
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {['/', '/about', '/services', '/reviews', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Services', 'Reviews', 'Contact']
            return (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-lg rounded-md ${isActive ? 'text-primary-600 font-semibold' : 'text-gray-700'
                  }`
                }
                end={path === '/'}
              >
                {labels[i]}
              </NavLink>
            )
          })}

          <div className="flex flex-col space-y-3 mt-6">
            <a
              href="tel:+919890031628"
              className="flex items-center justify-center py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-md"
            >
              <HiPhone className="mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
              className="flex items-center justify-center py-3 text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
