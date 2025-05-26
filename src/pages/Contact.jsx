import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Shree Balaji Electronics</title>
        <meta name="description" content="Contact Shree Balaji Electronics for professional TV repair services in Pune. Reach us via WhatsApp, phone, or visit our store." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary-700 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Get in touch with us for all your TV repair needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Get In Touch</h2>
              <p className="text-slate-600 mb-8">
                Have a TV that needs repair? Contact us through any of these channels and we'll get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                    <FaPhone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <a
                      href="tel:+919890031628"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +91 98900 31628
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full text-green-600">
                    <FaWhatsapp size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800">WhatsApp</h3>
                    <a
                      href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +91 98900 31628
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Fastest response time!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800">Address</h3>
                    <p className="text-slate-600">
                      Gurukrupa Tower, Shop No. 8, Taware Colony, Aranyeshwar,<br />
                      Pune, Maharashtra 411038
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                    <FaClock size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Saturday: 11:00 AM - 6:00 PM<br />
                      Sunday: 11:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Quick Contact</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919890031628"
                    className="flex items-center px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                  >
                    <FaPhone className="mr-2" size={16} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
                    className="flex items-center px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp className="mr-2" size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.7388590639775!2d73.84672338798092!3d18.489572655460954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c17534981821%3A0x805ef5decd4c58b3!2sShree%20Balaji%20Electronics!5e0!3m2!1sen!2sin!4v1748179183340!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Balaji Electronics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Do you offer home service?</h3>
              <p className="text-slate-600">
                Yes, we offer home service for most TV repairs in Pune and surrounding areas. An additional
                service charge may apply depending on your location.
              </p>
            </div>

            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">How long does a typical repair take?</h3>
              <p className="text-slate-600">
                Most repairs are completed within 24-48 hours. Complex repairs like screen replacements
                might take 2-3 days depending on part availability.
              </p>
            </div>

            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Do you provide warranty for repairs?</h3>
              <p className="text-slate-600">
                Yes, all our repairs come with a 90-day warranty. If the same issue reoccurs within this period,
                we'll fix it free of charge.
              </p>
            </div>

            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">What TV brands do you repair?</h3>
              <p className="text-slate-600">
                We repair all major brands including Samsung, LG, Sony, MI, OnePlus, TCL, Panasonic,
                Philips, Vu, Videocon, and many more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">What payment methods do you accept?</h3>
              <p className="text-slate-600">
                We accept cash, all major UPI payment apps (Google Pay, PhonePe, etc.), and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need TV Repair Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-100">
            Contact us today for fast, reliable TV repair service in Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
              className="flex items-center px-6 py-3 font-medium text-primary-600 bg-white rounded-md hover:bg-slate-100 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2" size={20} />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href="tel:+919890031628"
              className="flex items-center px-6 py-3 font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              <FaPhone className="mr-2" size={20} />
              <span>Call: +91 98900 31628</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact