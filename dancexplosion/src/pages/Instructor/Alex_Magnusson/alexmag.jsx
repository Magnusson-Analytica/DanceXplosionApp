import React, { useState } from 'react';
import './alexmag.css';
import instructorPhoto from '../../../assets/images/alex_magnusson.JPG';

function AlexMagnusson({ openInscriere }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const instructor = {
        name: "Alex Magnusson",
        role: "Instructor Salsa, DJ & Videograf",
        bio: [
            "Vin în cadrul acestei școli cu dorința de a construi mai mult decât simple cursuri de dans, îmi doresc să creez o experiență senzorială completă. Rolul meu aici îmbină precizia pașilor de Salsa cu vibrația muzicii de calitate și estetica vizuală. Pe lângă orele de curs, mă ocup cu entuziasm de tot ce înseamnă identitatea vizuală și sonoră a clubului nostru. Fie că sunt în spatele pupitrului de DJ, selectând cele mai autentice ritmuri, sau în spatele camerei foto, surprinzând acea sclipire de fericire de pe chipurile voastre, scopul meu este să documentez și să amplific progresul fiecărui cursant.",
            
            "Povestea mea cu dansul a început de când mă știu, fiind firul care mi-a ghidat întreaga viață. Vin din efervescența Londrei, un oraș care mi-a oferit oportunitatea de a explora și învăța aproape toate tipurile de dans existente. Această călătorie mi-a permis să înțeleg diversele „dialecte” ale mișcării, de la rigoarea tehnică la libertatea de exprimare totală. Am ales să aduc acest bagaj cultural în Sibiu, mânat de dorința de a împărtăși un stil proaspăt și un ritm unic. Experiența internațională mi-a modelat o viziune multiculturală asupra dansului, pe care abia aștept să o descoperiți.",
            
            "În prezent, inima mea bate în ritm de Salsa. Deși am explorat nenumărate stiluri, Salsa este cea care îmi permite să vă învăț cum să vă simțiți cu adevărat bine în propriile corpuri. Este un dans al conexiunii, al bucuriei pure și al eliberării de stres. Sunt aici să te ghidez, pas cu pas, într-un mediu cald și primitor, unde tehnica se împletește cu distracția. Pasiunea mea pentru tehnologie și imagine nu face decât să completeze acest tablou: sunt aici să te ajut să te vezi în cea mai bună variantă a ta. Te aștept pe ringul de dans să scriem împreună o poveste plină de lumină și ritm!"
        ],
        quote: "Dansul este singura artă în care noi înșine suntem materia din care este realizată opera.",
        stats: [
            { label: "Experiență Dans", value: "15 Ani" },
            { label: "Experiență Predare", value: "10 Ani" },
            { label: "Specializare", value: "Salsa & Visual Arts" },
        ],
        classes: ["Salsa Intermediari - Avansati", "Incepatori mixt", "Workshop-uri Tehnica"],
        photo: instructorPhoto,
    };

    const visibleBio = isExpanded ? instructor.bio : [instructor.bio[0]];

    return (
        <div className="instructor-page-container">
            <div className="profile-card-alexmag">
                
                {/* Left Side: Image & Name Overlay */}
                <div className="profile-image-section-alexmag">
                    <div className="image-wrapper-alexmag">
                        <img 
                            src={instructor.photo} 
                            alt={`Portret ${instructor.name}`} 
                            className="instructor-photo-alexmag" 
                        />
                    </div>
                    <div className="name-tag-alexmag">
                        <h2>{instructor.name}</h2>
                        <p className="role-title-alexmag">{instructor.role}</p>
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
                    
                    <button className="cta-contact-instructor" onClick={openInscriere}>Înscrie-te la Cursuri</button>
                    <a href="/" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default AlexMagnusson;