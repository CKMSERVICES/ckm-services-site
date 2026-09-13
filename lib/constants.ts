export const siteConfig = {
  name: "CKM Services",
  shortName: "CKM",
  tagline: "Un nettoyage commercial d'exception pour une performance optimale",
  description:
    "Nettoyage commercial premium, services de conciergerie et entretien de locaux pour bureaux, commerces et sites industriels. Écologique, entièrement assuré, et approuvé par des entreprises en croissance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ckmservices.fr",
  phone: "+33 1 23 45 67 89",
  phoneHref: "+33123456789",
  email: "contact@ckmservices.fr",
  // Chiffres uniquement, indicatif pays en premier — utilisé pour le lien
  // WhatsApp gratuit (wa.me), aucune API payante requise.
  whatsapp: "33612345678",
  address: {
    street: "Adresse à préciser",
    city: "Nanterre",
    state: "",
    zip: "92000",
    country: "FR",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ckm-services",
    facebook: "https://www.facebook.com/ckmservices",
    instagram: "https://www.instagram.com/ckmservices",
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
  ],
};

export const services = [
  {
    slug: "nettoyage-de-bureaux",
    title: "Nettoyage de Bureaux",
    icon: "Building2",
    description:
      "Des programmes quotidiens, hebdomadaires ou nocturnes qui gardent bureaux, espaces communs et salles de réunion impeccables à chaque prise de poste.",
  },
  {
    slug: "entretien-des-sols",
    title: "Entretien des Sols Commerciaux",
    icon: "Sparkles",
    description:
      "Décapage, cirage, lustrage et extraction de moquette qui protègent votre investissement au sol et impressionnent chaque visiteur.",
  },
  {
    slug: "lavage-de-vitres",
    title: "Lavage de Vitres",
    icon: "AppWindow",
    description:
      "Des vitres impeccables, intérieures et extérieures, des vitrines aux façades des immeubles, grâce à des systèmes à eau pure.",
  },
  {
    slug: "services-de-conciergerie",
    title: "Services de Conciergerie",
    icon: "ClipboardCheck",
    description:
      "Des équipes de conciergerie formées et supervisées, avec des listes de contrôle sur mesure et des audits qualité adaptés à vos horaires.",
  },
  {
    slug: "nettoyage-post-chantier",
    title: "Nettoyage Post-Chantier",
    icon: "HardHat",
    description:
      "Évacuation des gravats, dépoussiérage et nettoyage minutieux qui transforment un chantier en espace prêt à l'emploi, rapidement.",
  },
  {
    slug: "desinfection-specialisee",
    title: "Désinfection Spécialisée",
    icon: "ShieldCheck",
    description:
      "Une désinfection de niveau hospitalier des surfaces à fort contact, pour les espaces médicaux et en réponse aux épidémies.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Nous visitons votre site avec vous pour comprendre les flux, les priorités et les points de friction — jamais de devis standardisé.",
  },
  {
    step: "02",
    title: "Plan Sur Mesure",
    description:
      "Vous recevez un périmètre, un planning et une tarification transparente, adaptés à votre budget et à vos horaires d'activité.",
  },
  {
    step: "03",
    title: "Service Impeccable",
    description:
      "Des équipes formées et vérifiées interviennent selon une checklist détaillée, avec des produits écologiques et du matériel moderne.",
  },
  {
    step: "04",
    title: "Suivi Continu",
    description:
      "Des audits qualité réguliers, une ligne de retour ouverte et un gestionnaire de compte dédié font grimper les standards, jamais l'inverse.",
  },
];

export const testimonials = [
  {
    name: "Sarah Lefèvre",
    role: "Directrice des Opérations",
    company: "Méridien Coworking",
    quote:
      "CKM Services a transformé l'expérience de nos membres. Le hall d'accueil brille dès 7h chaque matin, et l'équipe est d'une discrétion remarquable jusqu'à ce qu'on ait besoin d'elle.",
  },
  {
    name: "David Chen",
    role: "Responsable des Sites",
    company: "Nord Logistique",
    quote:
      "Nous sommes passés d'un grand groupe national à CKM Services et avons immédiatement senti la différence en termes de rigueur. Leur superviseur fait le tour des locaux avec nous chaque mois.",
  },
  {
    name: "Amina Torres",
    role: "Administratrice de Cabinet",
    company: "Cabinet Dentaire Bellevue",
    quote:
      "Dans un environnement proche du médical, les standards de désinfection ne sont pas négociables. Les protocoles et la documentation de CKM Services nous offrent une tranquillité totale à chaque contrôle.",
  },
  {
    name: "James Moreau",
    role: "Directeur Général",
    company: "Parc Commercial Riverside",
    quote:
      "Nos sols n'ont jamais été aussi beaux. Le trafic piéton est intense en commerce, et leur programme trimestriel d'entretien des sols les garde comme neufs toute l'année.",
  },
];

export const qualityBadges = [
  { icon: "Leaf", label: "Produits Certifiés Écologiques" },
  { icon: "ShieldCheck", label: "Équipes Formées Hygiène & Sécurité" },
  { icon: "BadgeCheck", label: "Entièrement Assurés" },
  { icon: "Award", label: "Pratiques Alignées Normes LEED" },
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
