import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import PHP from "../assets/php.png";
import MYSql from "../assets/mysql.png";
import react_pic from "../assets/react.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import MongoDB from "../assets/mongodb.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  const skills = [
    HTML,
    CSS,
    JS,
    PHP,
    MYSql,
    react_pic,
    Node,
    Express,
    MongoDB,
    Tailwind,
    Bootstrap,
  ];

  return (
    <div id="skills" className="skills">
      <div className="d-flex justify-content-center">
        <h1 className="text-center">Skills</h1>
      </div>
      <div className="container mt-4 d-flex flex-wrap gap-4 justify-content-center">
        {skills.map((item, index) => (
          <img
            key={index}
            src={item}
            data-aos="zoom-in"
            data-aos-duration={1000}
            alt={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
