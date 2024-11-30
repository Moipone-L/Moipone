import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css"; // Import the CSS file for styling

const style = () => {
  return (
    <div className="style">
      <h1>Product Management</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
