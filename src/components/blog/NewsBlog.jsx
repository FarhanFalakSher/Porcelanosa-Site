import React, { useState } from "react";

// Correct relative path for Vite
import heroImage from "../../assets/news-hero.jpg";
import milanImage from "../../assets/news-milan.jpg";
import awardImage from "../../assets/news-award.jpg";

const newsData = [
  {
    id: 1,
    title: "Porcelanosa Opens New Flagship Store in Milan",
    date: "2025-03-18",
    location: "Milan, Italy",
    image: milanImage,
    excerpt:
      "Porcelanosa continues its international expansion with the opening of a new flagship showroom in the heart of Milan.",
    quote:
      "This opening reinforces our commitment to innovation and design excellence.",
    executive: "José Soriano, CEO",
    year: 2025,
  },
  {
    id: 2,
    title: "Porcelanosa Wins International Design Award",
    date: "2024-11-05",
    location: "Madrid, Spain",
    image: awardImage,
    excerpt:
      "The company has been recognized for its innovation in sustainable materials at an international design awards ceremony.",
    quote:
      "Design and sustainability must go hand in hand for the future.",
    executive: "Marketing Director",
    year: 2024,
  },
];

export default function NewsBlog() {
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", ...new Set(newsData.map((item) => item.year))];

  const filteredNews =
    selectedYear === "All"
      ? newsData
      : newsData.filter((item) => item.year === Number(selectedYear));

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[87vh]">
        {/* Hero Image with opacity */}
        <img
          src={heroImage}
          alt="News Hero"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-white">
              News
            </h1>
            <p className="mt-4 max-w-xl text-white/80 text-lg">
              Corporate updates, press releases, and official announcements.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mx-auto max-w-7xl px-5 py-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Latest News</h2>

        <select
          className="border border-gray-300 px-5 py-2 text-sm tracking-wide"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* News List */}
      <div className="mx-auto max-w-7xl px-6 pb-20 space-y-20">
        {filteredNews
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((news) => (
            <article
              key={news.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-[360px] w-full object-cover hover:scale-105 hover:opacity-80 transition duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400 ">
                  {news.location} · {new Date(news.date).toLocaleDateString()}
                </span>

                <h3 className="mt-4 text-3xl font-semibold text-gray-900">
                  {news.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">{news.excerpt}</p>

                {/* Quote */}
                <blockquote className="mt-6 border-l-2 pl-4  text-gray-500">
                  “{news.quote}”
                  <span className="block mt-2 text-sm not-italic text-gray-400">
                    — {news.executive}
                  </span>
                </blockquote>

                {/* Press Assets */}
                <div className="mt-8 flex gap-6 text-sm">
                  <button className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-900 hover:text-white">
                    Download Press PDF
                  </button>
                  <button className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-900 hover:text-white">
                    Download Images
                  </button>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
