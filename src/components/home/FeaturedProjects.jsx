import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import project images
import project1Img from "../../assets/project1.jpg";
import project2Img from "../../assets/project2.jpg";
import project3Img from "../../assets/project3.jpg";
import project4Img from "../../assets/project4.jpg";

const projects = [
  {
    name: "Modern Villa",
    location: "Barcelona, Spain",
    category: "Residential",
    image: project1Img,
  },
  {
    name: "Luxury Hotel",
    location: "Paris, France",
    category: "Hospitality",
    image: project2Img,
  },
  {
    name: "Corporate Office",
    location: "London, UK",
    category: "Commercial",
    image: project3Img,
  },
  {
    name: "Private Residence",
    location: "Milan, Italy",
    category: "Residential",
    image: project4Img,
  },
];

const FeaturedProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Centered Heading */}
        <div className="mb-20 text-center">
          <h2
            data-aos="fade-up"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
          >
            Featured Projects
          </h2>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-auto max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Explore a curated selection of our most prestigious projects,
            showcasing design excellence, craftsmanship, and innovation across
            diverse sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 md:h-80 lg:h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-90"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Text Reveal */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-gray-200 mb-1">
                  {project.location}
                </p>
                <span className="text-xs md:text-sm text-gray-300 uppercase tracking-widest">
                  {project.category}
                </span>

                {/* Animated Underline */}
                <div className="mt-3 h-0.5 w-10 bg-white transition-all duration-500 group-hover:w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
