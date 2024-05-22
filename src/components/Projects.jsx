import React, { useContext } from "react";
import projects from "../projects/index";
import { ModeContext } from "../context/Mode";

const Projects = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div id="projects" className="projects">
      <div className="d-flex justify-content-center">
        <h1>Projects</h1>
      </div>
      <div className="container my-5">
        <div className="row px-3 gap-4 px-md-0">
          {projects.map((item, index) => (
            <div
              key={index}
              className="p-2 border border-light rounded-3 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <a
                className="text-decoration-none text-light"
                href={item.link}
                target="_blank"
              >
                <div className="position-relative relative">
                  <img className="rounded-3" src={item.image} alt={item.name} />
                  <div className="position-absolute absolute">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <h4
                  className={`text-center d-block d-md-none my-3 text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  {item.name}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
