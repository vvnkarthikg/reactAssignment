import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #ffffff;
            padding: 10px;
            display: flex;
            justify-content: space-around;
          }

          .nav-link {
            color: #000;
            text-decoration: none;
            padding: 8px 15px;
            font-size: 16px;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }

          .nav-link:hover {
            background-color: #575757;
          }

          .nav-link.active {
            background-color: #007bff;
          }
        `}
      </style>
      <nav className="navbar">
        <NavLink to="/PlansPricing" className="nav-link">Plans & Pricing</NavLink>
        <NavLink to="/ProductTour" className="nav-link">Product Tour</NavLink>
        <NavLink to="/Blog" className="nav-link">Blog</NavLink>
        <NavLink to="/Security" className="nav-link">Security</NavLink>
        <NavLink to="/PasswordGenerator" className="nav-link">Password Generator</NavLink>
        <NavLink to="/Customers" className="nav-link">Customers</NavLink>
        <NavLink to="/Help" className="nav-link">Help</NavLink>
      </nav>
    </>
  );
};

export default Header;
