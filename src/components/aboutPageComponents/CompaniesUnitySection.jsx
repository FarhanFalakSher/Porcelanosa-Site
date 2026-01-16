import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";

function CompaniesUnitySection() {
  const companies = [
    {
      name: "PORCELANOSA",
      year: "1973",
      color: "from-blue-600 to-blue-800",
      bg: "bg-blue-50",
      desc: "Leading ceramic wall and floor tile manufacturer.",
      stats: { pro: "1000+", countries: "150+", years: "45+" },
    },
    {
      name: "VENIS",
      year: "1986",
      color: "from-black to-gray-800",
      bg: "bg-gray-100",
      desc: "Contemporary ceramic collections and flooring solutions.",
      stats: { pro: "850+", countries: "120+", years: "35+" },
    },
    {
      name: "GAMADECOR",
      year: "1987",
      color: "from-sky-400 to-sky-600",
      bg: "bg-sky-50",
      desc: "Premium kitchen and bathroom furniture with technology.",
      stats: { pro: "700+", countries: "100+", years: "34+" },
    },
    {
      name: "KRION",
      year: "1993",
      color: "from-blue-900 to-indigo-900",
      bg: "bg-indigo-50",
      desc: "Sustainable innovation with architectural solutions.",
      stats: { pro: "600+", countries: "90+", years: "28+" },
    },
  ];

  const [active, setActive] = useState(0);
  const current = companies[active];

  useEffect(() => {
    const interval = setInterval(
      () => setActive((p) => (p + 1) % companies.length),
      6000
    );
    return () => clearInterval(interval);
  }, [companies.length]);

  const next = () => setActive((p) => (p + 1) % companies.length);
  const prev = () =>
    setActive((p) => (p === 0 ? companies.length - 1 : p - 1));

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-700">
              PORCELANOSA GROUP
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Unified{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Vision
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diversifying production has played a key role in our global growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Company List */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Our Companies
              </h3>
              <div className="space-y-3">
                {companies.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full p-4 rounded-lg transition-all ${
                      active === i
                        ? `bg-gradient-to-r ${c.color} text-white shadow-md`
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg ${
                          active === i ? "bg-white/20" : "bg-white"
                        }`}
                      >
                        <div
                          className={`font-bold ${
                            active === i ? "text-white" : "text-gray-700"
                          }`}
                        >
                          0{i + 1}
                        </div>
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-bold">{c.name}</div>
                        <div
                          className={`text-sm ${
                            active === i
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          Since {c.year}
                        </div>
                      </div>
                      {active === i && <FiCheck className="text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Company */}
          <div className="lg:col-span-8">
            <div
              className={`${current.bg} rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100`}
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-white rounded-full mb-4">
                  <span
                    className={`text-sm font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}
                  >
                    SINCE {current.year}
                  </span>
                </div>
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}
                >
                  {current.name}
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  {current.desc}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.values(current.stats).map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 text-center shadow-sm"
                  >
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}
                    >
                      {val}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {["Professionals", "Countries", "Years"][idx]}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={`bg-gradient-to-r ${current.color} text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all flex items-center gap-2`}
              >
                Explore {current.name}
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prev}
            className="p-3 rounded-full border hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>
          <div className="flex gap-2">
            {companies.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  active === i
                    ? `bg-gradient-to-r ${c.color}`
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 rounded-full border hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-gray-600">
            {companies.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${c.color}`}
                ></div>
                <span className="text-sm">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesUnitySection;
