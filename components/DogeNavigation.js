'use client';

import React, { useState, useEffect } from 'react';

const DogeNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Determine if a link is active
  const isActiveLink = (href) => {
    if (typeof window === 'undefined') return false;
    
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    
    if (!href) return false;
    
    // Handle external links (don't mark as active unless exact match)
    if (href.startsWith('http') && !href.includes(window.location.hostname)) {
      return href === currentUrl;
    }
    
    // Handle relative links
    if (href.startsWith('/')) {
      return currentPath === href || currentPath.startsWith(href + '/');
    }
    
    // Handle absolute links on same domain
    try {
      const linkUrl = new URL(href);
      const currentUrlObj = new URL(currentUrl);
      
      // Same domain check
      if (linkUrl.hostname === currentUrlObj.hostname) {
        return currentUrlObj.pathname === linkUrl.pathname || 
               currentUrlObj.pathname.startsWith(linkUrl.pathname + '/');
      }
    } catch (e) {
      // If URL parsing fails, fall back to string comparison
      return href === currentUrl;
    }
    
    return false;
  };

  const navLinks = [
    { text: 'Memes', href: 'https://t.me/+eB3Zaw8uKj84YjNh', target: '_blank' },
    { text: 'Buy/Trade', href: 'https://dogegov.com/buy.html' },
    { text: 'Doge Clock', href: 'https://dogegov.com/doge-clock.html' },
    { text: 'Doge Compare', href: 'https://dogegov.com/dogecompare.html' },
    { text: 'Friends of DOGE', href: 'https://dogegov.com/friends-of-doge.html' },
    { text: 'Agent ID', href: 'https://agent.dogegov.com/', target: '_blank' },
    { text: 'Merch', href: 'https://shop.dogegov.com/', target: '_blank' },
    { text: 'BUY $DOGE', href: 'https://shop.dogegov.com/', target: '_blank', primary: true }
  ];

  const socialLinks = [
    { 
      name: 'X',
      href: 'https://x.com/doge_eth_gov',
      svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/NewDOGEonETH_CTO',
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dogegov',
      svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    }
  ];

  return (
    <>
      {/* Navigation */}
      <div className="dgn-navbar">
        <div className="dgn-navbar-inner">
          {/* Logo Container */}
          <div className="dgn-logo-container">
            <a href="https://dogegov.com/">
              <img 
                className="dgn-main-logo" 
                alt="DOGEGOV Logo" 
                src="https://doge-memes.b-cdn.net/doge-logo-sidenav.png"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="dgn-navbuttons-container">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={`dgn-nav-button ${link.primary ? 'dgn-primary' : ''} ${isActiveLink(link.href) ? 'dgn-active' : ''}`}
              >
                {link.text}
              </a>
            ))}
            
            {/* Social Icons */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dgn-social-icon"
                title={social.name}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.svg} fill="white"/>
                </svg>
              </a>
            ))}
          </div>
          
          {/* Mobile Burger Menu */}
          <div 
            className={`dgn-burger-menu ${isMobileMenuOpen ? 'dgn-active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <div className="dgn-burger-bar"></div>
            <div className="dgn-burger-bar"></div>
            <div className="dgn-burger-bar"></div>
          </div>
        </div>
      </div>
      
      {/* Menu Overlay */}
      <div 
        className={`dgn-menu-overlay ${isMobileMenuOpen ? 'dgn-active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
      
      {/* Mobile Menu */}
      <div className={`dgn-mobile-menu ${isMobileMenuOpen ? 'dgn-active' : ''}`}>
        <div className="dgn-mobile-navbuttons">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className={`dgn-nav-button ${link.primary ? 'dgn-primary' : ''} ${isActiveLink(link.href) ? 'dgn-active' : ''}`}
              onClick={closeMobileMenu}
            >
              {link.text}
            </a>
          ))}
          
          <div className="dgn-mobile-social-buttons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dgn-social-icon"
                title={social.name}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.svg} fill="white"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');
        
        .dgn-navbar {
          position: relative;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.15s ease;
          font-family: 'Inconsolata', monospace;
        }

        @media (max-width: 768px) {
          .dgn-navbar {
            background-color: #000;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }
        
        .dgn-navbar-inner {
          max-width: 2500px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 48px;
        }
        
        .dgn-logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .dgn-logo-container a {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        
        .dgn-main-logo {
          height: 60px;
          width: auto;
        }
        
        .dgn-navbuttons-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .dgn-nav-button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 10px 14px;
          font-family: 'Inconsolata', monospace;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
          position: relative;
        }
        
        .dgn-nav-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }
        
        .dgn-nav-button.dgn-active {
          background-color: rgba(255, 193, 7, 0.2);
          border-color: rgba(255, 193, 7, 0.6);
          color: #ffc107;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.3);
        }
        
        .dgn-nav-button.dgn-active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffc107, transparent);
        }
        
        .dgn-nav-button.dgn-active:hover {
          background-color: rgba(255, 193, 7, 0.3);
          border-color: rgba(255, 193, 7, 0.8);
          transform: translateY(-1px);
        }
        
        .dgn-nav-button.dgn-primary {
          background-color: #fff;
          color: #000;
          border-color: #fff;
          padding: 9px 14px;
        }
        
        .dgn-nav-button.dgn-primary:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
        
        .dgn-nav-button.dgn-primary.dgn-active {
          background-color: #ffc107;
          color: #000;
          border-color: #ffc107;
          box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
        }
        
        .dgn-social-icon {
          width: 36px;
          height: 36px;
          cursor: pointer;
          transition: all 0.15s ease;
          opacity: 0.8;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          text-decoration: none;
        }
        
        .dgn-social-icon:hover {
          opacity: 1;
          transform: translateY(-1px);
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .dgn-burger-menu {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
          padding: 8px;
          position: relative;
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
        }
        
        .dgn-burger-bar {
          width: 24px;
          height: 2px;
          background-color: #fff;
          transition: all 0.15s ease;
          position: absolute;
        }
        
        .dgn-burger-bar:nth-child(1) {
          top: 12px;
        }
        
        .dgn-burger-bar:nth-child(2) {
          top: 19px;
        }
        
        .dgn-burger-bar:nth-child(3) {
          top: 26px;
        }
        
        .dgn-burger-menu.dgn-active .dgn-burger-bar:nth-child(1) {
          transform: rotate(45deg);
          top: 19px;
        }
        
        .dgn-burger-menu.dgn-active .dgn-burger-bar:nth-child(2) {
          opacity: 0;
        }
        
        .dgn-burger-menu.dgn-active .dgn-burger-bar:nth-child(3) {
          transform: rotate(-45deg);
          top: 19px;
        }
        
        .dgn-mobile-menu {
          position: fixed;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.95);
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="doge-pattern" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="50" cy="50" r="2" fill="%23333" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(%23doge-pattern)"/><path d="M100 200 Q200 100 300 200 Q200 300 100 200" fill="none" stroke="%23444" stroke-width="1" opacity="0.2"/><circle cx="150" cy="150" r="30" fill="none" stroke="%23666" stroke-width="1" opacity="0.1"/><circle cx="250" cy="250" r="40" fill="none" stroke="%23666" stroke-width="1" opacity="0.1"/></svg>');
          background-size: 200px 200px;
          background-repeat: repeat;
          backdrop-filter: blur(10px);
          z-index: 999;
          transition: top 0.15s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .dgn-mobile-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 193, 7, 0.1) 0%, 
            rgba(0, 0, 0, 0.8) 25%, 
            rgba(0, 0, 0, 0.9) 50%, 
            rgba(255, 193, 7, 0.05) 75%, 
            rgba(0, 0, 0, 0.95) 100%);
          z-index: -1;
        }
        
        .dgn-mobile-menu.dgn-active {
          top: 0;
        }
        
        .dgn-mobile-navbuttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100%;
          max-width: 100%;
          padding: 95px 16px 16px 16px;
          position: relative;
          z-index: 1;
          height: 100%;
          justify-content: center;
        }
        
        .dgn-mobile-menu .dgn-nav-button {
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          width: 100%;
          text-align: center;
          padding: 16px;
          font-size: 14px;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .dgn-mobile-menu .dgn-nav-button.dgn-active {
          background-color: rgba(255, 193, 7, 0.3);
          border-color: rgba(255, 193, 7, 0.8);
          color: #ffc107;
          box-shadow: 0 2px 20px rgba(255, 193, 7, 0.4);
        }
        
        .dgn-mobile-menu .dgn-nav-button.dgn-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, transparent, #ffc107, transparent);
        }
        
        .dgn-mobile-menu .dgn-nav-button.dgn-primary {
          background-color: rgba(255, 255, 255, 0.95);
          color: #000;
          border-color: rgba(255, 255, 255, 0.8);
          min-height: 58px;
        }
        
        .dgn-mobile-menu .dgn-nav-button.dgn-primary.dgn-active {
          background-color: #ffc107;
          color: #000;
          border-color: #ffc107;
          box-shadow: 0 2px 25px rgba(255, 193, 7, 0.6);
        }
        
        .dgn-mobile-menu .dgn-nav-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }
        
        .dgn-mobile-social-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .dgn-mobile-social-buttons .dgn-social-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .dgn-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.1);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.15s ease;
        }
        
        .dgn-menu-overlay.dgn-active {
          opacity: 1;
          visibility: visible;
        }
        
        @media (max-width: 1440px) {
          .dgn-navbar-inner {
            padding: 16px 32px;
          }
        }
        
        @media (max-width: 1024px) {
          .dgn-navbar-inner {
            padding: 16px 32px;
          }
          
          .dgn-navbuttons-container {
            gap: 8px;
          }
          
          .dgn-nav-button {
            padding: 6px 8px;
            font-size: 9px;
          }
        }
        
        @media (max-width: 768px) {
          .dgn-navbar-inner {
            padding: 16px 24px;
          }
          
          .dgn-navbuttons-container {
            display: none;
          }
          
          .dgn-burger-menu {
            display: flex;
          }
          
          .dgn-main-logo {
            height: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .dgn-navbar-inner {
            padding: 12px 16px;
          }
          
          .dgn-main-logo {
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default DogeNavigation;
