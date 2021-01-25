import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, 
        faFacebook, 
        faLinkedinIn, 
        faGithub} from '@fortawesome/free-brands-svg-icons'
export default function Social(){
  return(
    <>
      <ul className="social_list">
        <li>
          <a href="https://www.linkedin.com/in/carmine-sacco/" 
            className="linkedin social">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/carminoplata" 
            className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/carminoplata/" 
            className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/carmine.sacco.12" 
            className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
      </ul>
    </>
  );
}