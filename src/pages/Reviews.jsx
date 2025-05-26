import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../components/ui/SectionHeader'
import ReviewCard from '../components/ui/ReviewCard'
import { Helmet } from 'react-helmet'

const Reviews = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "Rahul Kulkarni",
      date: "April 15, 2025",
      rating: 5,
      review: "Excellent service! My Samsung TV had a damaged screen, and they replaced it at a very reasonable price. They were quick, professional, and explained everything clearly.",
      verified: true
    },
    {
      name: "Prakash Manthan",
      date: "March 22, 2025",
      rating: 4.5,
      review: "Very happy with the service. My TV wasn't turning on, and they fixed the power supply issue in just one day. Highly recommend!",
      verified: true
    },
    {
      name: "Amruta Dikonda",
      date: "February 10, 2025",
      rating: 5,
      review: "Great experience! My LG Smart TV was having software issues, and they resolved it quickly. The technician was knowledgeable and professional.",
      verified: true
    },
    {
      name: "Anjali Patil",
      date: "January 5, 2025",
      rating: 4,
      review: "Good service at a fair price. They fixed the sound issue with my TV. The only reason for 4 stars is because they were a bit late for the appointment.",
      verified: true
    },
    {
      name: "Rajesh Mandhare",
      date: "December 18, 2024",
      rating: 5,
      review: "Outstanding service! They came to my home and fixed my TV right there. The technician was very skilled and friendly. Will definitely use their services again.",
      verified: true
    },
    {
      name: "Kiran Karekar",
      date: "November 30, 2024",
      rating: 5,
      review: "My Sony TV's motherboard was damaged, and they replaced it at a much lower cost than what the official service center quoted. Works perfectly now!",
      verified: true
    }
  ]

  // Filter testimonials based on rating
  const [filter, setFilter] = useState('all')

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => Math.floor(t.rating) === parseInt(filter))

  return (
    <>
      <Helmet>
        <title>Customer Reviews - Shree Balaji Electronics</title>
        <meta name="description" content="Read what our customers have to say about our TV repair services. Real reviews from satisfied customers in Pune." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary-700 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            See what our customers have to say about our TV repair services
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <SectionHeader
            title="Customer Testimonials"
            subtitle="Read what our satisfied customers have to say about their experience with us"
          />

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              onClick={() => setFilter('all')}
            >
              All Reviews
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${filter === '5' ? 'bg-primary-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              onClick={() => setFilter('5')}
            >
              5 Star
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${filter === '4' ? 'bg-primary-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              onClick={() => setFilter('4')}
            >
              4 Star
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <ReviewCard
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                rating={testimonial.rating}
                review={testimonial.review}
                verified={testimonial.verified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Review Statistics */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-4xl font-bold text-primary-600 mb-2">10,000+</h3>
              <p className="text-slate-700">Happy Customers</p>
            </div>

            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-4xl font-bold text-primary-600 mb-2">98%</h3>
              <p className="text-slate-700">Satisfaction Rate</p>
            </div>

            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-4xl font-bold text-primary-600 mb-2">25+</h3>
              <p className="text-slate-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-100">
            Had a great experience with our service? We'd love to hear about it! Contact us to share your feedback.
          </p>
          <a
            href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20want%20to%20share%20my%20feedback%20about%20your%20service."
            className="inline-flex items-center px-8 py-3 font-medium text-primary-600 bg-white rounded-md hover:bg-slate-100 transition-colors duration-300"
          >
            <FaWhatsapp className="mr-2" size={20} />
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Reviews