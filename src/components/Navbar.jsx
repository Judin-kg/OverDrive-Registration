

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../utils/Logos (10)[1].png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 shadow-sm">
      {/* Brand */}
      {/* <Link className="navbar-brand d-flex align-items-center" to="/">
        <span className="text-light">Over Drive</span>
      </Link> */}
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="navbar-logo"
        />
        <span className="text-light">Over Drive</span>
      </Link>

      {/* Toggle Button (mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto gap-3">
          
          
          <li className="nav-item">
            <Link className="nav-link" to="/adminlogin" onClick={() => setIsOpen(false)}>
              Admin
            </Link>
          </li>

         </ul>
      </div>
    </nav>
  );
};

export default Navbar;
