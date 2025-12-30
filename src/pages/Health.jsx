import HealthProjectsHero from "../components/projectsPagesComponents/healthComponents/Hero";
import HealthProjectsList from "../components/projectsPagesComponents/healthComponents/List";

const HealthProjects = () => {
  return (
    <main className="min-h-screen bg-white">
      <HealthProjectsHero />
      <HealthProjectsList />
    </main>
  );
};

export default HealthProjects;
