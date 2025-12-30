import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { 
  FiChevronRight, FiPackage, FiGlobe, FiDollarSign, FiShield, 
  FiTrendingUp, FiUsers, FiTool, FiMapPin, FiCheck 
} from "react-icons/fi";

const PorcelanosaDistributors = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 50 });
  }, []);

  const programs = [
    { name: "Porcelanosa Associate", desc: "Official distributor program with exclusive territory rights", icon: <FiPackage />, color: "from-emerald-600 to-emerald-500", badge: "Official" },
    { name: "Global Distribution", desc: "Access international markets with our trusted brand", icon: <FiGlobe />, color: "from-blue-700 to-blue-600", badge: "150+ Countries" },
    { name: "Commercial Support", desc: "Marketing materials, training, and sales assistance", icon: <FiDollarSign />, color: "from-indigo-600 to-indigo-500", badge: "Full Support" },
    { name: "Quality Guarantee", desc: "Premium products with manufacturer warranties", icon: <FiShield />, color: "from-slate-700 to-slate-600", badge: "Certified" },
  ];

  const benefits = [
    { icon: "🏢", title: "Territory Rights", desc: "Exclusive distribution areas" },
    { icon: "📦", title: "Product Range", desc: "Full catalog access" },
    { icon: "📊", title: "Sales Tools", desc: "CRM & marketing support" },
    { icon: "🎓", title: "Training", desc: "Product & sales training" },
  ];

  const requirements = [
    "Minimum 2 years in distribution or retail",
    "Established commercial network",
    "Warehouse & logistics capabilities",
    "Commitment to brand standards"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <div className="relative min-h-[70vh]  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <div className="mb-8" data-aos="fade-down">
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-emerald-300"></div>
                <span className="text-sm tracking-[0.3em] font-semibold text-emerald-200 uppercase">PORCELANOSA ASSOCIATE</span>
                <div className="h-px w-12 bg-emerald-300"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
              <span className="block">Distribution</span>
              <span className="block text-4xl font-light text-emerald-100 mt-3">Partnership Program</span>
            </h1>

            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Join our global network of authorized distributors. Exclusive territories, premium products, and full support for your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center" data-aos="fade-up" data-aos-delay="300">
              <button className="group px-12 py-4 bg-white text-[#15295F] font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 mx-auto sm:mx-0">
                Become Distributor <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 mx-auto sm:mx-0">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Partnership Benefits</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Why distributors choose Porcelanosa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#6488cb] hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 text-center" data-aos="zoom-in" data-aos-delay={idx*100}>
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-32">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Distribution Programs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive sales and support programs for distributors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#6488cb] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay={idx*100}>
              <div className="mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto`}>
                  {program.icon}
                </div>
                <span className="inline-block px-4 py-2 bg-emerald-50 text-[#15295F] text-sm font-bold rounded-full mx-auto">{program.badge}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5 text-center">{program.name}</h3>
              <p className="text-slate-600 mb-8 text-center">{program.desc}</p>
              <div className="text-center">
                <button className="text-[#15295F] font-bold  transition-colors duration-300 flex items-center gap-2 justify-center">
                  Learn More <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements & CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-32 grid lg:grid-cols-2 gap-12">
        {/* Requirements */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white" data-aos="fade-right">
          <h3 className="text-3xl font-bold mb-8">Requirements</h3>
          <p className="text-slate-300 mb-6">To become an authorized distributor:</p>
          <ul className="space-y-4">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FiCheck className="text-emerald-400 text-xl flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
          <button className="mt-10 w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
            Apply Now
          </button>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-12 flex flex-col justify-center items-center text-center shadow-lg" data-aos="fade-left">
          <h3 className="text-4xl font-bold text-[#15295F] mb-6">Start Your Distribution Partnership</h3>
          <p className="text-[#15295F] mb-10 max-w-lg">Join one of the world's leading manufacturers of premium construction materials.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-4 bg-[#15295F] text-white font-bold rounded-xl hover:bg-[#6488cb] transition-all shadow-lg transform hover:-translate-y-1 flex items-center gap-2">
              <FiTrendingUp /> Request Partnership Info
            </button>
            <button className="px-10 py-4 border-2 border-[#15295F] text-[#15295F] font-bold rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 flex items-center gap-2">
              <FiUsers /> Contact Sales Director
            </button>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-32 mb-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">International Distribution</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore global markets and logistics support</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#6488cb] hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 text-center" data-aos="fade-up" data-aos-delay={100}>
            <FiGlobe className="text-4xl text-[#15295F] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Global Expansion</h4>
            <p className="text-slate-600 mb-4">New market opportunities worldwide</p>
            <button className="text-[#15295F] font-bold hover:text-[#6488cb] transition-colors">View Markets →</button>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#6488cb] hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 text-center" data-aos="fade-up" data-aos-delay={200}>
            <FiTool className="text-4xl text-[#15295F] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Logistics Support</h4>
            <p className="text-slate-600 mb-4">Supply chain & warehouse assistance</p>
            <button className="text-[#15295F] font-bold hover:text-[#6488cb] transition-colors">Learn More →</button>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#6488cb] hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 text-center" data-aos="fade-up" data-aos-delay={300}>
            <FiMapPin className="text-4xl text-[#15295F] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Territory Map</h4>
            <p className="text-slate-600 mb-4">Available distribution regions</p>
            <button className="text-[#15295F] font-bold hover:text-[#6488cb] transition-colors">View Map →</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PorcelanosaDistributors;
