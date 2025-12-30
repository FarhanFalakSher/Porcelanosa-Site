import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/labortriesComponents/Discription";
import LabortriesHero from "../components/projectsPagesComponents/labortriesComponents/Hero";
import LabortriesList from "../components/projectsPagesComponents/labortriesComponents/List";

const Labortries = () => {
  return (
    <main className="min-h-screen bg-white">
      <LabortriesHero />
      <LabortriesList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default Labortries;
