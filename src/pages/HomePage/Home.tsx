import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
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
        <main className="main-hero-layout">
          <section className="hero-left">
            <div className="hero-main-block">
              <h1 className="hero-title">WOMEN<br />SHOPPING</h1>
              <p className="hero-desc">Where elegance meets Individuality</p>
              <a href="collection" className="btn hero-btn">GALLERY</a>
            </div>

            <div className="hero-offer-block">
              <div className="offer-texts">
                <span className="offer-title">New Arrival<br />Check now</span>
                <span className="offer-desc">
                  Fresh summer styles, handcrafted with love — just arrived!
                </span>
                <a href="https://maps.app.goo.gl/MZyYfjYyEU9Mqz8t8" className="offer-link">
                  VISIT NOW &gt;
                </a>
              </div>
              <div className="offer-images">
                <img src="assets/gallery/IMG-20250704-WA0017.jpg" alt="Offer 1" />
                <img
                  src="assets/gallery/WhatsApp Image 2025-07-04 at 12.47.31_db19f321.jpg"
                  alt="Offer 2"
                />
              </div>
            </div>
          </section>

          <section className="hero-right">
            <div className="hero-image-bg"></div>
            <img src="assets/gallery/kabbu/main.png" alt="Main subject" className="hero-main-img" />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;