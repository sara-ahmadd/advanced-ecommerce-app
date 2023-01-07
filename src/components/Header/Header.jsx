import React, { useState } from "react";
import "./_Header.scss";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export const Header = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <header className="container" id="header">
      <NavBar show={showSide} setShow={setShowSide} />
      <SideBar show={showSide} setShow={setShowSide} />
    </header>
  );
};
