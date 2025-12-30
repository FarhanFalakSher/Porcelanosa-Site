import React from "react";

// Offline hero image
import heroImage from "../../assets/sustainability-hero.jpg";

// Online icons
const iconEco = "https://img.icons8.com/ios-filled/100/26e07f/leaf.png";
const iconWater = "https://img.icons8.com/ios-filled/100/26e07f/water.png";
const iconEnergy = "https://img.icons8.com/ios-filled/100/26e07f/lightning-bolt.png";
const iconCertification = "https://img.icons8.com/ios-filled/100/26e07f/certificate.png";

export default function SustainabilityBlog() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[87vh]">
        <img
          src={heroImage}
          alt="Sustainability"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-wide">
              Sustainability
            </h1>
            <p className="mt-4 text-white/80 max-w-xl text-lg">
              Porcelanosa’s commitment to environmental responsibility and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {/* Story / Timeline */}
        <div className="space-y-12">
          {/* Eco-Friendly */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={iconEco} alt="Eco-Friendly" className="w-20 h-20" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Eco-Friendly Materials</h2>
              <p className="mt-2 text-gray-600">
                We use responsibly sourced, sustainable materials to minimize environmental impact.
              </p>
            </div>
          </div>

          {/* Water & Energy Efficiency */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
            <img src={iconWater} alt="Water Efficiency" className="w-20 h-20" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Water & Energy Efficiency</h2>
              <p className="mt-2 text-gray-600">
                Advanced production techniques ensure efficient water and energy usage.
              </p>
            </div>
          </div>

          {/* ESG Initiatives */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={iconEnergy} alt="Energy Efficiency" className="w-20 h-20" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">ESG Initiatives</h2>
              <p className="mt-2 text-gray-600">
                Porcelanosa implements environmental, social, and governance practices to promote sustainability.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
            <img src={iconCertification} alt="Certifications" className="w-20 h-20" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Certifications & Standards</h2>
              <p className="mt-2 text-gray-600">
                All production plants meet international sustainability standards and certifications.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics / Infographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">80%</h3>
            <p className="mt-2 text-gray-600">Materials Recycled</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">60%</h3>
            <p className="mt-2 text-gray-600">Energy Saved</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">50%</h3>
            <p className="mt-2 text-gray-600">Water Efficiency</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl ">
            <h3 className="text-3xl font-bold text-gray-900">100+</h3>
            <p className="mt-2 text-gray-600">Certifications Achieved</p>
          </div>
        </div>

        {/* Download Reports */}
        <div className="text-center mt-12">
          <a
            href="/assets/sustainability-report.pdf" // Place PDF in public/assets
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border bg-white text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white  transition"
          >
            Download Sustainability Report
          </a>
        </div>
      </div>
    </section>
  );
}
