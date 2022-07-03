import React from "react";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'

export const Header: React.FC = () => {
    return (
        <div className="header">
            <a href="/">
                <FontAwesomeIcon icon={faHome} className="icon"/>
            </a>
        </div>
    )
};