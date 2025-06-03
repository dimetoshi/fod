// DOGEGOV Navigation Component
class DogeGovNav {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      if (!this.container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
      }
      
      this.options = {
        logoUrl: options.logoUrl || 'https://doge-memes.b-cdn.net/doge-logo-sidenav.png',
        logoAlt: options.logoAlt || 'DOGEGOV Logo',
        logoText: options.logoText || 'DOGEGOV',
        homeUrl: options.homeUrl || 'https://dogegov.com/',
        navLinks: options.navLinks || [
          { text: 'Memes', href: 'https://t.me/+eB3Zaw8uKj84YjNh', target: '_blank' },
          { text: 'Buy/Trade', href: 'https://dogegov.com/buy-trade.html' },
          { text: 'Doge Clock', href: 'https://dogegov.com/dogeclock.html' },
          { text: 'Doge Compare', href: 'https://dogegov.com/dogecompare.html' },
          { text: 'Friends of DOGE', href: 'https://dogegov.com/friendsofdoge.html' },
          { text: 'Agent ID', href: 'https://agent.dogegov.com/', target: '_blank' },
          { text: 'Merch', href: 'https://shop.dogegov.com/', target: '_blank' },
          { text: 'BUY $DOGE', href: 'https://shop.dogegov.com/', target: '_blank', primary: true }
        ],
        socialLinks: options.socialLinks || [
          { 
            name: 'Twitter',
            href: 'https://twitter.com/dogegov',
            svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>'
          },
          {
            name: 'Telegram',
            href: 'https://t.me/dogegov',
            svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="white"/>'
          },
          {
            name: 'Discord',
            href: 'https://discord.gg/dogegov',
            svg: '<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white"/>'
          }
        ]
      };
      
      this.init();
    }
    
    init() {
      this.injectStyles();
      this.createNavbar();
      this.attachEventListeners();
    }
    
    injectStyles() {
        const existing = document.getElementById('dogegov-nav-styles');
        if (existing) existing.remove();        
      
      const style = document.createElement('style');
      style.id = 'dogegov-nav-styles';
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap');
        
        .dgn-navbar {
            position: static !important;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 16px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: all 0.3s ease;
            font-family: 'Inconsolata', monospace;
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
          height: 50px;
          width: auto;
        }
        
        .dgn-logo-text {
          font-family: 'Oswald', sans-serif;
          font-size: 24px;
          font-weight: 600;
          text-transform: uppercase;
          color: #fff;
          letter-spacing: 1px;
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
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
        }
        
        .dgn-nav-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
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
        
        .dgn-social-icon {
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
          transition: all 0.3s ease;
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
          transition: top 0.3s ease;
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
          padding: 100px 16px 20px 16px;
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
        }
        
        .dgn-mobile-menu .dgn-nav-button.dgn-primary {
          background-color: rgba(255, 255, 255, 0.95);
          color: #000;
          border-color: rgba(255, 255, 255, 0.8);
          min-height: 58px;
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
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .dgn-menu-overlay.dgn-active {
          opacity: 1;
          visibility: visible;
        }
        
        @media (max-width: 1024px) {
          .dgn-navbar {
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
          .dgn-navbar {
            padding: 16px 24px;
          }
          
          .dgn-navbuttons-container {
            display: none;
          }
          
          .dgn-burger-menu {
            display: flex;
          }
          
          .dgn-logo-text {
            font-size: 20px;
          }
          
          .dgn-main-logo {
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .dgn-navbar {
            padding: 12px 16px;
          }
          
          .dgn-logo-text {
            font-size: 18px;
          }
          
          .dgn-main-logo {
            height: 50px;
          }
        }
      `;
      
      document.head.appendChild(style);
    }
    
    createNavbar() {
      const navbar = document.createElement('div');
      navbar.className = 'dgn-navbar';
      navbar.id = 'dgn-navbar';
      
      // Logo Container
      const logoContainer = document.createElement('div');
      logoContainer.className = 'dgn-logo-container';
      const logoLink = document.createElement('a');
      logoLink.href = this.options.homeUrl;
      
      const logo = document.createElement('img');
      logo.className = 'dgn-main-logo';
      logo.alt = this.options.logoAlt;
      logo.src = this.options.logoUrl;
      
      const logoText = document.createElement('span');
      logoText.className = 'dgn-logo-text';
      logoText.textContent = this.options.logoText;
      
      logoLink.appendChild(logo);
      logoContainer.appendChild(logoLink);
      
      // Desktop Navigation Buttons
      const navButtonsContainer = document.createElement('div');
      navButtonsContainer.className = 'dgn-navbuttons-container';
      
      // Add navigation links
      this.options.navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = link.primary ? 'dgn-nav-button dgn-primary' : 'dgn-nav-button';
        a.textContent = link.text;
        if (link.target) a.target = link.target;
        if (link.target === '_blank') a.rel = 'noopener noreferrer';
        navButtonsContainer.appendChild(a);
      });
      
      // Add social icons
      this.options.socialLinks.forEach(social => {
        const a = document.createElement('a');
        a.href = social.href;
        a.className = 'dgn-social-icon';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = social.name;
        a.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${social.svg}</svg>`;
        navButtonsContainer.appendChild(a);
      });
      
      // Burger Menu
      const burgerMenu = document.createElement('div');
      burgerMenu.className = 'dgn-burger-menu';
      burgerMenu.id = 'dgn-burgerMenu';
      burgerMenu.innerHTML = `
        <div class="dgn-burger-bar"></div>
        <div class="dgn-burger-bar"></div>
        <div class="dgn-burger-bar"></div>
      `;
      
      navbar.appendChild(logoContainer);
      navbar.appendChild(navButtonsContainer);
      navbar.appendChild(burgerMenu);
      
      // Mobile Menu
      const mobileMenu = document.createElement('div');
      mobileMenu.className = 'dgn-mobile-menu';
      mobileMenu.id = 'dgn-mobileMenu';
      
      const mobileNavButtons = document.createElement('div');
      mobileNavButtons.className = 'dgn-mobile-navbuttons';
      
      // Add mobile navigation links
      this.options.navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = link.primary ? 'dgn-nav-button dgn-primary' : 'dgn-nav-button';
        a.textContent = link.text;
        if (link.target) a.target = link.target;
        if (link.target === '_blank') a.rel = 'noopener noreferrer';
        mobileNavButtons.appendChild(a);
      });
      
      // Mobile social buttons
      const mobileSocialButtons = document.createElement('div');
      mobileSocialButtons.className = 'dgn-mobile-social-buttons';
      
      this.options.socialLinks.forEach(social => {
        const a = document.createElement('a');
        a.href = social.href;
        a.className = 'dgn-social-icon';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = social.name;
        a.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${social.svg}</svg>`;
        mobileSocialButtons.appendChild(a);
      });
      
      mobileNavButtons.appendChild(mobileSocialButtons);
      mobileMenu.appendChild(mobileNavButtons);
      
      // Menu Overlay
      const menuOverlay = document.createElement('div');
      menuOverlay.className = 'dgn-menu-overlay';
      menuOverlay.id = 'dgn-menuOverlay';
      
      // Append everything to container
      this.container.appendChild(navbar);
      this.container.appendChild(mobileMenu);
      this.container.appendChild(menuOverlay);
    }
    
    attachEventListeners() {
      const burgerMenu = document.getElementById('dgn-burgerMenu');
      const mobileMenu = document.getElementById('dgn-mobileMenu');
      const menuOverlay = document.getElementById('dgn-menuOverlay');
      
      const toggleMobileMenu = () => {
        burgerMenu.classList.toggle('dgn-active');
        mobileMenu.classList.toggle('dgn-active');
        menuOverlay.classList.toggle('dgn-active');
        document.body.style.overflow = mobileMenu.classList.contains('dgn-active') ? 'hidden' : '';
      };
      
      const closeMobileMenu = () => {
        burgerMenu.classList.remove('dgn-active');
        mobileMenu.classList.remove('dgn-active');
        menuOverlay.classList.remove('dgn-active');
        document.body.style.overflow = '';
      };
      
      // Event Listeners
      burgerMenu.addEventListener('click', toggleMobileMenu);
      menuOverlay.addEventListener('click', closeMobileMenu);
      
      // Close mobile menu when clicking on mobile menu links
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });
      
      // Close mobile menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      });
      
      // Close mobile menu on window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          closeMobileMenu();
        }
      });
    }
    
    // Public method to update options
    updateOptions(newOptions) {
      Object.assign(this.options, newOptions);
      this.container.innerHTML = '';
      this.createNavbar();
      this.attachEventListeners();
    }
    
    // Public method to destroy the component
    destroy() {
      this.container.innerHTML = '';
      const styles = document.getElementById('dogegov-nav-styles');
      if (styles) styles.remove();
    }
  }
  
  // Export for use as a module
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DogeGovNav;
  }