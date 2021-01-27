import React from "react";
import { FaRegMoon } from "react-icons/fa";

import { useGlobalContext } from "../context";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrap'>
        <h1 className='page-title'>Where in the world?</h1>
        <button className='btn'>
          <FaRegMoon className='mode-icon' />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
