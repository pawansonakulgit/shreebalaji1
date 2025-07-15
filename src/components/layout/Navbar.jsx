import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`;

  const activeClass = 'font-semibold';
  const linkClass = `px-3 py-2 transition-all duration-200 ${scrolled ? 'text-slate-700 hover:text-primary-600' : 'text-white hover:text-primary-100'
    }`;

  return (
    <header className={navClasses}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${scrolled ? 'text-primary-600' : 'text-white'}`}>
            Shree Balaji
          </span>
          <span className={`text-lg font-medium ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            Electronics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/reviews', label: 'Reviews' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+919890031628"
            className="flex items-center px-4 py-2 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 transition-all duration-300"
          >
            <HiPhone className="mr-2" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
            className="flex items-center px-4 py-2 font-medium text-white rounded-md bg-green-600 hover:bg-green-700 transition-all duration-300"
          >
            <FaWhatsapp className="mr-2" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`p-2 md:hidden transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] right-0 w-4/5 h-full z-40 bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <nav className="flex flex-col p-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/reviews', label: 'Reviews' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-3 px-4 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-slate-700'}`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="flex flex-col space-y-3 mt-6 px-4">
            <a
              href="tel:+919890031628"
              className="flex items-center justify-center py-3 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700"
            >
              <HiPhone className="mr-2" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
              className="flex items-center justify-center py-3 font-medium text-white rounded-md bg-green-600 hover:bg-green-700"
            >
              <FaWhatsapp className="mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
