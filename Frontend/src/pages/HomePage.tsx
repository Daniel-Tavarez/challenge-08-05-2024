import { useCompanies } from "../queries/useCompanies";

const HomePage = () => {
  const { data: companies } = useCompanies();
  return (
    <div className="home-page">
      dasdasdasd
      {companies?.data.map((company) => (
        <h1>{company.name}</h1>
      ))}
    </div>
  );
};

export default HomePage;
