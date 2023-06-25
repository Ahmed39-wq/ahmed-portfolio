import { useState } from "react";
import "../Header/header.scss";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(open => !open)
  };

  return (
    <header>
      <h3>
        Ahmed Jr
      </h3>
      <nav className={`nav_menu ${isOpen ? 'responsive_nav' : ''}`} >
        <NavLink to={"/"} id="nav-links">
          About
        </NavLink>
        <NavLink to={"/resume"} id="nav-links">
          Resume
        </NavLink>
        <NavLink to={"/projects"} id="nav-links">
          Projects
        </NavLink>
        <NavLink to={"/contact"} id="nav-links">
          Contact
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
