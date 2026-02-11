import React, { useState, useEffect } from 'react';
import './CookieConsent.css';
import { initAmplitude } from '../../../services/analytics';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showCustomize, setShowCustomize] = useState(false);
    
    // Default preferences (GDPR: defaults must be unchecked/false, except necessary)
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true & disabled
        functionality: false,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // We use a new key 'cookieConsent' to store the JSON object
        const storedConsent = localStorage.getItem('cookieConsent');
        
        if (!storedConsent) {
            // Delay appearance by 2 seconds as requested
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const togglePreference = (key) => {
        if (key === 'necessary') return; 
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            functionality: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        };
        saveAndClose(allAccepted);
    };

    const handleSavePreferences = () => {
        const consentData = {
            ...preferences,
            timestamp: new Date().toISOString()
        };
        saveAndClose(consentData);
    };

    const saveAndClose = (consentData) => {
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        
        // Only initialize Amplitude if the analytics category was accepted
        if (consentData.analytics) {
            initAmplitude();
        }

        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-modal-overlay">
            <div className="cookie-modal-content">
                {!showCustomize ? (
                    // --- INITIAL VIEW ---
                    <>
                        <h2 className="cookie-title">Politica de Cookie-uri</h2>
                        <p className="cookie-text">
                            Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru a analiza traficul.
                            Poți accepta toate cookie-urile sau îți poți personaliza preferințele detaliate.
                        </p>
                        <div className="cookie-actions">
                            <button 
                                onClick={() => setShowCustomize(true)} 
                                className="cookie-btn btn-customize"
                            >
                                Personalizează
                            </button>
                            <button 
                                onClick={handleAcceptAll} 
                                className="cookie-btn btn-accept"
                            >
                                Accept Toate
                            </button>
                        </div>
                    </>
                ) : (
                    // --- CUSTOMIZE VIEW ---
                    <>
                        <h2 className="cookie-title">Preferințe Cookie-uri</h2>
                        <p className="cookie-subtitle">
                            Alege tipurile de cookie-uri pe care ești de acord să le utilizăm.
                        </p>
                        
                        <div className="cookie-toggles-container">
                            
                            {/* Strictly Necessary */}
                            <div className="cookie-toggle-row">
                                <div className="toggle-info">
                                    <span className="toggle-label">Strict Necesare</span>
                                    <span className="toggle-desc">Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.</span>
                                </div>
                                <div className="toggle-switch disabled">
                                    <input type="checkbox" checked readOnly />
                                    <span className="slider round"></span>
                                </div>
                            </div>

                            {/* Functionality */}
                            <div className="cookie-toggle-row">
                                <div className="toggle-info">
                                    <span className="toggle-label">Funcționalitate</span>
                                    <span className="toggle-desc">Pentru a ține minte preferințele tale.</span>
                                </div>
                                <label className="toggle-switch">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.functionality}
                                        onChange={() => togglePreference('functionality')}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            {/* Analytics / GDPR */}
                            <div className="cookie-toggle-row">
                                <div className="toggle-info">
                                    <span className="toggle-label">Analiză și Trafic</span>
                                    <span className="toggle-desc">Colectăm date anonime (Amplitude) pentru a îmbunătăți site-ul.</span>
                                </div>
                                <label className="toggle-switch">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.analytics}
                                        onChange={() => togglePreference('analytics')}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            {/* Marketing */}
                            <div className="cookie-toggle-row">
                                <div className="toggle-info">
                                    <span className="toggle-label">Publicitate</span>
                                    <span className="toggle-desc">Pentru a-ți afișa reclame relevante.</span>
                                </div>
                                <label className="toggle-switch">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.marketing}
                                        onChange={() => togglePreference('marketing')}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                        </div>

                        <div className="cookie-actions-customize">
                            <button 
                                onClick={() => setShowCustomize(false)} 
                                className="cookie-btn btn-back"
                            >
                                Înapoi
                            </button>
                            <button 
                                onClick={handleSavePreferences} 
                                className="cookie-btn btn-save"
                            >
                                Salvează Preferințele
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CookieConsent;