import { useState, useContext } from 'react';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faCode,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Sidebar = () => {
  // Common scroll settings - duration 500ms là mức mượt mà và vẫn có đủ hiệu ứng
  const scrollSettings = {
    spy: true,
    smooth: true,
    offset: -15,
    duration: 500,
    delay: 0,
    spyThrottle: 30,
    activeClass: 'active',
    containerId: 'page-content'
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuad',
      containerId: 'page-content'
    });
  };

  // Thêm hàm direct scroll cho hiệu ứng tức thì nhất
  const directScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById('page-content');
    
    if (section && container) {
      container.scrollTo({
        top: section.offsetTop - 15,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="nav-bar">
      <div className="logo" onClick={() => directScroll('home')}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sublogo" />
      </div>
      <nav>
        <ScrollLink 
          to="home" 
          {...scrollSettings}
          className="home-link"
          onClick={() => directScroll('home')}
        >
          <FontAwesomeIcon icon={faHome} color="#a2a1a1" /> 
        </ScrollLink>
        <ScrollLink 
          to="about" 
          {...scrollSettings}
          className="about-link"
          onClick={() => directScroll('about')}
        >
          <FontAwesomeIcon icon={faUser} color="#a2a1a1" />
        </ScrollLink>
        <ScrollLink 
          to="project" 
          {...scrollSettings}
          className="project-link"
          onClick={() => directScroll('project')}
        >
          <FontAwesomeIcon icon={faCode} color="#a2a1a1" />
        </ScrollLink>
        <ScrollLink 
          to="contact" 
          {...scrollSettings}
          className="contact-link"
          onClick={() => directScroll('contact')}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#a2a1a1" />
        </ScrollLink>
      </nav>
    </div>
  )
}

export default Sidebar
