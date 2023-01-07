import Logo from "./Logo";
import "./_SideBar.scss";
import List from "./List";
import { SlClose } from "react-icons/sl";

function SideBar({ show, setShow }) {
  return (
    <div
      className="side-bar"
      style={
        show === true
          ? { transform: "none" }
          : { transform: "translateX(-1000px)" }
      }
    >
      <div className="logo-container">
        <Logo />
        <i onClick={() => setShow(false)}>{show ? <SlClose /> : null}</i>
      </div>
      <List />
    </div>
  );
}

export default SideBar;
