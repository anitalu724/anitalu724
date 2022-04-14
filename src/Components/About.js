import React from 'react';
import "../css/About.css";
import configData from "../config.json";

const About = () => {

  
  const descriptionList = configData.ABOUT_PAGE.DESCRIPTION.map((description) => 
    <p className="section__description pe-lg-5">{description}</p>
  );


  return (
    <section id="about" className="container section">
      <div className="row">
        <div className="col-md-12" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500">
          <h2 id="hello_header" className="section__title">About Me</h2>
          {descriptionList}
          {/* <a href={resume} target="_blank" className="section_btn site-btn" data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"><img src={downloadResume} alt="" />Download Resume</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;