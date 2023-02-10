import cartIcon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <div className="logo">
        <img src={cartIcon} alt="img" />
        {/* <h1>EasyShopping</h1> */}
      </div>
    </NavLink>
  );
}

export default Logo;
