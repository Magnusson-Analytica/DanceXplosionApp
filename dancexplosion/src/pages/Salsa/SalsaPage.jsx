import React from 'react';
import './SalsaPage.css';
import { newGroups, waitlistMessage } from '../../features/newGroups/newGroupsData';


const levels = [
    { name: "Beginner", description: "Bazele absolute: ritm, pași de bază și conexiunea partenerilor.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea bazei, figuri sociale simple și rotații.", target: "#improver" },
    { name: "Intermediate", description: "Tehnică avansată, muzicalitate complexă și figuri dinamice.", target: "#intermediate" },
];


// Beginners join the waiting list for the October group; other levels ask about their level
const NEW_GROUP = newGroups[0];
const joinNewGroup = (openInscriere) => openInscriere(waitlistMessage(NEW_GROUP), {
    title: `Lista de așteptare: ${NEW_GROUP.name}`,
    subtitle: `Grupa nouă începe în ${NEW_GROUP.start}. Scrie-ne și te anunțăm înainte de start.`,
});
const askAboutLevel = (openInscriere, level) => level.name === "Beginner"
    ? joinNewGroup(openInscriere)
    : openInscriere(`Bună ziua! Aș dori detalii despre grupa de Salsa ${level.name}.`);

function SalsaPage({ openInscriere }) {
    return (
        <div className="salsa-page-container">
            <section className="salsa-hero-section">
                <div className="hero-content-salsa">
                    <h1 className="salsa-title">Salsa <span className="accent-text">Ritmul Latin de care te vei îndrăgosti.</span></h1>
                    <button onClick={() => joinNewGroup(openInscriere)} className="cta-page-main" style={{ border: 'none', cursor: 'pointer' }}>Înscrie-te în grupa din octombrie</button>
                </div>
            </section>

            <section id="levels" className="salsa-levels-section">
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            <span className="level-number">{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level" onClick={() => askAboutLevel(openInscriere, level)}>{level.name === "Beginner" ? "Grupa nouă din octombrie" : `Detalii ${level.name}`}</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SalsaPage;