// Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTools, FaShieldAlt } from 'react-icons/fa';
import { HiPhone, HiClock, HiCurrencyRupee, HiOutlineCheck } from 'react-icons/hi';
import { MdScreenshotMonitor, MdSpeaker, MdSmartDisplay } from 'react-icons/md';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import ServiceCard from '../components/ui/ServiceCard';
import { Helmet } from 'react-helmet';
import technicianImage from '../assets/2.png';
import technicianImage2 from '../assets/home2.png';

const Home = () => {
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
        <title>Shree Balaji Electronics - TV Repair Services in Pune</title>
        <meta
          name="description"
          content="Professional TV repair services in Pune. We fix all TV brands with quick service and affordable rates."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bringing Your TV <span className="text-accent-500">Back to Life</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Pune's trusted TV repair service with over 25+ years of experience fixing all brands and models with quick turnaround times.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
                  className="flex items-center px-6 py-3 font-medium text-white rounded-md bg-green-600 hover:bg-green-700 transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" size={20} />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+919890031628"
                  className="flex items-center px-6 py-3 font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-primary-800 transition-colors duration-300"
                >
                  <HiPhone className="mr-2" size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {isAbove1000px && (
              <div className="order-1 lg:order-2 flex justify-center">
                <img src={technicianImage} alt="TV repair technician" className="rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
              Why Choose Us
            </span>
            <SectionHeader
              title="The Shree Balaji Advantage"
              subtitle="We're committed to providing fast, reliable TV repair services that get your entertainment back on track."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaTools}
              title="Expert Technicians"
              description="Our technicians are factory-trained with years of experience repairing all TV brands."
            />
            <FeatureCard
              icon={HiClock}
              title="Quick Service"
              description="Most repairs are completed within 24-48 hours to minimize your downtime."
            />
            <FeatureCard
              icon={HiCurrencyRupee}
              title="Affordable Rates"
              description="Transparent pricing with no hidden fees. We provide estimates before starting work."
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Service Warranty"
              description="All our repairs come with a 90-day warranty for your peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
              Our Services
            </span>
            <SectionHeader
              title="Professional TV Repair Services"
              subtitle="We specialize in all types of TV repairs and services to keep your entertainment running smoothly."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={MdScreenshotMonitor}
              title="TV Screen Repair"
              description="We repair cracked screens, fix display issues, and replace damaged panels for all TV types."
              price="1500"
            />
            <ServiceCard
              icon={MdSpeaker}
              title="Audio System Fix"
              description="Fix sound issues including no sound, distorted audio, buzzing, or speaker problems."
              price="800"
            />
            <ServiceCard
              icon={MdSmartDisplay}
              title="Smart TV Setup"
              description="Software updates, app installations, connectivity issues, and smart feature troubleshooting."
              price="600"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Is Your TV Acting Up?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-100">
            Don't wait until it gets worse. Contact our experts today for a quick diagnosis and repair.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919890031628?text=Hi%20Shree%20Balaji%20Electronics,%20I%20need%20TV%20repair%20service."
              className="flex items-center px-6 py-3 font-medium rounded-md bg-white text-primary-600 hover:bg-slate-100 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2" size={20} />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href="tel:+919890031628"
              className="flex items-center px-6 py-3 font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              <HiPhone className="mr-2" size={20} />
              <span>Call: +91 98900 31628</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Details */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {isAbove1000px && (
              <div>
                <img
                  src={technicianImage2}
                  alt="TV Repair Expert at Work"
                  className="rounded-lg"
                />
              </div>
            )}
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
                Our Commitment
              </span>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Customers Trust Us</h2>
              <p className="text-slate-600 mb-6">
                For over 25+ years, Shree Balaji Electronics has been Pune's go-to TV repair service.
                Our commitment to quality repairs, transparent pricing, and excellent customer service
                has earned us the trust of thousands of satisfied customers.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Experienced Technicians', desc: 'Our team has decades of combined experience repairing all TV brands.' },
                  { title: 'Genuine Parts', desc: 'We use only authentic replacement parts to ensure long-lasting repairs.' },
                  { title: 'Home Service Available', desc: "Can't bring your TV to us? Our technicians can come to your home." },
                  { title: '90-Day Warranty', desc: 'All our repairs are backed by our service warranty for your peace of mind.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-primary-100 rounded-full text-primary-600 mt-1">
                      <HiOutlineCheck size={18} />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
