import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { 
  FiChevronRight, FiPackage, FiGlobe, FiDollarSign, FiShield, 
  FiTrendingUp, FiUsers, FiTool, FiMapPin, FiCheck, FiAward,
  FiStar, FiTarget, FiBarChart2, FiBriefcase
} from "react-icons/fi";

const PorcelanosaDistributors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    AOS.refresh();
  }, []);

  const programs = [
    { 
      name: "Porcelanosa Associate", 
      desc: "Official distributor program with exclusive territory rights", 
      icon: <FiBriefcase className="text-2xl" />, 
      gradient: "from-blue-600 to-cyan-500", 
      badge: "Official", 
      stats: "Exclusive Rights",
      iconColor: "text-blue-600"
    },
    { 
      name: "Global Distribution", 
      desc: "Access international markets with our trusted brand", 
      icon: <FiGlobe className="text-2xl" />, 
      gradient: "from-emerald-600 to-teal-500", 
      badge: "150+ Countries", 
      stats: "Worldwide",
      iconColor: "text-emerald-600"
    },
    { 
      name: "Commercial Support", 
      desc: "Marketing materials, training, and sales assistance", 
      icon: <FiDollarSign className="text-2xl" />, 
      gradient: "from-purple-600 to-pink-500", 
      badge: "Full Support", 
      stats: "Complete Package",
      iconColor: "text-purple-600"
    },
    { 
      name: "Quality Guarantee", 
      desc: "Premium products with manufacturer warranties", 
      icon: <FiShield className="text-2xl" />, 
      gradient: "from-amber-600 to-orange-500", 
      badge: "Certified", 
      stats: "5-Year Warranty",
      iconColor: "text-amber-600"
    },
  ];

  const benefits = [
    { icon: <FiTarget className="text-3xl" />, title: "Territory Rights", desc: "Exclusive distribution areas protected by contract" },
    { icon: <FiPackage className="text-3xl" />, title: "Product Range", desc: "Full catalog access to 50K+ premium products" },
    { icon: <FiBarChart2 className="text-3xl" />, title: "Sales Tools", desc: "Advanced CRM & marketing automation support" },
    { icon: <FiUsers className="text-3xl" />, title: "Training", desc: "Product, sales, and technical certification training" },
  ];

  const requirements = [
    "Minimum 2 years in distribution or retail",
    "Established commercial network with references",
    "Warehouse & logistics capabilities for storage",
    "Commitment to brand standards and quality"
  ];

  const stats = [
    { value: "970+", label: "Global Stores" },
    { value: "45+", label: "Years Experience" },
    { value: "8", label: "Specialized Brands" },
    { value: "150+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      {/* Enhanced Hero Section */}
      <div className="relative min-h-[80vh] bg-black/90 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920')] bg-cover bg-center scale-105"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <div className="mb-6 sm:mb-8" data-aos="fade-down">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <FiAward className="text-blue-300" />
                <span className="text-xs sm:text-sm tracking-widest font-medium text-white uppercase">PORCELANOSA ASSOCIATE</span>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6" data-aos="fade-up">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Distribution Partnership
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-light text-blue-300 mt-2 sm:mt-3">
                Join Our Global Network
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Exclusive territories, premium products, and comprehensive support for your distribution business growth worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" data-aos="fade-up" data-aos-delay="300">
              <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105">
                Become Distributor
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/30 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                <FiBriefcase className="mr-2" />
                Partner With Us
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 sm:mt-16 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Partnership Benefits */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Partnership <span className="text-blue-600">Benefits</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">Why distributors choose Porcelanosa for business growth</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={idx*100}>
              <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center">
                <div className="inline-flex p-3 sm:p-4 rounded-xl bg-blue-50 text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================= */}
      {/* FIXED DISTRIBUTION PROGRAMS SECTION WITH VISIBLE ICONS */}
      {/* ============================================= */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Distribution <span className="text-blue-600">Programs</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Comprehensive sales and support programs for distributors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {programs.map((program, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx*100} className="flex">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                    {/* FIXED ICON CONTAINER - NOW VISIBLE */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className={program.iconColor}>
                        {program.icon}
                      </div>
                    </div>
                    
                    {/* Badge & Stats */}
                    <div className="mb-6 w-full">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100 mb-2">
                        {program.badge}
                      </span>
                      <div className="text-sm font-semibold text-blue-500">{program.stats}</div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {program.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {program.desc}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                        <span>Learn More</span>
                        <FiChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ============================================= */}
      {/* END OF FIXED SECTION */}
      {/* ============================================= */}

      {/* Enhanced Requirements & CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Enhanced Requirements */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-white" data-aos="fade-right">
            <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4 sm:mb-6">
              <FiCheck className="text-2xl text-blue-300" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Requirements</h3>
            <p className="text-gray-300 mb-4 sm:mb-6">To become an authorized Porcelanosa distributor:</p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiCheck className="text-blue-400 text-lg flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{req}</span>
                </li>
              ))}
            </ul>
            <button className="group w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Apply Now
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced CTA */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-center items-center text-center" data-aos="fade-left">
            <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-4 sm:mb-6">
              <FiStar className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Start Your <span className="text-blue-600">Distribution Partnership</span>
            </h3>
            <p className="text-gray-700 mb-6 sm:mb-8 max-w-lg">
              Join one of the world's leading manufacturers of premium construction materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <button className="group flex-1 flex items-center justify-center gap-2 sm:gap-3 bg-gray-900 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <FiBriefcase />
                Request Partnership Info
              </button>
              <button className="group flex-1 flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-300 text-gray-800 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                Contact Sales Director
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced International Distribution */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              International <span className="text-blue-600">Distribution</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 rounded-full" data-aos="fade-up"></div>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Explore global markets and logistics support</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <FiGlobe className="text-3xl" />, title: "Global Expansion", desc: "New market opportunities worldwide with local support" },
              { icon: <FiTool className="text-3xl" />, title: "Logistics Support", desc: "Supply chain & warehouse management assistance" },
              { icon: <FiMapPin className="text-3xl" />, title: "Territory Map", desc: "Available distribution regions with growth potential" },
            ].map((contact, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={(idx+1)*100}>
                <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {contact.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{contact.desc}</p>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    View Details
                    <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorcelanosaDistributors;