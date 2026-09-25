// Single source for DanceLand details, shared by the home page, the kids page
// and the future DanceLand landing page

export const DANCELAND_DATES = "17-18 octombrie 2026";

// Sections hide themselves once the open weekend is over (midnight after the last day, Sibiu time)
const DANCELAND_ENDS_AT = new Date('2026-10-19T00:00:00+03:00');
export const isDanceLandUpcoming = () => new Date() < DANCELAND_ENDS_AT;

// Registration happens through the Google Form
export const DANCELAND_FORM_URL = "https://forms.gle/SnJQuzAQbRR5zuRy9";
export const openDanceLandForm = () => window.open(DANCELAND_FORM_URL, '_blank', 'noopener');

export const danceLandIntro =
    "O lume unde pasiunea pentru dans prinde viață, unde se descoperă talentele celor mici " +
    "și unde copiii se dezvoltă prin dans într-un mod frumos și interactiv.";

export const danceLandSessions = [
    { ages: "4 - 6 ani", times: ["Sâmbătă 09:00", "Sâmbătă 10:30", "Sâmbătă 12:00"] },
    { ages: "7 - 9 ani", times: ["Sâmbătă 15:00", "Sâmbătă 16:30"] },
    { ages: "10 - 15 ani", times: ["Sâmbătă 18:00"] },
];

export const danceLandParentSeminar =
    "În timp ce copilul participă la atelierul de dans, părintele sau însoțitorul poate participa " +
    "la un seminar informativ DanceLand, unde află toate detaliile și primește răspunsuri la întrebări.";

export const danceLandOffer = [
    "Cursuri de dans pentru copii, unde distracția și energia se îmbină perfect.",
    "Preselecții pentru performanță: dacă ai acasă un mic talent în devenire, acum este momentul să strălucească.",
];

export const danceLandGoals = [
    "Oferim tuturor copiilor posibilitatea de a se dezvolta prin dans: abilități sociale, încredere, creativitate, disciplină și concentrare.",
    "Descoperim copiii cu înclinații deosebite pentru dans, ca să îi dezvoltăm în dansatori de clasă mondială.",
    "Redescoperim copiii care au făcut performanță în balet, dans sau gimnastică și care, dintr-un motiv sau altul, au fost nevoiți să renunțe.",
];

export const danceLandSponsorNote =
    "Pentru cei mai buni 10 copii și tineri descoperiți sau redescoperiți, sponsorii proiectului " +
    "plătesc cursurile pe toată durata primului an de studii, indiferent de categoria de vârstă.";

export const kidsPackages = [
    { label: "Lunar", price: "200 lei/copil" },
    { label: "3 luni", price: "540 lei/copil" },
    { label: "6 luni", price: "1000 lei/copil" },
    { label: "Pachet de familie (frați, surori)", price: "180 lei/copil" },
    { label: "Pachet social*", price: "120 lei/copil" },
];

export const kidsPackagesNote = "*Pentru copiii care beneficiază de burse sociale.";

export const danceLandLocation = "Dance Xplosion Academy Studio, B-dul Victoriei nr. 42, et. 3, Sibiu";

export const danceLandContacts = [
    { display: "0746 089 802", tel: "+40746089802" },
    { display: "0751 327 415", tel: "+40751327415" },
];

export const danceLandOrganiser = "Proiect implementat de Asociația Club Sportiv Dance Xplosion.";
