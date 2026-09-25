import React from 'react';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <section className="not-found-section">
            <p className="not-found-code">404</p>
            <h1 className="not-found-title">Pagina nu a fost găsită</h1>
            <p className="not-found-text">Pagina pe care o cauți nu există sau a fost mutată.</p>
            <div className="not-found-links">
                <a href="/" className="not-found-cta">Înapoi la pagina principală</a>
                <a href="/#orarul-tau" className="not-found-link">Vezi orarul →</a>
            </div>
        </section>
    );
}

export default NotFoundPage;
