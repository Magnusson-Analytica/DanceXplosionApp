import React from 'react';
import './PricingFaq.css';

const priceGroups = [
    {
        title: "Abonamente lunare",
        note: "Un curs înseamnă 2 ore pe săptămână.",
        rows: [
            { label: "1 curs adulți", price: "240 lei/lună" },
            { label: "2 cursuri adulți", price: "440 lei/lună" },
            { label: "3 cursuri adulți", price: "620 lei/lună" },
            { label: "1 curs pentru copii", price: "200 lei/lună" },
        ],
    },
    {
        title: "Ore private",
        note: "Pachet de peste 5 ședințe: 15% reducere.",
        rows: [
            { label: "1 instructor, 1 persoană", price: "150 lei/ședință" },
            { label: "1 instructor, 2 persoane", price: "200 lei/ședință" },
            { label: "2 instructori, 1 persoană", price: "300 lei/ședință" },
            { label: "2 instructori, 2 persoane", price: "350 lei/ședință" },
        ],
    },
    {
        title: "Dansul mirilor",
        note: "Cu cât programați mai devreme, cu atât costă mai puțin.",
        rows: [
            { label: "Pachet 5 ședințe, cu cel puțin 2 luni înainte", price: "800 lei" },
            { label: "Pachet 5 ședințe, cu cel puțin 1 lună înainte", price: "1000 lei" },
            { label: "Pachet 5 ședințe, cu cel puțin 2 săpt. înainte", price: "1500 lei" },
            { label: "1 ședință", price: "200 lei" },
        ],
    },
];

const faqs = [
    {
        q: "Am nevoie de partener?",
        a: "Nu. Poți veni singur sau singură, nu ai nevoie de partener ca să te înscrii.",
    },
    {
        q: "Trebuie să știu deja să dansez?",
        a: "Nu. În octombrie pornim grupe noi de începători la salsa și bachata și la kizomba, pentru oameni care n-au mai dansat. Intră pe lista de așteptare și te anunțăm înainte de start.",
        link: { href: "/#grupe-noi", label: "Intră pe lista de așteptare" },
    },
    {
        q: "Cât costă?",
        a: "Prima oră este gratuită. Apoi, un curs pentru adulți costă 240 lei pe lună (2 ore pe săptămână), 2 cursuri 440 lei, iar 3 cursuri 620 lei. Un curs pentru copii costă 200 lei pe lună.",
        link: { href: "/#preturi", label: "Vezi toate prețurile" },
    },
    {
        q: "Ce să port?",
        a: "Haine comode, în care te poți mișca ușor.",
    },
    {
        q: "Ce încălțăminte îmi trebuie?",
        a: "Adu o pereche de încălțăminte de schimb, diferită de cea cu care vii de afară. Pot fi și adidași: nu trebuie să fie pantofi de dans, important e să fie comozi.",
    },
    {
        q: "Ce curs să aleg?",
        a: "Dacă n-ai mai dansat, alege una dintre grupele noi din octombrie: Salsa & Bachata Începători sau Kizomba Începători. Grupele deja începute nu mai primesc începători. Dacă dansezi deja, alege nivelul potrivit din orar. Nu știi ce nivel ai? Scrie-ne și te ajutăm să alegi.",
        link: { href: "/#grupe-noi", label: "Vezi grupele noi" },
    },
    {
        q: "Aveți cursuri pentru copii?",
        a: "Da, avem grupe pe vârste: 4-6 ani, 7-9 ani și 10-15 ani, după-amiaza. Înscrierile pentru copii se fac la DanceLand Open Weekend, pe 17-18 octombrie 2026.",
        link: { href: "/copii", label: "Vezi cursurile pentru copii" },
    },
    {
        q: "Unde sunteți?",
        a: "Pe Bulevardul Victoriei nr. 42, etajul 3, Sibiu.",
        link: { href: "https://www.google.com/maps/search/?api=1&query=Bulevardul%20Victoriei%20nr%2042%2C%20Sibiu", label: "Deschide în Google Maps", external: true },
    },
    {
        q: "Cum rezerv prima oră?",
        a: "Dacă ești începător, intră pe lista de așteptare pentru grupele noi din octombrie; prima oră e gratuită. Dacă dansezi deja, apasă pe ora care îți convine din orar și ne scrii pe WhatsApp. Poți să ne și suni la 0751 327 415.",
    },
];

function PricingFaq() {
    return (
        <section className="pricing-faq-section" id="preturi">
            <h2 className="section-heading-dark">Prețuri</h2>
            <p className="pricing-free">
                Prima oră este <strong>gratuită</strong>. Grupele noi de începători pornesc în octombrie.
            </p>
            <div className="pricing-cards">
                {priceGroups.map((group) => (
                    <div key={group.title} className="pricing-card">
                        <h3 className="pricing-title">{group.title}</h3>
                        <dl className="pricing-rows">
                            {group.rows.map((row) => (
                                <div key={row.label} className="pricing-row">
                                    <dt>{row.label}</dt>
                                    <dd>{row.price}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="pricing-note">{group.note}</p>
                    </div>
                ))}
            </div>
            <a href="/#grupe-noi" className="pricing-cta">
                Înscrie-te la grupele din octombrie
            </a>

            <h2 className="section-heading-dark faq-heading" id="intrebari">Întrebări frecvente</h2>
            <div className="faq-list">
                {faqs.map((item) => (
                    <details key={item.q} className="faq-item">
                        <summary className="faq-question">{item.q}</summary>
                        <div className="faq-answer">
                            <p>{item.a}</p>
                            {item.link && (
                                <a
                                    href={item.link.href}
                                    className="faq-link"
                                    {...(item.link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {item.link.label} →
                                </a>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default PricingFaq;
