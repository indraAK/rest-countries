import { RiArrowDownSLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";

const Filter = ({ selectedRegion, setSelectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const dropdownMenuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleClickRegion = (e) => {
    setSelectedRegion(e.target.textContent);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (buttonRef.current?.contains(e.target)) return;
    if (
      dropdownMenuRef.current &&
      !dropdownMenuRef.current?.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="filter-wrapper relative min-h-[50px] mt-4 sm:mt-0 w-full min-w-[170px] max-w-[170px]">
      <button
        ref={buttonRef}
        onClick={handleClickBtn}
        className="dark:bg-dark-default dark:text-white btn-filter bg-white shadow min-h-[50px] flex items-center justify-between py-3 px-5 text-sm rounded-md w-full"
      >
        {selectedRegion || "FIlter by Region"} <RiArrowDownSLine />
      </button>
      {/* dropdown menu */}
      <ul
        ref={dropdownMenuRef}
        className={`absolute top-[55px] left-0 dark:bg-dark-default bg-white w-full shadow rounded-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {regions.map((region) => (
          <li
            key={region}
            className="dark:text-white dark:hover:bg-dark-primary py-3 px-5 hover:bg-gray-100 cursor-pointer text-[14px]"
            onClick={handleClickRegion}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
