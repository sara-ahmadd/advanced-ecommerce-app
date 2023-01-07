import React from "react";
import "./_Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import List from "./List";

function NavBar({ show, setShow }) {
  return (
    <nav>
      <Logo />
      <List />
      <button onClick={() => setShow(!show)} className="burger-icon">
        <i>
          <RxHamburgerMenu />
        </i>
      </button>
    </nav>
  );
}

export default NavBar;
