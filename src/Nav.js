import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
       else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <h1
        className="nav__logo"
        
        
      >Flixhub</h1>
      <img
        className="nav__avatar"
        src={require("../src/assets/images/user.png")}
        alt="logo"
      ></img>
    </div>
  );
}

export default Nav;
