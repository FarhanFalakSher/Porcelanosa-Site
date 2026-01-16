import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import brand image
import brandImg from "../../assets/brand.jpg";

const AboutBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Centered Heading */}
        <div className="mb-24 text-center">
          <h2
            data-aos="fade-up"
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
          >
            Our Philosophy
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-600"
          >
            At <span className="font-medium text-gray-900">Porcelanosa</span>, we
            believe true luxury lives in the details—where craftsmanship,
            innovation, and timeless design meet with purpose.
          </p>
        </div>

        {/* Content + Image */}
        <div className="flex flex-col items-center gap-24 lg:flex-row">
          {/* Content */}
          <div
            data-aos="fade-up"
            className="grid w-full lg:w-1/2 gap-10"
          >
            {/* Feature Card */}
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-500 hover:shadow-xl">
              <h4 className="mb-3 text-lg font-bold text-gray-900">
                Sustainability
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Eco-conscious materials and responsible production processes
                guide every step of our design philosophy—luxury with integrity.
              </p>
            </div>

            {/* Feature Card */}
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-500 hover:shadow-xl">
              <h4 className="mb-3 text-lg font-bold text-gray-900">
                Craftsmanship
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Each surface is shaped by skilled artisans, delivering enduring
                beauty, precision, and uncompromising quality.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="fade-left"
            className="relative w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={brandImg}
              alt="Brand Philosophy"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />

            {/* Base Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

            {/* Hover Opacity Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
