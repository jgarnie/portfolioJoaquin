import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './FindMe.scss';

export default function FindMe() {
    return (
        <footer className="footer">
            <h2 className="footer__heading"> <div className="footer__line"></div> NICE TO MEET YOU! <div className="footer__line"></div></h2>
            <a href="https://github.com/jgarnie" target="_blank"><FaGithub size={48}/></a>
            <a href="https://www.linkedin.com/in/jgarnie/" target="_blank"> <FaLinkedin size={48}/></a>
            <p>Joaquin Garcia Nieto 2020 &copy;</p>
          
        </footer>
    )
}
