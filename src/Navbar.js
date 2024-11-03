import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
