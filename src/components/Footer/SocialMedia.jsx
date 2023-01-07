import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./_SocialMedia.scss";
function SocialMedia() {
  return (
    <div className="social">
      <i>
        <a
          href="https://www.linkedin.com/in/sara-ahmadd/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </i>
      <i>
        <a
          href="https://github.com/sara-ahmadd"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </i>
      <i>
        <a
          href="mailto:saraahmad2060039@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </i>
    </div>
  );
}

export default SocialMedia;
