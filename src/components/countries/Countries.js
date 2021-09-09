import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";
import Country from "./Country";

const Countries = ({ region, keyword }) => {
  // default URL endpoint
  let URL = "https://restcountries.eu/rest/v2/all";

  if (region) {
    URL = `https://restcountries.eu/rest/v2/region/${region}`;
  }

  let { data: countries, error, isLoading } = useFetch(URL);

  if (keyword) {
    countries = countries.filter((country) =>
      country.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (isLoading) return <Loader />;

  if (error) {
    return <p className="mt-9">{error}</p>;
  }

  if (countries?.length === 0) {
    return <p className="dark:text-light mt-9">Country not found</p>;
  }

  return (
    <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries?.map((country) => (
        <Country key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
};

export default Countries;
