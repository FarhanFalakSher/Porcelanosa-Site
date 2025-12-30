
function AboutHero() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/world.jpg')" }}
      >
        <div className="lg:w-[55%] mx-auto text-center pt-9">
          <h1 className="text-white text-5xl font-bold">
            The power of a Trademark
          </h1>
          <p className="text-gray-50 pt-6 text-xl">
            PORCELANOSA Group is today a major reference in both the Spanish and
            the International market. Its consolidated position has been built
            up on values such as innovation and quality, but specially the trust
            placed in its large human capital, made up of almost 5000 skilled
            professionals, and its concern for its stakeholders and the
            environment.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
