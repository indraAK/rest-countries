import { useState } from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Countries from "../components/countries/Countries";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [keyword, setKeyword] = useState(null);

  return (
    <section className="home mt-7 pb-12">
      <div className="sm:container mx-auto max-w-[350px] sm:flex items-start justify-between">
        <Search setKeyword={setKeyword} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>

      <Countries region={selectedRegion} keyword={keyword} />
    </section>
  );
};

export default Home;
