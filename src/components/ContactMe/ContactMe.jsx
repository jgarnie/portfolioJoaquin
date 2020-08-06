import React from 'react';
import './ContactMe.scss';

export default function ContactMe() {
    return (
      
      <section id="contact" className="contact">
        <h2 className="contact__heading">CONTACT ME</h2>
        <form className="form">
            <input type="text" name="name" className="form__input" placeholder="Name*"/>
        
            <input type="email" name="email" className="form__input" placeholder="Email*"/>
            
            <label className="form__label">Message*</label>
            <textarea name="text" className="form__text" placeholder="Message*"></textarea>
            <button className="form__submit">Send</button>
        </form>

      </section>
    
    )
}
