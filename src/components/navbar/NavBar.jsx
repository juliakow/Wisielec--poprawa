import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/Game">
          <button className="GameButton">
            <a>Start the game!</a>
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
    </nav>
  );
}