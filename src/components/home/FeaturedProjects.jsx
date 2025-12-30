import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import project images
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
    <section className="bg-white px-6 py-12 lg:px-16 overflow-hidden">
      <div className="mb-16 max-w-3xl">
        <h2
          data-aos="fade-up"
          className="mb-4 text-3xl font-3xl tracking-wide text-gray-900 md:text-4xl"
        >
          Featured Projects
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-600"
        >
          Explore a selection of our most prestigious projects, showcasing
          design excellence, craftsmanship, and innovation across different
          sectors.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-75"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text Reveal */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
              <p className="text-sm text-gray-200 mb-2">{project.location}</p>
              <span className="text-sm text-gray-300 uppercase tracking-widest">
                {project.category}
              </span>
              {/* Icon animation */}
              <div className="mt-3 w-10 h-0.5 bg-white transition-all duration-500 group-hover:w-12"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
