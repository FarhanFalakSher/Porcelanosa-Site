import { useState } from "react";
import { FiEye } from "react-icons/fi";

// MANUAL IMAGES
import project1 from "../../assets/img (1).jpg";
import project2 from "../../assets/before.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

function AboutProjects() {
  const projects = [
    {
      id: 1,
      img: project1,
      title: "Pantone 2026 Cloud Dancer",
      description:
        "Pantone 2026 Cloud Dancer: the timeless white that will define interiors and exteriors next year",
      detail:
        "A timeless white tone designed to elevate modern interiors and exterior architectural spaces using Porcelanosa materials.",
    },
    {
      id: 2,
      img: project2,
      title: "JW Design Studio",
      description:
        "JW Design Studio: design, material and calm for an office in China",
      detail:
        "An office project in China combining calm aesthetics, high-end materials and functional design.",
    },
    {
      id: 3,
      img: project3,
      title: "Maison Le Sommet",
      description:
        "Maison Le Sommet, essential architecture and contemporary exclusivity in the heart of Seoul",
      detail:
        "A luxury residential project in Seoul where minimal architecture meets contemporary exclusivity.",
    },
    {
      id: 4,
      img: project4,
      title: "La Primavera",
      description:
        "La Primavera: a Chilean house where the architecture speaks for itself",
      detail:
        "A private Chilean residence where open spaces, natural light and architecture create harmony.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const activeProject = projects[activeIndex];

  return (
    <section className="bg-gray-50 py-20 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          PORCELANOSA <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover new projects made with PORCELANOSA products
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Active Project Preview */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {activeProject.id}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Project {activeProject.id}
            </h2>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <p className="text-2xl md:text-3xl font-light text-gray-800 mb-10 leading-relaxed">
            {activeProject.description}
          </p>

          <button
            onClick={() => setShowDetail(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center gap-3"
          >
            <FiEye className="text-xl" />
            View Project Details
          </button>
        </div>

        {/* Project List */}
        <div className="space-y-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => {
                setActiveIndex(index);
                setShowDetail(false);
              }}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                activeIndex === index
                  ? "bg-white shadow-lg border-l-4 border-blue-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  <span className="font-bold">{project.id}</span>
                </div>
                <p className="text-lg text-gray-800">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT DETAIL (SAME FILE) */}
        {showDetail && (
          <div className="bg-white rounded-2xl shadow-xl p-10 transition-all">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {activeProject.title}
            </h3>

            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {activeProject.detail}
            </p>

            <button
              onClick={() => setShowDetail(false)}
              className="text-blue-600 font-semibold hover:underline"
            >
              ← Back to projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutProjects;
