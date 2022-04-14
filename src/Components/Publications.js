import React from 'react';
import '../css/Publications.css';
import Pub from './Pub';
import configData from "../config.json";

const Publications = () => {
  return (
    <div id="publications">
      <h2 className="text-start pb-5 mb-5 container">Publications</h2>
      {configData.PUBLICATIONS_PAGE.map((pub) => <Pub key={pub.id} pub={pub}></Pub>)}
    </div>
  )
}

export default Publications