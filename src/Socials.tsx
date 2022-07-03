import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Socials.css'

export const Socials: React.FC = () => {
    return (
        <div className="socials">
            <a href="https://github.com/juliafrare">
                <FontAwesomeIcon icon={faGithub} className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/julia-frare-628b64193/">
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>
        </div>
    )
};