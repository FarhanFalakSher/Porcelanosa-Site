import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/companiesComponents/Discription";
import CompaniesHero from "../components/projectsPagesComponents/companiesComponents/Hero";
import CompaniesList from "../components/projectsPagesComponents/companiesComponents/List";

const Companies = () => {
  return (
    <main className="min-h-screen bg-white">
      <CompaniesHero />
      <CompaniesList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default Companies;
