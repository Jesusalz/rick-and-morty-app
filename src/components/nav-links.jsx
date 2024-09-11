import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends } from "react-icons/fa";

export const NavLinks = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-links">
        <li>
          <Link to="/home">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/home/characters">
            <FaUserFriends /> Characters
          </Link>
        </li>
      </ul>
    </nav>
  );
};
