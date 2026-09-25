// Upcoming beginner groups. Beginners can't join groups that are already running, so every
// beginner call-to-action on the site points here. Update this list when new groups are announced.

export const NEW_GROUPS_START = "octombrie 2026";

export const newGroups = [
    { id: "salsa-bachata", style: "Salsa & Bachata", name: "Salsa & Bachata Începători", start: NEW_GROUPS_START },
    { id: "kizomba", style: "Kizomba", name: "Kizomba Începători", start: NEW_GROUPS_START },
];

export const waitlistMessage = (group) =>
    `Bună ziua! Doresc să mă înscriu pe lista de așteptare pentru grupa nouă de ${group.name} (${group.start}).`;

// Kizomba beginners go to the Kizomba group; salsa, bachata and mixed beginners to Salsa & Bachata
export const groupForStyle = (text) =>
    /kizomba/i.test(text) ? newGroups[1] : newGroups[0];
