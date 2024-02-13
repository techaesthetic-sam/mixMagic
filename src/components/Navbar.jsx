import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
export default function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMagic</span>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
