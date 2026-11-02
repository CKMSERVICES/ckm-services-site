// Données locales pour les pages SEO/GEO par ville (/nettoyage-bureaux/[ville]).
// Un slug + un paragraphe local par ville desservie, réutilisés pour générer
// une page dédiée par commune — sur le modèle des pages locales qui
// fonctionnent le mieux pour le référencement local (une page = une ville).

export type Location = {
  slug: string;
  name: string;
  zip: string;
  intro: string;
  quartiers: string[];
  focus: string;
  localFaqQuestion: string;
  localFaqAnswer: string;
  neighbors: string[];
};

export const locations: Location[] = [
  {
    slug: "nanterre",
    name: "Nanterre",
    zip: "92000",
    intro:
      "Basés à Nanterre, nous intervenons chaque jour auprès des bureaux, commerces et copropriétés de la ville, de la préfecture au quartier des Groues.",
    quartiers: ["Préfecture","Quartier d'Affaires (La Boule)","Les Groues","Université Paris Nanterre"],
    focus:
      "Entre la préfecture des Hauts-de-Seine, le quartier d'affaires de La Boule et le futur pôle tertiaire des Groues, Nanterre concentre administrations, sièges sociaux et locaux universitaires — des profils que nous connaissons par cœur, puisque nous y sommes basés.",
    localFaqQuestion: "Intervenez-vous près de la Préfecture ou du quartier de La Boule ?",
    localFaqAnswer:
      "Oui, c'est notre zone de départ : nos équipes partent de Nanterre chaque matin, ce qui permet d'intervenir tôt ou en horaires décalés sans frais de déplacement supplémentaires.",
    neighbors: ["courbevoie", "puteaux", "la-defense"],
  },
  {
    slug: "puteaux",
    name: "Puteaux",
    zip: "92800",
    intro:
      "À deux pas de La Défense, nous entretenons bureaux et parties communes à Puteaux avec la même exigence que sur nos sites nanterriens.",
    quartiers: ["Quartier des Bergères","Puteaux-Village","République","La Défense (côté Puteaux)"],
    focus:
      "Puteaux cumule tours de bureaux côté Défense et quartiers plus résidentiels comme Puteaux-Village : nos équipes s'adaptent aussi bien aux badges d'accès des immeubles de grande hauteur qu'aux horaires des commerces de proximité.",
    localFaqQuestion: "Savez-vous gérer les contraintes d'accès des immeubles côté La Défense ?",
    localFaqAnswer:
      "Oui, nos équipes ont l'habitude des badges visiteurs, des horaires de sécurité et des procédures d'accès propres aux tours de bureaux de ce secteur.",
    neighbors: ["la-defense", "courbevoie", "nanterre"],
  },
  {
    slug: "courbevoie",
    name: "Courbevoie",
    zip: "92400",
    intro:
      "De Bécon aux tours de La Défense, nos équipes interviennent à Courbevoie pour l'entretien régulier de bureaux et commerces.",
    quartiers: ["Bécon-les-Bruyères","Faubourg de l'Arche","Charras","La Défense (tours côté Courbevoie)"],
    focus:
      "De Bécon-les-Bruyères, plus résidentiel, aux tours du Faubourg de l'Arche, Courbevoie héberge autant de PME de quartier que de grands sièges sociaux — deux publics que nous servons avec le même niveau d'exigence.",
    localFaqQuestion: "Intervenez-vous aussi bien à Bécon qu'au Faubourg de l'Arche ?",
    localFaqAnswer:
      "Oui, ces deux secteurs de Courbevoie font partie de notre zone régulière, que votre local soit une boutique de quartier ou un plateau de bureaux en tour.",
    neighbors: ["la-defense", "puteaux", "levallois-perret"],
  },
  {
    slug: "la-defense",
    name: "La Défense",
    zip: "92400",
    intro:
      "Premier quartier d'affaires d'Europe : nos équipes s'adaptent aux contraintes d'accès et aux horaires des tours et plateaux de bureaux de La Défense.",
    quartiers: ["Esplanade","CNIT","Grande Arche","Quartier Michelet"],
    focus:
      "Premier quartier d'affaires d'Europe, La Défense impose des contraintes propres : badges, ascenseurs réservés, horaires de sécurité stricts. Nos équipes connaissent ces procédures et interviennent souvent tôt le matin ou en soirée pour ne jamais gêner votre activité.",
    localFaqQuestion: "Pouvez-vous intervenir en dehors des horaires de bureau à La Défense ?",
    localFaqAnswer:
      "Oui, c'est même la norme sur ce secteur : la majorité de nos interventions à La Défense se font tôt le matin ou après le départ des équipes, selon les contraintes d'accès de votre immeuble.",
    neighbors: ["puteaux", "courbevoie", "nanterre"],
  },
  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    zip: "92100",
    intro:
      "Bureaux, commerces et sièges d'entreprise : nous intervenons à Boulogne-Billancourt avec un devis sous 24h et sans engagement long.",
    quartiers: ["Pont de Sèvres","Rives de Seine","Le Trapèze","Marcel Sembat"],
    focus:
      "Entre les sièges sociaux des Rives de Seine et le quartier du Trapèze, né de la reconversion des anciennes usines Renault, Boulogne-Billancourt mélange grands comptes et commerces de centre-ville — nous adaptons notre offre à chaque configuration.",
    localFaqQuestion: "Intervenez-vous dans le quartier du Trapèze ou vers les Rives de Seine ?",
    localFaqAnswer:
      "Oui, ces deux secteurs de Boulogne-Billancourt sont couverts par nos équipes, qu'il s'agisse d'un siège social ou d'un local commercial récent.",
    neighbors: ["levallois-perret", "nanterre", "colombes"],
  },
  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    zip: "92300",
    intro:
      "Nos équipes assurent l'entretien courant de bureaux et locaux commerciaux à Levallois-Perret, avec un interlocuteur direct par téléphone ou WhatsApp.",
    quartiers: ["Centre-ville","Front de Seine","Champerret"],
    focus:
      "Ville dense où se concentrent de nombreuses agences, startups et PME, Levallois-Perret demande une grande réactivité : nos équipes interviennent sur des créneaux courts, souvent tôt le matin avant l'arrivée des collaborateurs.",
    localFaqQuestion: "Pouvez-vous intervenir tôt le matin dans le centre de Levallois ?",
    localFaqAnswer:
      "Oui, de nombreux clients à Levallois-Perret nous demandent un passage avant l'ouverture des bureaux — un format que nous proposons sans supplément particulier.",
    neighbors: ["courbevoie", "boulogne-billancourt", "colombes"],
  },
  {
    slug: "colombes",
    name: "Colombes",
    zip: "92700",
    intro:
      "De l'entretien quotidien au nettoyage post-chantier, nous intervenons à Colombes pour les entreprises et commerces de toutes tailles.",
    quartiers: ["Petit Colombes","Stade Yves-du-Manoir","Le Plateau"],
    focus:
      "Entre zones pavillonnaires, commerces de proximité et secteurs d'activité comme celui du Petit Colombes, la ville a un tissu économique varié. Nous adaptons la fréquence de passage à la taille réelle de chaque structure, plutôt que d'appliquer un forfait standard.",
    localFaqQuestion: "Travaillez-vous avec les petites structures du Petit Colombes ?",
    localFaqAnswer:
      "Oui, nous intervenons aussi bien chez de petites entreprises que sur des sites plus grands — la fréquence et le forfait sont ajustés à la taille réelle de vos locaux.",
    neighbors: ["levallois-perret", "boulogne-billancourt", "nanterre"],
  },
  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    zip: "92500",
    intro:
      "Bureaux, copropriétés et commerces à Rueil-Malmaison : des équipes formées, des produits écologiques certifiés, et un devis clair sous 24h.",
    quartiers: ["Centre-ville historique","Rueil 2000","Quartier du Château","Zone d'activité de Rueil"],
    focus:
      "Ville marquée par l'implantation de grands sièges et par des zones d'activité denses, Rueil-Malmaison compte aussi de nombreuses copropriétés résidentielles — un double profil que nous retrouvons chaque semaine sur nos plannings.",
    localFaqQuestion: "Intervenez-vous dans la zone d'activité de Rueil ou à Rueil 2000 ?",
    localFaqAnswer:
      "Oui, nous couvrons l'ensemble de Rueil-Malmaison, de la zone d'activité aux copropriétés résidentielles de Rueil 2000 et du centre historique.",
    neighbors: ["suresnes", "nanterre", "courbevoie"],
  },
  {
    slug: "suresnes",
    name: "Suresnes",
    zip: "92150",
    intro:
      "Nous entretenons bureaux et locaux professionnels à Suresnes, avec la même rigueur que sur l'ensemble de notre zone d'intervention en Île-de-France.",
    quartiers: ["Mont Valérien","Centre-ville","Bords de Seine"],
    focus:
      "Plus résidentielle que ses voisines de La Défense, Suresnes compte surtout des PME, commerces et copropriétés en centre-ville et le long des bords de Seine — un cadre où la relation de proximité compte autant que la prestation elle-même.",
    localFaqQuestion: "Intervenez-vous pour des copropriétés dans le centre de Suresnes ?",
    localFaqAnswer:
      "Oui, les parties communes de copropriétés font partie de nos interventions régulières à Suresnes, au même titre que les bureaux et commerces.",
    neighbors: ["rueil-malmaison", "nanterre", "puteaux"],
  },
  {
    slug: "paris",
    name: "Paris",
    zip: "75000",
    intro:
      "Basés à Nanterre, nous intervenons dans tout Paris et sa proche périphérie pour l'entretien de bureaux, commerces et sites en fin de chantier.",
    quartiers: ["Paris 16e","Paris 17e","Paris 8e"],
    focus:
      "Basés à Nanterre, nous intervenons en priorité dans l'ouest parisien — 16e, 17e et 8e arrondissements — pour limiter les temps de trajet et garantir la même réactivité que sur nos communes des Hauts-de-Seine. Pour un autre arrondissement, contactez-nous pour vérifier la faisabilité.",
    localFaqQuestion: "Intervenez-vous dans tout Paris ou seulement certains arrondissements ?",
    localFaqAnswer:
      "Nous intervenons en priorité dans l'ouest parisien (16e, 17e, 8e), proche de notre base à Nanterre. Pour un autre arrondissement, contactez-nous : la faisabilité dépend de la localisation exacte et de la fréquence souhaitée.",
    neighbors: ["nanterre", "la-defense", "boulogne-billancourt"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
