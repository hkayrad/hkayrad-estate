import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <img className="logo" src="/hkd-pixel.svg" alt="" />
        <ul className="navLinks">
          <li className="navLink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
