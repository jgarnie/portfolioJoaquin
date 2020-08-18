import React from 'react';
import './AboutMe.scss';

export default function AboutMe() {
    return (
        <section id="about" className="about">
            
                <h2 className="heading">ABOUT ME</h2>
        
                <img className="about__img" src={require("../../img/joaquin.jpg")} alt="joaquin picture"/>

                <div className="about__desc">
                    <p><strong>My name is Joaquin Garcia,</strong> as all good developer, I love to scratch my head with every problem that has to be solved, my work is to learn new practices and technologies to provide the best solution to our aplications. I develop projects by myself at the moment, my main tech stack is <strong>JavaScript and React</strong>, and for the backend I use<strong> PHP and Laravel.</strong></p>
					<p>Grown among orange farms in Valencia(Spain), I moved to Prague for love in 2018 and I couldn't be happier about the decision.</p>
                    <p>For my whole life I had the oportunity to work for the best technological companies on their fields, always working on the technical departments solving issues whenever and wherever,<span className="about__desc--underline"> I do not conceive work without taking challenges</span>.</p>
					
					<p>I like nature, animals, physics, technology, music and of course development and programming. If I am not developing, you can also meet me trekking in the mountains.</p>
					<h4 className="about__cta">Get in touch and let's do something great together.</h4>
					<a href="#contact" className="button">CONTACT ME</a>
                </div>
        </section>
    )
}
