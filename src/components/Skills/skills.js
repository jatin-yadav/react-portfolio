import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experince in creating
        visually appealing and web user-friendly website. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, ReactJs and JavaScript, as well as design softeare such as
        Adobe Photoshop and illustrator
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Ux/UI Design</h2>
            <p>UX/UI Design related text here for content of UX etc</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is demo text we can write our own text here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Text related to mobile app development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
