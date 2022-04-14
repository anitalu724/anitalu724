import React from "react";
import Particles from "react-tsparticles";
import { Typewriter } from "react-simple-typewriter";
import "../css/Home.css";
import configData from "../config.json";
import NavBar from "./NavBar";
import { FaEnvelope, FaFacebookSquare, FaGithubSquare, FaLinkedin, FaResearchgate  } from "react-icons/fa";

const Home = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => { };

    return (
        <div>
            <NavBar/>
            <div className={configData.HOME_PAGE_STYLE.BACKGROUND}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 600,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            bubble: { distance: 100, duration: 2, opacity: 0.8, size: 40 },
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#eeeeee" },
                        links: { color: "#eeeeee", distance: 150, enable: false, opacity: 0.1, width: 1,},
                        collisions: { enable: true },
                        move: { direction: "none", enable: true, outMode: "bounce", random: true, speed: .5, straight: false,},
                        number: {
                            density: { enable: true, area: 800 },
                            value: 80,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { random: true, value: 5 },
                    },
                    detectRetina: true,
                }}
            />
            <div className="container">
                
                <div className="row">
                    <div className="col-md-4 img-fluid d-sm-block d-none">
                        <img className="img-fluid profilePic" src={configData.SELF_INFO.SELF_PHOTO} alt="" data-aos="fade-up" data-aos-duration="500"/>
                    </div>
                    <div className="col-md-8 home-details" data-aos="fade-up" data-aos-duration="500">
                        <p className="personal-profile__name">{configData.NAME}</p>
                        <p className="personal-profile__work">
                            I'm{" "}
                            <span style={{ fontWeight: "bold" }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={configData.SELF_INFO.SELF_DESCRIPTION}
                                    loop={5}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={50}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                        <div className="socialMedia">
                            <a href ={"mailto:"+configData.SELF_INFO.EMAIL} target='_blank'><FaEnvelope/></a>
                            <a href ={configData.SELF_INFO.FACEBOOK} target='_blank'><FaFacebookSquare/></a>
                            <a href ={configData.SELF_INFO.GITHUB} target='_blank'><FaGithubSquare/></a>
                            <a href ={configData.SELF_INFO.LINKEDIN} target='_blank'><FaLinkedin/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default Home;
