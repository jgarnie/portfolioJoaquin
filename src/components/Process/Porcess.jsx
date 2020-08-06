import React from 'react';
import ProcessItem from './ProcessItem.jsx';
import './Process.scss';

export default function Porcess() {
    return (
        <section className="process">
            <p className="process__quote" data-aos="fade-up">Let's work together to make <strong>your product stand out</strong>. I am ready to create complete aplications.<br /><strong>From the idea stage until the fully functional application</strong>.</p>
            <div className="process__container">
                <ProcessItem />
            </div>
        </section>
    )
}
