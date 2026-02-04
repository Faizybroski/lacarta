import img1 from "/assets/activitiesHero.png";
import img2 from "/assets/Food.png";
import img3 from "/assets/Fish.png";

export const hotelsData = {
  hero: {
    title: "THE BEST HOTELS IN CARTAGENA",
    subtitle: "Luxury, boutique, and unique stays",
    bgImage: img1,
    path: "La Carta - Cartagena Culture & Tourism > Hotels",
    cta: "https://lacarta.co/cartagena/resources/",
  },

  premiumListings: [
    {
      id: 1,
      title: "Sofitel Legend Santa Clara",
      subtitle: "Luxury Historic Hotel",
      image: img3,
      rating: 4.9,
      href: "/Detailed-Hotel",
    },
    {
      id: 2,
      title: "Hotel Casa San Agustin",
      subtitle: "Boutique Luxury Stay",
      image: img3,
      rating: 4.8,
      href: "/Detailed-Hotel",
    },
    {
      id: 3,
      title: "Movich Cartagena",
      subtitle: "Rooftop & City Views",
      image: img3,
      rating: 4.7,
      href: "/Detailed-Hotel",
    },
    {
      id: 4,
      title: "Hotel Charleston Santa Teresa",
      subtitle: "Colonial Elegance",
      image: img3,
      rating: 4.8,
      href: "/Detailed-Hotel",
    },
  ],

  categories: [
    { id: 1, title: "Luxury Hotels", image: img3, href: "/Detailed-Hotel" },
    { id: 2, title: "Boutique Hotels", image: img3, href: "/Detailed-Hotel" },
    { id: 3, title: "Beachfront Hotels", image: img3, href: "/Detailed-Hotel" },
    { id: 4, title: "Budget Stays", image: img3, href: "/Detailed-Hotel" },
    { id: 5, title: "Family Friendly", image: img3, href: "/Detailed-Hotel" },
    { id: 6, title: "Historic Hotels", image: img3, href: "/Detailed-Hotel" },
    { id: 7, title: "Resorts", image: img3, href: "/Detailed-Hotel" },
    { id: 8, title: "Apart-Hotels", image: img3, href: "/Detailed-Hotel" },
  ],
};
