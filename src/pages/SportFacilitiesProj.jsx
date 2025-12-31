import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/sportsFacilitiesComponents/Discription";
import SportsFacilitiesHero from "../components/projectsPagesComponents/sportsFacilitiesComponents/Hero";
import SportsFacilitiesList from "../components/projectsPagesComponents/sportsFacilitiesComponents/List";

const SportsFacilities = () => {
  return (
    <main className="min-h-screen bg-white">
      <SportsFacilitiesHero />
      <SportsFacilitiesList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default SportsFacilities;
