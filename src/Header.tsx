import React from "react";
import { faBriefcase, faCode, faGraduationCap, faHome, faShapes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import './Header.css'

export const Header: React.FC = () => {
    return (
        <div className="header">
            <Link to="/"><FontAwesomeIcon icon={faHome} className="icon"/></Link>
            <Link to="/education"><FontAwesomeIcon icon={faGraduationCap} className="icon"/></Link>
            <Link to="/jobexperience"><FontAwesomeIcon icon={faBriefcase} className="icon"/></Link>
            <Link to="/activities"><FontAwesomeIcon icon={faShapes} className="icon"/></Link>
            <Link to="/skills"><FontAwesomeIcon icon={faCode} className="icon"/></Link>
        </div>
    )
};