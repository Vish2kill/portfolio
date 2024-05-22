import React, { useContext } from "react";
import vishal from "../assets/vishal1.jpg";
import myresume from "../assets/Vishal CV.pdf";
import Typewriter from "typewriter-effect";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ModeContext } from "../context/Mode";
import Dark_Particles from "./Dark_Particles";
import Light_Particles from "./Light_Particles";

const Home = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div id="vishal" className="container-fluid p-0">
      <div className="container position-relative z-3 px-4 px-md-0">
        <div className="row pt-5 gap-5 gap-md-0 flex-column-reverse flex-md-row">
          <div className="col-12 col-md-8">
            <h1 data-aos="fade-down" data-aos-duration={1000}>
              Hi, <br />
              I'm <span className="text-primary">Vishal</span>
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "MERN Developer",
                    "FrontEnd Developer",
                    "BackEnd Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <a
              data-aos="fade-up"
              data-aos-duration={1000}
              href={myresume}
              className="btn btn-primary mt-4 mt-md-5 px-auto py-auto px-md-4 py-md-2 fw-semobold"
              target="_"
              download="./assets/myresume.pdf"
            >
              Download Resume
            </a>
            <div data-aos="fade-up" data-aos-duration={1000} className="links">
              <a
                className={`text-decoration-none text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                href="https://github.com/Vish2kill"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
              <a
                className={`text-decoration-none text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                href="https://www.linkedin.com/in/vishal-singh-9a877314a/"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                className={`text-decoration-none text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                href="https://www.instagram.com/vish2kill/"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-flex">
            <img
              data-aos="zoom-in"
              data-aos-duration={1000}
              src={vishal}
              alt={vishal}
            />
          </div>
        </div>
      </div>
      {mode === "dark" ? <Dark_Particles /> : <Light_Particles />}
    </div>
  );
};

export default Home;
