import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Heart,
  Share2,
  Star,
  Leaf,
  Clock,
  CalendarDays,
  Luggage,
  Mail,
  Globe,
  Phone,
  ShieldCheck,
  Coffee,
  Sparkles,
  Plane,
  Bath,
  Wifi,
  Umbrella,
  TreePalm,
  WavesIcon,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Utensils,
  GlassWater,
} from "lucide-react";

const thumbnails = [
  "https://static.vecteezy.com/system/resources/previews/055/509/727/non_2x/luxurious-tree-house-overlooking-tropical-rainforest-in-bali-photo.jpg",
  "https://a0.muscache.com/im/pictures/miso/Hosting-632871632327570609/original/d43297f3-0041-4fb8-a9fd-f5ce479a7c25.jpeg",
  "https://a0.muscache.com/im/pictures/816242d3-a4e6-43cc-80a8-1cd3174f65c2.jpg",
  "https://a0.muscache.com/im/pictures/miso/Hosting-813029650994267143/original/4cfece71-e34e-41ec-b199-9f6c16551d31.jpeg",
];

const sliderPlaces = [
  { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500", category: "Foodie", title: "LA GRANDE – MONT ROYAL", location: "On La Nappe", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500", category: "Food", title: "THE BULL", location: "Downtown", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500", category: "Food", title: "KARAMI FUSION ASIATE...", location: "Lounge", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500", category: "Foodie", title: "L'ETOILE DE TUNIS", location: "City Center", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", category: "Beach", title: "PLAYA BLANCA", location: "Isla Barú", rating: 5, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500", category: "Foodie", title: "L'ETOILE DE TUNIS", location: "City Center", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", category: "Beach", title: "PLAYA BLANCA", location: "Isla Barú", rating: 5, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500", category: "Foodie", title: "L'ETOILE DE TUNIS", location: "City Center", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", category: "Beach", title: "PLAYA BLANCA", location: "Isla Barú", rating: 5, badge: "NEW" },
];

const dealsSlides = [
  { title: "Snorkeling Diving Package", desc: "Dive Deeper, stay longer — Full equipment & transport included. Valid till March 2025.", highlight: "BOOK NOW" },
  { title: "Glamping Lovers Deal", desc: "Stay 2 nights get 1 free. Breakfast included. Valid till April 2025.", highlight: "LIMITED" },
  { title: "Sunset Cruise", desc: "Evening cruise with cocktails and live music. Reserve now.", highlight: "POPULAR" },
];

const reviews = [
  { name: "El Gordo", date: "Santo - 1 year", rating: 4, text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. Truly a place that defines the spirit of Cartagena. The quesadilla as always amazing and the sauce delicate — only 💯! Thank you all for such an amazing experience every time and thank you for gifting me a glass of wine. So wonderful and sun-kissed 🤍", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60", btnLabel: "El Gordo" },
  { name: "El Gordo", date: "Santo - 1 year", rating: 4, text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. Truly a place that defines the spirit of Cartagena. The quesadilla as always amazing and the sauce delicate — only 💯! Thank you all for such an amazing experience every time and thank you for gifting me a glass of wine. So wonderful and sun-kissed 🤍", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60", btnLabel: "El Gordo" },
  { name: "El Gordo", date: "Santo - 1 year", rating: 4, text: "Another wonderful evening at my favourite local scene. It is unpleasantly cold out, however the vibrancy and warmth inside more than makes up for it. Truly a place that defines the spirit of Cartagena. The quesadilla as always amazing and the sauce delicate — only 💯! Thank you all for such an amazing experience every time and thank you for gifting me a glass of wine. So wonderful and sun-kissed 🤍", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60", btnLabel: "El Gordo" },
];

const faqData = [
  { question: "How do I get there?", answer: "You can reach the location via private transport, taxi services, or arranged transfers. Detailed directions will be shared after booking." },
  { question: "Is it family-friendly?", answer: "Yes, the location is suitable for families and offers a safe, comfortable environment for all age groups." },
  { question: "Is Wi-Fi available?", answer: "High-speed Wi-Fi is available throughout the property for guests." },
  { question: "What is the cancellation policy?", answer: "Cancellations made within the allowed period are eligible for a full refund. Please refer to the booking terms for exact details." },
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
      {Array(total).fill(0).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );
}

function HorizontalSlider({ items }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -230 : 230, behavior: "smooth" });
  };
  return (
    <div className="relative px-1">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shadow hover:bg-gold transition"
      >
        <ChevronLeft size={14} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[170px] sm:min-w-[190px] md:min-w-[210px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative h-[120px] sm:h-[130px] md:h-[145px] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 left-2 bg-white/90 rounded px-1.5 py-0.5 text-[10px] md:text-xs font-bold text-gray-700 flex items-center gap-0.5">
                <MapPin size={8} className="text-amber-500" />{item.category}
              </div>
              <button className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart size={11} className="text-black" />
              </button>
            </div>
            <div className="p-2.5 md:p-3">
              <p className="font-bold text-black text-xs md:text-sm leading-tight font-antigua">{item.title}</p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{item.location}</p>
              <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                <StarRow count={item.rating} />
                <span className="text-[10px] md:text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">{item.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-green text-white flex items-center justify-center shadow hover:bg-green transition"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function DetailedHotel() {
  const [activeImg, setActiveImg] = useState(0);
  const [menuTab, setMenuTab] = useState("Brunch");
  const [dealIdx, setDealIdx] = useState(0);

  return (
    <div className="bg-white font-sans w-full overflow-x-hidden">

      {/* ══ SECTION 1: HERO ══ */}
      <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-12 pt-5 md:pt-6 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">

          <p className="text-[10px] md:text-xs text-gray-400 mb-3 md:mb-4 leading-none">
            La Carta &ndash; Cartagena Culture &amp; Tourism &rsaquo; Accommodations &rsaquo; Glamping/Nature &rsaquo;{" "}
            <span className="text-gray-700 font-semibold">Knot d&apos;Asie</span>
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-6">

            {/* LEFT: Title + Info */}
            <div className="flex items-start gap-3 flex-1 min-w-0 w-full lg:p-9 md:p-9 sm:p-9">
              {/* <div className="flex flex-col gap-2 pt-1 shrink-0">
                <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red flex items-center justify-center shadow hover:bg-red transition">
                  <Share2 size={13} className="text-white" />
                </button>
                <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-yellow-400 flex items-center justify-center shadow hover:bg-yellow-500 transition">
                  <Heart size={13} className="text-gray-700" />
                </button>
              </div> */}

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none font-antigua">
                    PLAYA Scondida
                  </h1>
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red text-white text-[10px] md:text-xs font-extrabold flex items-center justify-center shrink-0 shadow">K</span>
                </div>

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <p className="text-xs md:text-sm text-gray-500">Accommodation / Glamping / Nature</p>
                  <p className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-gray-700 uppercase">KNOT D&apos;ASIE</p>
                </div>

                <p className="mt-2 md:mt-6 text-sm md:text-base lg:text-[20px] text-gray-600 leading-snug font-bold">
                  Eco-Luxury Glamping Experience in Isla Bar&uacute;
                </p>

                <div className="mt-3 md:mt-6">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">Starting From</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-antigua">
                    $177 &ndash; $515{" "}
                    <span className="text-sm md:text-base font-normal text-gray-500">/ night</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-3 md:mt-6 flex-wrap">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-semibold cursor-pointer ml-1 text-black font-antigua">Leave Review</span>
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black text-white text-[9px] md:text-xs flex items-center justify-center font-bold leading-none">?</span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-10 flex-wrap">
                  <button className="bg-green hover:bg-green transition text-white font-bold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full shadow">
                    Reserve Now
                  </button>
                  <button className="bg-gold hover:bg-gold transition text-white font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow flex items-center gap-1.5 md:gap-2">
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
                  <img src={thumbnails[activeImg]} alt="Playa Scondida" className="w-full h-full object-cover transition-all duration-700" />
                </div>
                <div className="hidden lg:block" style={{ width: "440px", height: "390px" }}>
                  <img src={thumbnails[activeImg]} alt="Playa Scondida" className="w-full h-full object-cover transition-all duration-700" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2 shrink-0">
                {thumbnails.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-14 h-16 sm:w-16 sm:h-[72px] md:w-[70px] md:h-[90px] rounded-xl overflow-hidden cursor-pointer transition-all flex-shrink-0 ${i === activeImg ? "ring-2 ring-blue-500 ring-offset-1" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ SECTION 2: ABOUT + SIDEBAR ══ */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[1.45fr_1fr]">

            {/* ── LEFT COLUMN ── */}
            <div className="space-y-4 md:space-y-5">

              {/* About */}
              <div className="bg-white rounded-2xl p-4 md:p-6">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">About</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua mb-3 md:mb-4">About Jetski</h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Nestled on the pristine shores of{" "}
                  <strong className="text-black">Isla Barú</strong>, just a scenic boat ride from Cartagena's historic walls, Playa Scondida offers an unparalleled eco-luxury glamping experience. Here, the Caribbean Sea whispers secrets of ancient mariners, while the jungle canopy shelters you in its emerald embrace.
                  <br /><br />
                  Our philosophy: simple, authentic luxury that honors the land. Each bungalow is crafted from locally-sourced materials, designed to blend seamlessly with the surrounding nature while providing every modern comfort you desire. Wake to the calls of tropical birds, dine on freshly-caught seafood by candlelight, and fall asleep to the rhythm of gentle waves. With private docks offering direct ocean access, secluded beach coves, and immersive nature trails, Playa Scondida is more than accommodation—it is a transformation. Here, time moves differently, allowing you to reconnect with what truly matters, caught seafood by candlelight.
                </p>
              </div>

              {/* Day Package */}
              <div className="bg-[#f8f5e9] rounded-2xl p-5 md:p-10 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Road Map</span>
                <div className="flex items-center gap-2 mt-2 mb-4 font-antigua">
                  <span className="text-base">📅</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black">DAY 01</h3>
                </div>
                <div className="relative ml-2 md:ml-4">
                  <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-amber-300" />
                  {[
                    { time: "9am - 10am", desc: "Lorem Hendrerit sed" },
                    { time: "9am - 10am", desc: "Lorem Hendrerit sed" },
                    { time: "10am - 12pm", desc: "Depart: Adipiscing sed" },
                    { time: "12pm - 6pm", desc: "Depart: Adipiscing sed" },
                    { time: "6pm - 8pm", desc: "Depart: Adipiscing sed" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 mb-3 md:mb-3.5 relative pl-6 md:pl-8">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow" />
                      <div>
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{item.time}</p>
                        <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menu Tabs */}
              <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Menu</span>
                <div className="flex items-center justify-between mt-2 mb-3 md:mb-4 flex-wrap gap-2">
                  <div className="flex gap-1.5 md:gap-2 flex-wrap">
                    {["Brunch", "Drinks", "Dinner"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setMenuTab(tab)}
                        className={`flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${menuTab === tab ? "bg-gold text-white border-amber-500" : "bg-white text-gray-700 border-gray-200 hover:border-amber-300"}`}
                      >
                        {tab === "Brunch" && <Coffee size={11} />}
                        {tab === "Drinks" && <GlassWater size={11} />}
                        {tab === "Dinner" && <Utensils size={11} />}
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button className="text-xs text-gray-600 font-semibold underline">QR Code</button>
                </div>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    { name: "Tropical Bowl", price: "$14", emoji: "🥗" },
                    { name: "Island Eggs", price: "$12", emoji: "🍳" },
                    { name: "Fresh Juice", price: "$8", emoji: "🥤" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl p-2.5 md:p-3 text-center shadow-sm border border-amber-300">
                      <p className="font-bold text-black text-[10px] md:text-xs font-antigua">{item.name}</p>
                      <p className="text-amber-600 font-bold text-xs md:text-sm mt-0.5">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="space-y-3 md:space-y-4">

              {/* Information */}
              <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-200 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Information</span>
                <div className="mt-3">
                  <p className="text-xs text-black uppercase font-bold">Address</p>
                  <p className="text-xs md:text-sm font-bold text-black mt-1 leading-snug font-antigua">
                    Isla Baru, Provincia de Cartagena, Bolívar, Colombia
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4 border-t border-amber-100 pt-3 md:pt-4">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-black font-bold mb-0.5"><Clock size={10} /> Start Time</div>
                    <p className="font-bold text-black text-xs md:text-sm font-antigua">9:00 am</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-black font-bold mb-0.5"><Clock size={10} /> End Time</div>
                    <p className="font-bold text-black text-xs md:text-sm font-antigua">9:00 pm</p>
                  </div>
                </div>
              </div>

              {/* 3 Contact Icons */}
              <div className="grid grid-cols-3 gap-2 md:gap-2.5">
                {[
                  { icon: Mail, label: "Email", sub: "info@playascondida.com" },
                  { icon: Globe, label: "Website", sub: "playascondida.com" },
                  { icon: Phone, label: "Phone", sub: "+57 315 123 4567" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f8f5e9] rounded-xl border border-amber-100 shadow-sm p-2 md:p-3 flex flex-col items-center text-center gap-1 cursor-pointer hover:border-amber-400 transition">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                      <item.icon size={14} className="text-amber-500" />
                    </div>
                    <p className="font-bold text-[10px] md:text-xs text-black">{item.label}</p>
                    <p className="text-[9px] md:text-[10px] text-black leading-tight font-bold">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* Deals Slider */}
              <div className="bg-[#f8f5e9] rounded-2xl border border-amber-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-5 pt-3 md:pt-4 pb-1.5">
                  <p className="font-bold text-black text-xs md:text-sm font-antigua">Deals &amp; Promotions</p>
                  <span className="text-xs text-amber-600 font-semibold font-antigua">{dealIdx + 1}/{dealsSlides.length}</span>
                </div>
                <div className="px-4 md:px-5 pb-3 md:pb-4 relative min-h-[100px] md:min-h-[110px]">
                  <div className="bg-white rounded-xl p-3 md:p-4 border border-amber-100 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{dealsSlides[dealIdx].title}</p>
                        <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-relaxed">{dealsSlides[dealIdx].desc}</p>
                      </div>
                      <span className="bg-gold text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded shrink-0">{dealsSlides[dealIdx].highlight}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-2.5 text-[9px] md:text-[10px] text-gray-400 flex-wrap">
                      <span>✓ Valid till March 15, 2025</span>
                      <span>✓ T&C apply</span>
                    </div>
                  </div>
                  <button onClick={() => setDealIdx((p) => (p - 1 + dealsSlides.length) % dealsSlides.length)} className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center">
                    <ChevronLeft size={11} />
                  </button>
                  <button onClick={() => setDealIdx((p) => (p + 1) % dealsSlides.length)} className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center">
                    <ChevronRight size={11} />
                  </button>
                </div>
                <div className="flex justify-center gap-1.5 pb-2.5 md:pb-3">
                  {dealsSlides.map((_, i) => (
                    <button key={i} onClick={() => setDealIdx(i)} className={`h-1.5 rounded-full transition-all ${i === dealIdx ? "bg-gold w-4" : "bg-amber-200 w-1.5"}`} />
                  ))}
                </div>
              </div>

              {/* Also Available On */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4 text-center">
                <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3 font-antigua">Also Available On</p>
                <div className="flex justify-center gap-2 md:gap-7 flex-wrap">
                  <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3 hover:bg-green transition">Booking.com ↗</button>
                  <button className="bg-teal-700 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3 hover:bg-teal-800 transition">Airbnb ↗</button>
                  <button className="bg-blue-900 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3 hover:bg-blue-800 transition">Expedia ↗</button>
                </div>
              </div>

              {/* Book with La Carta CTA */}
              <button className="w-full rounded-full bg-gold hover:bg-gold transition py-3 md:py-3.5 text-xs md:text-sm font-bold text-white shadow">
                Book with La Carta
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-400 flex-wrap">
                <ShieldCheck size={12} className="text-green-500" />
                <span>Secure payments · Verified listings · 24/7 support</span>
              </div>
              <p className="text-center text-[10px] md:text-xs text-gray-400 leading-relaxed">
                Exclusive local experiences curated by Cartagena insiders.
              </p>

              {/* Booking Info */}
              <div className="rounded-2xl p-3 md:p-5 relative">
                <span className="absolute -top-3 left-5 text-black font-bold text-xs md:text-sm px-3 py-1 rounded-full font-antigua">Booking Info</span>
                <div className="mt-3 space-y-2 md:space-y-3">
                  {[
                    { icon: Clock, label: "Sleeping Tips", sub: "45-60 min from Cartagena marina" },
                    { icon: CalendarDays, label: "Waiting", sub: "0.00 Per AC Asutamy services" },
                    { icon: Luggage, label: "What to bring", sub: "Light clothing, reef-safe sunscreen, camera" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3 bg-[#f8f5e9] rounded-xl p-2.5 md:p-3 border border-amber-50">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <item.icon size={12} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{item.label}</p>
                        <p className="text-[10px] md:text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SECTION 3: LOCATION ══ */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-4 md:mb-5">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Find Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-antigua text-black">Location &amp; Getting There</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-[220px] sm:h-[280px] md:h-[320px]">
            <iframe
              title="Location Map"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Isla+Baru+Cartagena+Colombia&output=embed"
            />
          </div>
        </div>
      </div>

      {/* ══ SECTION 4: SERVICES & AMENITIES ══ */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px] bg-white rounded-2xl p-5 md:p-8">
          <div className="text-center mb-5 md:mb-7">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">What's Included</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua">Services &amp; Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                title: "Key Features",
                items: [
                  { icon: Leaf, label: "Eco-Friendly Bungalows", sub: "1 Queen Bed" },
                  { icon: TreePalm, label: "Sea View Bungalow", sub: "1 King Bed" },
                  { icon: WavesIcon, label: "Beach Front Bungalow", sub: "1 King Bed + Daybed" },
                ],
                hasSub: true,
              },
              {
                title: "Services",
                items: [
                  { icon: Coffee, label: "Breakfast included" },
                  { icon: Sparkles, label: "Daily housekeeping" },
                  { icon: Plane, label: "Airport / boat transfer" },
                ],
                hasSub: false,
              },
              {
                title: "Amenities",
                items: [
                  { icon: Bath, label: "Swimming pool" },
                  { icon: Wifi, label: "Wi-Fi" },
                  { icon: Wifi, label: "Free Wi-Fi in common areas" },
                  { icon: Umbrella, label: "Beach access" },
                ],
                hasSub: false,
              },
            ].map((col, ci) => (
              <div key={ci}>
                <h3 className="font-bold text-black text-sm md:text-base mb-3 md:mb-4 pb-2 border-b-2 border-gray-300">{col.title}</h3>
                <div className="space-y-3 md:space-y-3.5">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <item.icon size={13} className="text-amber-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-xs md:text-sm">{item.label}</p>
                        {col.hasSub && item.sub && <p className="text-[10px] md:text-xs text-gray-400">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECTION 5: AROUND THIS PLACE ══ */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-0.5">Explore</p>
              <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">Around This Place</h2>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2 hover:bg-red transition">Clear Filters</button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2 hover:bg-green transition">+ Filters</button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

      {/* ══ SECTION 6: FAQ ══ */}
      <div className="bg-[#fbf7ef] py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[950px]">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 md:mb-1.5">Questions?</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">Frequently Asked</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-5">
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

      {/* ══ SECTION 7: CLIENT SAY'S + REVIEWS ══ */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          {/* 3-col header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-5 md:mb-7">

            {/* La Carta Team Reviews */}
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3">La Carta Team Reviews</p>
              <div className="space-y-1.5 md:space-y-2">
                {[
                  { label: "Price", rating: 4 },
                  { label: "Location", rating: 4 },
                  { label: "Ambiance", rating: 3 },
                  { label: "Services", rating: 4 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs text-gray-500 w-14 md:w-16 shrink-0">{item.label}</span>
                    <StarRow count={item.rating} />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 pt-2.5 md:pt-3 border-t border-gray-100">
                <div className="font-extrabold text-lg md:text-xl font-antigua">LA C<span className="text-amber-500">Ā</span>RTA</div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400">⭐ Star Resper</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Last visit</p>
                </div>
              </div>
            </div>

            {/* Client Say's */}
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[140px]">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-black font-bold mb-1">Feedback</p>
              <h3 className="text-2xl md:text-3xl font-extrabold font-antigua text-black">Client Say's</h3>
              <div className="flex items-center gap-1.5 mt-2 justify-center flex-wrap">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <p className="text-xs md:text-sm font-bold text-gray-700">4.8 out of 5 — Based on 124 reviews</p>
              </div>
            </div>

            {/* 5.3 Rating */}
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <p className="text-4xl md:text-5xl font-extrabold text-black leading-none">5.3</p>
                <div className="flex-1 space-y-1 md:space-y-1.5 mt-1">
                  {[90, 75, 50, 30, 15].map((w, i) => (
                    <div key={i} className="h-1.5 md:h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 mt-2">out of rating</p>
              <button className="mt-2.5 md:mt-3 w-full bg-green text-white text-[10px] md:text-xs font-bold rounded-full py-2 md:py-2.5 hover:bg-green transition">
                + Give Your Review
              </button>
            </div>
          </div>

          {/* Filter row */}
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <button className="bg-gold text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">Filter</button>
            <p className="text-[10px] md:text-xs text-gray-400">Showing 1-10 reviews</p>
          </div>

          {/* Review Cards */}
          <div className="space-y-3 md:space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between gap-3 md:gap-4 mb-2 md:mb-3">
                  <div>
                    <h4 className="font-extrabold text-black text-sm md:text-base">{r.name}</h4>
                    <p className="text-[10px] md:text-xs text-gray-400">{r.date}</p>
                  </div>
                  <StarRow count={r.rating} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{r.text}</p>
                <div className="flex items-center justify-between mt-3 md:mt-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <img src={r.avatar} alt="" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" />
                    <span className="text-[10px] md:text-xs text-gray-500">{r.date}</span>
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

      {/* ══ SECTION 8: PREMIUM LISTING ══ */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">Premium Listing</h2>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2 hover:bg-red transition">Clear Filters</button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2 hover:bg-green transition">+ Filters</button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

    </div>
  );
}