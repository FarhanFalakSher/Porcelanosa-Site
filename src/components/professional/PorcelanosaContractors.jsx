import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  FiChevronRight,
  FiTool,
  FiUsers,
  FiBook,
  FiAward,
  FiDownload,
  FiCheckCircle,
  FiStar,
  FiShield
} from "react-icons/fi";

const PorcelanosaContractors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    AOS.refresh();
  }, []);

  const constructionSolutions = [
    { name: "Facades Systems", desc: "Premium external cladding solutions with weather-resistant finishes.", icon: "🏗️", badge: "Premium", aosDelay: "100", gradient: "from-blue-500 to-cyan-500" },
    { name: "Flooring Systems", desc: "Durable flooring solutions for residential and commercial applications.", icon: "🧱", badge: "Durable", aosDelay: "200", gradient: "from-emerald-500 to-teal-500" },
    { name: "Structural Surfaces", desc: "High-performance surfaces for walls, countertops, and structural elements.", icon: "🏢", badge: "Structural", aosDelay: "300", gradient: "from-purple-500 to-pink-500" },
  ];

  const technicalSupport = [
    { icon: <FiBook />, title: "Installation Manuals", desc: "Step-by-step guides for smooth application and installation.", aosDelay: "100" },
    { icon: <FiUsers />, title: "On-Site Guidance", desc: "Technical experts available for site visits and project consultation.", aosDelay: "200" },
    { icon: <FiTool />, title: "Technical Consultations", desc: "One-on-one consultations for complex installation scenarios.", aosDelay: "300" },
  ];

  const performanceFeatures = [
    { icon: "🌧️", title: "Weather Resistance", desc: "Materials tested against extreme weather conditions", aosDelay: "100", color: "text-blue-600" },
    { icon: "🔥", title: "Fire Safety", desc: "Fire-resistant materials meeting international standards", aosDelay: "200", color: "text-red-600" },
    { icon: "⚖️", title: "Load Capacity", desc: "Engineered for structural integrity and load-bearing", aosDelay: "300", color: "text-amber-600" },
    { icon: "🛡️", title: "Material Resistance", desc: "Resistant to wear, impact, and environmental factors", aosDelay: "400", color: "text-green-600" },
  ];

  const trainingPrograms = [
    { title: "Installer Training", desc: "Hands-on training for certified application techniques", icon: "🎓", stat: "1000+ Certified" },
    { title: "Certification Programs", desc: "Official installer certification for Porcelanosa systems", icon: "🏅", stat: "Global Recognition" },
    { title: "Application Systems", desc: "Training on specialized application tools and methods", icon: "🛠️", stat: "Latest Tools" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Enhanced Hero Section */}
      <div className="relative min-h-[80vh] bg-black/90 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920')] bg-cover bg-center scale-110"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <div className="mb-6 sm:mb-8" data-aos="fade-down">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-xs sm:text-sm tracking-widest font-medium text-white uppercase">BUILDERS & CONTRACTORS</span>
                <FiAward className="text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-aos="fade-up">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Construction Excellence
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-light text-blue-300 mt-2 sm:mt-3">
                Professional Builder Solutions
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Advanced construction systems, expert technical support, and certified training for professional builders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" data-aos="fade-up" data-aos-delay="300">
              <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105">
                <FiDownload className="text-lg" />
                Download Guides
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/30 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                <FiUsers className="mr-2" />
                Contact Technical Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Construction Solutions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">
            Construction <span className="text-blue-600">Solutions</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            Specialized systems for professional construction applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {constructionSolutions.map((solution, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={solution.aosDelay}>
              <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{solution.icon}</div>
                  <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6 border border-blue-100">
                    {solution.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{solution.desc}</p>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    View Technical Specs
                    <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Technical Support */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">
              Technical <span className="text-blue-600">Support</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {technicalSupport.map((support, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={support.aosDelay}>
                <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className="inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    {support.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {support.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{support.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Performance & Safety Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">
            Performance & <span className="text-blue-600">Safety Features</span>
          </h3>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {performanceFeatures.map((feature, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={feature.aosDelay}>
              <div className="group text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{feature.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Training & Certification */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-up">
              Training & <span className="text-blue-600">Certification</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {trainingPrograms.map((program, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx*100}>
                <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{program.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{program.desc}</p>
                  <div className="text-xs font-semibold text-blue-600">{program.stat}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" data-aos="fade-up">
            <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FiAward className="text-lg" />
              Enroll in Certification
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Final CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl text-center" data-aos="fade-up">
          <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-4 sm:mb-6">
            <FiStar className="text-2xl text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Elevate Your <span className="text-blue-600">Construction Business</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Access premium solutions, certified training, and dedicated technical support for your construction projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
            <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FiDownload className="text-lg" />
              Download Guides
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-300 text-gray-800 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
              <FiUsers className="mr-2" />
              Contact Technical Team
            </button>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Need immediate assistance?</p>
            <p className="text-base font-semibold text-gray-900">+34 964 35 95 00</p>
            <p className="text-xs text-gray-400 mt-1">24/7 Construction Support Line</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorcelanosaContractors;