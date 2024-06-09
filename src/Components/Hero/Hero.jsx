import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'am Praveen Pandey,</span> Frontend Developer based in India{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        itaque laudantium recusandae repudiandae porro accusantium .
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            className="resume"
            href="https://drive.google.com/file/d/1LcClWW1ZD7vB-9s9l9yJmyS3ZJGuHBuj/view?usp=drive_link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
