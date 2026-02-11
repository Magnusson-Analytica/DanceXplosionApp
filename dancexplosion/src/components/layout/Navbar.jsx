import React, { useState, useEffect } from 'react';
import './Navbar.css';
import DXPLogo from '../../assets/icons/DXPlogo.png';

function Navbar({ openLogin, isHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      setIsScrolled(window.scrollY > 50);
    } else {
      setIsScrolled(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <header className={headerClass}>
      <div className="nav-content">
        
        <a href="#top" className="navbar-brand">
          <img src={DXPLogo} alt="DXP Logo" className="brand-logo" />
          <span className="brand-text">DANCE XPLOSION ACADEMY</span>
        </a>

        {/* CENTER: Desktop Navigation */}
        <nav className="nav-links-center desktop-only">
          
          <div className="dropdown-container">
            <a href="#clase" className="nav-link dropdown-trigger">
              CURSURI 
              <span className="arrow-icon">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <div className="dropdown-menu">
              <a href="#salsa">Salsa</a>
              <a href="#bachata">Bachata</a>
              <a href="#kizomba">Kizomba</a>
              <div className="dropdown-divider"></div>
              <a href="#mixed" className="mixt-link">Curs Mixt</a>
              {/* MOVED: Cursuri Private is now here inside the dropdown */}
              <a href="#cursuri-private" style={{ color: '#D4AF37', fontWeight: 'bold' }}>Cursuri Private</a>
            </div>
          </div>

          <a href="#copii" className="nav-link">
            PENTRU COPII
          </a>

          <a href="#dansul-mirilor" className="nav-link wedding-link">
            DANSUL MIRILOR
          </a>

          {/* REMOVED: Cursuri Private link from main bar */}

          <a href="#lxf" className="nav-link">LXF</a>
        </nav>

        {/* RIGHT: Desktop Auth Buttons */}
        <div className="navbar-actions desktop-only">
           <button className="nav-link text-btn login-btn" onClick={openLogin}>
            AUTENTIFICARE
          </button>

          <button className="cta-nav" onClick={openLogin}> 
            ÎNREGISTRARE 
          </button>  
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          
          <div className="mobile-auth-section">
            <button className="nav-link text-btn mobile-login" onClick={() => { openLogin(); closeMobileMenu(); }}>
                AUTENTIFICARE
            </button>
            <button className="cta-nav mobile-signup" onClick={() => { openLogin(); closeMobileMenu(); }}>
                ÎNREGISTRARE
            </button>
          </div>

          <nav className="mobile-nav-links">
            
            <span className="mobile-category">CURSURI</span>
            <a href="#salsa" onClick={closeMobileMenu} className="sub-link">Salsa</a>
            <a href="#bachata" onClick={closeMobileMenu} className="sub-link">Bachata</a>
            <a href="#kizomba" onClick={closeMobileMenu} className="sub-link">Kizomba</a>
            <a href="#mixed" onClick={closeMobileMenu} className="sub-link highlight">Curs Mixt</a>
            
            {/* Mobile Link remains here as requested previously */}
            <a href="#cursuri-private" onClick={closeMobileMenu} className="sub-link" style={{ color: '#D4AF37' }}>Cursuri Private</a>
            
            <div className="mobile-divider"></div>
            <a href="#copii" onClick={closeMobileMenu} className="special-link">PENTRU COPII</a>

            <div className="mobile-divider"></div>
            <a href="#dansul-mirilor" onClick={closeMobileMenu} className="special-link">DANSUL MIRILOR</a>

            <div className="mobile-divider"></div>
            <a href="#lxf" onClick={closeMobileMenu}>LXF</a>
          </nav>
      </div>
    </header>
  );
}

export default Navbar;