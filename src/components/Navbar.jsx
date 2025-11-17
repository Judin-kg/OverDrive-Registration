// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken"); // remove token
//     navigate("/adminlogin"); // redirect
//   };

//   return (
//     <nav style={styles.navbar}>
//          <Link className="navbar-brand d-flex align-items-center" to="/adminlogin">
//         <p className="text-light">Admin</p> 
//         </Link>
//       {/* <h2 style={styles.logo}>Admin Panel</h2> */}

//       <button onClick={handleLogout} style={styles.logoutBtn}>
//         Logout
//       </button>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     width: "100%",
//     padding: "12px 20px",
//     backgroundColor: "#222",
//     color: "white",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//   },
//   logo: {
//     margin: 0,
//     fontSize: "22px",
//     fontWeight: "bold",
//   },
//   logoutBtn: {
//     background: "orange",
//     border: "none",
//     padding: "8px 14px",
//     color: "white",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
// };

// export default Navbar;

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
