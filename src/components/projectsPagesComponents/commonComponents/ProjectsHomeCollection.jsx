import React from "react";

const HomeCollection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://picsum.photos/1920/1080?blur=1)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="w-[50%] text-center mx-auto px-4 relative z-10">
        {/* <div className="w-full lg:w-3/5 mx-auto text-center p-8 md:p-12 rounded-lg shadow-2xl "> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            HOME Collection
          </h2>

          <p className="text-white text-lg mb-8 leading-relaxed">
            PORCELANOSA Group’s new brochure includes multiple proposals for the
            introduction of innovation, style and quality into the home. Each
            product is designed to meet the expectations and needs of every
            profile.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:scale-105 shadow-lg">
            See Cataloge
          </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomeCollection;
