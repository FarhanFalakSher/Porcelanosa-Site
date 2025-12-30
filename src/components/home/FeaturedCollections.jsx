import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import images
import collection1Img from "../../assets/collection1.jpg";
import collection2Img from "../../assets/collection2.jpg";
import collection3Img from "../../assets/collection3.jpg";

const collections = [
  {
    name: "Luxury Tiles",
    description:
      "Explore our exclusive range of porcelain and ceramic tiles crafted for timeless interiors.",
    image: collection1Img,
  },
  {
    name: "Bathroom Elegance",
    description:
      "Transform your bathroom into a serene and luxurious space with our curated designs.",
    image: collection2Img,
  },
  {
    name: "Kitchen Masterpieces",
    description:
      "Modern kitchens designed with precision, functionality, and refined materials.",
    image: collection3Img,
  },
];

const FeaturedCollections = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white px-6 py-12 lg:px-16 overflow-hidden">
      {collections.map((item, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={index}
            className={`mb-20 flex flex-col lg:flex-row items-center gap-8 ${
              isEven ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image with opacity overlay */}
            <div
              data-aos={isEven ? "fade-left" : "fade-right"}
              className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow-xl relative group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-75"
              />
              {/* Optional overlay for extra effect */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-xl"></div>
            </div>

            {/* Text */}
            <div
              data-aos="fade-up"
              className="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left"
            >
              <h3 className="mb-4 text-3xl font-2xl text-gray-900 md:text-4xl">
                {item.name}
              </h3>
              <p className="mb-6 text-gray-600">
                {item.description}
              </p>
              <button className="inline-block rounded-xl border border-gray-900 px-5 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white hover:shadow-xl">
                Explore Collection
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedCollections;
