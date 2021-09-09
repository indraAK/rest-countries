import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";

const Search = ({ setKeyword }) => {
  const inputRef = useRef(null);

  const debounce = (func, waitTime = 300) => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, waitTime);
    };
  };

  const changeHandler = () => {
    const value = inputRef.current.value;
    setKeyword(value);
  };

  const debouncedChangeHandler = debounce(changeHandler, 300);

  return (
    <form className="w-full max-w-[350px]">
      <div className="relative min-h-[50px]">
        <AiOutlineSearch className="dark:text-light text-gray-light absolute top-1/2 left-4 z-[2] -translate-y-2/4 text-xl pointer-events-none" />
        <input
          type="search"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className="dark:bg-dark-default dark:caret-light dark:text-light dark:placeholder-light appearance-none absolute top-0 left-0 w-full h-full z-[1] pl-11 pr-4 bg-white text-dark-primary border-0 rounded-md shadow focus:shadow-md focus:outline-none"
          ref={inputRef}
          onChange={debouncedChangeHandler}
        />
      </div>
    </form>
  );
};

export default Search;
