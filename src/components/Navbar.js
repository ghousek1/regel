import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  const [userThemeMode, toggleUserThemeMode] = useContext(ThemeContext);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const toggleTheme = () => {
    toggleUserThemeMode();
  };

  const navlinks = [
    { name: "Guide", url: "guide" },
    { name: "Useful Patterns", url: "useful-patterns" },
    { name: "Tutorial", url: "tutorial" },
    { name: "Github", url: "github" },
  ];

  return (
    <nav
      id="navigation"
      className="flex h-[4.25rem] w-full items-center justify-between px-1 md:px-3 border-b-[0.1rem] "
    >
      <a href="/" className="z-[100] cursor-pointer text-3xl">
        <span className="accent bold text-[1rem] font-[500] md:text-[1.2rem] md:font-[600]">REGEL</span>
      </a>
      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        fixed top-0  left-0 z-[100] h-full  w-full flex-col items-end justify-center
        p-8 backdrop-blur-md md:relative 
        md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
      >
        <ul
          className="slate mr-4 flex flex-col font-monospace tracking-wide
                       md:flex-row text-[1rem] font-[500] leading-10 md:text-[0.8rem] md:font-[500] md:leading-8"
        >
          {navlinks.map((navLink) => (
            <li key={navLink.id} className="px-5 py-3 md:px-4 md:py-0">
              <a
                className="hover-accent"
                href={navLink.url}
              >
                <span className="uppercase bold">{navLink.name}</span>
              </a>
            </li>
          ))}
          <li>
            <i
              onClick={toggleTheme}
              className="fa-solid fa-circle-half-stroke fa-flip-horizontal px-5 py-3 text-[1.2rem]  md:px-2 md:py-0"
            ></i>
          </li>
        </ul>
      </div>
      <i
        onClick={toggleSideMenu}
        className={`fas fa-${sideMenu ? "close" : "bars-staggered"} 
                    accent z-[100] w-[1.25rem] cursor-pointer text-center text-xl md:hidden`}
      />
    </nav>
  );
}

export default Navbar;
