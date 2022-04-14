import React from 'react';
import "../css/Footer.css";
import configData from "../config.json";
import { FaEnvelope, FaFacebookSquare, FaGithubSquare, FaLinkedin, FaResearchgate  } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="footerWrapper">
        <div className="footerCol title">
          <p>Cheng-Hua (Anita) Lu</p>
          <a href ={"mailto:"+configData.SELF_INFO.EMAIL} target='_blank'>{configData.SELF_INFO.EMAIL}</a>
        </div>
        <div className="footerCol footerIcon">
          <a href ={configData.SELF_INFO.FACEBOOK} target='_blank'><FaFacebookSquare/></a>
          <a href ={configData.SELF_INFO.GITHUB} target='_blank'><FaGithubSquare/></a>
          <a href ={configData.SELF_INFO.LINKEDIN} target='_blank'><FaLinkedin/></a>
        </div>
        <div className="footerCol">
          <p className = "footerColP">This is an academic website for Cheng-Hua (Anita) Lu to share her experiences, projects, publications.</p>
        </div>
        

      </div>
    </div>
  )
}

export default Footer