export const siteConfig = {
  name: "Lumina Commercial Cleaning",
  shortName: "Lumina",
  tagline: "Unrivaled Commercial Cleaning for Peak Performance",
  description:
    "Premium commercial cleaning, janitorial, and facility maintenance services for offices, retail, and industrial spaces. Eco-friendly, fully insured, and trusted by growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.luminacleaning.com",
  phone: "+1 (555) 010-2024",
  phoneHref: "+15550102024",
  email: "hello@luminacleaning.com",
  // Digits only, country code first, no "+" or spaces — used to build the
  // free wa.me click-to-chat link (no WhatsApp API subscription required).
  whatsapp: "15550102024",
  address: {
    street: "500 Market Street, Suite 300",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/lumina-cleaning",
    facebook: "https://www.facebook.com/luminacleaning",
    instagram: "https://www.instagram.com/luminacleaning",
  },
  serviceAreas: ["Austin", "Dallas", "Houston", "San Antonio"],
};

export const services = [
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    icon: "Building2",
    description:
      "Daily, weekly, or nightly programs that keep desks, common areas, and boardrooms immaculate for every clock-in.",
  },
  {
    slug: "commercial-floor-care",
    title: "Commercial Floor Care",
    icon: "Sparkles",
    description:
      "Stripping, waxing, buffing, and carpet extraction that protects your flooring investment and impresses every visitor.",
  },
  {
    slug: "window-washing",
    title: "Window Washing",
    icon: "AppWindow",
    description:
      "Streak-free interior and exterior glass, from storefronts to high-rise curtain walls, using pure-water systems.",
  },
  {
    slug: "janitorial-services",
    title: "Janitorial Services",
    icon: "ClipboardCheck",
    description:
      "Fully staffed, supervised janitorial teams with custom checklists and quality audits built around your hours.",
  },
  {
    slug: "post-construction-cleanup",
    title: "Post-Construction Cleanup",
    icon: "HardHat",
    description:
      "Debris removal, dust abatement, and detail cleaning that turns a job site into a move-in-ready space, fast.",
  },
  {
    slug: "specialized-disinfection",
    title: "Specialized Disinfection",
    icon: "ShieldCheck",
    description:
      "Hospital-grade, EPA-registered disinfection for high-touch surfaces, healthcare-adjacent spaces, and outbreak response.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We walk your facility with you to understand traffic patterns, priorities, and pain points — no cookie-cutter quotes.",
  },
  {
    step: "02",
    title: "Custom Plan",
    description:
      "You receive a tailored scope, schedule, and transparent pricing built around your budget and operating hours.",
  },
  {
    step: "03",
    title: "Impeccable Service",
    description:
      "Vetted, trained crews execute against a detailed checklist, using eco-friendly products and modern equipment.",
  },
  {
    step: "04",
    title: "Follow-Up",
    description:
      "Ongoing quality audits, an open feedback line, and a dedicated account manager keep standards climbing, not slipping.",
  },
];

export const testimonials = [
  {
    name: "Sarah Whitfield",
    role: "Operations Director",
    company: "Meridian Coworking",
    quote:
      "Lumina transformed how our members experience the space. The lobby sparkles by 7am, every single day, and the team is genuinely invisible until you need them.",
  },
  {
    name: "David Chen",
    role: "Facilities Manager",
    company: "Northgate Logistics",
    quote:
      "We switched from a national chain to Lumina and immediately noticed the difference in accountability. Their supervisor actually walks the floor with us monthly.",
  },
  {
    name: "Amina Torres",
    role: "Practice Administrator",
    company: "Riverside Dental Group",
    quote:
      "Disinfection standards in a healthcare-adjacent space are non-negotiable. Lumina's protocols and documentation give us total peace of mind for every inspection.",
  },
  {
    name: "James O'Neill",
    role: "General Manager",
    company: "Park District Retail",
    quote:
      "Our floors have never looked better. Foot traffic is brutal in retail and their quarterly floor care program keeps us looking brand new year-round.",
  },
];

export const qualityBadges = [
  { icon: "Leaf", label: "Green Seal Certified Products" },
  { icon: "ShieldCheck", label: "OSHA Compliant Teams" },
  { icon: "BadgeCheck", label: "Fully Insured & Bonded" },
  { icon: "Award", label: "LEED-Aligned Practices" },
  { icon: "Users", label: "Background-Checked Staff" },
  { icon: "ThumbsUp", label: "100% Satisfaction Guarantee" },
];

export const premiseTypes = [
  "Office / Corporate",
  "Retail",
  "Healthcare / Medical",
  "Industrial / Warehouse",
  "Education",
  "Hospitality",
  "Other",
];
