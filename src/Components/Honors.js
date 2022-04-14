import React from 'react';
import configData from "../config.json";
import "../css/Honors.css";

const Honors = () => {
  return (
    <div id="honors">
        <h2 className="text-start pb-5 mb-5 container">Honors & Awards</h2>
        <ul>
            {configData.HONORS_PAGE.map((item)=>
                <li>{item.title} / <div className='itemHost'>{item.host}</div> / <div className='itemYear'>{item.year}</div></li>
            )}
        </ul>
  </div>
  )
}

export default Honors