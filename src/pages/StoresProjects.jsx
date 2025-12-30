import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/storesComponents/Discription";
import StoresHero from "../components/projectsPagesComponents/storesComponents/Hero";
import StoresList from "../components/projectsPagesComponents/storesComponents/List";

const Stores = () => {
  return (
    <main className="min-h-screen bg-white">
      <StoresHero />
      <StoresList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default Stores;
