import React, { useState, useEffect } from 'react';
import './StickyCta.css';
import { isDanceLandUpcoming } from '../../../features/danceland/danceLandData';
import { navigate } from '../../../router';

// Mobile-only bar that appears once the visitor scrolls past the hero. It points to the new
// beginner groups, or on the kids page to DanceLand while sign-ups are open.
function StickyCta({ isKidsPage = false }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 500);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showDanceLand = isKidsPage && isDanceLandUpcoming();
    const handleClick = showDanceLand
        ? () => document.getElementById('danceland')?.scrollIntoView({ behavior: 'smooth' })
        : () => navigate('/#grupe-noi');

    return (
        <div className={`sticky-cta ${isVisible ? 'visible' : ''}`} aria-hidden={!isVisible}>
            <button
                className="sticky-cta-button"
                onClick={handleClick}
                tabIndex={isVisible ? 0 : -1}
            >
                {showDanceLand
                    ? 'Înscrie copilul la DanceLand'
                    : 'Grupe noi în octombrie · Înscrie-te'}
            </button>
        </div>
    );
}

export default StickyCta;
