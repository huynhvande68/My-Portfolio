import { Link } from 'react-router-dom'
import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faReact, faCss3, faGitAlt, faJsSquare , faNode } from '@fortawesome/free-brands-svg-icons'

import {
    faLinkedin,
    faGithub,
    faFacebook,
  } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'




const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H','u','y','n','h',' ', 'V','a','n',' ', 'D','e']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    return(
    <div className="container home-page">
        <div className="text-zone">
            <h4>Hello, I'm</h4>
            <h1>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
            </h1>
            
            <h2>FRONTEND WEB DEVELOPER</h2>
            
            <h3>2 Years of Experience</h3>
            <Link to='/contact' className='flat-button'>
                <button>CONTACT ME</button>
            </Link>

            <ul >
                <li>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100012536023207'>
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
                </li>
                <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/de-huynh-van-a46398249/'>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                </li>
                <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/huynhvande68/'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                </li>
                
            </ul>
            
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                </div>
            </div>

            <div className='cubespinner'>
                <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color='#5Ed4f4'></FontAwesomeIcon>
                </div>
            </div>

            <div className='cubespinner'>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color='#fcdc00'></FontAwesomeIcon>
                </div>
            </div>

            <div className='cubespinner'>
                <div className='face4'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                </div>
            </div>

            <div className='cubespinner'>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
                </div>
            </div>

            <div className='cubespinner'>
                <div className='face6'>
                    <FontAwesomeIcon icon={faNode}color='#4e9b43'></FontAwesomeIcon>
                </div>
            </div>

      </div>
    </div>  

    );
}

export default Home