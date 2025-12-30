import React, { useState } from "react";

const inspirationPosts = [
  {
    id: 1,
    title: "Minimal Bathroom with Natural Stone",
    space: "Bathroom",
    style: "Minimal",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    designer: "Studio Porcelanosa",
    products: ["XLIGHT Tiles", "KRION Surfaces"],
  },
  {
    id: 2,
    title: "Modern Kitchen Concept",
    space: "Kitchen",
    style: "Modern",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    designer: "Interior Lab",
    products: ["Porcelain Slabs", "Butech Systems"],
  },
  {
    id: 3,
    title: "Warm Living Space with Textures",
    space: "Living",
    style: "Classic",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    designer: "Arquitectura Plus",
    products: ["Wood Effect Tiles", "Natural Stone"],
  },
];

export default function InspirationBlog() {
  const [spaceFilter, setSpaceFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState("All");

  const filteredPosts = inspirationPosts.filter((post) => {
    return (
      (spaceFilter === "All" || post.space === spaceFilter) &&
      (styleFilter === "All" || post.style === styleFilter)
    );
  });

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[87vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Inspiration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-white">
              Inspiration
            </h1>
            <p className="mt-4 max-w-xl text-white/80 text-lg">
              Discover spaces where architecture, design, and Porcelanosa
              materials meet.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-wrap gap-6 justify-between items-center">
        <div className="flex gap-4">
          <select
            className="border border-gray-300 px-5 py-2 text-sm rounded-xl tracking-wide"
            onChange={(e) => setSpaceFilter(e.target.value)}
          >
            <option>All</option>
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Living</option>
          </select>

          <select
            className="border border-gray-300 px-5 py-2 rounded-xl text-sm tracking-wide"
            onChange={(e) => setStyleFilter(e.target.value)}
          >
            <option>All</option>
            <option>Modern</option>
            <option>Minimal</option>
            <option>Classic</option>
          </select>
        </div>

        <p className="text-sm text-gray-500">
          {filteredPosts.length} inspirational projects
        </p>
      </div>

      {/* Pinterest-style Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />
            </div>

            <div className="mt-4">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {post.space} · {post.style}
              </span>

              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Designed by {post.designer}
              </p>

              {/* Product Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {post.products.map((product, index) => (
                  <span
                    key={index}
                    className="text-xs border border-gray-300 px-5 py-2 rounded-xl text-gray-600 hover:bg-gray-900 hover:text-white"
                  >
                    {product}
                  </span>
                ))}
              </div>
              {/* Share */}
              <div className="mt-4 flex gap-4 text-gray-400">
                <span className="hover:text-black">Pinterest</span>
                <span className="hover:text-black">Instagram</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Related Inspiration */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold mb-10">
            Related Inspiration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirationPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover rounded-xl group-hover:opacity-80 transition"
                />
                <h4 className="mt-4 text-lg font-semibold">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
