import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">React Workshop</Link>
        <ul className="right">
          <li><NavLink to='/assignmentOne'>Opdracht 1</NavLink></li>
          <li><NavLink to='/assignmentTwo'>Opdracht 2</NavLink></li>
          <li><NavLink to='/assignmentThree'>Opdracht 3</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;