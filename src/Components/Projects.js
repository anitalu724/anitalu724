import React from 'react'
import '../css/Projects.css'
import Project from './Project';
import configData from "../config.json";

const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
    // auth: process.env.TOKEN,
});

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-start pb-5 mb-5 container">My projects</h2>
      {configData.PROJECT_PAGE.map((project) => <Project key={project.id} project={project}></Project>)}
    </div>
  )
}

export default Projects