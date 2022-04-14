import React from 'react';
import "../css/Project.css";
import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
});

const Project = ({project}) => {

    // const getContents = async () => {
    //     let data;
    //     try {
    //         data = await octokit.request('GET /repos/{owner}/{repo}', {
    //             owner: owner,
    //             repo: repo
    //         })
    //         setFullName(data.data.full_name);
    //         setDescription(data.data.description);
    //         setStarCount(data.data.stargazers_count);
    //         setForkCount(data.data.forks_count);
    //         setLanguage(data.data.language);
    //         setLink(data.data.svn_url);
    //         console.log(333,data.data)

    //     } catch (error){
    //         console.log("web not found");
    //         setNotFound(true);
    //     }
    // }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4 projectImg">
          <img src={project.img} alt="centered" className="img-fluid pb-5" data-aos="zoom-in"
            data-aos-duration="500" />
        </div>
        <div className="col-md-8 project-details" data-aos="fade-up"
          data-aos-duration="500">
          <h3 className="project-card__title mt-md-0 mt-sm-5">{project.name}</h3>
          <p>{project.date}</p>
          <ul className="my-item">{
            project.des.map((item) => <li>{item}</li>)
          }</ul>
          <ul className="tags">{
            project.Technology.map((item) => <li>{item}</li>)
          }</ul>
          <div className="project-link">
              {project.website?
              <a href={project.website} target="_blank"><AiOutlineGlobal className = "projectLinkIcon"/> Live Site</a>
              :
              <></>
              }
              {project.github?
              <a href={project.github} target="_blank"><AiFillGithub className = "projectLinkIcon"/> GitHub</a>
              :
              <></>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project