// Données locales pour les pages SEO/GEO par ville (/nettoyage-bureaux/[ville]).
// Un slug + un paragraphe local par ville desservie, réutilisés pour générer
// une page dédiée par commune — sur le modèle des pages locales qui
// fonctionnent le mieux pour le référencement local (une page = une ville).

export type Location = {
  slug: string;
  name: string;
  zip: string;
  intro: string;
  neighbors: string[];
};

export const locations: Location[] = [
  {
    slug: "nanterre",
    name: "Nanterre",
    zip: "92000",
    intro:
      "Basés à Nanterre, nous intervenons chaque jour auprès des bureaux, commerces et copropriétés de la ville, de la préfecture au quartier des Groues.",
    neighbors: ["courbevoie", "puteaux", "la-defense"],
  },
  {
    slug: "puteaux",
    name: "Puteaux",
    zip: "92800",
    intro:
      "À deux pas de La Défense, nous entretenons bureaux et parties communes à Puteaux avec la même exigence que sur nos sites nanterriens.",
    neighbors: ["la-defense", "courbevoie", "nanterre"],
  },
  {
    slug: "courbevoie",
    name: "Courbevoie",
    zip: "92400",
    intro:
      "De Bécon aux tours de La Défense, nos équipes interviennent à Courbevoie pour l'entretien régulier de bureaux et commerces.",
    neighbors: ["la-defense", "puteaux", "levallois-perret"],
  },
  {
    slug: "la-defense",
    name: "La Défense",
    zip: "92400",
    intro:
      "Premier quartier d'affaires d'Europe : nos équipes s'adaptent aux contraintes d'accès et aux horaires des tours et plateaux de bureaux de La Défense.",
    neighbors: ["puteaux", "courbevoie", "nanterre"],
  },
  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    zip: "92100",
    intro:
      "Bureaux, commerces et sièges d'entreprise : nous intervenons à Boulogne-Billancourt avec un devis sous 48h et sans engagement long.",
    neighbors: ["levallois-perret", "nanterre", "colombes"],
  },
  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    zip: "92300",
    intro:
      "Nos équipes assurent l'entretien courant de bureaux et locaux commerciaux à Levallois-Perret, avec un interlocuteur direct par téléphone ou WhatsApp.",
    neighbors: ["courbevoie", "boulogne-billancourt", "colombes"],
  },
  {
    slug: "colombes",
    name: "Colombes",
    zip: "92700",
    intro:
      "De l'entretien quotidien au nettoyage post-chantier, nous intervenons à Colombes pour les entreprises et commerces de toutes tailles.",
    neighbors: ["levallois-perret", "boulogne-billancourt", "nanterre"],
  },
  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    zip: "92500",
    intro:
      "Bureaux, copropriétés et commerces à Rueil-Malmaison : des équipes formées, des produits écologiques certifiés, et un devis clair sous 48h.",
    neighbors: ["suresnes", "nanterre", "courbevoie"],
  },
  {
    slug: "suresnes",
    name: "Suresnes",
    zip: "92150",
    intro:
      "Nous entretenons bureaux et locaux professionnels à Suresnes, avec la même rigueur que sur l'ensemble de notre zone d'intervention en Île-de-France.",
    neighbors: ["rueil-malmaison", "nanterre", "puteaux"],
  },
  {
    slug: "paris",
    name: "Paris",
    zip: "75000",
    intro:
      "Basés à Nanterre, nous intervenons dans tout Paris et sa proche périphérie pour l'entretien de bureaux, commerces et sites en fin de chantier.",
    neighbors: ["nanterre", "la-defense", "boulogne-billancourt"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
