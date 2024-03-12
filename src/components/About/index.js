import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          Hi, I'm a full-stack web developer with over 2+ years of experience
          and mainly focused on front-end development. I'm a very ambitious
          front-end developer looking for a role in an established IT company
          with the opportunity to work with the latest technologies on
          challenging and diverse projects.
        </p>
        <p>
          Overall, my programming skills include Html, CSS, JavaScript, ReactJs,
          Redux, NodeJS, ExpressJs, MongoDB, mySQL, Firebase.
        </p>
        <p>
          My coding style involves writing clean, SEO-friendly code that is
          optimized for performance. I am super proud of my work and am always
          striving to create the best possible web products. Visit my<a href="https://github.com/huynhvande68/"> Github </a>
          profile for more details or just <a href="https://www.facebook.com/profile.php?id=100012536023207"> Contact </a> me.
          
        </p>
      </div>

      <div className="progress-bar">
          <p>HTML/CSS</p>
          <div class="container-bar">
            <div className="skills html-css">3 years</div>
          </div>
          <p>JavaScript</p>
          <div class="container-bar">
            <div className="skills js">2.5 years</div>
          </div>
          <p>ReactJS</p>
          <div class="container-bar">
            <div className="skills reactjs">2 years</div>
          </div>
          <p>NodeJS</p>
          <div class="container-bar">
            <div className="skills nodejs">2 years</div>
          </div>
        </div>
    </div>
    </>
  )
}

export default About
