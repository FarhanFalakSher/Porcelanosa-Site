import ResturantsHero from "../components/projectsPagesComponents/resturantsComponents/Hero";
import ResturantsList from "../components/projectsPagesComponents/resturantsComponents/List";

const Resturants = () => {
  return (
    <main className="min-h-screen bg-white">
      <ResturantsHero />
      <ResturantsList />
    </main>
  );
};

export default Resturants;
