import React, { useState } from "react";
import "./_Header.scss";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export const Header = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <header id="header">
      <div className="container">
        <NavBar show={showSide} setShow={setShowSide} />
        <SideBar show={showSide} setShow={setShowSide} />
      </div>
    </header>
  );
};
