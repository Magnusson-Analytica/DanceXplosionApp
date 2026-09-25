// Every public page: its URL and the title/description search engines and link previews show.
// Plain JS (no JSX) so the build script in scripts/generate-pages.mjs can read it too.

export const SITE_URL = "https://www.dancexplosionacademy.ro";
export const SITE_NAME = "Dance Xplosion Academy";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const suffix = ` · ${SITE_NAME}`;

export const pages = [
    {
        path: "/",
        title: `Cursuri de dans în Sibiu: salsa, bachata, kizomba${suffix}`,
        description: "Cursuri de salsa, bachata și kizomba în Sibiu. Grupe noi de începători din octombrie, fără partener, prima oră gratuită. Copii, dansul mirilor și lecții private.",
    },
    {
        path: "/salsa",
        title: `Cursuri de salsa în Sibiu${suffix}`,
        description: "Cursuri de salsa în Sibiu, de la primii pași la coregrafii complexe. Grupă nouă de începători Salsa & Bachata din octombrie. Nu ai nevoie de partener.",
    },
    {
        path: "/bachata",
        title: `Cursuri de bachata în Sibiu${suffix}`,
        description: "Cursuri de bachata în Sibiu: conexiune, fluiditate și senzualitate. Grupă nouă de începători Salsa & Bachata din octombrie. Nu ai nevoie de partener.",
    },
    {
        path: "/kizomba",
        title: `Cursuri de kizomba în Sibiu${suffix}`,
        description: "Cursuri de kizomba în Sibiu pentru începători și avansați. Următoarea grupă de începători pornește în octombrie. Nu ai nevoie de partener.",
    },
    {
        path: "/curs-mixt",
        title: `Curs mixt salsa și bachata în Sibiu${suffix}`,
        description: "Nu te poți hotărî? Cursul mixt de salsa și bachata din Sibiu te învață ambele stiluri. Grupă nouă de începători din octombrie, fără partener.",
    },
    {
        path: "/cursuri-private",
        title: `Lecții private de dans în Sibiu${suffix}`,
        description: "Lecții private de dans în Sibiu cu unul sau doi instructori, pentru o persoană sau un cuplu, de la 150 lei pe ședință. Program flexibil.",
    },
    {
        path: "/copii",
        title: `Cursuri de dans pentru copii în Sibiu${suffix}`,
        description: "Cursuri de dans pentru copii de 4-6, 7-9 și 10-15 ani în Sibiu. Înscrieri la DanceLand Open Weekend, 17-18 octombrie 2026.",
    },
    {
        path: "/dansul-mirilor",
        title: `Dansul mirilor în Sibiu: lecții și coregrafie${suffix}`,
        description: "Lecții private și coregrafie personalizată pentru dansul mirilor în Sibiu. Pachet de 5 ședințe de la 800 lei dacă programați din timp.",
    },
    {
        path: "/instructori/nicoleta-cristina",
        title: `Nicoleta Cristina, instructor de dans${suffix}`,
        description: "Nicoleta Cristina, instructor de salsa și bachata la Dance Xplosion Academy, Sibiu.",
    },
    {
        path: "/instructori/alex-lazar",
        title: `Alex Lazar, instructor de dans${suffix}`,
        description: "Alex Lazar, instructor de salsa și bachata la Dance Xplosion Academy, Sibiu.",
    },
    {
        path: "/instructori/alex-magnusson",
        title: `Alex Magnusson, instructor de dans${suffix}`,
        description: "Alex Magnusson, instructor de salsa la Dance Xplosion Academy, Sibiu.",
    },
    {
        path: "/instructori/alexandra-ivan",
        title: `Alexandra Ivan, instructor de dans${suffix}`,
        description: "Alexandra Ivan, instructor de salsa și bachata la Dance Xplosion Academy, Sibiu.",
    },
    {
        path: "/instructori/adrian-rasinariu",
        title: `Adrian Rașinariu, instructor de dans${suffix}`,
        description: "Adrian Rașinariu, instructor de salsa și bachata la Dance Xplosion Academy, Sibiu.",
    },
];

export const notFoundPage = {
    path: "/404",
    title: `Pagina nu a fost găsită${suffix}`,
    description: "Pagina căutată nu există. Vezi cursurile de dans Dance Xplosion Academy din Sibiu.",
};

// Old hash links (/#salsa) that people may still have saved or shared
export const legacyHashRoutes = {
    "salsa": "/salsa",
    "bachata": "/bachata",
    "kizomba": "/kizomba",
    "mixed": "/curs-mixt",
    "cursuri-private": "/cursuri-private",
    "copii": "/copii",
    "dansul-mirilor": "/dansul-mirilor",
    "instructor/nicoleta-cristina": "/instructori/nicoleta-cristina",
    "instructor/alex-lazar": "/instructori/alex-lazar",
    "instructor/alex-magnusson": "/instructori/alex-magnusson",
    "instructor/alexandra-ivan": "/instructori/alexandra-ivan",
    "instructor/adrian-rasinariu": "/instructori/adrian-rasinariu",
};

export const findPage = (path) => pages.find((p) => p.path === path) || notFoundPage;
