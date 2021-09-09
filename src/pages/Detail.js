import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import formatNumber from "../utils/formatNumber";

const Detail = () => {
  const { alpha2Code } = useParams();
  const {
    data: countries,
    isLoading,
    error,
  } = useFetch("https://restcountries.eu/rest/v2/all");

  if (isLoading) return <Loader />;

  if (error) {
    return <p className="mt-9">{error}</p>;
  }

  const [country] = countries
    ? countries?.filter(
        (country) =>
          country.alpha2Code.toLowerCase() === alpha2Code.toLowerCase()
      )
    : [null];

  const borderCountries = [];

  country?.borders.forEach((alpha3Code) => {
    for (const item of countries) {
      if (item.alpha3Code.toLowerCase() === alpha3Code.toLowerCase()) {
        borderCountries.push(item);
      }
    }
  });

  return (
    <section className="details mt-7 pb-7">
      <Link
        to="/"
        className="dark:bg-dark-default dark:text-white inline-flex items-center justify-center py-2 px-7 bg-white rounded shadow border-dark-default text-dark-default"
      >
        <BiArrowBack className="inline-block mr-2" />
        Back
      </Link>

      {country && (
        <div className="card-detail md:flex items-start mt-10 md:mt-14">
          <div className="flex-none w-full md:w-1/2">
            <img
              src={country.flag}
              className="w-full md:max-w-[550px] max-h-[350px] object-cover shadow-md rounded"
              alt=""
            />
          </div>
          <div className="md:pl-10 flex-none w-full md:w-1/2">
            <h3 className="dark:text-white font-extrabold text-2xl md:text-3xl text-dark-primary mt-5 md:mt-0">
              {country.name}
            </h3>

            <div className="info w-full md:flex md:justify-between mt-4">
              <ul>
                <li>
                  Native name : <span>{country.nativeName}</span>
                </li>
                <li>
                  Population : <span>{formatNumber(country.population)}</span>
                </li>
                <li>
                  Region : <span>{country.region}</span>
                </li>
                <li>
                  Sub Region : <span>{country.subregion}</span>
                </li>
                <li>
                  Capital : <span>{country.capital}</span>
                </li>
              </ul>
              <ul>
                <li>
                  Top Level Domain: <span>{country.topLevelDomain[0]}</span>
                </li>
                <li>
                  Currencies: <span>{country.currencies[0].name}</span>
                </li>
                <li>
                  Languages:{" "}
                  {country.languages.map((lang) => (
                    <span key={lang.iso639_1} className="mr-1">
                      {lang.name},
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <div className="mt-7 md:mt-10 lg:flex">
              <h5 className="dark:text-white whitespace-nowrap md:flex-auto font-semibold text-[18px] text-dark-primary">
                Border Countries:
              </h5>
              <ul className="flex flex-wrap w-full lg:ml-4 mt-3 lg:mt-0">
                {borderCountries?.map((borderCountry) => (
                  <li key={borderCountry.alpha2Code}>
                    <Link
                      to={`/country/${borderCountry.alpha2Code}`}
                      className="badge"
                    >
                      {borderCountry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
