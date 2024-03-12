import './index.scss'
import React from 'react'
import Project1 from '../../assets/images/project-1.jpg'
import Project2 from '../../assets/images/project-2.png'
import Project3 from '../../assets/images/project-3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
const Project = () => {
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>My project</h1>
        </div>
        <div className="project-container">
          <div className="project-box">
            <a
              className="icon"
              target="_blank"
              rel="noreferrer"
              href="https://callvideoweb.onrender.com/"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
            <img src={Project1} alt="project3" />
            <div className="project-layer">
              <h4>Web Socket</h4>
              <p>
                A website that simulates a video call and chat room like Google
                Meet
              </p>
              <span>NodeJS / Javascript / EJS / HTML / CSS</span>
            </div>
          </div>

          <div className="project-box">
            <a
              className="icon"
              target="_blank"
              rel="noreferrer"
              href="/"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
            <img src={Project2} alt="project3" />
            <div className="project-layer">
              <h4>My portfolio</h4>
              <p>
                A website that introduces myself such as contact information,
                work, past projects,...
              </p>
              <span>React / Javascript / HTML / CSS</span>
            </div>
          </div>

          <div className="project-box">
            <a
              className="icon"
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/H8yyBsnrFwtqQOCYKRagrZ/PTTKYC?type=design&node-id=0-1&mode=design&t=iv5OZIxKKUxUgU1T-0"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
            <img src={Project3} alt="project3" />
            <div className="project-layer">
              <h4>Phone Shop</h4>
              <p>
                A design for a figma website about a phone shop based on
                glassmophism design for a very impressive interface
              </p>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
