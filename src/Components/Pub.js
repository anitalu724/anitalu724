import React from 'react';
import "../css/Pub.css";

const Pub = ({ pub }) => {
  return (
    <div className="pubContainer">
      <div className="row">
        <div className="pubImg">
          <img src={pub.img} alt="centered" className="img-fluid pb-5" data-aos="zoom-in"
            data-aos-duration="500" />
        </div>
        <div className="pub-details" data-aos="fade-up"
          data-aos-duration="500">
          <h3 className="pub-card__title mt-md-0 mt-sm-5">{pub.title}</h3>
          <p>{pub.year}</p>
          <div className='authors'>
              {pub.authors.map((author) =>
                    <a href={author.url} target="_blank" className="author">{author.name}</a>
                )
              }
          </div>
          
          <ul className="description">{
            pub.des.map((item) => <li>{item}</li>)
          }</ul>
          {/* <ul className="tags">{
            pub.Technology.map((item) => <li>{item}</li>)
          }</ul> */}
          {/* <div className="pub-link">
              {pub.website?
              <a href={pub.website} target="_blank"><AiOutlineGlobal className = "pubLinkIcon"/> Live Site</a>
              :
              <></>
              }
              {pub.github?
              <a href={pub.github} target="_blank"><AiFillGithub className = "pubLinkIcon"/> GitHub</a>
              :
              <></>
              }
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Pub