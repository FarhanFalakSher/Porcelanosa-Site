import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { FiChevronRight, FiTool, FiTruck, FiUsers, FiCheck, FiPackage, FiAward, FiGlobe, FiClock, FiMail, FiPhone } from "react-icons/fi";

const PorcelanosaDevelopers = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });

    requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  }, [location.pathname]);

  const largeScaleSolutions = [
    { title: "Residential Projects", desc: "Premium materials for large-scale housing developments and apartment complexes.", icon: "🏢", delay: "100" },
    { title: "Commercial Projects", desc: "Durable solutions for office buildings, retail spaces, and commercial centers.", icon: "🏬", delay: "200" },
    { title: "Hospitality Projects", desc: "Luxury finishes for hotels, resorts, and hospitality establishments.", icon: "🏨", delay: "300" },
  ];

  const valueProposition = [
    { title: "Cost Efficiency", desc: "Volume discounts and optimized pricing for large developments.", icon: <FiAward className="text-3xl" />, delay: "100" },
    { title: "Premium Branding", desc: "High-quality finishes that enhance property value and appeal.", icon: <FiAward className="text-3xl" />, delay: "200" },
    { title: "Long-Term Durability", desc: "Products engineered for longevity and minimal maintenance.", icon: <FiCheck className="text-3xl" />, delay: "300" },
  ];

  const projectLifecycle = [
    { title: "Planning Stage", desc: "Technical consultation and BIM support from concept phase.", icon: <FiTool className="text-2xl" /> },
    { title: "Material Selection", desc: "Curated material packages tailored to project specifications.", icon: <FiPackage className="text-2xl" /> },
    { title: "Execution Stage", desc: "On-site coordination and installation support.", icon: <FiUsers className="text-2xl" /> },
    { title: "After-Sales Support", desc: "Warranty coverage and ongoing maintenance support.", icon: <FiCheck className="text-2xl" /> },
  ];

  const logisticsFeatures = [
    { title: "Bulk Supply", desc: "Volume purchasing for entire developments", icon: "📦" },
    { title: "Global Availability", desc: "Consistent supply across 150+ countries", icon: <FiGlobe className="text-3xl" /> },
    { title: "On-Time Delivery", desc: "Guaranteed timelines for project schedules", icon: <FiClock className="text-3xl" /> },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-black/90 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920')] bg-cover bg-center scale-105"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <div className="mb-6 sm:mb-8" data-aos="fade-down">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-xs sm:text-sm tracking-widest font-medium text-white uppercase">REAL ESTATE DEVELOPERS</span>
                <FiAward className="text-blue-300" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-aos="fade-up">
              <span className="block">Large-Scale</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-blue-300 mt-2 sm:mt-3">Development Solutions</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
              Support real estate developers with scalable, premium solutions for residential, commercial, and hospitality projects worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" data-aos="fade-up" data-aos-delay="300">
              <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
                Discuss Project
                <FiChevronRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-white text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large-Scale Solutions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">Large-Scale Solutions</h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            Comprehensive material packages for different project types
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {largeScaleSolutions.map((solution, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={solution.delay}>
              <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-4xl mb-4 sm:mb-6">{solution.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{solution.desc}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
                  View Cases <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">Value Proposition</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {valueProposition.map((value, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={value.delay}>
                <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="text-blue-600 mb-4 sm:mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Lifecycle Support */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">Project Lifecycle Support</h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            Comprehensive support throughout your development project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectLifecycle.map((stage, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {stage.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics & Supply */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">Logistics & Supply</h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
            {logisticsFeatures.map((feature, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="text-3xl sm:text-4xl text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FiTruck className="text-lg" />
              Request Logistics Plan
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Start Your Next Development Project</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with Porcelanosa for premium materials, expert support, and reliable logistics for your large-scale developments.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
            <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Discuss Project
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-300 text-gray-800 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
              Request Proposal
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
            {[
              { icon: <FiPhone className="text-2xl text-blue-600" />, label: "Direct Line", value: "Commercial Team" },
              { icon: <FiMail className="text-2xl text-blue-600" />, label: "Email", value: "@porcelanosa.com" },
              { icon: "🏢", label: "Headquarters", value: "Spain" },
              { icon: <FiClock className="text-2xl text-blue-600" />, label: "Response", value: "24-48 Hours" }
            ].map((contact, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="mb-2 flex justify-center">{contact.icon}</div>
                <div className="text-sm text-gray-600 mb-1">{contact.label}</div>
                <div className="font-semibold text-gray-900 text-sm">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PorcelanosaDevelopers;
