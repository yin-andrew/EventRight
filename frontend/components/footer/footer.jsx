import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer(props) {
    return(
        <div className="footer-wrapper">
            <div className="footer-links-container">
                <a className="personal-links" target="_blank" rel="noopener noreferrer" href="https://github.com/yin-andrew/EventRight">
                    <FaGithub /> Github
                </a>
                <div className="link-space"></div>
                <a className="personal-links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewyin16407/">
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Footer;
