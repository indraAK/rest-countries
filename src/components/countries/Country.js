import { Link } from "react-router-dom";
import formatNumber from "../../utils/formatNumber";

const Country = ({ country }) => {
  return (
    <div className="card card-country dark:bg-dark-default bg-white shadow-md rounded overflow-hidden">
      <Link to={`/country/${country.alpha2Code}`} className="card-header">
        <img src={country.flag} className="select-none" alt={country.name} />
      </Link>
      <div className="card-content p-5">
        <Link
          to={`/country/${country.alpha2Code}`}
          className="dark:text-white inline-block text-xl font-extrabold mb-3 hover:underline"
        >
          {country.name}
        </Link>
        <ul>
          <li>
            Population: <span>{formatNumber(country.population)}</span>
          </li>
          <li>
            Region: <span>{country.region}</span>
          </li>
          <li>
            Capital: <span>{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
