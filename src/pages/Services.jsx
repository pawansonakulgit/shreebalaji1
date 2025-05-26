import { Helmet } from 'react-helmet'
import { FaTools, FaWrench, FaLaptopCode, FaMountain } from 'react-icons/fa'
import { MdScreenshotMonitor, MdSpeaker, MdSmartDisplay, MdSettingsPower, MdSignalWifiStatusbar4Bar } from 'react-icons/md'
import SectionHeader from '../components/ui/SectionHeader'
import ServiceCard from '../components/ui/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: MdScreenshotMonitor,
      title: 'Screen Replacement',
      description: 'Fix broken, cracked, or damaged TV screens. We repair LCD, LED, and OLED displays.',
      price: '1500'
    },
    {
      icon: MdSettingsPower,
      title: 'Power Supply/Motherboard Fix',
      description: 'Repair power issues, motherboard failures, and component-level diagnostics.',
      price: '1200'
    },
    {
      icon: MdSpeaker,
      title: 'Audio System Repair',
      description: 'Fix sound problems, speaker issues, and audio connectivity failures.',
      price: '800'
    },
    {
      icon: MdSmartDisplay,
      title: 'Smart TV Software',
      description: 'Software updates, app installations, and smart feature troubleshooting.',
      price: '600'
    },
    {
      icon: MdSignalWifiStatusbar4Bar,
      title: 'Connectivity Issues',
      description: 'Resolve Wi-Fi, Bluetooth, and HDMI connection problems for seamless streaming.',
      price: '700'
    },
    {
      icon: FaWrench,
      title: 'General Troubleshooting',
      description: 'Diagnostic services to identify and fix various TV problems and glitches.',
      price: '500'
    },
    {
      icon: FaMountain,
      title: 'Wall Mounting',
      description: 'Professional TV wall mounting service with secure installation and cable management.',
      price: '800'
    },
    {
      icon: FaLaptopCode,
      title: 'Remote Programming',
      description: 'Program universal remotes and fix remote control issues for any TV brand.',
      price: '300'
    }
  ]

  return (
    <>
      <Helmet>
        <title>TV Repair Services - Shree Balaji Electronics</title>
        <meta name="description" content="Expert TV repair services in Pune including screen replacement, power supply fix, audio repair and more." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary-700 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Comprehensive TV repair services for all brands and models
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            title="Services We Offer"
            subtitle="From screen replacements to software fixes, we handle all your TV repair needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <SectionHeader
            title="Our Service Process"
            subtitle="How we diagnose and fix your TV issues efficiently"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-3 text-slate-800">Contact Us</h3>
              <p className="text-slate-600">
                Reach out via WhatsApp or call us with details about your TV issue. We'll schedule a convenient time.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-3 text-slate-800">Diagnosis</h3>
              <p className="text-slate-600">
                Our technician will diagnose the problem and provide you with a clear estimate before proceeding.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-3 text-slate-800">Repair</h3>
              <p className="text-slate-600">
                Once approved, we'll complete the repair using quality parts and thorough testing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3 mt-3 text-slate-800">Completion</h3>
              <p className="text-slate-600">
                We'll return your fully-functioning TV and provide a 90-day warranty on the repair service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            title="Brands We Service"
            subtitle="We repair all major TV brands and models"
          />

          <div className="bg-slate-50 p-8 rounded-lg shadow-sm text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Samsung</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">LG</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Sony</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">MI</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">OnePlus</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">TCL</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Panasonic</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Philips</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Vu</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Videocon</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Toshiba</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-xl font-medium text-slate-700">Others</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Fix Your TV?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-100">
            Contact us today for fast, reliable TV repair service in Pune.
          </p>
          <a
            href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
            className="inline-flex items-center px-8 py-3 font-medium text-primary-600 bg-white rounded-md hover:bg-slate-100 transition-colors duration-300"
          >
            <FaTools className="mr-2" />
            <span>Book a Service Now</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Services