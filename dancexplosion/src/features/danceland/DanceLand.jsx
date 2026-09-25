import React from 'react';
import './DanceLand.css';
import {
    DANCELAND_DATES,
    openDanceLandForm,
    isDanceLandUpcoming,
    danceLandIntro,
    danceLandSessions,
    danceLandParentSeminar,
    danceLandOffer,
    danceLandGoals,
    danceLandSponsorNote,
    danceLandLocation,
    danceLandContacts,
    danceLandOrganiser,
} from './danceLandData';

// Compact on the home page; `detailed` adds the offer, goals and contacts for the kids page
function DanceLand({ openInscriere, detailed = false }) {
    if (!isDanceLandUpcoming()) return null;

    return (
        <section className={`danceland-section ${detailed ? 'detailed' : ''}`} id="danceland">
            <div className="danceland-inner">
                <p className="danceland-eyebrow">DanceLand Project · Open Weekend</p>
                <h2 className="danceland-title">Înscrieri la cursurile pentru copii</h2>
                <p className="danceland-dates">{DANCELAND_DATES}</p>
                <p className="danceland-intro">{danceLandIntro}</p>

                <div className="danceland-sessions">
                    {danceLandSessions.map((session) => (
                        <div key={session.ages} className="danceland-session">
                            <h3>Copii {session.ages}</h3>
                            <ul>
                                {session.times.map((time) => <li key={time}>{time}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="danceland-seminar">{danceLandParentSeminar}</p>

                {detailed && (
                    <div className="danceland-details">
                        <div className="danceland-detail-block">
                            <h3>Ce oferim</h3>
                            <ul>
                                {danceLandOffer.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="danceland-detail-block">
                            <h3>Obiectivele DanceLand</h3>
                            <ol>
                                {danceLandGoals.map((goal) => <li key={goal}>{goal}</li>)}
                            </ol>
                            <p className="danceland-sponsor">{danceLandSponsorNote}</p>
                        </div>
                    </div>
                )}

                <p className="danceland-note">Participarea presupune înscriere în prealabil, prin formularul de mai jos.</p>
                <div className="danceland-cta-group">
                    <button className="danceland-cta" onClick={openDanceLandForm}>
                        Completează formularul de înscriere
                    </button>
                    {detailed ? (
                        <button
                            className="danceland-link danceland-link-button"
                            onClick={() => openInscriere("Bună ziua! Am o întrebare despre DanceLand Open Weekend (17-18 octombrie).")}
                        >
                            Ai întrebări? Scrie-ne pe WhatsApp →
                        </button>
                    ) : (
                        <a href="/copii" className="danceland-link">Despre cursurile pentru copii →</a>
                    )}
                </div>

                <p className="danceland-location">{danceLandLocation}</p>
                {detailed && (
                    <p className="danceland-contact">
                        Detalii: {danceLandContacts.map((c, i) => (
                            <React.Fragment key={c.tel}>
                                {i > 0 && ' / '}
                                <a href={`tel:${c.tel}`}>{c.display}</a>
                            </React.Fragment>
                        ))}
                        <br />
                        {danceLandOrganiser}
                    </p>
                )}
            </div>
        </section>
    );
}

export default DanceLand;
