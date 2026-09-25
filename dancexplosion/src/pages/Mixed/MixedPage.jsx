import React from 'react';
import './MixedPage.css';
import { newGroups, waitlistMessage } from '../../features/newGroups/newGroupsData';

// The mixed course is for beginners, so every CTA joins the October Salsa & Bachata group
const NEW_GROUP = newGroups[0];
const joinNewGroup = (openInscriere) => openInscriere(waitlistMessage(NEW_GROUP), {
    title: `Lista de așteptare: ${NEW_GROUP.name}`,
    subtitle: `Grupa nouă începe în ${NEW_GROUP.start}. Scrie-ne și te anunțăm înainte de start.`,
});

const benefits = [
    { 
        title: "2 Stiluri în 1", 
        description: "Înveți simultan bazele a două dintre cele mai populare dansuri latino: Salsa și Bachata.", 
        icon: "🔥"
    },
    { 
        title: "Start Accelerat", 
        description: "Cel mai bun mod de a te integra rapid la petreceri (Social Parties) știind să dansezi pe orice muzică.", 
        icon: "🚀"
    },
    { 
        title: "Baze Solide", 
        description: "Îți dezvolți ritmul și coordonarea, pregătindu-te pentru nivelurile intermediare dedicate fiecărui stil.", 
        icon: "✨"
    },
];

function MixedPage({ openInscriere }) {
    return (
        <div className="mixed-page-container">
            {/* Hero Section */}
            <section className="mixed-hero-section">
                <div className="hero-content-mixed">
                    <h1 className="mixed-title">
                        Curs Mixt <span className="accent-text-mixed">Salsa & Bachata</span>
                    </h1>
                    <p className="mixed-pitch">
                        Nu știi ce să alegi? Începe cu amândouă! 
                        Cursul ideal pentru începători care vor să prindă rapid gustul distracției latino.
                    </p>
                    <p className="mixed-pitch"><strong>Grupa nouă începe în {NEW_GROUP.start}.</strong></p>
                    <button onClick={() => joinNewGroup(openInscriere)} className="cta-page-main-mixed">
                        Intră pe lista de așteptare
                    </button>
                </div>
            </section>

            {/* Benefits / Why Section */}
            <section id="detalii" className="mixed-benefits-section">
                <h2 className="section-heading-mixed">De ce să alegi Cursul Mixt?</h2>
                <div className="benefits-card-container">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="mixed-promo-section">
                <div className="promo-content-mixed">
                    <h2 className="promo-title-mixed">Ești gata de distracție?</h2>
                    <p className="promo-description-mixed">
                        Alătură-te comunității Dance Xplosion și descoperă o nouă pasiune alături de oameni faini.
                    </p>
                    <button className="cta-final-mixed" onClick={() => joinNewGroup(openInscriere)}>
                        Înscrie-te în grupa din octombrie
                    </button>
                </div>
            </section>
        </div>
    );
}

export default MixedPage;