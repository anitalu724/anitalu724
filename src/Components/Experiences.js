import React from "react";
import "../css/Experiences.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import configData from "../config.json";

const Experiences = () => {

  return (
    <section id="experiences" className="container section">
      <div className="row">
        <div
          className="col-md-12"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 id="hello_header" className="section__title">
            Experiences
          </h2>

          <VerticalTimeline lineColor="lightgray">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              
              contentStyle={{ background: "#2e2f5e", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #2e2f5e", }}
              date="2021 - present"
              dateClassName="date"
              iconStyle={{ background: "#2e2f5e"}}
              icon={<img className="imgIcon" src="img/icon/ntu.png" />}
            >
              <h4 className="vertical-timeline-element-title">Master Student</h4>
              <h6 className="vertical-timeline-element-subtitle">@ Graduate Institute of Electrical Engineering, NTU</h6>
              <p>
                Quantum Circuit Optimization & ZX-Calculus
              </p>
              <p className="advisor">Advisor: <a href="http://www.ee.ntu.edu.tw/profile1.php?id=98">Prof. Chung-Yang (Ric) Huang</a></p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3c67", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #3b3c67", }}
              date="2020 Jul. - 2020 Sep."
              dateClassName="date"
              // iconStyle={{ background: "#3b3c67", color: "#fff" }}
              icon={<img className="imgIcon" src="img/icon/cgm.png" />}
            >
              <h4 className="vertical-timeline-element-title">Summer Research Intern</h4>
              <h6 className="vertical-timeline-element-subtitle">@ NTU Centers of Genomic and Precision Medicine</h6>
              <p>
              MutScape: an analytical toolkit for probing the mutational landscape in cancer genomics
              </p>
              <p className="advisor">Advisors: <a href="https://www.ee.ntu.edu.tw/profile1.php?teacher_id=901155">Prof. Eric Y. Chuang </a> & <a href="http://llai.cm.ntu.edu.tw/p/home">Liang-Chuan Lai </a> 
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#6d6d8a", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #6d6d8a", }}
              date="2019 Jul. - 2019 Sep."
              dateClassName="date"
              // iconStyle={{ background: "#6d6d8a", color: "#fff" }}
              icon={<img className="imgIcon" src="img/icon/sinica.png" />}
            >
              <h4 className="vertical-timeline-element-title">Summer Research Intern</h4>
              <h6 className="vertical-timeline-element-subtitle">@ Institute of Information Science, Academia Sinica</h6>
              <p>
              Deep Learning for Human Surfaceome Prediction
              </p>
              <p className="advisor">Advisor: <a href="https://homepage.iis.sinica.edu.tw/pages/cylin/index_zh.html">Dr. Chung-Yen Lin </a>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#9f9faf", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #9f9faf", }}
              date="2017 Sep. - 2021 Jun."
              dateClassName="date"
              // iconStyle={{ background: "#9f9faf", color: "#fff" }}
              icon={<img className="imgIcon" src="img/icon/ntu.png" />}
            >
              <h4 className="vertical-timeline-element-title">Undergraduate student</h4>
              <h6 className="vertical-timeline-element-subtitle">@ National Taiwan University</h6>
              <p className="advisor">Advisor: <a href="https://www.ee.ntu.edu.tw/profile1.php?teacher_id=901155">Prof. Eric Y. Chuang </a></p>
              <ul>Primary focus:
                <li>Python Toolkit Development</li>
                <li>Cancer Mutation Analysis</li>
              </ul>
              <p className="advisor">Advisor: <a href="http://www.ee.ntu.edu.tw/profile1.php?id=98">Prof. Chung-Yang (Ric) Huang</a></p>
              <ul>Primary focus:
                <li>Qiskit toolkit</li>
                <li>Quantum circuit algorithms</li>
              </ul>
            </VerticalTimelineElement>

            
            <VerticalTimelineElement
              iconStyle={{ background: "#d5d4d6", color: "#fff" }}
              date="1999"
              icon={<BsFillSkipStartCircleFill />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
