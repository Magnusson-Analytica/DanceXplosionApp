import React from 'react';
import './PrivateClassPage.css';

function PrivateClassPage({ openInscriere }) {
    return (
        <div className="private-page-container">
            <section className="private-hero-section">
                <div className="hero-content-private">
                    <h1 className="private-title">
                        Cursuri Private <span className="accent-text-private">Exclusiv Pentru Tine.</span>
                    </h1>
                    <p className="private-pitch">
                        Te-ai gândit vreodată să dansezi dar nu ai știut niciodată ce te pasionează? 
                        Contactează-ne pentru un curs exclusiv, special pentru tine, în care îți poți dezvolta mișcările.
                    </p>
                    <button onClick={openInscriere} className="cta-page-main-private">
                        Contactează-ne
                    </button>
                </div>
            </section>
        </div>
    );
}

export default PrivateClassPage;