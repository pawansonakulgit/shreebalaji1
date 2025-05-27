import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Shree Balaji Electronics</h3>
            <p className="text-slate-300 mb-4">
              Providing professional TV repair services in Pune since 2005. We specialize in all types of TV repairs including LED, LCD, and Smart TVs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sachin.sonakul" target="_blank" rel="noopener noreferrer"
                className="text-slate-300 hover:text-primary-400 transition-colors duration-200">
                <FaFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/sachinsonakul/" target="_blank" rel="noopener noreferrer"
                className="text-slate-300 hover:text-primary-400 transition-colors duration-200">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" size={18} />
                <span className="text-slate-300">
                  Gurukrupa Tower, Shop No. 8, Taware Colony, Aranyeshwar, Pune, Maharashtra 411038
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" size={18} />
                <a href="tel:+919890031628" className="text-slate-300 hover:text-white transition-colors duration-200">
                  +91 98900 31628
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-primary-400 mr-3" size={18} />
                <a href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
                  className="text-slate-300 hover:text-white transition-colors duration-200">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-primary-400 mt-1 mr-3" size={18} />
                <div className="text-slate-300">
                  <p className="text-slate-300">
                    Monday - Saturday: 11:00 AM - 6:00 PM<br />
                    Sunday: 11:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-slate-700 text-slate-400 text-sm text-center">
          <p>© {currentYear} Shree Balaji Electronics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
