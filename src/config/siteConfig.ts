export const siteConfig = {
  name: "La Galett' de Pépette",
  tagline: "Crêpes & Galettes faites maison · Produits locaux",
  description:
    "Food truck artisanal de crêpes et galettes aux produits locaux, sillonnant les communes du pays de Vitré (Ille-et-Vilaine).",

  contact: {
    phone: "06 21 61 77 94",
  },

  founder: {
    name: "Audrey Renou",
    nickname: "Pépette",
    origin: "Broons-sur-Vilaine (35)",
    previousJob: "Aide-soignante – 15 ans",
    training: "École de maître crêpier, Rennes",
    quote: "Je trouve que Pépette sonne bien avec galette.",
    story: [
      "Aide-soignante pendant quinze ans, Audrey Renou a toujours rêvé de routes et de liberté. Un bilan de compétences lui révèle ce qu'elle savait au fond : elle peut se lancer. Elle suit alors une formation à l'École de maître crêpier de Rennes et acquiert le tour de main pour étaler la pâte.",
      "Son surnom depuis le collège, « Pépette », devient le nom de son food truck. Un camion d'occasion, une pâte 100 % maison, des producteurs du coin : La Galett' de Pépette prend la route dans le pays de Vitré.",
    ],
  },

  mascotte: {
    description:
      "Sur le flanc noir du camion, une petite fille en costume breton brandit fièrement le drapeau de Bretagne. C'est le visage de La Galett' de Pépette — le sourire qui vous accueille à chaque arrêt.",
  },

  menu: {
    galettes: [
      { name: "Complète", description: "Jambon, œuf, emmental" },
      { name: "Saucisse", description: "Saucisse locale · Les Délices du cochon" },
      { name: "Tomates séchées", description: "La proposition du moment" },
      { name: "À la carte", description: "Garnitures variables selon la saison" },
    ],
    crepes: [
      { name: "Beurre sucre", description: "La classique, intemporelle" },
      { name: "Confiture", description: "Locale et généreuse" },
      { name: "Wraps froids", description: "Disponibles en été" },
    ],
    note: "La carte évolue au fil des saisons et des arrivages des producteurs.",
  },

  sourcing: [
    { product: "Œufs & jus de pommes", origin: "Ferme bio de Mitan Cranne" },
    { product: "Farine de blé noir",   origin: "Acigné (farine française)" },
    { product: "Saucisses",            origin: "Les Délices du cochon, Broons" },
  ],

  schedule: [
    { day: "Mardi",    time: "11h30 – 14h",  location: "Noyal-sur-Vilaine",  detail: "Parking Hexatel" },
    { day: "Mercredi", time: "16h – 19h30",  location: "Broons-sur-Vilaine", detail: "Parking salle du Verger" },
    { day: "Jeudi",    time: "Midi",         location: "Torcé",              detail: "Près de Vandemoortele" },
    { day: "Vendredi", time: "16h – 20h",   location: "Étrelles",           detail: "Marché" },
  ],

  values: [
    {
      title: "100 % maison",
      description: "Chaque galette et crêpe est préparée sur place, à la minute, avec soin.",
      icon: "star",
    },
    {
      title: "Produits locaux",
      description: "Audrey s'approvisionne directement chez des producteurs du pays de Vitré.",
      icon: "leaf",
    },
    {
      title: "De saison",
      description: "La carte change au fil de l'année pour suivre les arrivages et les saveurs du moment.",
      icon: "heart",
    },
    {
      title: "Maître crêpier",
      description: "Formée à l'École de maître crêpier de Rennes, Audrey maîtrise la pâte et le geste.",
      icon: "check",
    },
  ],

  seo: {
    title: "La Galett' de Pépette | Food Truck Crêpes & Galettes – Pays de Vitré",
    description:
      "Food truck La Galett' de Pépette : crêpes et galettes faites maison aux produits locaux. Audrey Renou, maître crêpier. Noyal-sur-Vilaine, Broons-sur-Vilaine, Torcé, Étrelles.",
  },
};
