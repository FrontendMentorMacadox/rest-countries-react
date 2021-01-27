import React from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";

import { useGlobalContext } from "../context";

const Header = () => {
  const { darkMode, toggleDarkMode } = useGlobalContext();

  return (
    <header className={`header`}>
      <div className='header-wrap'>
        <h1 className='page-title'>Where in the world?</h1>
        <button className='btn mode-btn' onClick={toggleDarkMode}>
          {darkMode ? (
            <FaMoon className='mode-icon' />
          ) : (
            <FaRegMoon className='mode-icon' />
          )}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
