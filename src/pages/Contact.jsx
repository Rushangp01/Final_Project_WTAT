//Rushang Panchal
//8963159

src > pages > Contact.jsx

import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <i className="fas fa-envelope"></i>
              <span>email@example.com</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-phone"></i>
              <span>(123) 456-7890</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Toronto, Canada</span>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;