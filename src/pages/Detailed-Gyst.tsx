import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Clock,
  Mail,
  Shell,
  Palmtree,
  Footprints,
  Fish,
  Waves,
  Martini,
  Droplets,
  QrCode,
  Thermometer,
  LifeBuoy,
  MessageCircle,
  Chrome,
  Share2,
  Navigation,
  ChevronDown,
  Fuel,
  Ship,
  Compass,
  CalendarDays,
  Luggage,
  Radio,
  ExternalLink,
  Calendar,
  Plane,
  Bath,
  Wifi,
  Umbrella,
  TreePalm,
  WavesIcon,
  Zap,
  Wind,
  Sun,
  Anchor,
  Globe,
  Phone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Utensils,
  GlassWater,
  Coffee,
  Wine,
  Music,
  Users,
  Camera,
  Leaf,
  Sparkles,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const thumbnails = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
];

const sliderPlaces = [
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    category: "Foodie",
    title: "LA GRANDE – MONT ROYAL",
    subtitle: "Best French Breakfast",
    rating: 4.5,
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    category: "Grill",
    title: "THE BULL HOUSE",
    subtitle: "Premium Steak & BBQ",
    rating: 4.2,
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    category: "Asian Fusion",
    title: "KARAMI FUSION",
    subtitle: "Modern Pan-Asian Cuisine",
    rating: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    category: "Italian",
    title: "BELLA NAPOLI",
    subtitle: "Authentic Wood-Fired Pizza",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
    category: "Cafe",
    title: "URBAN BREW",
    subtitle: "Specialty Coffee & Brunch",
    rating: 4.3,
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    category: "Fine Dining",
    title: "L'ÉTOILE",
    subtitle: "Contemporary French Cuisine",
    rating: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800",
    category: "Desserts",
    title: "SWEET HAVEN",
    subtitle: "Artisan Cakes & Pastries",
    rating: 4.1,
  },
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
    category: "Fast Food",
    title: "STACK BURGERS",
    subtitle: "Gourmet Smash Burgers",
    rating: 4.4,
  },
  {
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800",
    category: "Seafood",
    title: "BLUE OCEAN",
    subtitle: "Fresh Catch Daily",
    rating: 4.6,
  },
];

const dealsSlides = [
  {
    title: "Snorkeling + Lunch Combo",
    desc: "Full equipment, guided tour & fresh seafood lunch included. Valid till March 2025.",
    highlight: "BOOK NOW",
  },
  {
    title: "Group Discount 10% Off",
    desc: "Book for 4+ people and get 10% off. Life jackets & transport included.",
    highlight: "LIMITED",
  },
  {
    title: "Sunset Snorkel Package",
    desc: "Evening snorkeling with cocktails on return. Reserve now.",
    highlight: "POPULAR",
  },
];

const categories = [
  { label: "Activities", rating: 4.6 },
  { label: "Hotels", rating: 3.8 },
  { label: "Beaches", rating: 4.4 },
  { label: "Boating", rating: 4.8 },
  { label: "Real Estate", rating: 4.5 },
  { label: "Gastronomy", rating: 4.2 },
];

const MAX_RATING = 5;

const reviews = [
  {
    name: "El Gordo",
    date: "Santo - 1 year",
    rating: 2,
    location: "Saint-Lambert",
    text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. The quesadilla as always amazing and the sauce delicate only 💯! Thank you all for such an amazing experience every time and thank you for gifting me a glass of wine. So wonderful and sun-kissed 🤍",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60",
    btnLabel: "El Gordo",
  },
  {
    name: "El Gordo",
    date: "Santo - 1 year",
    rating: 0,
    location: "Saint-Lambert",
    text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. Truly a place that defines the spirit of Cartagena. Thank you all for such an amazing experience every time and thank you for gifting me a glass of wine. So wonderful and sun-kissed 🤍",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60",
    btnLabel: "El Gordo",
  },
  {
    name: "El Gordo",
    date: "Santo - 1 year",
    rating: 4,
    location: "Saint-Lambert",
    text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. Truly a place that defines the spirit of Cartagena. The quesadilla as always amazing and the sauce delicate only 💯! So wonderful and sun-kissed 🤍",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60",
    btnLabel: "El Gordo",
  },
];

const faqData = [
  {
    question: "How do I get there?",
    answer:
      "You can reach the location via private transport, taxi services, or arranged transfers. Detailed directions will be shared after booking.",
  },
  {
    question: "Is it family-friendly?",
    answer:
      "Yes, the activity is suitable for families including children aged 6+. Life vests and beginner equipment are always available.",
  },
  {
    question: "Is Wi-Fi available?",
    answer: "Wi-Fi is available at the base camp and on the transfer boat.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made within the allowed period are eligible for a full refund. Please refer to the booking terms for exact details.",
  },
  {
    question: "How far is the location?",
    answer:
      "The snorkeling site is approximately 45–60 minutes by boat from Cartagena marina. Transfer is included in most packages.",
  },
];

const hoursData = [
  { day: "Monday", open: "12:00", close: "10:00 pm" },
  { day: "Tuesday", open: "12:00", close: "10:00 pm" },
  { day: "Wednesday", open: "12:00", close: "10:00 pm" },
  { day: "Thursday", open: "12:00", close: "11:00 pm" },
  { day: "Friday", open: "12:00", close: "11:00 pm" },
  { day: "Saturday", open: "11:00", close: "11:00 pm" },
  { day: "Sunday", open: "11:00", close: "9:00 pm" },
];

const specialties = [
  { label: "Eco-Friendly Bungalows", sub: "Lorem text something" },
  { label: "Accessible Via Speedboat", sub: "Via our own speedboat" },
  { label: "Oceanic & Jungle Views", sub: "Your bedroom canvas" },
  { label: "Local Mixed Cuisine", sub: "Your Caribbean farm to table" },
  { label: "Nearby Activities", sub: "Something and activities here" },
  { label: "Peaceful & Secluded", sub: "Lorem text something here" },
];

const tagRoutes = {
  Beaches: "/Beaches",
  Accommodations: "/hotels",
  Boating: "/Boating",
  "Real Estate": "/realState",
  Activities: "/Activities",
  Gastronomy: "/Gastronomy",
};

function StarRow({ count, total = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array(total)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < count ? "fill-gold text-gold" : " text-gold"}`}
          />
        ))}
    </div>
  );
}

function HorizontalSlider({ items }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -230 : 230,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute hidden sm:flex left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 md:-translate-x-4
                           h-10 w-10 rounded-full bg-gradient-to-r from-gold to-gold-light
                           flex items-center justify-center
                           text-white shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>
      {/* <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-l from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-gold transition"
      >
        <ChevronLeft size={14} />
      </button> */}
      <div
        ref={scrollRef}
        // className="flex gap-3 md:gap-4 overflow-x-auto pb-2"
        className="w-full flex gap-2 sm:gap-4 px-3 sm:px-0 overflow-x-auto scroll-smooth snap-x snap-mandatory  no-scrollbar"

        // style={{
        //   scrollSnapType: "x mandatory",
        //   scrollbarWidth: "none",
        //   msOverflowStyle: "none",
        // }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
                  // carousel-card
                  // w-full
                  // sm:w-[calc(50%-12px)]
                  // lg:w-[calc(25%-18px)]
                   carousel-card
                   px-1 sm:px-0
    snap-start
    shrink-0
    basis-full

    sm:basis-[calc((100%-16px)/2)]
    lg:basis-[calc((100%-48px)/4)]
    // basis-[100%]        /* 1 card mobile */
    // sm:basis-[50%]      /* 2 cards */
    // md:basis-[33.333%]  /* 3 cards */
    // lg:basis-[25%]      /* 4 cards */
    //  basis-full          /* 1 card mobile */
    // sm:basis-1/2        /* 2 cards */
    // md:basis-1/3        /* 3 cards */
    // lg:basis-1/4        /* 4 cards */
    // basis-[85%]          /* mobile: 1 card */
    // sm:basis-[48%]       /* small: 2 cards */
    // md:basis-[31%]       /* medium: 3 cards */
    // lg:basis-[23%]       /* large: 4 cards */
                "
            style={{ scrollSnapAlign: "start" }}
          >
            <Card className="h-full relative rounded-2xl shadow-md overflow-hidden bg-white">
              <span className="absolute rounded-full shadow-lg p-2 top-3 right-3 bg-yellow-400">
                <Heart className="text-black" />
              </span>
              <div className="absolute top-4 left-4 border-white border-4  bg-white/30 backdrop-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-16 object-cover"
                />
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <CardContent className="p-4">
                <h6 className="text-sm font-bold text-gray-600">
                  {item.category}
                </h6>

                <h3 className="text-lg font-semibold font-antigua text-black truncate">
                  {item.title}
                </h3>

                <p className="text-xs font-normal truncate text-gray-600">
                  {item.subtitle}
                </p>

                <div className="flex mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(item.rating)
                          ? "fill-gold text-gold"
                          : "text-gold"
                      }`}
                    />
                  ))}
                </div>

                <button className="mt-3 text-[#22c35d] font-semibold underline underline-offset-2">
                  MENU
                </button>
              </CardContent>
            </Card>
            {/* <div className="relative h-[120px] sm:h-[130px] md:h-[200px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 border-white border-4  bg-white/30 backdrop-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-16 object-cover"
                />
              </div>
              <button className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7  rounded-full flex items-center justify-center  shadow-lg  bg-white/30 backdrop-md">
                <Heart size={11} className=" fill-white text-white" />
              </button>
            </div>
            <div className="p-2.5 md:p-3">
              <p className="font-bold text-black text-xs md:text-sm leading-tight font-antigua">
                {item.title}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                {item.location}
              </p>
              <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                <StarRow count={item.rating} />
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute hidden sm:flex right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4
                           h-10 w-10 rounded-full bg-gradient-to-l from-gold to-gold-light
                           flex items-center justify-center
                           text-white shadow-lg hover:scale-105 transition"
      >
        <ChevronRight />
      </button>
      {/* <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-green transition"
      >
        <ChevronRight size={14} />
      </button> */}
    </div>
    // <div className="relative px-1">
    //   <button
    //     onClick={() => scroll("left")}
    //     className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-l from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-gold transition"
    //   >
    //     <ChevronLeft size={14} />
    //   </button>
    //   <div
    //     ref={scrollRef}
    //     className="flex gap-3 md:gap-4 overflow-x-auto pb-2"
    //     style={{
    //       scrollSnapType: "x mandatory",
    //       scrollbarWidth: "none",
    //       msOverflowStyle: "none",
    //     }}
    //   >
    //     {items.map((item, i) => (
    //       <div
    //         key={i}
    //         className="min-w-[170px] sm:min-w-[190px] md:min-w-[210px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow flex-shrink-0"
    //         style={{ scrollSnapAlign: "start" }}
    //       >
    //         <div className="relative h-[120px] sm:h-[130px] md:h-[145px] overflow-hidden">
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    //           />
    //           <div className="absolute top-2 left-2 border-white border-4  bg-white/30 backdrop-md">
    //             <img
    //               src={item.image}
    //               alt={item.title}
    //               className="h-10 w-16 object-cover"
    //             />
    //           </div>

    //           <button className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 bg-yellow-400 rounded-full flex items-center justify-center">
    //             <Heart size={11} className="text-black" />
    //           </button>
    //         </div>
    //         <div className="p-2.5 md:p-3">
    //           <p className="font-bold text-black text-xs md:text-sm leading-tight font-antigua">
    //             {item.title}
    //           </p>
    //           <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
    //             {item.location}
    //           </p>
    //           <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
    //             <StarRow count={item.rating} />
    //             <span className="text-[10px] md:text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
    //               {item.badge}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     onClick={() => scroll("right")}
    //     className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-green transition"
    //   >
    //     <ChevronRight size={14} />
    //   </button>
    // </div>
  );
}

function Horizontal2Slider({ items }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -230 : 230,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute hidden sm:flex left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 md:-translate-x-4
                           h-10 w-10 rounded-full bg-gradient-to-r from-gold to-gold-light
                           flex items-center justify-center
                           text-white shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>
      {/* <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-l from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-gold transition"
      >
        <ChevronLeft size={14} />
      </button> */}
      <div
        ref={scrollRef}
        // className="flex gap-3 md:gap-4 overflow-x-auto pb-2"
        className="w-full flex gap-2 sm:gap-4 px-3 sm:px-0 overflow-x-auto scroll-smooth snap-x snap-mandatory  no-scrollbar"

        // style={{
        //   scrollSnapType: "x mandatory",
        //   scrollbarWidth: "none",
        //   msOverflowStyle: "none",
        // }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
                  // carousel-card
                  // w-full
                  // sm:w-[calc(50%-12px)]
                  // lg:w-[calc(25%-18px)]
                   carousel-card
                   px-1 sm:px-0
    snap-start
    shrink-0
    basis-full

    sm:basis-[calc((100%-16px)/2)]
    lg:basis-[calc((100%-48px)/4)]
    // basis-[100%]        /* 1 card mobile */
    // sm:basis-[50%]      /* 2 cards */
    // md:basis-[33.333%]  /* 3 cards */
    // lg:basis-[25%]      /* 4 cards */
    //  basis-full          /* 1 card mobile */
    // sm:basis-1/2        /* 2 cards */
    // md:basis-1/3        /* 3 cards */
    // lg:basis-1/4        /* 4 cards */
    // basis-[85%]          /* mobile: 1 card */
    // sm:basis-[48%]       /* small: 2 cards */
    // md:basis-[31%]       /* medium: 3 cards */
    // lg:basis-[23%]       /* large: 4 cards */
                "
            style={{ scrollSnapAlign: "start" }}
          >
            <Card className="h-full relative rounded-2xl shadow-md overflow-hidden bg-white">
              <span className="absolute rounded-full shadow-lg p-2 top-3 right-3 bg-white/30 backdrop-md">
                <Heart className="fill-white" />
              </span>
              <div className="absolute top-4 left-4 border-white border-4  bg-white/30 backdrop-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-16 object-cover"
                />
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <CardContent className="p-4">
                <h6 className="text-sm font-bold text-gray-600">
                  {item.category}
                </h6>

                <h3 className="text-lg font-semibold font-antigua text-black truncate">
                  {item.title}
                </h3>

                <p className="text-xs font-normal truncate text-gray-600">
                  {item.subtitle}
                </p>

                <div className="flex mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(item.rating)
                          ? "fill-gold text-gold"
                          : "text-gold"
                      }`}
                    />
                  ))}
                </div>

                <button className="mt-3 text-[#22c35d] font-semibold underline underline-offset-2">
                  MENU
                </button>
              </CardContent>
            </Card>
            {/* <div className="relative h-[120px] sm:h-[130px] md:h-[200px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 border-white border-4  bg-white/30 backdrop-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-16 object-cover"
                />
              </div>
              <button className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7  rounded-full flex items-center justify-center  shadow-lg  bg-white/30 backdrop-md">
                <Heart size={11} className=" fill-white text-white" />
              </button>
            </div>
            <div className="p-2.5 md:p-3">
              <p className="font-bold text-black text-xs md:text-sm leading-tight font-antigua">
                {item.title}
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                {item.location}
              </p>
              <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                <StarRow count={item.rating} />
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute hidden sm:flex right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4
                           h-10 w-10 rounded-full bg-gradient-to-l from-gold to-gold-light
                           flex items-center justify-center
                           text-white shadow-lg hover:scale-105 transition"
      >
        <ChevronRight />
      </button>
      {/* <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-gold to-gold-light text-white flex items-center justify-center shadow hover:bg-green transition"
      >
        <ChevronRight size={14} />
      </button> */}
    </div>
  );
}

export default function GastronomyDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const [menuTab, setMenuTab] = useState("Wine");
  const [dealIdx, setDealIdx] = useState(0);

  return (
    <div className="bg-white font-sans w-full overflow-x-hidden">
      {/* <a
        href="https://wa.me/573151234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      >
        <MessageCircle size={24} className="text-white" />
      </a> */}

      {/* HERO */}
      <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-12 pt-5 md:pt-6 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[10px] md:text-xs text-gray-400 mb-3 md:mb-4 leading-none">
            La Carta &ndash; Cartagena Culture &amp; Tourism &rsaquo; Gastronomy
            &rsaquo; Fine Dining &rsaquo;{" "}
            <span className="text-gray-700 font-semibold">
              Knot d&apos;Asie
            </span>
          </p>
          <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-6">
            {/* LEFT: Title + Info */}
            <div className="flex items-start gap-3 flex-1 min-w-0 w-full lg:p-9 md:p-9 sm:p-9">
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none font-antigua">
                    Knot d&apos;Asie
                  </h1>
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red text-white text-[10px] md:text-xs font-extrabold flex items-center justify-center shrink-0 shadow">
                    K
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <p className="text-xs md:text-sm text-gray-500">
                    Gastronomy / Fine Dining / Fusion
                  </p>
                  <p className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-gray-700 uppercase">
                    KNOT D&apos;ASIE
                  </p>
                </div>
                <p className="mt-2 md:mt-6 text-sm md:text-base lg:text-[20px] text-gray-600 leading-snug font-semibold">
                  Eco-Luxury Glamping Experience in Isla Barú
                </p>
                <div className="mt-3 md:mt-6">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">
                    Starting From
                  </p>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-antigua">
                    $177 &ndash; $515{" "}
                    <span className="text-sm md:text-base font-normal text-gray-500">
                      / night
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-3 md:mt-6 flex-wrap">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  <span className="text-sm font-semibold cursor-pointer ml-1 text-black font-antigua">
                    Leave Review
                  </span>
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black text-white text-[9px] md:text-xs flex items-center justify-center font-bold leading-none">
                    ?
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-10 flex-wrap">
                  <button className="bg-gradient-to-l from-green-light to-green hover:bg-green transition text-white font-bold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full shadow">
                    Reserve Now
                  </button>
                  <button className="bg-gradient-to-r from-gold to-gold-light hover:bg-gold transition text-white font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow flex items-center gap-1.5 md:gap-2">
                    <span>🎁</span> Nos Promo
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Main image + Thumbnails */}
            <div className="flex items-start gap-2 md:gap-2.5 w-full lg:w-auto lg:shrink-0 mt-4 lg:mt-0">
              <div
                className="rounded-2xl overflow-hidden shadow-lg flex-1 lg:flex-none"
                style={{ height: "auto" }}
              >
                <div className="lg:hidden w-full h-full">
                  <img
                    src={thumbnails[activeImg]}
                    alt="Snorkeling"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div
                  className="hidden lg:block"
                  style={{ width: "440px", height: "390px" }}
                >
                  <img
                    src={thumbnails[activeImg]}
                    alt="Snorkeling"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2 shrink-0">
                {thumbnails.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-14 h-16 sm:w-16 sm:h-[72px] md:w-[70px] md:h-[90px] rounded-xl overflow-hidden cursor-pointer transition-all flex-shrink-0 ${i === activeImg ? "ring-2 ring-blue-500 ring-offset-1" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT + SIDEBAR */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[1.45fr_1fr]">
            {/* ── LEFT COLUMN ── */}
            <div className="space-y-4 md:space-y-5">
              {/* About */}
              <div className="bg-white rounded-2xl p-4 md:p-6">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                  About
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua mb-3 md:mb-4">
                  About Rodian Restaurants
                </h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Nestled on the pristine shores of{" "}
                  <strong className="text-black">Isla Barú</strong>, just a
                  scenic boat ride from Cartagena's historic walls, Playa
                  Scondida offers an unparalleled eco-luxury glamping
                  experience. Here, the Caribbean Sea whispers secrets of
                  ancient mariners, while the jungle canopy shelters you in its
                  emerald embrace.
                  <br />
                  <br />
                  Our philosophy: simple, authentic luxury that honors the land.
                  Each bungalow is crafted from locally-sourced materials,
                  designed to blend seamlessly with the surrounding nature while
                  providing every modern comfort you desire. Wake to the calls
                  of tropical birds, dine on freshly-caught seafood by
                  candlelight, and fall asleep to the rhythm of gentle waves.
                  With private docks offering direct ocean access, secluded
                  beach coves, and immersive nature trails, Playa Scondida is
                  more than accommodation — it is a transformation.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-antigua font-bold text-black">
                Our specialities
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                Sushi and fine Asian dishes.
              </p>
              {/* Our Specialties */}
              <div className="bg-[#F4F1E6] rounded-2xl p-5 md:p-8 relative border border-[#E7DFC8]">
                {/* Header */}

                {/* Key Features Badge */}
                <Badge className="absolute -top-3 left-6 bg-[#C9A227] text-white text-md px-4 py-1 rounded-full font-semibold shadow-sm">
                  Key Features
                </Badge>

                {/* Feature List */}
                <div className="mt-6 md:mt-8 space-y-5">
                  {specialties.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-[#EAE3D0] flex items-center justify-center shrink-0">
                        <CheckCircle className="text-[#C9A227]" size={18} />
                      </div>

                      {/* Text */}
                      <div>
                        <p className="font-antigua text-base md:text-lg font-bold text-black">
                          {item.label}
                        </p>
                        <p className="text-gray-500 text-sm md:text-base mt-1">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="bg-white rounded-2xl p-4 md:p-6">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Our Specialties
                </p>
                <h2 className="text-lg md:text-xl font-extrabold text-black font-antigua mb-3 md:mb-4">
                  Dish by our dishes
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {specialties.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 md:gap-3 bg-[#f8f5e9] rounded-xl p-2.5 md:p-3 border border-amber-50"
                    >
                      <CheckCircle
                        size={14}
                        className="text-amber-500 shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">
                          {item.label}
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-400">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Nearby Activities */}
              {/* <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  Nearby Activities
                </span>
                <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    {
                      icon: Utensils,
                      label: "Cooking Class",
                      desc: "Learn Caribbean cuisine",
                    },
                    {
                      icon: Wine,
                      label: "Wine Tasting",
                      desc: "Colombian & imported wines",
                    },
                    {
                      icon: Camera,
                      label: "Food Photography",
                      desc: "Chef-guided sessions",
                    },
                    {
                      icon: Music,
                      label: "Live Music",
                      desc: "Friday & Saturday nights",
                    },
                    {
                      icon: Users,
                      label: "Private Events",
                      desc: "Weddings & celebrations",
                    },
                    {
                      icon: Leaf,
                      label: "Farm to Table",
                      desc: "Market visits available",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-2.5 md:p-3 bg-white shadow-sm border border-amber-200 flex items-start gap-2"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                        <item.icon size={13} className="text-amber-500" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-[10px] md:text-xs font-antigua">
                          {item.label}
                        </p>
                        <p className="text-[9px] md:text-[10px] text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Menu Tabs */}
              <div className="bg-[#F4F1E6] border border-[#E4D7B2] rounded-2xl px-6 pb-6 pt-3 md:px-10 md:pb-10 md:pt-4 relative">
                {/* Floating Title Pill */}
                <Badge className="absolute -top-4 left-8 bg-gradient-to-r from-gold to-gold-light text-white text-md md:text-xl font-semibold px-4 py-1   rounded-full shadow-md">
                  Menu
                </Badge>

                {/* Top Right QR */}
                <div className="flex justify-end items-center gap-2 mb-4 text-gray-600 font-medium">
                  <QrCode size={20} className="text-[#C39A2F]" />
                  <span className="underline text-md">QR Code</span>
                </div>

                {/* Menu Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Menu",
                      icon: <ExternalLink className="w-5 h-5" />,
                    },
                    { label: "Drink", icon: <Martini className="w-5 h-5" /> },
                    { label: "Dinner", icon: <Utensils className="w-5 h-5" /> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
          bg-[#F1ECDD]
          border border-[#E2D6B5]
          rounded-2xl
          py-4
          flex items-center justify-center
          gap-4
          hover:shadow-md
          transition duration-300
          cursor-pointer
        "
                    >
                      <div className="text-gold">{item.icon}</div>

                      <h3 className="font-antigua text-md md:text-lg font-bold text-black">
                        {item.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  Menu
                </span>
                <div className="flex items-center justify-between mt-2 mb-3 md:mb-4 flex-wrap gap-2">
                  <div className="flex gap-1.5 md:gap-2 flex-wrap">
                    {["Wine", "Drinks", "Menu"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setMenuTab(tab)}
                        className={`flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${menuTab === tab ? "bg-gold text-white border-amber-500" : "bg-white text-gray-700 border-gray-200 hover:border-amber-300"}`}
                      >
                        {tab === "Wine" && <Wine size={11} />}
                        {tab === "Drinks" && <GlassWater size={11} />}
                        {tab === "Menu" && <Utensils size={11} />}
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="text-xs text-gray-600 font-semibold underline">
                    QR Code
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {menuTab === "Wine" &&
                    [
                      { name: "Malbec Reserve", price: "$28", emoji: "🍷" },
                      { name: "Chardonnay", price: "$24", emoji: "🥂" },
                      { name: "Rosé Selection", price: "$22", emoji: "🍾" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-2.5 md:p-3 text-center shadow-sm border border-amber-300 bg-white"
                      >
                        <p className="text-xl mb-1">{item.emoji}</p>
                        <p className="font-bold text-black text-[10px] md:text-xs font-antigua">
                          {item.name}
                        </p>
                        <p className="text-amber-600 font-bold text-xs md:text-sm mt-0.5">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  {menuTab === "Drinks" &&
                    [
                      { name: "Mojito", price: "$12", emoji: "🍹" },
                      { name: "Piña Colada", price: "$14", emoji: "🥤" },
                      { name: "Fresh Juice", price: "$8", emoji: "🍊" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-2.5 md:p-3 text-center shadow-sm border border-amber-300 bg-white"
                      >
                        <p className="text-xl mb-1">{item.emoji}</p>
                        <p className="font-bold text-black text-[10px] md:text-xs font-antigua">
                          {item.name}
                        </p>
                        <p className="text-amber-600 font-bold text-xs md:text-sm mt-0.5">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  {menuTab === "Menu" &&
                    [
                      { name: "Sea Bass Ceviche", price: "$24", emoji: "🐟" },
                      { name: "Coconut Lobster", price: "$42", emoji: "🦞" },
                      { name: "Truffle Risotto", price: "$32", emoji: "🍚" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-2.5 md:p-3 text-center shadow-sm border border-amber-300 bg-white"
                      >
                        <p className="text-xl mb-1">{item.emoji}</p>
                        <p className="font-bold text-black text-[10px] md:text-xs font-antigua">
                          {item.name}
                        </p>
                        <p className="text-amber-600 font-bold text-xs md:text-sm mt-0.5">
                          {item.price}
                        </p>
                      </div>
                    ))}
                </div>
              </div> */}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-3 md:space-y-4">
              {/* Information + Hours Table */}
              {/* <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-200 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  Information
                </span>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Parking
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      Yes
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Reservations
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      Recommended
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Dress Code
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      Smart Casual
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Cuisine
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      Asian Fusion
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Average Price
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      $60 – $120
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-black font-bold uppercase mb-1">
                      Cards
                    </p>
                    <p className="text-xs font-bold text-black font-antigua">
                      Visa / MC / Amex
                    </p>
                  </div>
                </div> 

                <div className="mt-3 md:mt-4 border-t border-amber-100 pt-3 md:pt-4">
                  <p className="text-[10px] md:text-xs font-bold text-black uppercase mb-2">
                    Opening Hours
                  </p>
                  <div className="space-y-1">
                    {hoursData.map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between text-[10px] md:text-xs py-1 px-2 rounded ${i === 3 || i === 4 ? "bg-amber-100 font-bold text-black" : "text-gray-600"}`}
                      >
                        <span className="font-semibold w-24">{row.day}</span>
                        <span>{row.open}</span>
                        <span className="text-gray-400">–</span>
                        <span>{row.close}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Address */}
              <div className="bg-[#F4F1E6] border border-[#E4D7B2] rounded-3xl p-6 md:p-10 relative">
                {/* Floating Title */}
                <Badge className="absolute -top-3 left-6 bg-[#C9A227] text-white text-md px-4 py-1 rounded-full font-semibold shadow-sm">
                  Information
                </Badge>

                {/* Address */}
                <div className="mt-4">
                  <p className="text-xs text-black uppercase font-normal">
                    Address
                  </p>
                  <p className="text-xs md:text-lg font-bold text-black mt-1 leading-snug font-antigua">
                    Isla Baru, Provincia de Cartagena, Bolivar, Colombia
                  </p>
                </div>

                {/* Contact */}
                <div className="mt-8">
                  <p className="text-xs mb-4 text-black uppercase font-normal">
                    Contact
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        text: "reservas@hotelplayaescondidabaru.com",
                      },
                      { icon: Globe, text: "https://playaescondidabaru.com/" },
                      { icon: MessageCircle, text: "+57 315 682 4000" },
                      { icon: Phone, text: "+57 315 682 4000" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        {/* Icon Box */}
                        <div className="w-10 h-10 rounded-lg bg-[#EAE3D0] flex items-center justify-center shrink-0">
                          <item.icon size={18} className="text-[#C39A2F]" />
                        </div>

                        <p className="font-antigua font-medium text-black text-sm md:text-sm break-all">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10">
                  <p className="text-sm text-gray-600 font-semibold mb-5">
                    Social Links
                  </p>

                  <div className="grid grid-cols-4 md:grid-cols-4 gap-6 text-center">
                    {[
                      {
                        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                      },
                      {
                        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
                      },
                      { icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
                      {
                        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                      },
                    ].map((item, i) => (
                      <>
                      {/* <div key={i} className="flex justify-equal items-center gap-1 sm:gap-3 "> */}
                        <div
                          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl  flex items-center justify-center text-white`}
                        >
                          <img src={item.icon} alt="" className="w-8 h-8 sm:w-12 sm:h-12  object-cover" />
                        </div>

                        {/* <p className="text-sm text-gray-600 font-medium">
                          {item.label}
                        </p> */}
                       {/* </div> */}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-200 shadow-sm">
                <p className="text-xs text-black uppercase font-bold mb-1">
                  Address
                </p>
                <p className="text-xs md:text-sm font-bold text-black leading-snug font-antigua">
                  Isla Baru, Provincia de Cartagena, Bolívar, Colombia
                </p>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-amber-100">
                  <p className="text-[10px] text-gray-500 font-bold mr-1">
                    Follow:
                  </p>
                  {[
                    { icon: Facebook, color: "bg-blue-600" },
                    { icon: Instagram, color: "bg-pink-500" },
                    { icon: Youtube, color: "bg-red-500" },
                    { icon: Globe, color: "bg-amber-500" },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${item.color} text-white flex items-center justify-center hover:opacity-80 transition`}
                    >
                      <item.icon size={12} />
                    </button>
                  ))}
                </div>
              </div> */}

              {/* 3 Contact Icons */}
              <div className="grid grid-cols-3 gap-2 md:gap-2.5">
                {[
                  { icon: Mail, label: "Email", sub: "info@knotdasie.com" },
                  { icon: Globe, label: "Website", sub: "knotdasie.com" },
                  { icon: Phone, label: "Phone", sub: "+57 315 123 4567" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f8f5e9] rounded-xl border border-amber-100 shadow-sm p-2 md:p-3 flex flex-col items-center text-center gap-1 cursor-pointer hover:border-amber-400 transition"
                  >
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                      <item.icon size={14} className="text-amber-500" />
                    </div>
                    <p className="font-bold text-[10px] md:text-xs text-black">
                      {item.label}
                    </p>
                    <p className="text-[9px] md:text-[10px] text-black leading-tight font-bold">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Also Available On */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4 text-center">
                <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3 font-antigua">
                  Also Available On
                </p>
                <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                  <button className="bg-red-500 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-5 py-2 md:py-3">
                    TripAdvisor ↗
                  </button>
                  <button className="bg-orange-500 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-5 py-2 md:py-3">
                    OpenTable ↗
                  </button>
                  <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-5 py-2 md:py-3">
                    Yelp ↗
                  </button>
                </div>
              </div>

              {/* Book with La Carta */}
              <button className="w-full rounded-full bg-gold hover:bg-gold transition py-3 md:py-3.5 text-xs md:text-sm font-bold text-white shadow">
                Book with La Carta
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-400 flex-wrap">
                <ShieldCheck size={12} className="text-green-500" />
                <span>Secure payments · Verified listings · 24/7 support</span>
              </div>

              {/* Deals Slider */}
              <div className="bg-[#f8f5e9] rounded-2xl border border-amber-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-5 pt-3 md:pt-4 pb-1.5">
                  <p className="font-bold text-black text-xs md:text-sm font-antigua">
                    Deals &amp; Promotions
                  </p>
                  <span className="text-xs text-amber-600 font-semibold font-antigua">
                    {dealIdx + 1}/{dealsSlides.length}
                  </span>
                </div>
                <div className="px-4 md:px-5 pb-3 md:pb-4 relative min-h-[100px] md:min-h-[110px]">
                  <div className="bg-white rounded-xl p-3 md:p-4 border border-amber-100 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">
                          {dealsSlides[dealIdx].title}
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-relaxed">
                          {dealsSlides[dealIdx].desc}
                        </p>
                      </div>
                      <span className="bg-gold text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded shrink-0">
                        {dealsSlides[dealIdx].highlight}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-2.5 text-[9px] md:text-[10px] text-gray-400 flex-wrap">
                      <span>✓ Valid till March 15, 2025</span>
                      <span>✓ T&C apply</span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setDealIdx(
                        (p) =>
                          (p - 1 + dealsSlides.length) % dealsSlides.length,
                      )
                    }
                    className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center"
                  >
                    <ChevronLeft size={11} />
                  </button>
                  <button
                    onClick={() =>
                      setDealIdx((p) => (p + 1) % dealsSlides.length)
                    }
                    className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center"
                  >
                    <ChevronRight size={11} />
                  </button>
                </div>
                <div className="flex justify-center gap-1.5 pb-2.5 md:pb-3">
                  {dealsSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setDealIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === dealIdx ? "bg-gold w-4" : "bg-amber-200 w-1.5"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Powered By */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4">
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-2">
                  Powered by
                </p>
                <div className="space-y-1.5">
                  {["Google Reviews", "TripAdvisor", "OpenTable"].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1.5"
                      >
                        <div className="w-5 h-5 rounded bg-amber-100 flex items-center justify-center shrink-0">
                          <Globe size={10} className="text-amber-500" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-gray-600">
                          {src}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-4 md:mb-5">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">
              Find Us
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-antigua text-black">
              Location &amp; Getting There
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-[220px] sm:h-[280px] md:h-[320px]">
            <iframe
              title="Location Map"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=El+Centro+Cartagena+Colombia&output=embed"
            />
          </div>
        </div>
      </div>

      {/* SERVICES — 4 cols for gastronomy: Services & Amenities + Menu + Atmosphere */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px] bg-white rounded-2xl p-5 md:p-8">
          <div className="text-center mb-5 md:mb-7">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">
              What's Included
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua">
              Services &amp; Amenities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Services & Amenities",
                items: [
                  { icon: Utensils, label: "Fine dining" },
                  { icon: Wine, label: "Wine cellar" },
                  { icon: Leaf, label: "Vegetarian menu" },
                  { icon: Coffee, label: "Private dining room" },
                  { icon: Users, label: "Event hosting" },
                ],
              },
              {
                title: "Menu",
                items: [
                  { icon: Utensils, label: "À la carte" },
                  { icon: Sparkles, label: "Tasting menu" },
                  { icon: Leaf, label: "Seasonal specials" },
                ],
              },
              {
                title: "Menu",
                items: [
                  { icon: Coffee, label: "Breakfast" },
                  { icon: GlassWater, label: "Cocktail bar" },
                  { icon: Wine, label: "Wine pairing" },
                ],
              },
              {
                title: "Atmosphere",
                items: [
                  { icon: Music, label: "Live music Fri–Sat" },
                  { icon: Camera, label: "Instagrammable décor" },
                  { icon: Globe, label: "Outdoor terrace" },
                  { icon: Users, label: "Romantic setting" },
                ],
              },
            ].map((col, ci) => (
              <div key={ci}>
                <h3 className="font-bold text-black text-sm md:text-base mb-3 md:mb-4 pb-2 border-b-2 border-gray-300">
                  {col.title}
                </h3>
                <div className="space-y-3 md:space-y-3.5">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <item.icon size={13} className="text-amber-500" />
                      </div>
                      <p className="font-semibold text-gray-900 text-xs md:text-sm pt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AROUND THIS PLACE */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-0.5">
                Explore
              </p>
              <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">
                Around This Place
              </h2>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">
                Clear Filters
              </button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">
                + Filters
              </button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#fbf7ef] py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[950px]">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 md:mb-1.5">
              Questions?
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
              Frequently Asked
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="space-y-2 md:space-y-3"
          >
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-5"
              >
                <AccordionTrigger className="text-left text-xs md:text-sm font-semibold text-black hover:no-underline py-3 md:py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-gray-500 leading-relaxed pb-3 md:pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-5 md:mt-6 space-y-2 md:space-y-3">
            <nav className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2">
              {Object.keys(tagRoutes).map((tag) => (
                <Link key={tag} to={tagRoutes[tag]}>
                  <button className="w-full bg-white text-black font-bold shadow text-[10px] md:text-xs py-1.5 md:py-2 rounded hover:bg-gray-50 transition border border-gray-100">
                    {tag}
                  </button>
                </Link>
              ))}
            </nav>
            <div className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <input
                className="flex-grow px-3 md:px-4 py-2.5 md:py-3 bg-white text-black outline-none text-xs md:text-sm"
                type="text"
                placeholder="Search for Anything"
              />
              <button className="bg-gold hover:bg-gold transition text-white font-bold px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-5 md:mb-7">
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3">
                La Carta Team Reviews
              </p>
              <div className="space-y-1.5 md:space-y-2">
                {[
                  { label: "Price", rating: 3 },
                  { label: "Location", rating: 5 },
                  { label: "Ambiance", rating: 5 },
                  { label: "Services", rating: 5 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs text-gray-500 w-14 md:w-16 shrink-0">
                      {item.label}
                    </span>
                    <StarRow count={item.rating} />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 pt-2.5 md:pt-3 border-t border-gray-100">
                <div className="font-extrabold text-lg md:text-xl font-antigua">
                  LA C<span className="text-amber-500">Ā</span>RTA
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400">
                    ⭐ Star Resper
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-400">
                    Last visit
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[140px]">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-black font-bold mb-1">
                Feedback
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold font-antigua text-black">
                Client Say's
              </h3>
              <div className="flex items-center gap-1.5 mt-2 justify-center">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <p className="text-xs md:text-sm font-bold text-gray-700">
                  4.8 out of 5 — Based on 124 reviews
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <p className="text-4xl md:text-5xl font-extrabold text-black leading-none">
                  5.3
                </p>
                <div className="flex-1 space-y-1 md:space-y-1.5 mt-1">
                  {[90, 75, 50, 30, 15].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 md:h-2 rounded-full bg-gray-100 overflow-hidden"
                    >
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 mt-2">
                out of rating
              </p>
              <button className="mt-2.5 md:mt-3 w-full bg-green text-white text-[10px] md:text-xs font-bold rounded-full py-2 md:py-2.5">
                + Give Your Review
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <button className="bg-gold text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">
              Filter
            </button>
            <p className="text-[10px] md:text-xs text-gray-400">
              Showing 1-10 reviews
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between gap-3 md:gap-4 mb-2 md:mb-3">
                  <div>
                    <h4 className="font-extrabold text-black text-sm md:text-base">
                      {r.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400">
                      {r.date}
                    </p>
                  </div>
                  <StarRow count={r.rating} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {r.text}
                </p>
                <div className="flex items-center justify-between mt-3 md:mt-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={r.avatar}
                      alt=""
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                    />
                    <span className="text-[10px] md:text-xs text-gray-500">
                      {r.date}
                    </span>
                  </div>
                  <button className="border border-red-300 text-red-500 text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1 md:py-1.5 hover:bg-red-50 transition">
                    {r.btnLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PREMIUM LISTING */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">
              Premium Listing
            </h2>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">
                Clear Filters
              </button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">
                + Filters
              </button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

      {/* NEWSLETTER */}
      <div
        className="relative py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-[700px] text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">
            Stay Updated
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-antigua mb-3 md:mb-4">
            Cartagena Newsletter
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 leading-relaxed">
            Subscribe to get exclusive restaurant deals, new menu announcements,
            and food guides curated by our Cartagena gastronomy experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/60 text-xs md:text-sm outline-none focus:border-amber-400 transition backdrop-blur-sm"
            />
            <button className="bg-gold text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full shadow whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-[10px] text-white/40 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
