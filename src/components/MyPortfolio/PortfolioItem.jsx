import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import Fade from 'react-reveal/Fade';

export default function PortfolioItem() {
    return (
        <>
				 <Fade left>
				<div className="portfolio__item">
				
						<div className="portfolio__desc">
							<video type="video/mp4" className="portfolio__img" autoPlay loop muted>
								<source src={require("../../video/Hipstercoffe.mp4")}/>
							</video>
							<p>Website for a coffee shop.Simple project developed based on provided psd design.</p>
							<p className="portfolio__stack">Tech stack: HTML, CSS, Sass, Bootstrap</p>
							
							<a className="portfolio__link" href="https://github.com/jgarnie/hipstercoffe" target="_blank" rel="noopener noreferrer"><AiFillGithub size={32}/></a>
							
							
						</div>
					
				</div>
				</Fade>
				<Fade right>
				<div className="portfolio__item">
					
						<a href="https://youtu.be/QJ6oh3g-raE" target="_blank">
							<video type="video/mp4" className="portfolio__img" autoPlay loop muted>
									<source src={require("../../video/EatSpainClient.mp4")}/>
							</video>
						</a>
						<div className="portfolio__desc">
							<p>Final project client side of a FullStack application, using React Hooks and latest React functionalities.</p>
							<p className="portfolio__stack">Tech stack: React, Sass</p>
							<a className="portfolio__link" href="https://github.com/jgarnie/EatSpain" target="_blank" rel="noopener noreferrer"><AiFillGithub size={32}/></a>
						</div>
					
				</div>
				</Fade>
				<Fade left>
				<div className="portfolio__item">
				
						<a href="https://youtu.be/lTdRheQP8A0" target="_blank">
						<video type="video/mp4" className="portfolio__img" autoPlay loop muted>
								<source src={require("../../video/EatSpainAdmin.mp4")}/>
						</video>
						</a>					
						<div className="portfolio__desc">
							<p>Final project admin side of a FullStack application, developed using Laravel and Sass.</p>
							<p className="portfolio__stack">Tech stack:Laravel, Sass</p>
							<a className="portfolio__link" href="https://github.com/jgarnie/EatSpain" target="_blank" rel="noopener noreferrer"><AiFillGithub size={32}/></a>
						</div>
					
				</div>
				</Fade>
				<Fade right>
				<div className="portfolio__item">
					
						<a href="https://youtu.be/j2tkeQefhiA" target="_blank">
						<video type="video/mp4" className="portfolio__img" autoPlay loop muted>
								<source type="video/mp4" src={require("../../video/KiwiApi.mp4")}/>
						</video>
						</a>
						<div className="portfolio__desc">
							<p>Search engine developed using Kiwi RESTApi, real life application and functional search engine created.</p>
							<p className="portfolio__stack">Tech stack: React</p>
							<a className="portfolio__link" href="https://github.com/jgarnie/hackaton4" target="_blank" rel="noopener noreferrer"><AiFillGithub size={32}/></a>
						</div>
					
				</div>
				</Fade>
				<Fade>
				<div className="portfolio__item">
					
						<video type="video/mp4" className="portfolio__img" autoPlay loop muted>
								<source type="video/mp4" src={require("../../video/portfolio.mp4")}/>
						</video>					
						<div className="portfolio__desc">
							<p>My personal portfolio, I developed using React, I would like to update it as soon as I learn something new, so keep an eye on it.</p>
							<p className="portfolio__stack">Tech stack:React, Laravel, Scss</p>
							<a className="portfolio__link" href="https://github.com/jgarnie/portfolioJoaquin" target="_blank" rel="noopener noreferrer"><AiFillGithub size={32}/></a>
						</div>
					
				</div>
				</Fade>
				<Fade>
				<div className="portfolio__item portfolio__item--highlight">
					
						<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
						<div className="portfolio__desc">
							<p>Currently developing eshop for a costumer, preview soon...</p>
							<a href="" target="_blank" rel="noopener noreferrer" className="button">Explore</a>
						</div>
					
				</div>
				</Fade>
			</>
    )
}
