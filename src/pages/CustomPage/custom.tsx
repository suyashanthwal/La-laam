import React, { useState } from 'react';
import './custom.css';
import Navbar from '../../components/Navbar';

const Custom: React.FC = () => {
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
        <main className="custom-wrapper">
          <h1>Custom Stitching</h1>
          <p>
            Tailor your unique look with La'laam's made-to-measure stitching service. Share your fabric,
            measurements, and preferred style — we'll handle the rest with care and elegance.
          </p>

          <section className="stitching-options">
            <h2>How It Works</h2>
            <ol>
              <li>Send us your fabric or choose from our in-store collection.</li>
              <li>Provide measurements via WhatsApp or in-store.</li>
              <li>Select from our designs or share your inspiration.</li>
              <li>We stitch and deliver within 3–7 days.</li>
            </ol>
          </section>

          <section className="get-in-touch">
            <h2>Get Started</h2>
            <p>To place a custom stitching request, message us directly:</p>
            <a href="https://wa.me/918755626719" target="_blank" className="whatsapp-btn" rel="noreferrer">
              Message on WhatsApp
            </a>
          </section>

          <section className="sample-gallery">
            <h2>Past Work</h2>
            <div className="gallery">
              <img src="assets/gallery/kabbu/WhatsApp Image 2025-07-04 at 18.04.56_f8152b23.jpg" alt="Custom Design 1" />
              <img src="assets/gallery/kabbu/WhatsApp Image 2025-07-04 at 18.04.56_7847dd72.jpg" alt="Custom Design 2" />
              <img src="assets/gallery/kabbu/WhatsApp Image 2025-07-04 at 18.04.56_133352b2.jpg" alt="Custom Design 3" />
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <p>©2025 La'laam. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Custom;