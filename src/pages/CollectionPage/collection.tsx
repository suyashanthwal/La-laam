import React, { useState, useEffect } from 'react';
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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const openSidebar = () => {
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = '';
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  useEffect(() => {
    // Hide loading state after all images are loaded or after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide loading when all images are loaded
    if (loadedImages.size === imageList.length) {
      setIsLoading(false);
    }
  }, [loadedImages]);

  return (
    <>
      <Navbar />
      <div className="fade-in">
        <main className="collection-wrapper">
          <h1>Our Collection</h1>
          
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading our beautiful collection...</p>
            </div>
          )}
          
          <div className={`masonry ${isLoading ? 'loading' : 'loaded'}`}>
            {imageList.map((filename, index) => (
              <div 
                key={index} 
                className={`collection-image-wrapper ${loadedImages.has(index) ? 'loaded' : 'loading'}`}
                style={{position: 'relative', display: 'inline-block'}}
              >
                {!loadedImages.has(index) && (
                  <div className="image-skeleton"></div>
                )}
                <img
                  src={filename}
                  alt={`Look ${index + 1}`}
                  style={{ 
                    display: 'block', 
                    width: '100%',
                    opacity: loadedImages.has(index) ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                  onLoad={() => handleImageLoad(index)}
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