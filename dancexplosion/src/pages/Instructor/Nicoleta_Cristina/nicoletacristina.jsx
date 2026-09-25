import React, { useState } from 'react';
import './nicoletacristina.css';
import instructorPhoto from '../../../assets/images/nicoleta_cristina.png';

function NicoletaCristiana({ openInscriere }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const instructor = {
        name: "Nicoleta Cristina",
        role: "Instructor Salsa & Bachata",
       bio: [
            "Bună, sunt Cris, instructor de dans la Dance Xplosion Academy din Sibiu. Predau cu pasiune și dedicare salsa, bachata și kizomba. Cu o experiență solidă în predare din 2016, reusesc sa îmbin tehnica corectă cu o abordare prietenoasă, adaptată fiecărui cursant. Orele mele sunt structurate, clare și accesibile, fiind potrivite atât pentru începători, cât și pentru cei care doresc să își perfecționeze stilul și expresivitatea. Prin răbdare, energie pozitivă și atenție la detalii, creez un mediu de învățare în care fiecare cursant se poate dezvolta în propriul ritm.",
            "Atmosfera creată la cursuri este una relaxată și detașată, unde greșelile sunt parte din proces, iar progresul vine natural. De asemenea, pun accent pe încredere, comunicare și plăcerea de a dansa, transformând fiecare oră într-o experiență plină de energie pozitivă.",
            
            "În ceea ce privește kizomba, mă remarc printr-o pregătire constant actualizată, aducând la Sibiu concepte și tehnici moderne ale acestui stil. Mă diferențiez astfel, fiind una dintre puținele instructoare din orașul nostru cu metode de predare moderne și o perspectivă actuală asupra kizombei. Consider dansul o artă și încerc sa aduc un aer nou în lumea acestui sport printr-un mix echilibrat de structură, tehnică și emoție.",
            "Prin formarea continuă și atenția acordată autenticității dansului, contribui la dezvoltarea și înțelegerea corectă a kizombei.Pe lângă salsa, bachata și kizomba, susțin cursuri pentru copii, lecții private, coregrafii personalizate și pregătirea dansului mirilor, adaptând stilul de predare fiecărui tip de cursant.",
            
            "Vă așteptăm cu brațele deschise să încercați o noua abordare și sa explorați viziunea mea asupra dansului modern."
        ],
        stats: [
            { label: "Experiență Dans", value: "21 Ani" },
            { label: "Experiență Predare", value: "16 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Dans Sportiv" },
        ],
        classes: ["Kizomba Beginner", "Kizomba Avansati", "Kizomba Improver", "Salsa Intermediari - Avansati", "Incepatori mixt", "Copii 4-6 Ani"],
        photo: instructorPhoto,
    };

    // Show only the first paragraph if not expanded
    const visibleBio = isExpanded ? instructor.bio : [instructor.bio[0]];

    return (
        <div className="instructor-page-container">
            <div className="profile-card-nicoleta">
                
                {/* Left Side: Image & Name Overlay */}
                <div className="profile-image-section-nicoleta">
                    <div className="image-wrapper-nicoleta">
                        <img 
                            src={instructor.photo} 
                            alt={`Portret ${instructor.name}`} 
                            className="instructor-photo-nicoleta" 
                        />
                    </div>
                    <div className="name-tag-nicoleta">
                        <h2>{instructor.name}</h2>
                        <p className="role-title-nicoleta">{instructor.role}</p>
                    </div>
                </div>
                
                {/* Right Side: Details */}
                <div className="profile-details-section">
                    <h3 className="section-title">Despre Instructor</h3>
                    
                    {visibleBio.map((paragraf, index) => (
                        <p key={index} className="bio-text">
                            {paragraf}
                        </p>
                    ))}

                    <button 
                        className="read-more-btn" 
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Citește mai puțin" : "Citește mai mult"}
                    </button>

                    <div className="quote-box">
                        <span className="quote-icon">“</span>
                        <p className="instructor-quote">Dansul este limbajul ascuns al sufletului.</p>
                        <span className="quote-icon quote-end">”</span>
                    </div>

                    <h3 className="section-title">Informații și Clase</h3>
                    <div className="stats-grid">
                        {instructor.stats.map((stat) => (
                            <div key={stat.label} className="stat-item">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="classes-section">
                        <span className="classes-title">Predă:</span>
                        <div className="class-tags-list">
                            {instructor.classes.map((className) => (
                                <span key={className} className="class-tag-item">{className}</span>
                            ))}
                        </div>
                    </div>
                    
                    <button className="cta-contact-instructor" onClick={openInscriere}>Înscrie-te la Cursuri</button>
                    <a href="/" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default NicoletaCristiana;