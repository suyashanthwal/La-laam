import React, { useState, useEffect } from 'react';
import '../pages/HomePage/Home.css'; // Reuse existing styles for consistency

const navLinks = [
  { href: 'collection', label: "Collection" },
  { href: 'kids-section', label: "Kids" },
  { href: 'custom', label: "Custom Stitching" },
  { href: 'contact', label: "Contact" },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="/" className="logo">La'laam</a>
        <nav className="site-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-icons">
          <i className="icon-search"></i>
        </div>
      </div>

      <button className="hamburger" onClick={openSidebar} aria-label="Open menu">
        &#9776;
      </button>

      <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={closeSidebar}></div>

      <aside className={`sidebar-menu ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={closeSidebar} aria-label="Close menu">
          &times;
        </button>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={closeSidebar}>{link.label}</a>
        ))}
      </aside>
    </header>
  );
};

export default Navbar; 