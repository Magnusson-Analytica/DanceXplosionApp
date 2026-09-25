import React from 'react';
import './WorkInProgress.css';

function WorkInProgress({ isVisible, onClose, onContact }) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay-wip" onClick={onClose}>
            <div className="wip-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn-wip" onClick={onClose}>&times;</button>
                <h2 className="modal-title-wip">În curând!</h2>
                <p className="modal-subtitle-wip">
                    Ne cerem scuze, lucrăm la această secțiune. Apasă butonul de mai jos pentru a ne contacta pe WhatsApp.
                </p>
                <div className="wip-cta-container">
                    <button className="cta-wip-contact" onClick={onContact}>
                        Apasă aici!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WorkInProgress;