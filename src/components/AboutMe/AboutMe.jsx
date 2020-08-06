import React from 'react';
import './AboutMe.scss';

export default function AboutMe() {
    return (
        <section id="about" className="about">
            
                <h2 className="heading">ABOUT ME</h2>
        
                <img className="about__img" src={require("../../img/joaquin.jpg")} alt="joaquin picture"/>

                <div className="about__desc">
                    <p><strong>My name is Joaquin Garcia.</strong> I am a full-stack web developer and enjoy learning new trends. <strong>I am developing project by myself in JavaScript and React and backend of my projects in PHP and Laravel.</strong></p>
					<p>I am open to learning new technologies and enjoy working with people <span className="about__desc--underline">who are as passionate about all web-related as me</span>.</p>
					<p>I am based in Prage, Czech Republic since 2018.</p>
					<p>I like nature, animals, physics, technology and of course development and programming. If I do not develop, you can also meet me trekking in the mountains.</p>
					<h4 className="about__cta">Get in touch and let's do something great together.</h4>
					<a href="#contact" className="button">CONTACT ME</a>
                </div>
        </section>
    )
}
