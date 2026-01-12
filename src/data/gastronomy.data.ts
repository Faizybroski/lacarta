import img1 from "../assets/activitiesHero.png";
import img2 from "../assets/Food.png";
import img3 from "../assets/Fish.png";

export const gastronomyData = {
  hero: {
    title: "THE BEST GASTRONOMY IN CARTAGENA",
    subtitle: "Top restaurants, flavors, and culinary experiences",
    bgImage: img1,
    path: "La Carta - Cartagena Culture & Tourism > Gastronomy",
    cta: "https://lacarta.co/cartagena/resources/",
  },

  premiumListings: [
    {
      id: 1,
      title: "La Brioche Royal",
      subtitle: "Best French Breakfast",
      image: img3,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Carmen Cartagena",
      subtitle: "Fine Dining Experience",
      image: img3,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Celele",
      subtitle: "Modern Caribbean Cuisine",
      image: img3,
      rating: 4.8,
    },
    {
      id: 4,
      title: "El Baron",
      subtitle: "Cocktails & Tapas",
      image: img3,
      rating: 4.7,
    },
  ],

  categories: [
    { id: 1, title: "Fine Dining", image: img3 },
    { id: 2, title: "Local Cuisine", image: img3 },
    { id: 3, title: "Street Food", image: img3 },
    { id: 4, title: "Cafés", image: img3 },
    { id: 5, title: "Bakeries", image: img3 },
    { id: 6, title: "Seafood", image: img3 },
    { id: 7, title: "Cocktail Bars", image: img3 },
    { id: 8, title: "Desserts", image: img3 },
  ],
};
