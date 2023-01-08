import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import "./_Footer.scss";
import Logo from "../Header/Logo";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="txt">
          <Logo />
          <p>
            Laboris minim tempor commodo do ut cupidatat consequat adipisicing
            non amet in. Esse laboris occaecat ea tempor. Laborum duis amet anim
            cupidatat repr incididunt exercitation in veniam magna incididunt
            est dolor.
          </p>
        </div>
        <div>
          <h3 className="title">Follow Us On Social Media</h3>
          <ul className="links">
            <SocialMedia />
            <li>
              <a href="https://facbook.com">
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i>
                  <FaTwitter />
                </i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i>
                  <FaInstagram />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="rights">&copy;{year} All Rights Are Reserved</p>
    </div>
  );
};
