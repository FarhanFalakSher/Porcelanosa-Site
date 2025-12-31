import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import brand image
import brandImg from "../../assets/brand.jpg";

const AboutBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white px-6 py-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div data-aos="fade-up" className="lg:w-1/2 w-full">
          <h2 className="mb-6 text-3xl md:text-4xl font-2xl text-gray-900 relative inline-block">
            Our Philosophy
            <span className="absolute left-0 -bottom-2 w-16 h-0.5 bg-gray-900 transition-all duration-500 group-hover:w-24"></span>
          </h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            At Porcelanosa, we believe that luxury is in the details. Our
            surfaces are designed with meticulous craftsmanship, blending
            timeless elegance with contemporary design. Each product tells a
            story of passion, precision, and perfection.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">Sustainability:</span>{" "}
              We prioritize eco-friendly materials and production methods to
              ensure a responsible approach to luxury design.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">Craftsmanship:</span>{" "}
              Each piece is carefully crafted by skilled artisans, delivering
              unmatched quality and attention to detail.
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow-xl relative group"
        >
          <img
            src={brandImg}
            alt="Brand Philosophy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 brightness-75 opacity-90"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
