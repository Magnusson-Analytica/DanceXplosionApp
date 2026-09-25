import React, { useRef, useEffect, useState } from 'react'; 
import Hls from 'hls.js';
import './HomePage.css';
import InfiniteMovingTeamCarousel from '../../features/CircularGallery/CircularGallery'; 
import ClassDetails from '../../features/classes/ClassDetails/ClassDetails'; 
import ScheduleTable from '../../features/schedule/ScheduleTable/ScheduleTable'; 
import PricingFaq from '../../features/faq/PricingFaq';
import NewGroups from '../../features/newGroups/NewGroups';
import DanceLand from '../../features/danceland/DanceLand';
import DXPLogo from '../../assets/icons/DXPlogo.png';

// The logo intro only plays on a visitor's first home page view; after that the video is
// cached (and in-app navigation back home shouldn't replay it)
const INTRO_KEY = 'dx-intro-seen';
let introShownThisSession = false;
const hasSeenIntro = () => {
  if (introShownThisSession) return true;
  try {
    return localStorage.getItem(INTRO_KEY) === '1';
  } catch {
    return false;
  }
};
const markIntroSeen = () => {
  introShownThisSession = true;
  try {
    localStorage.setItem(INTRO_KEY, '1');
  } catch {
    // Storage blocked (private mode): the in-memory flag still covers this visit
  }
};

function HomePage({ openInscriere }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userUnmuted, setUserUnmuted] = useState(false);
  const [isLoading, setIsLoading] = useState(() => !hasSeenIntro());
  const [isExiting, setIsExiting] = useState(false);
  // Decided once on first render so re-running effects can't change it
  const introPending = useRef(isLoading);

  const hlsSource = "/video/playlist.m3u8"; 

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const showIntro = introPending.current;
    markIntroSeen();

    const handleTransition = () => {
      setIsExiting(true);
      // Wait for the exit animation (1.2s) to finish before removing from DOM
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    // Check if video is already ready (instant load)
    if (!showIntro) {
      // Returning visitor: no overlay to remove
    } else if (video.readyState >= 3) {
      handleTransition();
    } else {
      // Enforce a minimum display time for the initial pulse, then transition
      const minLoadTimePromise = new Promise(resolve => setTimeout(resolve, 2000));
      const videoLoadPromise = new Promise(resolve => {
        const handleLoad = () => {
          resolve();
          video.removeEventListener('loadeddata', handleLoad);
        };
        video.addEventListener('loadeddata', handleLoad);
        // Fallback if event misses but readyState updates
        if (video.readyState >= 3) resolve();
      });

      Promise.all([minLoadTimePromise, videoLoadPromise]).then(() => {
        handleTransition();
      });
    }

    // Respect the visitor's reduced-motion setting: keep the first frame, don't loop the video
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) video.autoplay = false;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (!prefersReducedMotion) video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState) setUserUnmuted(true);
    }
  };

  return (
    <div className="homepage-container" id="top">
      {isLoading && (
        <div className={`loading-overlay ${isExiting ? 'exit' : ''}`}>
          <img src={DXPLogo} alt="Loading..." className="loading-logo" />
        </div>
      )}

      <section className="hero-section" ref={heroSectionRef}>
        <video 
          ref={videoRef} 
          className="hero-background-video" 
          autoPlay 
          loop 
          playsInline 
          muted={isMuted} 
          preload="auto" 
        />
        <button className="unmute-button" onClick={toggleMute}>
          {isMuted ? '🔊 Cu sunet' : '🔇 Fără sunet'}
        </button>
        <div className="video-overlay"></div>
        <div className="hero-content-wrapper">
          <h1 className="hero-title">
            <span className="title-word delay-1">ÎNCEPE</span>{' '}
            <span className="title-word accent-color-text delay-2">MIȘCAREA</span>{' '}
            <span className="title-word accent-color-text delay-3">TA.</span>
          </h1>
          <p className="hero-pitch">ACADEMIA TA DE DANS DIN SIBIU.</p>
          <div className="hero-cta-group">
            <a href="/#grupe-noi" className="cta-primary-dark button-as-link">ÎNCEPE ÎN OCTOMBRIE</a>
            <a href="/#orarul-tau" className="cta-secondary-accent button-as-link">VEZI ORARUL</a>
          </div>
        </div>
      </section>

      <section className="circular-gallery-wrapper">
        <h2 className="section-heading-dark">Faceți cunoștință cu echipa Dance Xplosion</h2>
        <div className="circular-gallery-container">
          <InfiniteMovingTeamCarousel />
        </div>
      </section>

      <ClassDetails /> 

      <NewGroups openInscriere={openInscriere} />

      <DanceLand openInscriere={openInscriere} />
      
      <section id="orarul-tau"> 
        <ScheduleTable openInscriere={openInscriere} />
      </section>

      <PricingFaq />

      <section className="lxf-promo-section" id="lxf">
        <div className="lxf-content-dark">
          <h2 className="lxf-title">LXF 2027</h2>
          <p className="lxf-description">Cel mai mare festival de dans din Transilvania. Pregătește-te pentru spectacol!</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;