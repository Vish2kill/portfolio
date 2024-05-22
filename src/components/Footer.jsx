import React, { useContext } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn,  } from "react-icons/fa";
import { ModeContext } from "../context/Mode";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <footer
      className={`d-flex position-relative flex-column align-items-center gap-4 mt-5 py-5 shadow-lg ${
        mode ? mode : "light"
      }`}
    >
      <h1>
        <i>Vishal Singh</i>
      </h1>
      <div className="d-flex gap-4">
        <a
          className={`text-decoration-none text-${
            mode === "dark" ? "light" : "dark"
          }`}
          href="https://github.com/vish2kill"
          target="_blank"
        >
          <FaGithub size={20} />
        </a>
        <a
          className={`text-decoration-none text-${
            mode === "dark" ? "light" : "dark"
          }`}
          href="https://www.linkedin.com/in/vishal-singh-9a877314a/"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          className={`text-decoration-none text-${
            mode === "dark" ? "light" : "dark"
          }`}
          href="https://www.instagram.com/vish2kill/"
          target="_blank"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      <p className="mb-0">
        © {new Date().getFullYear()} Copyright @Vish2kill. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
