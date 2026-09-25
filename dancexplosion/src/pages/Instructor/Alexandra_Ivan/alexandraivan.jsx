import React, { useState } from 'react';
import './alexandraivan.css';
import instructorPhoto from '../../../assets/images/alexandra_ivan.jpeg';

function AlexandraIvan() {
    const [isExpanded, setIsExpanded] = useState(false);

    const instructor = {
        name: "Alexandra Ivan",
        role: "Instructor Salsa & Bachata",
         bio: [
            "Cu o experiență de peste 10 ani în dans, parcursul meu a început încă din copilărie, prin dansuri moderne, continuând cu dansuri de societate, pentru ca mai târziu să mă dedic în totalitate dansurilor latino: salsa, bachata și kizomba. Bachata a devenit, în timp o parte importantă din parcursul vieții mele ca dansatoare și o parte din sufletul meu. În cadrul școlii, contribui la creșterea și dezvoltarea comunității de bachata, ghidând dansatori spre “Social Dancing” si spre performanță și competiții, mulți dintre ei reușind să obțină rezultate notabile. Cred cu tărie în evoluția continuă, atât ca instructor, cât și ca dansator activ!\n",
            
            "\nSunt dublă campioană națională la Bachata Partner Work, titluri obținute alături de Adi, partenerul meu de dans, acesta fiind fondatul școlii Dance Xplosion. În 2018 am câștigat primul meu campionat național la categoria Partnerwork Coreography, iar în 2019 am reconfirmat acest titlu, devenind din nou campioană națională. Pe lângă aceste rezultate, am obținut locul I în opt competiții naționale, performanțe care au contribuit la consolidarea parcursului meu competițional.\n",
            
            "\nLa nivel național, am devenit dublă campioană națională la BachataNama – Solo Pro, iar la nivel international am câștigat Campionatul European de BachataNama perechi, cu locul I în Italia, și am obținut locul III la BachataNama Solo, tot în Italia. Prin aceste rezultate am avut onoarea de a reprezenta școala și România pe scene naționale și internaționale, continuând să performez și să mă dezvolt ca dansator și artist.\n",
            
            "\nPredau de 6 ani și sunt implicată activ atât în predarea cursurilor, cât și în evenimentele de profil, susținând anual 15–20 de evenimente naționale și internaționale. Predau workshop-uri, cursuri de lady styling și partnerwork, alături de Adi, păstrând mereu legătura directă cu scena competițională și performativă.\n",
            
        ],
       /* quote: "Oricine poate învața să danseze, trebuie doar sa fii răbdător cu tine și cu ritmul tău de învățare.",*/
        stats: [
            { label: "Experiență Dans", value: "10 Ani" },
            { label: "Experiență Predare", value: "6 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Kizomba" },
        ],
        classes: ["Copii 4-6 Ani", "Incepatori mixt", "Bachata Intermediari"],
        photo: instructorPhoto,
    };

    const visibleBio = isExpanded ? instructor.bio : [instructor.bio[0]];

    return (
        <div className="instructor-page-container">
            {/* Updated class name to avoid conflict */}
            <div className="profile-card-alexandra">
                
                {/* Left Side: Unique Class Name */}
                <div className="profile-image-section-alexandra">
                    
                    <div className="image-wrapper-alexandra">
                        <img 
                            src={instructor.photo} 
                            alt={`Portret ${instructor.name}`} 
                            className="instructor-photo-alexandra" 
                        />
                    </div>

                    {/* Name Tag: Unique Class Name */}
                    <div className="name-tag-alexandra">
                        <h2>{instructor.name}</h2>
                        <p className="role-title-alexandra">{instructor.role}</p>
                    </div>
                </div>
                
                {/* Right Side */}
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

                   {/* <div className="quote-box">
                        <span className="quote-icon">“</span>
                        <p className="instructor-quote">{instructor.quote}</p>
                        <span className="quote-icon quote-end">”</span>
                    </div>*/}

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
                    
                    <button className="cta-contact-instructor">Înscrie-te la Cursuri</button>
                    <a href="/" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default AlexandraIvan;