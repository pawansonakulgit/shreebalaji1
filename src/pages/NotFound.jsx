import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { FaTools } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Shree Balaji Electronics</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="pt-32 pb-20 min-h-screen flex items-center bg-slate-50">
        <div className="container text-center">
          <div className="max-w-lg mx-auto">
            <div
              className="mb-8 text-primary-600"
              data-aos="fade-up"
            >
              <FaTools size={80} className="mx-auto" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-800"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Signal Lost!
            </h1>
            <p
              className="text-xl text-slate-600 mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              But don't worry, we fix that too! The page you're looking for doesn't exist,
              but our TV repair services definitely do.
            </p>
            <div
              className="flex flex-wrap gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link
                to="/"
                className="flex items-center px-6 py-3 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
              >
                <HiHome className="mr-2" size={20} />
                <span>Go to Homepage</span>
              </Link>
              <a
                href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
                className="flex items-center px-6 py-3 font-medium rounded-md border border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors duration-300"
              >
                <FaTools className="mr-2" size={20} />
                <span>Book a Repair</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound