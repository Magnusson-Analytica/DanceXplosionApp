import React, { useState, useEffect } from 'react';
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

import CookieConsent from './components/ui/CookieConsent/CookieConsent.jsx'; 
import WorkInProgress from './components/ui/WorkInProgress/WorkInProgress.jsx';
import './features/CircularGallery/CircularGallery.css'; 
import DXPLogo from './assets/icons/DXPlogo.png'; 

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [showWIP, setShowWIP] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

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

    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentHash = route.substring(1); 

  const openInscriere = () => {
    const numarTelefon = "40751327415"; 
    const mesaj = encodeURIComponent("Bună ziua! Doresc să rezerv o clasă de probă la Dance Xplosion Academy.");
    const urlWhatsapp = `https://wa.me/${numarTelefon}?text=${mesaj}`;
    window.open(urlWhatsapp, '_blank');
  };

  const openWIP = () => setShowWIP(true);
  const closeWIP = () => setShowWIP(false);
  
  let PageComponent;
  let isHome = false;

  if (currentHash === 'salsa') {
    PageComponent = SalsaPage;
  } else if (currentHash === 'bachata') {
    PageComponent = BachataPage;
  } else if (currentHash === 'kizomba') {
    PageComponent = KizombaPage;
  } else if (currentHash === 'dansul-mirilor') {
    PageComponent = WeddingDancePage;
  } else if (currentHash === 'copii') {
    PageComponent = KidsPage;
  } else if (currentHash === 'mixed') {
    PageComponent = MixedPage;
  } else if (currentHash === 'cursuri-private') {
    PageComponent = PrivateClassPage;
  } else if (currentHash.startsWith('instructor/')) {
    const slug = currentHash.split('/')[1];
    
    switch(slug) {
        case 'nicoleta-cristina':
            PageComponent = NicoletaCristiana;
            break;
        case 'alex-lazar':
            PageComponent = AlexLazar;
            break;
        case 'alex-magnusson':
            PageComponent = AlexMagnusson;
            break;
        case 'alexandra-ivan':
            PageComponent = AlexandraIvan;
            break;
        case 'adrian-rasinariu':
            PageComponent = AdrianRasinariu;
            break;
        default:
            PageComponent = AlexLazar; 
    }
  } else {
    PageComponent = HomePage;
    isHome = true;
  }

  return (
    <div className="App">
      <Navbar openLogin={openWIP} isHome={isHome} />

      <WorkInProgress isVisible={showWIP} onClose={closeWIP} onContact={openInscriere} />

      {isHome ? (
        <HomePage 
          openInscriere={openInscriere}
          openWIP={openWIP}       
        />
      ) : (
        <PageComponent openInscriere={openInscriere} />
      )}

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;