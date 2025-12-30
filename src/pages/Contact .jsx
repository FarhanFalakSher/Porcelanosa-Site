import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Luxury Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Let's Connect &<br />
            <span className="font-serif italic">Create Together</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Your vision, our expertise. Let's build something extraordinary.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          {[
            { icon: <FiMail />, title: "Email", detail: "info@porcelanosa.com", desc: "General inquiries" },
            { icon: <FiPhone />, title: "Call", detail: "+1 (234) 567-890", desc: "Direct support" },
            { icon: <FiMapPin />, title: "Visit", detail: "123 Design Ave", desc: "Showroom visits" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-900/5 rounded-xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <div className="text-gray-900 font-medium">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <FiSend className="text-gray-900 text-xl" />
              <h2 className="text-3xl font-bold text-gray-900">Send Message</h2>
            </div>
            <form className="space-y-6">
              {["Name", "Email", "Phone"].map((label) => (
                <div key={label}>
                  <input
                    placeholder={`Your ${label}`}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    required
                  />
                </div>
              ))}
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                required
              ></textarea>
              <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Headquarters</h3>
              <p className="text-gray-600">Experience luxury at our flagship showroom</p>
            </div>
            <div className="h-[400px]">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.177858804823!2d-73.99209168459493!3d40.7410593793299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b25f1f13%3A0x885c69246d4b1c5e!2sPorcelanosa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-1000"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "Business Hours", content: "Mon-Fri: 9AM-6PM", sub: "Sat: 10AM-4PM" },
            { title: "Emergency", content: "+1 (234) 567-8910", sub: "24/7 urgent support" },
            { title: "Response Time", content: "Within 1 hour", sub: "For all inquiries" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <div className="text-gray-900 font-medium text-xl mb-1">{item.content}</div>
              <div className="text-gray-500 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;