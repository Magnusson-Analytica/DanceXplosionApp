import React, { useState } from 'react';
import './adrianrasinariu.css';
import instructorPhoto from '../../../assets/images/adrian_rasinariu.jpeg';

function AdrianRasinariu({ openInscriere }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Placeholder bio text split for "Read More" demo
    const bioText = "Cu 21 de ani de experiență în dans și 16 ani de predare, Adrian a început cu dans sportiv și a concurat timp de 8 ani în competiții naționale și internaționale. A obținut o diplomă de antrenor pentru dans sportiv în 2014 și una de coregraf profesionist în 2022. Și-a găsit noua pasiune în dansul social în 2019, când a început Bachata și Salsa la Dance Xplosion Academy, predând din 2023. Clasele lui sunt foarte antrenante și veți învăța mereu ceva nou.";
    
    const bioParts = [
        bioText.substring(0, bioText.indexOf("2022.") + 5),
        bioText.substring(bioText.indexOf("2022.") + 5)
    ];

    const instructor = {
        name: "Adrian Rașinariu",
        role: "Instructor Salsa & Bachata",
        bio: bioParts,
        quote: "Oricine poate învața să danseze, trebuie doar sa fii răbdător cu tine și cu ritmul tău de învățare.",
        stats: [
            { label: "Experiență Dans", value: "21 Ani" },
            { label: "Experiență Predare", value: "16 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Dans Sportiv" },
        ],
        classes: ["Copii 7-15 Ani", "Bachata Intermediari"],
        photo: instructorPhoto,
    };

    const visibleBio = isExpanded ? instructor.bio : [instructor.bio[0]];

    return (
        <div className="instructor-page-container">
            <div className="profile-card-adrian">
                
                {/* Left Side: Image & Name */}
                <div className="profile-image-section-adrian">
                    <div className="image-wrapper-adrian">
                        <img 
                            src={instructor.photo} 
                            alt={`Portret ${instructor.name}`} 
                            className="instructor-photo-adrian" 
                        />
                    </div>
                    <div className="name-tag-adrian">
                        <h2>{instructor.name}</h2>
                        <p className="role-title-adrian">{instructor.role}</p>
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
                        Înscrie-te la Cursurile lui Adrian
                    </button>
                    <a href="/" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default AdrianRasinariu;