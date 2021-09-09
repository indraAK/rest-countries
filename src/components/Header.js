import { BiMoon } from "react-icons/bi";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="dark:bg-dark-default bg-white min-h-[65px] flex items-center shadow">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <h1>
          <a
            href="/"
            className="dark:text-white font-extrabold text-dark-default text-[16px] sm:text-[17px]"
          >
            Where in the world?
          </a>
        </h1>
        <label
          htmlFor="switch-theme"
          className="dark:text-white text-[14px] sm:text-[16px] flex items-center cursor-pointer select-none font-semibold text-dark-default"
        >
          <input
            type="checkbox"
            id="switch-theme"
            aria-hidden="true"
            className="hidden"
            onChange={() => toggleTheme()}
          />
          {theme === "dark" ? (
            <IoMdMoon className="dark:text-white inline-block mr-2 text-[17px] sm:text-[20px]" />
          ) : (
            <BiMoon className="inline-block mr-2 text-[17px] sm:text-[20px]" />
          )}
          Dark Mode
        </label>
      </nav>
    </header>
  );
};

export default Header;
