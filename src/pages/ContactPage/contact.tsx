import React, { useState } from 'react';
import './contact.css';
import Navbar from '../../components/Navbar';

const Contact: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navbar />
      <div className="fade-in">
        <main className="contact-wrapper">
          <section className="contact-banner">
            <h1>Let's Get In Touch</h1>
            <p>We're here to help — reach out with questions, feedback, or custom orders!</p>
          </section>

          <hr />

          <section className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <a href="tel:+918264349206">
                <img src="assets/icons/phone.png" alt="Phone" width="30" />
                +91 82643 49206
              </a>
            </p>
            <p>
              <img src="assets/icons/email.png" alt="Email" width="30" />
              support@lalaam.com
            </p>
          </section>

          <hr />

          <section className="social-media">
            <h2>Social Media</h2>
            <div className="social-grid">
              <a href="https://www.instagram.com/lalaam" target="_blank" rel="noreferrer">
                <img src="assets/icons/instagram.png" alt="Insta" />
              </a>
              <a href="https://wa.me/918264349206" target="_blank" rel="noreferrer">
                <img src="assets/icons/whatsapp.png" alt="WA" />
              </a>
            </div>
          </section>

          <hr />

          <section className="visit-us">
            <h2>Visit Us</h2>
            <p>Our boutique is located in the heart of the city. Come and explore our collections in person.</p>
            <div className="location">
              <div className="address-row">
                <a href="https://maps.app.goo.gl/MZyYfjYyEU9Mqz8t8" target="_blank" rel="noreferrer">
                  <img src="assets/icons/location.png" alt="Location" />
                  <span>Bangali Kothi Chowk, Road, Banjarawala, Dehradun, Uttarakhand 248001</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>©2025 La'laam. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;