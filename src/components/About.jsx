import React from "react";
import vishal from "../assets/vishal.jpg";

const About = () => {
  return (
    <div id="about" className="about px-3 px-md-0">
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 className="text-center">About</h1>
        </div>
        <div className="row mt-5 gap-5 gap-md-0">
          <div className="col-12 col-md-6">
            <img
              data-aos="zoom-in"
              data-aos-duration={1000}
              src={vishal}
              alt={vishal}
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-3 gap-md-5 justify-content-center">
            <h2
              className="fs-1 fw-bold"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              Hello
            </h2>
            <p className="fs-5" data-aos="fade-up" data-aos-duration={1000}>
              Aspiring full stack web developer with a strong educational
              background and a passion for creating dynamic and user-friendly
              web applications. Currently pursuing a web development course, I
              am skilled in both front-end and back-end technologies, including
              HTML, CSS, JavaScript, and Node.js as well as knowledge of famous
              framework like React. I am eager to apply my knowledge and expand
              my skills in a real-world setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
