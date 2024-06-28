// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-capitalize text-center">Contact Us</h1>
      <p className="text-center">We'd love to hear from you! Reach out to us through any of the methods below:</p>
      
      <div className="contact-info text-center">
        <h2>Our Location</h2>
        <p>123 Hardware Street, Tech City, TC 12345</p>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
        <h2>Email</h2>
        <p><a href="mailto:info@hardwarestore.com">info@hardwarestore.com</a></p>
      </div>
      
      <div className="contact-form mt-4">
        <h2 className="text-center">Send Us a Message</h2>
        <form className="text-center">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
