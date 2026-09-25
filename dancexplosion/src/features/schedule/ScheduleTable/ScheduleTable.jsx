import React from 'react';
import './ScheduleTable.css';
import { isDanceLandUpcoming, DANCELAND_FORM_URL } from '../../danceland/danceLandData';
import { groupForStyle, waitlistMessage } from '../../newGroups/newGroupsData';


const scheduleData = [
    {
        hall: "Sala Mare - 1",
        days: {
            "Luni": [
                { time: "19:00", name: "Kizomba Avansați", instr: "Cris", level: "Avansați" },
                { time: "20:00", name: "Kizomba Beginners", instr: "Cris", level: "Începători" }
            ],
            "Marți": [
                { time: "18:00", name: "Copii 7-9 Ani (Performance)", instr: "Adi", level: "Copii" },
                { time: "19:00", name: "Salsa/Bachata Începători 2", instr: "Alex", level: "Începători" },
                { time: "19:00", name: "Începători Mixt", instr: "Alex L", level: "Începători" },
                { time: "20:00", name: "Bachata Improver", instr: "Alex L", level: "Intermediari" }
            ],
            "Miercuri": [
                { time: "19:00", name: "Kizomba Avansați", instr: "Cris", level: "Avansați" },
                { time: "20:00", name: "Kizomba Beginners", instr: "Cris", level: "Începători" }
            ],
            "Joi": [
                { time: "18:00", name: "Copii 7-9 Ani (Performance)", instr: "Adi", level: "Copii" },
                { time: "19:00", name: "Salsa/Bachata Începători 2", instr: "Alex", level: "Începători" },
                { time: "19:00", name: "Începători Mixt", instr: "Alex L", level: "Începători" },
                { time: "20:00", name: "Bachata Improver", instr: "Alex L", level: "Intermediari" }
            ],
            "Vineri": []
        }
    },
    {
        hall: "Sala Mare - 2",
        days: {
            "Luni": [],
            "Marți": [
                { time: "19:00", name: "Bachata/Salsa Începători 1", instr: "Adi", level: "Începători" },
                { time: "20:00", name: "Improver Mixt", instr: "Alex M + Cris", level: "Intermediari" }
            ],
            "Miercuri": [],
            "Joi": [
                { time: "19:00", name: "Bachata/Salsa Începători 1", instr: "Adi", level: "Începători" },
                { time: "20:00", name: "Improver Mixt", instr: "Alex M + Cris", level: "Intermediari" }
            ],
            "Vineri": []
        }
    },
    {
        hall: "Sala Mică",
        days: {
            "Luni": [
                { time: "17:00", name: "Copii 4-6 Ani", instr: "Cris", level: "Copii" },
                { time: "18:00", name: "Kizomba Improvers", instr: "Cris", level: "Intermediari" },
                { time: "19:00", name: "Copii 10-15 Ani", instr: "Alex", level: "Copii" },
                { time: "20:00", name: "Curs Studenți", instr: "Adi + Allisor", level: "Acces Liber" },
                { time: "21:00", name: "Musicality - Nama", instr: "Allisor", level: "Toate Nivelurile" }
            ],
            "Marți": [
                { time: "17:00", name: "Copii 7-9 Ani", instr: "Adi", level: "Copii" },
                { time: "18:00", name: "Copii 4-6 Ani", instr: "Alex", level: "Copii" },
                { time: "19:00", name: "Salsa Inter-Avansați", instr: "Alex M + Cris", level: "Intermediari/Avansați" },
                { time: "20:00", name: "Bachata Intermediari", instr: "Adi + Allisor", level: "Intermediari" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Miercuri": [
                { time: "17:00", name: "Copii 4-6 Ani", instr: "Cris", level: "Copii" },
                { time: "18:00", name: "Kizomba Improvers", instr: "Cris", level: "Intermediari" },
                { time: "19:00", name: "Copii 10-15 Ani", instr: "Alex", level: "Copii" },
                { time: "20:00", name: "Curs Studenți", instr: "Adi + Allisor", level: "Acces Liber" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Joi": [
                { time: "17:00", name: "Copii 7-9 Ani", instr: "Adi", level: "Copii" },
                { time: "18:00", name: "Copii 4-6 Ani", instr: "Alex", level: "Copii" },
                { time: "19:00", name: "Salsa Inter-Avansați", instr: "Alex M + Cris", level: "Intermediari/Avansați" },
                { time: "20:00", name: "Bachata Intermediari", instr: "Adi + Allisor", level: "Intermediari" }
            ],
            "Vineri": []
        }
    }
];

const BEGINNER_LEVEL = "Începători";
const KIDS_LEVEL = "Copii";

// Every slot starts a conversation (WhatsApp on phones, a choice dialog on desktop):
// beginner groups are already running, so beginners join the waiting list for the October group;
// kids sign up through DanceLand while it's upcoming; everyone else asks about that class
const getSlotRequest = (item, day, hall) => {
    if (item.level === BEGINNER_LEVEL) {
        const group = groupForStyle(item.name);
        return [waitlistMessage(group), {
            title: `Grupa ${item.name} a început deja`,
            subtitle: `Intră pe lista de așteptare pentru grupa nouă de ${group.name}, care începe în ${group.start}.`,
        }];
    }
    if (item.level === KIDS_LEVEL && isDanceLandUpcoming()) {
        return [`Bună ziua! Doresc să înscriu copilul la DanceLand Open Weekend (17-18 octombrie), pentru grupa ${item.name}.`, {
            title: "Înscrieri la DanceLand",
            subtitle: "Înscrierile la cursurile pentru copii se fac la DanceLand Open Weekend, pe 17-18 octombrie.",
            extra: { label: "Completează formularul de înscriere", url: DANCELAND_FORM_URL },
        }];
    }
    return [`Bună ziua! Aș dori detalii despre ${item.name}, ${day.toLowerCase()} ${item.time} (${hall}).`, {
        title: `${item.name}, ${day.toLowerCase()} ${item.time}`,
    }];
};

function ScheduleTable({ openInscriere }) {
    return (
        <section className="schedule-section">
            <h2 className="section-heading-dark">Program Cursuri</h2>

            {scheduleData.map((hallGroup) => (
                <div key={hallGroup.hall} className="hall-container">
                    <h3 className="hall-header">{hallGroup.hall}</h3>
                    <div className="schedule-table-container">
                        {Object.entries(hallGroup.days).map(([day, classes]) => (
                            <div key={day} className="day-column">
                                <h4 className="day-title">{day}</h4>
                                <div className="class-list">
                                    {classes.length > 0 ? (
                                        classes.map((item, index) => {
                                            const run = () => openInscriere(...getSlotRequest(item, day, hallGroup.hall));
                                            return (
                                                <div 
                                                    key={index} 
                                                    onClick={run}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            run();
                                                        }
                                                    }}
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-label={`${item.name}, ${day} ${item.time}`}
                                                    className="class-card"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <span className="class-time">{item.time}</span>
                                                    <p className="class-name">{item.name}</p>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="empty-day">Fără cursuri</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

    
        </section>
    );
}

export default ScheduleTable;