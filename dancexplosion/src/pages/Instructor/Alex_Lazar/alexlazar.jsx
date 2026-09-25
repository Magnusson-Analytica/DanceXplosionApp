import React, { useState } from 'react';
import './alexlazar.css';
import malePhoto from '../../../assets/images/alex_lazar.jpg';

function AlexLazar({ openInscriere }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Split the bio text into an array to support "Read More" functionality
    const bioText = "Cu 21 de ani de experiență în dans și 16 ani de predare, Alex a început cu dans sportiv și a concurat timp de 8 ani în competiții naționale și internaționale. A obținut o diplomă de antrenor pentru dans sportiv în 2014 și una de coregraf profesionist în 2022. Și-a găsit noua pasiune în dansul social în 2019, când a început Bachata și Salsa la Dance Xplosion Academy, predând din 2023. Clasele lui sunt foarte antrenante și veți învăța mereu ceva nou.";
    
    // Split roughly in half for demonstration
    const bioParts = [
        bioText.substring(0, bioText.indexOf("2022.") + 5),
        bioText.substring(bioText.indexOf("2022.") + 5)
    ];

    const instructor = {
        name: "Alex Lazar",
        role: "Instructor Salsa & Bachata",
        bio: bioParts,
        quote: "Oricine poate învața să danseze, trebuie doar sa fii răbdător cu tine și cu ritmul tău de învățare.",
        stats: [
            { label: "Experiență Dans", value: "21 Ani" },
            { label: "Experiență Predare", value: "16 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Dans Sportiv" },
        ],
        classes: ["Bachata Improver", "Incepatori mixt", "Copii 10-15 Ani"],
        photo: malePhoto,
    };

    const visibleBio = isExpanded ? instructor.bio : [instructor.bio[0]];

    return (
        <div className="instructor-page-container">
            <div className="profile-card-alexlazar">
                
                {/* Left Side: Image & Name */}
                <div className="profile-image-section-alexlazar">
                    <div className="image-wrapper-alexlazar">
                        <img 
                            src={instructor.photo} 
                            alt={`Portret ${instructor.name}`} 
                            className="instructor-photo-alexlazar" 
                        />
                    </div>
                    <div className="name-tag-alexlazar">
                        <h2>{instructor.name}</h2>
                        <p className="role-title-alexlazar">{instructor.role}</p>
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
                        <p className="instructor-quote">{instructor.quote}</p>
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
                    
                    <button className="cta-contact-instructor" onClick={openInscriere}>
                        Înscrie-te la Cursurile lui Alex
                    </button>
                    <a href="/" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default AlexLazar;