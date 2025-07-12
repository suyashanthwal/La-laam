import React, { useState } from 'react';
import './KidsSection.css';
import Navbar from '../../components/Navbar';

const Kids: React.FC = () => {
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
        <main>
          <div className="coming-soon-container">
            <h1 className="coming-soon-text">Coming Soon ...</h1>
          </div>
        </main>
      </div>
    </>
  );
};

export default Kids;
