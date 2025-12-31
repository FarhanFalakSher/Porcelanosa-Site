import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Correct relative imports (2 levels up → src/assets)
import tilesImg from "../../assets/tiles.jpg";
import bathroomImg from "../../assets/category.jpg";
import kitchenImg from "../../assets/kitchens.jpg";
import livingImg from "../../assets/living.jpg";

const categories = [
  {
    title: "Tiles",
    description:
      "Innovative ceramic and porcelain tiles crafted for timeless architecture.",
    image: tilesImg,
  },
  {
    title: "Bathroom",
    description:
      "Sophisticated bathroom solutions blending design, comfort, and technology.",
    image: bathroomImg,
  },
  {
    title: "Kitchen",
    description:
      "Contemporary kitchens designed with precision, elegance, and functionality.",
    image: kitchenImg,
  },
  {
    title: "Living Spaces",
    description:
      "Refined surfaces and textures that elevate modern living environments.",
    image: livingImg,
  },
];

const ProductCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white px-6 py-12 lg:px-16 overflow-hidden ">
      {/* Section Heading */}
      <div className="mb-16 max-w-3xl text">
        <h2
          data-aos="fade-up"
          className="mb-4 text-3xl font-2xl tracking-wide text-gray-900 md:text-4xl"
        >
          Product Categories
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-600"
        >
          Discover a curated selection of surfaces and spaces designed for
          architectural excellence and modern interiors.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative h-[350px] overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-2xl tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
