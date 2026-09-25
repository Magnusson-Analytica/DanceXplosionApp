import React from 'react';
import './NewGroups.css';
import { newGroups, waitlistMessage } from './newGroupsData';

function NewGroups({ openInscriere }) {
    return (
        <section className="new-groups-section" id="grupe-noi">
            <h2 className="section-heading-dark">Grupe noi pentru începători</h2>
            <p className="new-groups-intro">
                În octombrie pornim grupe noi de începători la salsa și bachata și la kizomba.
                Intră pe lista de așteptare și te anunțăm înainte de start.
            </p>
            <p className="new-groups-reassurance">
                Prima oră e gratuită · Nu ai nevoie de partener · Nu ai nevoie de experiență
            </p>

            <div className="new-groups-cards">
                {newGroups.map((group) => (
                    <div key={group.id} className="new-groups-card">
                        <p className="new-groups-label">Grupă nouă</p>
                        <h3 className="new-groups-name">
                            {group.style}
                            <span className="new-groups-level">Începători</span>
                        </h3>
                        <p className="new-groups-start">Începe în {group.start}</p>
                        <button
                            className="new-groups-cta"
                            onClick={() => openInscriere(waitlistMessage(group), {
                                title: `Lista de așteptare: ${group.name}`,
                                subtitle: `Scrie-ne și te anunțăm înainte să înceapă grupa din ${group.start}.`,
                            })}
                        >
                            Intră pe lista de așteptare
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewGroups;
