import React from 'react';
import './KidsPage.css';
import DanceLand from '../../features/danceland/DanceLand';
import {
    DANCELAND_DATES,
    openDanceLandForm,
    isDanceLandUpcoming,
    kidsPackages,
    kidsPackagesNote,
} from '../../features/danceland/danceLandData';

const groups = [
    { 
        age: "4 - 6 Ani", 
        title: "Mini Dancers",
        description: "Introducere în lumea dansului prin jocuri de ritm, coordonare și mișcare creativă. Dezvoltăm urechea muzicală și postura într-un mod distractiv.",
    },
    { 
        age: "7 - 9 Ani", 
        title: "Junior Stars",
        description: "Învățăm pașii de bază din dansuri latino și moderne. Focus pe disciplină, lucrul în echipă, memorarea coregrafiilor și încredere în sine.",
    },
    { 
        age: "10 - 15 Ani", 
        title: "Teen Crew",
        description: "Coregrafii complexe, stiluri moderne și pregătire pentru performanță (Trupa DXS). Pentru copiii care vor să ducă dansul la nivelul următor.",
    },
];

const KIDS_MESSAGE = "Bună ziua! Doresc să programez o oră de probă gratuită pentru copilul meu la Dance Xplosion Academy.";

function KidsPage({ openInscriere }) {
    // While DanceLand is upcoming it is the way kids sign up; afterwards fall back to a trial class
    const danceLandOpen = isDanceLandUpcoming();
    const goToDanceLand = () => document.getElementById('danceland')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="kids-page-container">
            {/* Hero Section */}
            <section className="kids-hero-section">
                <div className="hero-content-kids">
                    <h1 className="kids-title">
                        Dans pentru Copii <span className="accent-text-kids">Energie. Disciplină. Distracție.</span>
                    </h1>
                    <p className="kids-pitch">
                        Oferă-i copilului tău șansa să se dezvolte armonios prin dans: fizic, creativ și emoțional.
                        Cursuri adaptate pentru toate vârstele, într-un mediu sigur și prietenos.
                    </p>
                    {danceLandOpen ? (
                        <button onClick={goToDanceLand} className="cta-page-main-kids">
                            Înscrieri la DanceLand, {DANCELAND_DATES}
                        </button>
                    ) : (
                        <button onClick={() => openInscriere(KIDS_MESSAGE)} className="cta-page-main-kids">
                            Programează o oră de probă pentru copil
                        </button>
                    )}
                </div>
            </section>

            {/* Groups Section */}
            <section id="grupe" className="kids-groups-section">
                <h2 className="section-heading-kids">Grupe de Vârstă</h2>
                <div className="groups-card-container">
                    {groups.map((group) => (
                        <div key={group.age} className="group-card">
                            <span className="group-age-badge">{group.age}</span>
                            <h3>{group.title}</h3>
                            <p>{group.description}</p>
                            <button
                                className="cta-group"
                                onClick={danceLandOpen
                                    ? openDanceLandForm
                                    : () => openInscriere(`Bună ziua! Doresc să programez o oră de probă gratuită pentru copilul meu, la grupa ${group.age}.`)}
                            >
                                {danceLandOpen ? `Înscrie la DanceLand (${group.age})` : `Programează proba (${group.age})`}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <DanceLand openInscriere={openInscriere} detailed />

            {/* Packages Section */}
            <section className="kids-packages-section">
                <h2 className="section-heading-kids">Pachete și Abonamente</h2>
                <dl className="kids-packages-list">
                    {kidsPackages.map((pkg) => (
                        <div key={pkg.label} className="kids-package-row">
                            <dt>{pkg.label}</dt>
                            <dd>{pkg.price}</dd>
                        </div>
                    ))}
                </dl>
                <p className="kids-packages-note">{kidsPackagesNote}</p>
            </section>

            {/* Benefits Section */}
            <section className="kids-benefits-section">
                <div className="benefits-content">
                    <h2 className="benefits-title">De ce să alegi dansul pentru copilul tău?</h2>
                    <ul className="benefits-list">
                        <li>✨ <strong>Creativitate și încredere:</strong> Dansul îi dezvoltă creativitatea și încrederea în sine.</li>
                        <li>⚡ <strong>Coordonare și condiție fizică:</strong> Îmbunătățește coordonarea, condiția fizică și ținuta.</li>
                        <li>🎭 <strong>Prietenii și spirit de echipă:</strong> Copiii își fac prieteni noi și învață să lucreze în echipă.</li>
                        <li>🧠 <strong>Autodisciplină și responsabilitate:</strong> Învățarea coregrafiilor stimulează concentrarea, memoria și disciplina.</li>
                        <li>💛 <strong>Conexiune emoțională:</strong> Prin muzică și mișcare, copiii învață să se exprime.</li>
                    </ul>
                    {danceLandOpen ? (
                        <button className="cta-benefits" onClick={goToDanceLand}>Înscrie copilul la DanceLand</button>
                    ) : (
                        <button className="cta-benefits" onClick={() => openInscriere(KIDS_MESSAGE)}>Programează o oră de probă pentru copil</button>
                    )}
                </div>
            </section>
        </div>
    );
}

export default KidsPage;
