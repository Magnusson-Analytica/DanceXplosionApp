import React, { useEffect } from 'react';
import './ContactDialog.css';
import { whatsappUrl, PHONE_TEL, PHONE_DISPLAY } from '../../../contact';

// Desktop fallback for WhatsApp CTAs: WhatsApp Web, a phone call, and an optional
// extra route such as the DanceLand registration form
function ContactDialog({ request, onClose }) {
    useEffect(() => {
        if (!request) return;
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [request, onClose]);

    if (!request) return null;

    const openAndClose = (url) => {
        window.open(url, '_blank', 'noopener');
        onClose();
    };

    return (
        <div className="contact-overlay" onClick={onClose}>
            <div
                className="contact-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-dialog-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="contact-close" onClick={onClose} aria-label="Închide">&times;</button>
                <h2 className="contact-title" id="contact-dialog-title">{request.title || 'Cum vrei să ne contactezi?'}</h2>
                {request.subtitle && <p className="contact-subtitle">{request.subtitle}</p>}

                <div className="contact-options">
                    {request.extra && (
                        <button className="contact-option primary" onClick={() => openAndClose(request.extra.url)}>
                            {request.extra.label}
                        </button>
                    )}
                    <button
                        className={`contact-option ${request.extra ? '' : 'primary'}`}
                        onClick={() => openAndClose(whatsappUrl(request.message))}
                        autoFocus
                    >
                        Scrie-ne pe WhatsApp
                    </button>
                    <a className="contact-option" href={`tel:${PHONE_TEL}`} onClick={onClose}>
                        Sună-ne: {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactDialog;
