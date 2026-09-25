import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 
import Navbar from './components/layout/Navbar'; 
import HomePage from './pages/Home/HomePage.jsx'; 
import SalsaPage from './pages/Salsa/SalsaPage.jsx';
import BachataPage from './pages/Bachata/BachataPage.jsx'; 
import Footer from './components/layout/Footer';
import KizombaPage from './pages/Kizomba/kizombaPage.jsx'; 
import WeddingDancePage from './pages/WeddingDance/WeddingDancePage.jsx';
import KidsPage from './pages/Kids/KidsPage.jsx';
import MixedPage from './pages/Mixed/MixedPage.jsx';
import PrivateClassPage from './pages/PrivateClasses/PrivateClassPage.jsx';

import AlexLazar from "./pages/Instructor/Alex_Lazar/alexlazar.jsx"; 
import NicoletaCristiana from "./pages/Instructor/Nicoleta_Cristina/nicoletacristina.jsx";
import AlexMagnusson from "./pages/Instructor/Alex_Magnusson/alexmag.jsx";
import AlexandraIvan from "./pages/Instructor/Alexandra_Ivan/alexandraivan.jsx";
import AdrianRasinariu from "./pages/Instructor/Adrian_Rasinariu/adrianrasinariu.jsx";

import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';
import { useLocation, handleLinkClick, applyHead } from './router';
import ContactDialog from './components/ui/ContactDialog/ContactDialog.jsx';
import { DEFAULT_MESSAGE, whatsappUrl, isMobileDevice } from './contact';

import CookieConsent from './components/ui/CookieConsent/CookieConsent.jsx'; 
import StickyCta from './components/ui/StickyCta/StickyCta.jsx';
import WorkInProgress from './components/ui/WorkInProgress/WorkInProgress.jsx';
import './features/CircularGallery/CircularGallery.css'; 
import DXPLogo from './assets/icons/DXPlogo.png'; 

// Real URLs for every page; the build step writes a matching HTML file for each (see src/seo/pages.js)
const routes = {
  '/': HomePage,
  '/salsa': SalsaPage,
  '/bachata': BachataPage,
  '/kizomba': KizombaPage,
  '/curs-mixt': MixedPage,
  '/cursuri-private': PrivateClassPage,
  '/copii': KidsPage,
  '/dansul-mirilor': WeddingDancePage,
  '/instructori/nicoleta-cristina': NicoletaCristiana,
  '/instructori/alex-lazar': AlexLazar,
  '/instructori/alex-magnusson': AlexMagnusson,
  '/instructori/alexandra-ivan': AlexandraIvan,
  '/instructori/adrian-rasinariu': AdrianRasinariu,
};

function App() {
  const { path, hash } = useLocation();
  const [showWIP, setShowWIP] = useState(false);
  const [contactRequest, setContactRequest] = useState(null);
  const previousPath = useRef(null);

  useEffect(() => {
    applyHead(routes[path] ? path : '/404');

    // Anchors like /#preturi scroll to their section once it has rendered;
    // moving to a different page starts at the top
    const pathChanged = previousPath.current !== path;
    previousPath.current = path;
    requestAnimationFrame(() => {
      const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView({ behavior: pathChanged ? 'auto' : 'smooth' });
      } else if (pathChanged) {
        window.scrollTo(0, 0);
      }
    });
  }, [path, hash]);

  useEffect(() => {
    const setSmartFavicon = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const size = Math.max(img.width, img.height);
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const scaleFactor = 2.5; 
        const scaledWidth = img.width * scaleFactor;
        const scaledHeight = img.height * scaleFactor;
        const x = (size - scaledWidth) / 2;
        const y = (size - scaledHeight) / 2;
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            document.head.appendChild(link);
        }
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL();
      };
    };

    setSmartFavicon(DXPLogo);
  }, []);

  // Every WhatsApp CTA goes through here. The message pre-fills the chat with what the visitor
  // clicked; on desktop a dialog also offers a phone call and optional extra route (dialog.extra).
  const openInscriere = (customMessage, dialog = {}) => {
    const message = typeof customMessage === 'string' ? customMessage : DEFAULT_MESSAGE;
    if (isMobileDevice()) {
      window.open(whatsappUrl(message), '_blank');
    } else {
      setContactRequest({ message, ...dialog });
    }
  };

  const closeWIP = () => setShowWIP(false);
  
  const PageComponent = routes[path] || NotFoundPage;
  const isHome = path === '/';

  return (
    <div className="App" onClick={handleLinkClick}>
      <Navbar isHome={isHome} />

      <WorkInProgress isVisible={showWIP} onClose={closeWIP} onContact={openInscriere} />
      <ContactDialog request={contactRequest} onClose={() => setContactRequest(null)} />

      <PageComponent openInscriere={openInscriere} />

      <Footer />
      <StickyCta isKidsPage={path === '/copii'} />
      <CookieConsent />
    </div>
  );
}

export default App;