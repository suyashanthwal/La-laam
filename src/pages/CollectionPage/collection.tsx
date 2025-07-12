import React, { useState } from 'react';
import './collection.css';
import Navbar from '../../components/Navbar';

const imageList = [
  'assets/gallery/IMG-20250704-WA0002.jpg',
  'assets/gallery/IMG-20250704-WA0017.jpg',
  'assets/gallery/IMG-20250704-WA0003.jpg',
  'assets/gallery/IMG-20250704-WA0004.jpg',
  'assets/gallery/IMG-20250704-WA0005.jpg',
  'assets/gallery/IMG-20250704-WA0006.jpg',
  'assets/gallery/IMG-20250704-WA0007.jpg',
  'assets/gallery/IMG-20250704-WA0008.jpg',
  'assets/gallery/IMG-20250704-WA0009.jpg',
  'assets/gallery/IMG-20250704-WA0015.jpg',
  'assets/gallery/IMG-20250704-WA0016.jpg',
  'assets/gallery/IMG-20250704-WA0018.jpg',
  'assets/gallery/WhatsApp Image 2025-07-04 at 12.47.31_db19f321.jpg',
  'assets/gallery/WhatsApp Image 2025-07-04 at 12.47.32_b395e0ce.jpg',
  'assets/gallery/WhatsApp Image 2025-07-04 at 12.47.32_f4586e74.jpg',
  'assets/gallery/WhatsApp Image 2025-07-04 at 12.47.33_ac796bfc.jpg',
  'assets/gallery/WhatsApp Image 2025-07-04 at 12.47.33_e9f8e291.jpg'
];

const Collection: React.FC = () => {
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
        <main className="collection-wrapper">
          <h1>Our Collection</h1>
          <div className="masonry">
            {imageList.map((filename, index) => (
              <div key={index} className="collection-image-wrapper" style={{position: 'relative', display: 'inline-block'}}>
                <img
                  src={filename}
                  alt={`Look ${index + 1}`}
                  style={{ display: 'block', width: '100%' }}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Collection;