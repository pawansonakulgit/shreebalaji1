import { FaTools, FaUsersCog, FaAward, FaHistory } from 'react-icons/fa'
import { HiOutlineCheck } from 'react-icons/hi'
import SectionHeader from '../components/ui/SectionHeader'
import React, { useEffect, useState } from 'react';
import FeatureCard from '../components/ui/FeatureCard'
import { Helmet } from 'react-helmet'
import sachinImage from '../assets/sachinpic.png';
import mainpng from '../assets/aboutpng.png';

const About = () => {

  const [isAbove1000px, setIsAbove1000px] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove1000px(window.innerWidth > 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Shree Balaji Electronics</title>
        <meta name="description" content="Learn about Shree Balaji Electronics - Pune's trusted TV repair service with over 15 years of experience." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary-700 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Pune's trusted TV repair service with over 25+ years of experience
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                A Journey of Excellence in TV Repair
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Established in 2001, Shree Balaji Electronics began as a small TV repair shop in Pune.
                  Founded by Mr. Sachin Sonakul, who had over a decade of experience working with leading
                  electronics manufacturers, the business quickly gained popularity for its honest service
                  and technical expertise.
                </p>
                <p>
                  As technology evolved from CRT to LCD, LED, and Smart TVs, our team continuously upgraded
                  their skills and equipment to stay ahead. Today, we're proud to be Pune's most trusted
                  TV repair service, handling over 2,000 repairs annually with a 98% customer satisfaction rate.
                </p>
                <p>
                  Our philosophy is simple: provide honest service at fair prices, use quality parts,
                  and treat every customer's TV as if it were our own. This approach has earned us
                  thousands of loyal customers across Pune.
                </p>
              </div>
            </div>
            {isAbove1000px && (
              <div>
                <img
                  src={mainpng}
                  alt="Our repair shop"
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <SectionHeader
            title="Our Journey"
            subtitle="How we evolved to become Pune's trusted TV repair service"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-px top-0 h-full w-0.5 bg-primary-200"></div>

            {/* 2005 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                <FaHistory size={16} />
              </div>

              <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:w-1/2 md:pr-8 mb-10">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-primary-700">2005</h3>
                  <p className="text-slate-700">Shree Balaji Electronics was founded as a small repair shop in Shivaji Nagar, Pune.</p>
                </div>
              </div>
            </div>

            {/* 2010 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                <FaHistory size={16} />
              </div>

              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:w-1/2 md:pl-8 mb-10">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-primary-700">2010</h3>
                  <p className="text-slate-700">Expanded service to include LCD and LED TVs as technology evolved.</p>
                </div>
              </div>
            </div>

            {/* 2015 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                <FaHistory size={16} />
              </div>

              <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:w-1/2 md:pr-8 mb-10">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-primary-700">2015</h3>
                  <p className="text-slate-700">Moved to a larger facility and added Smart TV repair and setup services.</p>
                </div>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                <FaHistory size={16} />
              </div>

              <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:w-1/2 md:pl-8 mb-10">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-primary-700">2020</h3>
                  <p className="text-slate-700">Introduced home service visits and expanded our team to serve more customers.</p>
                </div>
              </div>
            </div>

            {/* Today */}
            <div className="relative">
              <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                <FaHistory size={16} />
              </div>

              <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:w-1/2 md:pr-8">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-primary-700">Today</h3>
                  <p className="text-slate-700">Pune's most trusted TV repair service with thousands of satisfied customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We pride ourselves on providing the best TV repair service in Pune"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaTools}
              title="Expert Technicians"
              description="Our team is factory-trained and has years of experience with all TV brands."
            />
            <FeatureCard
              icon={FaUsersCog}
              title="Personalized Service"
              description="We diagnose each TV individually and provide customized solutions."
            />
            <FeatureCard
              icon={FaAward}
              title="Quality Guaranteed"
              description="All our repairs come with a 90-day warranty for your peace of mind."
            />
            <FeatureCard
              icon={HiOutlineCheck}
              title="Transparent Pricing"
              description="No hidden fees. We provide clear estimates before starting any work."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The experts behind our quality TV repair services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={sachinImage}
                alt="Sachin Sonakul"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Sachin Sonakul</h3>
              <p className="text-primary-600 mb-3">Founder & Head Technician</p>
              <p className="text-slate-600">25+ years of experience in TV repair and electronics.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
                alt="Shailesh Tole"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Shailesh Tole</h3>
              <p className="text-primary-600 mb-3">Senior Technician</p>
              <p className="text-slate-600">Specialist in Smart TV troubleshooting and repairs.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="Saikiran Medhamuni"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Saikiran Medhamuni</h3>
              <p className="text-primary-600 mb-3">Customer Service Manager</p>
              <p className="text-slate-600">Ensures excellent communication and service quality.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
