// components/DogeNavigation.js
'use client';

import React, { useState } from 'react';

const DogeNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <div className="relative w-full bg-black/5 backdrop-blur-sm border-b border-white/10 z-50 transition-all duration-300 font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          {/* Logo Container */}
          <div className="flex items-center gap-3">
            <a href="https://dogegov.com/" className="flex items-center gap-3 no-underline">
              <img 
                className="h-16 w-auto" 
                alt="DOGEGOV Logo" 
                src="https://doge-memes.b-cdn.net/doge-logo-sidenav.png"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://t.me/+eB3Zaw8uKj84YjNh" target="_blank" rel="noopener noreferrer" className="nav-button">
              Memes
            </a>
            <a href="https://dogegov.com/buy-trade.html" className="nav-button">
              Buy/Trade
            </a>
            <a href="https://dogegov.com/dogeclock.html" className="nav-button">
              Doge Clock
            </a>
            <a href="https://dogegov.com/dogecompare.html" className="nav-button">
              Doge Compare
            </a>
            <a href="https://dogegov.com/friendsofdoge.html" className="nav-button nav-button-active">
              Friends of DOGE
            </a>
            <a href="https://agent.dogegov.com/" target="_blank" rel="noopener noreferrer" className="nav-button">
              Agent ID
            </a>
            <a href="https://shop.dogegov.com/" target="_blank" rel="noopener noreferrer" className="nav-button">
              Merch
            </a>
            <a href="https://shop.dogegov.com/" target="_blank" rel="noopener noreferrer" className="nav-button nav-button-primary">
              BUY $DOGE
            </a>
            
            {/* Social Icons */}
            <a href="https://twitter.com/dogegov" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
              </svg>
            </a>
            <a href="https://t.me/dogegov" target="_blank" rel="noopener noreferrer" className="social-icon" title="Telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="white"/>
              </svg>
            </a>
            <a href="https://instagram.com/dogegov" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
              </svg>
            </a>
          </div>
          
          {/* Mobile Burger Menu */}
          <div className="md:hidden flex flex-col cursor-pointer gap-1 p-2 relative w-10 h-10 justify-center items-center" onClick={toggleMobileMenu}>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45 top-5' : 'top-3'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute top-5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45 top-5' : 'top-7'}`}></div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'top-0' : '-top-full'}`}>
        <div className="flex flex-col items-center gap-2 w-full max-w-xs px-4 pb-5">
          <a href="https://t.me/+eB3Zaw8uKj84YjNh" target="_blank" rel="noopener noreferrer" className="mobile-nav-button" onClick={closeMobileMenu}>
            Memes
          </a>
          <a href="https://dogegov.com/buy-trade.html" className="mobile-nav-button" onClick={closeMobileMenu}>
            Buy/Trade
          </a>
          <a href="https://dogegov.com/dogeclock.html" className="mobile-nav-button" onClick={closeMobileMenu}>
            Doge Clock
          </a>
          <a href="https://dogegov.com/dogecompare.html" className="mobile-nav-button" onClick={closeMobileMenu}>
            Doge Compare
          </a>
          <a href="https://dogegov.com/friendsofdoge.html" className="mobile-nav-button mobile-nav-button-active" onClick={closeMobileMenu}>
            Friends of DOGE
          </a>
          <a href="https://agent.dogegov.com/" target="_blank" rel="noopener noreferrer" className="mobile-nav-button" onClick={closeMobileMenu}>
            Agent ID
          </a>
          <a href="https://shop.dogegov.com/" target="_blank" rel="noopener noreferrer" className="mobile-nav-button" onClick={closeMobileMenu}>
            Merch
          </a>
          <a href="https://shop.dogegov.com/" target="_blank" rel="noopener noreferrer" className="mobile-nav-button mobile-nav-button-primary" onClick={closeMobileMenu}>
            BUY $DOGE
          </a>
          
          <div className="flex gap-5 justify-center mt-5">
            <a href="https://twitter.com/dogegov" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" title="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
              </svg>
            </a>
            <a href="https://t.me/dogegov" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" title="Telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="white"/>
              </svg>
            </a>
            <a href="https://instagram.com/dogegov" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 14px;
          font-family: 'Inter', monospace;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
          position: relative;
        }
        
        .nav-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }
        
        .nav-button-active {
          background-color: rgba(255, 193, 7, 0.2) !important;
          border-color: rgba(255, 193, 7, 0.6) !important;
          color: #ffc107 !important;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.3);
        }
        
        .nav-button-active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffc107, transparent);
        }
        
        .nav-button-primary {
          background-color: white !important;
          color: black !important;
          border-color: white !important;
          padding: 9px 14px;
        }
        
        .nav-button-primary:hover {
          background-color: rgba(255, 255, 255, 0.9) !important;
          transform: translateY(-2px);
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.8;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          text-decoration: none;
        }
        
        .social-icon:hover {
          opacity: 1;
          transform: translateY(-1px);
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .mobile-nav-button {
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
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-button-active {
          background-color: rgba(255, 193, 7, 0.3) !important;
          border-color: rgba(255, 193, 7, 0.8) !important;
          color: #ffc107 !important;
          box-shadow: 0 2px 20px rgba(255, 193, 7, 0.4);
        }
        
        .mobile-nav-button-primary {
          background-color: rgba(255, 255, 255, 0.95) !important;
          color: black !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          min-height: 58px;
        }
        
        .mobile-social-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .mobile-social-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }
        
        @media (max-width: 1024px) {
          .nav-button {
            padding: 6px 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default DogeNavigation;