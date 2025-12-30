import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/resturantsComponents/Discription";
import ResturantsHero from "../components/projectsPagesComponents/resturantsComponents/Hero";
import ResturantsList from "../components/projectsPagesComponents/resturantsComponents/List";

const Resturants = () => {
  return (
    <main className="min-h-screen bg-white">
      <ResturantsHero />
      <ResturantsList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default Resturants;
