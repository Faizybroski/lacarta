import img1 from "/assets/activitiesHero.png";
import img2 from "/assets/Food.png";
import img3 from "/assets/Fish.png";

export const beachesData = {
  hero: {
    title: "THE BEST BEACHES IN CARTAGENA",
    subtitle: "Relax, swim, and explore the Caribbean coast",
    bgImage: img1,
    path: "La Carta - Cartagena Culture & Tourism > Beaches",
    cta: "https://lacarta.co/cartagena/resources/",
  },

  premiumListings: [
    {
      id: 1,
      title: "Playa Blanca",
      subtitle: "Crystal Clear Waters",
      image: img3,
      rating: 4.6,
      href: "/Detailed-Beach",
    },
    {
      id: 2,
      title: "Islas del Rosario",
      subtitle: "Paradise Island Beaches",
      image: img3,
      rating: 4.9,
      href: "/Detailed-Beach",
    },
    {
      id: 3,
      title: "Playa Bocagrande",
      subtitle: "City Beach Experience",
      image: img3,
      rating: 4.4,
      href: "/Detailed-Beach",
    },
  ],

  categories: [
    { id: 1, title: "Island Beaches", image: img3, href: "/Detailed-Beach" },
    { id: 2, title: "Public Beaches", image: img3, href: "/Detailed-Beach" },
    { id: 3, title: "Private Beaches", image: img3, href: "/Detailed-Beach" },
  ],
};
