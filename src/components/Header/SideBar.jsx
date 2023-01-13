import Logo from "./Logo";
import "./_SideBar.scss";
import List from "./List";
import { SlClose } from "react-icons/sl";

function SideBar({ show, setShow }) {
  const sideBar = () => {
    setShow(false);
  };
  return (
    <div
      className="side-bar"
      style={
        show === true
          ? { transform: "none" }
          : { transform: "translateX(-2000px)" }
      }
    >
      <div className="logo-container">
        <Logo />
        <i onClick={() => setShow(false)}>{show ? <SlClose /> : null}</i>
      </div>
      <List hideSideBar={sideBar} show={show} />
    </div>
  );
}

export default SideBar;
