import React from 'react'

export default function PortfolioItem() {
    return (
        <>
				<div className="portfolio__item">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Website for a coffee shop. Student Project for the Coding Bootcamp Praha. Coded based on provided psd design.</p>
						<p className="portfolio__stack">Tech stack: HTML, CSS, Sass, Bootstrap</p>
					</div>
				</div>

				<div className="portfolio__item">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Description of hackathon project #2. Description of hackathon project #2. Description of hackathon project #2.</p>
						<p className="portfolio__stack">Tech stack:</p>
					</div>
				</div>

				<div className="portfolio__item">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Description of hackathon project #3. Description of hackathon project #3. Description of hackathon project #3.</p>
						<p className="portfolio__stack">Tech stack:</p>
					</div>
				</div>

				<div className="portfolio__item">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Description of hackathon project #4. Description of hackathon project #4. Description of hackathon project #4.</p>
						<p className="portfolio__stack">Tech stack:</p>
					</div>
				</div>

				<div className="portfolio__item">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Description of hackathon project #5. Description of hackathon project #5. Description of hackathon project #5.</p>
						<p className="portfolio__stack">Tech stack:</p>
					</div>
				</div>

				<div className="portfolio__item portfolio__item--highlight">
					<img src={require("../../img/placeholder.png")} alt="project" className="portfolio__img" />
					<div className="portfolio__desc">
						<p>Description of hackathon project #5. Description of hackathon project #5. Description of hackathon project #5.</p>
						<a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="button">Explore</a>
					</div>
				</div>
			</>
    )
}
