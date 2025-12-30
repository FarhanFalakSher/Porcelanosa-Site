import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { FiChevronRight, FiTool, FiTruck, FiUsers, FiCheck, FiPackage } from "react-icons/fi";

const PorcelanosaDevelopers = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });

    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const largeScaleSolutions = [
    { title: "Residential Projects", desc: "Premium materials for large-scale housing developments and apartment complexes.", icon: "🏢", delay: "100" },
    { title: "Commercial Projects", desc: "Durable solutions for office buildings, retail spaces, and commercial centers.", icon: "🏬", delay: "200" },
    { title: "Hospitality Projects", desc: "Luxury finishes for hotels, resorts, and hospitality establishments.", icon: "🏨", delay: "300" },
  ];

  const valueProposition = [
    { title: "Cost Efficiency at Scale", desc: "Volume discounts and optimized pricing for large developments.", icon: "💰", delay: "100" },
    { title: "Premium Branding", desc: "High-quality finishes that enhance property value and appeal.", icon: "🏆", delay: "200" },
    { title: "Long-Term Durability", desc: "Products engineered for longevity and minimal maintenance.", icon: "🛡️", delay: "300" },
  ];

  const projectLifecycle = [
    { title: "Planning Stage", desc: "Technical consultation and BIM support from concept phase.", icon: <FiTool />, color: "from-blue-600 to-blue-500" },
    { title: "Material Selection", desc: "Curated material packages tailored to project specifications.", icon: <FiPackage />, color: "from-blue-700 to-blue-600" },
    { title: "Execution Stage", desc: "On-site coordination and installation support.", icon: <FiUsers />, color: "from-indigo-600 to-indigo-500" },
    { title: "After-Sales Support", desc: "Warranty coverage and ongoing maintenance support.", icon: <FiCheck />, color: "from-slate-700 to-slate-600" },
  ];

  const logisticsFeatures = [
    { title: "Bulk Supply", desc: "Volume purchasing for entire developments", icon: "📦" },
    { title: "Global Availability", desc: "Consistent supply across 150+ countries", icon: "🌍" },
    { title: "On-Time Delivery", desc: "Guaranteed timelines for project schedules", icon: "⏱️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] bg-black/70 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <div className="mb-8" data-aos="fade-down">
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-blue-300"></div>
                <span className="text-sm tracking-[0.3em] font-semibold text-blue-200 uppercase">REAL ESTATE & PROPERTY DEVELOPERS</span>
                <div className="h-px w-12 bg-blue-300"></div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" data-aos="fade-up">
              <span className="block">Large-Scale</span>
              <span className="block text-4xl font-light text-blue-100 mt-4">Development Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Support real estate developers with scalable, premium solutions for residential, commercial, and hospitality projects worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center" data-aos="fade-up" data-aos-delay="300">
              <button className="group px-12 py-5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transform transition-colors transition-transform duration-500 ease-in-out shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center gap-3 mx-auto sm:mx-0 will-change-transform">
                Discuss a Development Project
                <FiChevronRight className="group-hover:translate-x-2 transition-transform duration-500 ease-in-out" />
              </button>
              <button className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-500 ease-in-out mx-auto sm:mx-0">
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up">
          {[{ value: "970+", label: "Global Stores", color: "bg-blue-600" },
            { value: "150+", label: "Countries", color: "bg-blue-700" },
            { value: "50K+", label: "Products", color: "bg-indigo-600" },
            { value: "25+", label: "Years Experience", color: "bg-slate-700" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-1 transition-transform transition-shadow transition-colors duration-500 ease-in-out will-change-transform text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                {stat.value.includes("K") ? "📦" : stat.value.includes("+") ? "🏪" : "📅"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Large-Scale Solutions */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6" data-aos="fade-up">Large-Scale Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive material packages for different project types
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {largeScaleSolutions.map((solution, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-transform transition-shadow transition-colors duration-500 ease-in-out will-change-transform text-center" data-aos="fade-up" data-aos-delay={solution.delay}>
              <div className="text-5xl mb-8">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">{solution.title}</h3>
              <p className="text-slate-600 mb-8">{solution.desc}</p>
              <button className="text-blue-700 font-bold hover:text-blue-900 transition-colors duration-500 ease-in-out">
                View Case Studies →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16" data-aos="fade-up">Value Proposition</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valueProposition.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-transform transition-shadow transition-colors duration-500 ease-in-out will-change-transform text-center" data-aos="fade-up" data-aos-delay={value.delay}>
                <div className="text-5xl mb-8">{value.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-5">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Lifecycle Support */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6" data-aos="fade-up">Project Lifecycle Support</h2>
          <p className="text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive support throughout your development project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectLifecycle.map((stage, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-transform transition-shadow transition-colors duration-500 ease-in-out will-change-transform text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={`w-20 h-20 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-8`}>
                {stage.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{stage.title}</h3>
              <p className="text-slate-600">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics & Supply */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16" data-aos="fade-up">Logistics & Supply</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {logisticsFeatures.map((feature, idx) => (
              <div key={idx} className="p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transform hover:-translate-y-2 transition-transform transition-shadow transition-colors duration-500 ease-in-out will-change-transform" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-5xl mb-8">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-12 py-5 rounded-xl font-bold hover:bg-blue-50 transform transition-colors transition-transform transition-shadow duration-500 ease-in-out shadow-2xl hover:-translate-y-1 will-change-transform">
              <FiTruck className="text-xl" />
              Request Logistics Plan
              <FiChevronRight className="group-hover:translate-x-2 transition-transform duration-500 ease-in-out" />
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8">Start Your Next Development Project</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Porcelanosa for premium materials, expert support, and reliable logistics for your large-scale developments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-blue-900 px-12 py-5 rounded-xl font-bold hover:bg-blue-50 transform transition-colors transition-transform transition-shadow duration-500 ease-in-out shadow-2xl hover:-translate-y-1 will-change-transform">
              Discuss a Development Project
            </button>
            <button className="group border-2 border-white px-12 py-5 rounded-xl font-bold hover:bg-white/10 transform transition-colors transition-transform transition-shadow duration-500 ease-in-out hover:-translate-y-1 will-change-transform">
              Request a Proposal
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ icon: "📞", label: "Direct Line", value: "Commercial Team" },
              { icon: "📧", label: "Email", value: "developers@porcelanosa.com" },
              { icon: "🏢", label: "Headquarters", value: "Vila-real, Spain" },
              { icon: "⏰", label: "Response Time", value: "24-48 Hours" }
            ].map((contact, idx) => (
              <div key={idx} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl mb-4">{contact.icon}</div>
                <div className="text-blue-200 mb-2">{contact.label}</div>
                <div className="font-bold">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorcelanosaDevelopers;
