import { FaWhatsapp } from 'react-icons/fa'

const ServiceCard = ({ icon: Icon, title, description, price }) => {
  return (
    <div
      className="relative p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-primary-100 rounded-full text-primary-600">
          <Icon size={30} />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        {price && <span className="px-3 py-1 mb-3 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">Starts at ₹{price}</span>}
        <p className="mb-4 text-slate-600">{description}</p>
        <a
          href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20help%20with%20my%20TV."
          className="flex items-center justify-center w-full py-2 mt-2 font-medium text-white transition-colors duration-200 rounded bg-green-600 hover:bg-green-700"
        >
          <FaWhatsapp className="mr-2" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default ServiceCard
