import React, { useContext } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { ModeContext } from "../context/Mode";

const Header = () => {
  const { mode, modeToggler } = useContext(ModeContext);
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-auto py-md-3 shadow-md ${
        mode ? mode : "light"
      }`}
      data-bs-theme={mode}
    >
      <div className="container">
        <a
          className={`navbar-brand px-3 px-md-0 d-flex align-items-center gap-2 fw-medium ${mode}`}
          href="#Vishal"
        >
          <FaLaptopCode /> <i> Vishal Singh</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 mt-2 mt-md-0 ms-md-auto mb-0 mb-md-2 mb-lg-0 gap-2 gap-md-4">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#vishal"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {mode === "dark" && <MdDarkMode size={20} />}
                  {mode === "light" && <MdLightMode size={20} />}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className={`dropdown-item d-flex justify-content-between align-items-center ${
                        mode === "dark" && "bg-primary text-white"
                      }`}
                      onClick={() => {
                        modeToggler("dark");
                      }}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <MdDarkMode /> Dark
                      </div>
                      {mode === "dark" && <FaCheck />}
                    </div>
                  </li>
                  <li>
                    <div
                      className={`dropdown-item d-flex justify-content-between align-items-center ${
                        mode === "light" && "bg-primary text-white"
                      }`}
                      onClick={() => {
                        modeToggler("light");
                      }}
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <MdLightMode /> Light
                      </div>
                      {mode === "light" && <FaCheck />}
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
