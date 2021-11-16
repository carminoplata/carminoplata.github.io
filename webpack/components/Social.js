import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, 
        faFacebook, 
        faLinkedinIn, 
        faGithub} from '@fortawesome/free-brands-svg-icons'
export default function Social(){
  return(
    <>
      <a href="https://www.linkedin.com/in/carmine-sacco/" 
        id="linkedin" className="social-icon">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://github.com/carminoplata" 
        id="github" className="social-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.instagram.com/carminoplata/" 
        id="instagram" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/carmine.sacco.12" 
        id="facebook" className="social-icon">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </>
  );
}