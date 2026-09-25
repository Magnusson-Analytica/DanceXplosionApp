import React from 'react';
import './kizombaPage.css';
import { newGroups, waitlistMessage } from '../../features/newGroups/newGroupsData';
 

const levels = [
    { name: "Beginner", description: "Baza esențială: înțelegerea ritmului, pași de bază (saída, basic 1, 2, 3), și conexiunea cu partenerul.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea flow-ului și a conexiunii, introducerea mișcărilor laterale (laterals), block-uri și inversiuni simple.", target: "#improver" },
    { name: "Intermediar", description: "Muzicalitate avansată, mișcări complexe de Urban Kizz (isolation, tricks), și fluiditate în social dance.", target: "#intermediate" },
];


// Beginners join the waiting list for the October group; other levels ask about their level
const NEW_GROUP = newGroups[1];
const joinNewGroup = (openInscriere) => openInscriere(waitlistMessage(NEW_GROUP), {
    title: `Lista de așteptare: ${NEW_GROUP.name}`,
    subtitle: `Grupa nouă începe în ${NEW_GROUP.start}. Scrie-ne și te anunțăm înainte de start.`,
});
const askAboutLevel = (openInscriere, level) => level.name === "Beginner"
    ? joinNewGroup(openInscriere)
    : openInscriere(`Bună ziua! Aș dori detalii despre grupa de Kizomba ${level.name}.`);

function KizombaPage({ openInscriere }) {
    return (
        <div className="kizomba-page-container">
            {}
            <section className="kizomba-hero-section">
                <div className="hero-content-kizomba">
                    <h1 className="kizomba-title">
                        Kizomba: <span className="accent-text">Conexiune și Flow.</span>
                    </h1>
                    <p className="kizomba-pitch">
                        Lasă-te purtat de ritmurile senzuale ale Kizomba. Perfecționează-ți tehnica de lead/follow și descoperă plăcerea mișcării în armonie.
                    </p>
                    <button onClick={() => joinNewGroup(openInscriere)} className="cta-page-main" style={{ border: 'none', cursor: 'pointer' }}>
                        Înscrie-te în grupa din octombrie
                    </button>
                </div>
            </section>

            {}
            <section id="levels" className="kizomba-levels-section">
                <h2 className="section-heading-kizomba">Alege-ți Nivelul de Progres</h2>
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            <span className="level-number" style={{ color: '#FF7033' }}>{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level" onClick={() => askAboutLevel(openInscriere, level)}>
                                {level.name === "Beginner" ? "Grupa nouă din octombrie" : `Detalii ${level.name}`}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {}
            <section className="mixt-promo-section">
                <div className="mixt-content">
                    <h2 className="mixt-title">Începe cu Salsa & Bachata Mixt</h2>
                    <p className="mixt-description">
                        Dacă ești nou, începe cu cursul nostru Mixt pentru a prinde rapid baza muzicii latine!
                    </p>
                    <button className="cta-mixt" onClick={() => openInscriere(waitlistMessage(newGroups[0]))}>Salsa & Bachata din octombrie</button>
                </div>
            </section>
        </div>
    );
}

export default KizombaPage;