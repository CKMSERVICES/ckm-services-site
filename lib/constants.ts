export const siteConfig = {
  name: "CKM Services",
  shortName: "CKM",
  tagline: "Le nettoyage pro, sans la paperasse",
  description:
    "Nettoyage commercial premium, services de conciergerie et entretien de locaux pour bureaux, commerces et sites industriels. Écologique, entièrement assuré, et approuvé par des entreprises en croissance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ckmservices.fr",
  phone: "06 82 56 88 44",
  phoneHref: "+33682568844",
  email: "ckmservices@outlook.fr",
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
    slug: "autres-besoins",
    title: "Autres Besoins",
    icon: "Sparkles",
    description:
      "Un besoin spécifique qui ne rentre pas dans les cases ? Décrivez-nous votre situation, on adapte nos équipes et notre planning en conséquence.",
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
