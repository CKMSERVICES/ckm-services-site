export const siteConfig = {
name: "CKM Services",
shortName: "CKM",
tagline: "Le nettoyage pro, sans la paperasse",
description:
"Nettoyage commercial premium et entretien de locaux pour bureaux, commerces et sites industriels en Île-de-France.",
url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ckmservices.fr",
phone: "06 82 56 88 44",
phoneHref: "+33682568844",
email: "contact@ckmservices.fr",
// Chiffres uniquement, indicatif pays en premier — utilisé pour le lien
// WhatsApp gratuit (wa.me), aucune API payante requise.
whatsapp: "33682568844",
address: {
street: "7 Avenue de la Liberté",
city: "Nanterre",
state: "",
zip: "92000",
country: "FR",
},
// Basés à Nanterre, on intervient dans tout Paris et sa proche périphérie.
baseCity: "Nanterre",
serviceAreas: [
"Nanterre",
"Paris",
"Courbevoie",
"Puteaux",
"La Défense",
"Boulogne-Billancourt",
"Levallois-Perret",
"Colombes",
"Rueil-Malmaison",
"Suresnes",
],
};

export const services = [
{
slug: "nettoyage-de-bureaux",
title: "Nettoyage de Bureaux",
icon: "Building2",
description:
"Bureaux et espaces communs impeccables dès l'ouverture, sur un planning taillé pour vous.",
},
{
slug: "entretien-des-sols",
title: "Entretien des Sols",
icon: "Sparkles",
description:
"Décapage, cirage et extraction de moquette pour des sols qui impressionnent chaque visiteur.",
},
{
slug: "lavage-de-vitres",
title: "Lavage de Vitres",
icon: "AppWindow",
description:
"Vitres et façades impeccables, intérieur comme extérieur, grâce à nos systèmes à eau pure.",
},
{
slug: "services-de-conciergerie",
title: "Services de Conciergerie",
icon: "ClipboardCheck",
description:
"Une équipe formée et supervisée, des checklists sur mesure adaptées à vos horaires.",
},
{
slug: "nettoyage-post-chantier",
title: "Nettoyage Post-Chantier",
icon: "HardHat",
description:
"Gravats évacués, poussière éliminée : un chantier transformé en espace prêt à l'emploi.",
},
{
slug: "autres-besoins",
title: "Autres Besoins",
icon: "Sparkles",
description:
"Un besoin particulier ? Décrivez votre situation, on adapte nos équipes en conséquence.",
},
];

export const processSteps = [
{
step: "01",
title: "Vous Décrivez le Besoin",
description:
"Type de local, surface, fréquence souhaitée — par téléphone, WhatsApp ou via le formulaire, sans obligation de nous recevoir sur place.",
},
{
step: "02",
title: "Devis Sous 48h",
description:
"Gratuit, clair, sans surprise. Vous savez exactement ce qui est inclus avant de vous engager.",
},
{
step: "03",
title: "On Intervient",
description:
"Aux horaires qui vous arrangent, avec des équipes formées et du matériel adapté à votre type de site.",
},
{
step: "04",
title: "Locaux Impeccables",
description:
"Suivi possible, sans engagement long — vous restez libre de continuer ou d'ajuster à tout moment.",
},
];

// Avis Google réels de CKM Services (fiche établissement), utilisés dans la
// section de confiance à la place d'anciens témoignages fictifs. Mettre à
// jour manuellement si la note ou le nombre d'avis évolue.
export const googleRating = {
value: 5.0,
count: 14,
url: "https://www.google.com/maps/search/?api=1&query=CKM+Services+Nanterre",
};

// Chiffres vérifiables, dérivés des engagements réels de CKM (voir
// trustPoints / siteConfig) — utilisés dans la bande de stats du site.
export const stats = [
{ value: "48h", label: "Délai de Devis" },
{ value: "10", label: "Villes Couvertes en Île-de-France" },
{ value: "0", label: "Engagement Long" },
{ value: "100%", label: "Produits Écologiques Certifiés" },
];

export const qualityBadges = [
{ icon: "Leaf", label: "Produits Certifiés Écologiques" },
{ icon: "ShieldCheck", label: "Équipes Formées Hygiène & Sécurité" },
{ icon: "BadgeCheck", label: "Entièrement Assurés" },
{ icon: "ClipboardCheck", label: "Protocoles Qualité Stricts" },
{ icon: "Users", label: "Personnel Vérifié et de Confiance" },
{ icon: "ThumbsUp", label: "Garantie Satisfaction 100%" },
];

export const premiseTypes = [
"Bureaux / Entreprise",
"Commerce de Détail",
"Santé / Médical",
"Industriel / Entrepôt",
"Éducation",
"Hôtellerie",
"Autre",
];

// Les 3 vraies raisons de choisir CKM (reprises des visuels de marque du
// client) — réutilisées dans le Hero pour remplacer les stats inventées.
export const trustPoints = [
{
icon: "BadgeCheck",
title: "Sans Engagement Long",
description: "Vous restez libre, à tout moment.",
},
{
icon: "Clock",
title: "Devis Sous 48h",
description: "Une réponse rapide, sans attendre.",
},
{
icon: "MapPin",
title: "Local, Dans le 92",
description: "Réactif, proche de chez vous.",
},
];

// Comparaison honnête entre l'approche CKM et une approche "traditionnelle"
// générique (pas de concurrent nommé) — utilisée dans la section Comparison.
export const comparisonPoints = [
{
need: "Devis",
traditional: "Visite obligatoire, réponse sous plusieurs jours",
ckm: "À distance possible, réponse claire sous 48h",
},
{
need: "Engagement",
traditional: "Contrat long, préavis contraignant",
ckm: "Sans engagement long, flexible à tout moment",
},
{
need: "Interlocuteur",
traditional: "Standard, ticket de support générique",
ckm: "Contact direct par téléphone ou WhatsApp",
},
{
need: "Produits",
traditional: "Variables selon le prestataire",
ckm: "Produits certifiés écologiques sur tous les sites",
},
{
need: "Tarification",
traditional: "Grille opaque, frais cachés fréquents",
ckm: "Devis détaillé, sans surprise",
},
];

export const faqs = [
{
question: "Le devis est-il vraiment gratuit ?",
answer:
"Oui. Vous décrivez votre besoin par téléphone, WhatsApp ou via le formulaire, et vous recevez un devis clair sous 48h, sans frais et sans obligation d'achat.",
},
{
question: "Faut-il vous recevoir sur place pour établir le devis ?",
answer:
"Pas forcément. La plupart des devis se font à distance à partir de votre description (type de local, surface, fréquence souhaitée). Une visite peut être organisée si votre site le nécessite.",
},
{
question: "Y a-t-il un engagement de durée ?",
answer:
"Non, aucun engagement long. Vous restez libre de continuer, d'ajuster la fréquence ou d'arrêter la prestation à tout moment, sans préavis contraignant.",
},
{
question: "Dans quelles villes intervenez-vous ?",
answer:
"Nous sommes basés à Nanterre (92) et intervenons dans toute l'Île-de-France : Paris, Courbevoie, Puteaux, La Défense, Boulogne-Billancourt, Levallois-Perret, Colombes, Rueil-Malmaison, Suresnes et les environs.",
},
{
question: "Utilisez-vous des produits écologiques ?",
answer:
"Oui, nos équipes utilisent des produits certifiés écologiques et du matériel professionnel adapté à chaque type de surface, en tenant compte de la sécurité de vos équipes.",
},
{
question: "Quels types de sites nettoyez-vous ?",
answer:
"Bureaux, commerces, locaux industriels, et sites en fin de chantier. Si votre besoin sort de ces catégories, décrivez-le-nous : nous adaptons nos équipes en conséquence.",
},
];
