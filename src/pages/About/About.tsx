import "./About.css";
import { Link } from "react-router-dom";
import antonio_img from "../../assets/antonio.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__data">
          <h1>
            {"Let's talk "} <u>about me</u>!
          </h1>
          <p>
            I am a versatile professional with extensive experience in
            engineering and management roles. I have excelled as a Project
            Manager at Concept7 and Unravel, demonstrating my project management
            expertise. As the Team Lead Manager at Socrates Digital Video B.V.,
            I oversaw the development and production of cutting-edge products
            and software, managing teams and operations effectively. My
            technical skills include C++ software development, Linux
            administration, and in training full-stack web development. My track
            record of success, adaptability, and a keen aptitude for
            problem-solving make me a valuable asset for development or
            management of projects.
          </p>
          <Link to="/contact">
            <button className="about__button">Work with me</button>
          </Link>
        </div>
        <div className="about__container">
          <img src={antonio_img} className="about__img" alt="self_image" />
        </div>
      </div>
    </>
  );
};

export default About;
