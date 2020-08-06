import React from 'react';
import PortfolioItem from './PortfolioItem.jsx';

import './MyPortfolio.scss';

export default function MyPortfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="heading" data-aos="fade-up">My portfolio</h2>
            <div className="portfolio__container">
                <PortfolioItem />
            </div>
        </section>
    )
}
