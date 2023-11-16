import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDesc">
        I am a skilled and passionate web designer with experince in creating
        visually appealing and web user-friendly website. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, ReactJs and JavaScript, as well as design softeare such as
        Adobe Photoshop and illustrator
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="portfolio3" className="worksImg" />
        <img src={Portfolio4} alt="portfolio4" className="worksImg" />
        <img src={Portfolio5} alt="portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="portfolio6" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
