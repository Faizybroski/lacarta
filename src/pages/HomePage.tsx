import React from "react";
import logo from "/assets/Logo.png.png";
import img1 from "/assets/img1.png";
import whatsapp from '/assets/whatsapp.svg';
import img2 from "/assets/img2.png";
import img3 from "/assets/img33.png";
import img4 from "/assets/4.png";
import img5 from "/assets/img5.png";
import img6 from "/assets/img6.png";
import carpic from "/assets/BOOKGROUP.png";
import girlpic from "/assets/girl.png";
import beachpic from "/assets/beach.png";
import shippic from "/assets/ship.png";
import artpic from "/assets/art.png";
import resturantpic from "/assets/resturant.png";
import hotelpic from "/assets/hotels.png";

import Card from "@/components/card/Card";
import CircleCard from "@/components/card/CircularCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Headset,
  Share2,
  MessageCircleMore,
  MessageCircle,
  FileSpreadsheet,
  Plus,
  Music,
  CircleArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import HowToDoCartagena from "@/components/HowToCartagena";
import TopNewsCartagena from "@/components/TopNewsCartagena.tsx";
import ConciergeCTA from "@/components/ConciergeCTA";
import Pizza from "@/components/Pizza";
import CartagenaNews from "@/components/layout/cartagenaNews";


// Category Color Map to replace c1, c2, c3 etc.
const catColors = {
  green: "bg-[#20bb59]",
  gold: "bg-[#d0a439]",
  yellow: "bg-[#fed358]",
  purple: "bg-[#ca77e7]",
  teal: "bg-[#5bc7c1]",
  red: "bg-[#f52929]",
};

const tagRoutes: Record<string, string> = {
  Beaches: "/Beaches",
  Accommodations: "/hotels",
  Boating: "/Boating",
  "Real Estate": "/realState",
  Activities: "/Activities",
  Gastronomy: "/Gastronomy",
};

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans">
      
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 md:py-40"
        style={{ backgroundImage: `url('/assets/Hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto text-center text-white">

          <div className="inline absolute top-0 left-0">
            <Share2 size={60} className="p-3 text-white font-bold bg-red-400 mb-2 rounded-full"/>
            <Heart size={60} className="p-3 text-black font-bold bg-yellow-400 rounded-full"/>
          </div>

          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
            
            <div>
            <span className="bg-white text-black font-bold px-3 py-1 rounded shadow text-sm hidden md:block">
             Need help? Chat with us
             </span>
             </div>
             <div>
             <a
  href="https://wa.me/573001234567"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-14 h-14
    flex items-center justify-center
    rounded-full shadow-lg
    bg-green-600 hover:scale-105 transition
  "
>
  <img
    src={whatsapp}
    alt="WhatsApp"
    className="w-10 h-10"
  />
</a>

             </div>
           </div>

          <h1
            className="
     font-luxury
    text-white
    uppercase
    font-normal
    tracking-[0.08em]
    leading-[0.92]
    text-[52px]
    sm:text-[72px]
    md:text-[96px]
    lg:text-[100px]
    mb-[100px]
    drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]
 
"
          >
            EVERYTHING <br /> CARTAGENA
          </h1>

          <div className="max-w-3xl p-0 m-auto">
            <div className="w-full mb-2">
              <nav className="lg:grid grid-cols-6 hidden flex-wrap justify-center gap-1">
            {[
              "Beaches",
              "Accommodations",
              "Boating",
              "Real Estate",
              "Activities",
              "Gastronomy",
            ].map((tag) => (
              <Button className="bg-white text-black font-bold shadow-xl rounded hover:bg-gray-200">
              <Link
                key={tag}
                to={tagRoutes[tag]}
              >
                {tag}
              </Link>
              </Button>
            ))}
          </nav>
            </div>

            <div className=" w-full">
             <div className="flex bg-white rounded overflow-hidden p-1">
                         <input
                           className="flex-grow p-2 bg-white text-black"
                           type="text"
                           placeholder="Search for Anything"
                         />
                         <Button className="text-white w-[250px] my-auto rounded px-6 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                           Search
                         </Button>
                       </div>
            </div>
           
          </div>
          
          {/* <div>
          
          </div> */}

          
        </div>
      </div>

      {/* Section Title */}
      <div className="py-12 px-10 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center uppercase mb-16">
          What to do in Cartagena, Colombia
        </h2>
      </div>

      {/* Category Grid */}
      <div className="container mx-auto pb-20 px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Hotels",
              img: img1,
              color: "bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-800",
              href: "/hotels",
            },
            {
              label: "Beaches",
              img: img2,
              color: "bg-gradient-to-r from-green-500 via-green-600 to-green-900",
              href: "/Beaches",
            },
            {
              label: "Activities",
              img: img3,
              color: "bg-gradient-to-r from-red-500 via-red-600 to-red-900",
              href: "/Activities",
            },
            {
              label: "Tours & Sightseeing",
              img: img4,
              color: "bg-gradient-to-l from-yellow-500 via-yellow-600 to-yellow-800",
              href: "/realState",
            },
            {
              label: "Boat Rentals",
              img: img5,
              color: "bg-gradient-to-r   from-green-500 via-green-600 to-green-900",
              href: "/Boating",
            },
            {
              label: "Gastronomy",
              img: img6,
              color: "bg-gradient-to-r from-red-500 via-red-600 to-red-900",
              href: "/Gastronomy",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="relative rounded group overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full p-2 text-white font-bold fs-5 text-center z-10 ${item.color}`}
              >
                {item.label}
              </div>
              <img
                src={item.img}
                className="w-full h-110 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.label}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Masonry-style Section */}
      {/* <section className="py-12 px-10 md:px-16 bg-gray-50"> */}
      <div className=" text-center mb-7 mt-10">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center uppercase mb-16">
          The best of Cartagena, Colombia
        </h2>
      </div>

      <section className="container mb-5 mx-auto pb-13 px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          {/* Beaches – Tall */}
          <Card
            image={beachpic}
            category="BEACHES"
            title="Best Beaches of Cartagena"
            author="Miguel"
            time="17 min"
            className="row-span-2 rounded-0"
          />

          {/* Restaurants */}
          <Card
            image={resturantpic}
            category="Gastronomy"
            title="The Best Restaurants of Cartagena."
            author="May"
            time="10 min"
            className="rounded-0"
          />

          {/* Activities – Tall */}
          <Card
            image={shippic}
            category="ACTIVITIES"
            title="What to do in Cartagena"
            author="Maria"
            time="10 min"
            className="row-span-2 rounded-0"
          />

          {/* Fashion – Tall */}
          <Card
            image={girlpic}
            category="Fashion"
            title="The Best Shopping in Cartagena"
            author="Alejandra"
            time="7 min"
            className="row-span-3 rounded-0"
          />

          {/* Hotels – Circular */}
          <CircleCard
            image={hotelpic}
            category="HOTELS"
            title="Top Hotels of Cartagena"
            author="Natalia"
            time="21 min"
          />

          {/* Street Art */}
          <Card
            image={artpic}
            category="Art"
            title="The Best Street Art of Cartagena"
            author="Juan Pablo"
            time="5 min"
            className="mt-5 rounded-0"
          />
        </div>
      </section>
      {/* </section> */}

      {/* Newsletter Promo (Desktop) */}
      <div className="hidden md:block py-24 relative bg-[url('Rectangle.png')]">
        {/* Decorative background waves (optional SVG or image) */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 items-center gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-5xl font-[Bebas_Neue] leading-tight tracking-[-0.04em] font-semibold uppercase mb-6 text-black">
                How to thrive in Cartagena, Colombia like a local.
              </h2>

              <p className="text-lg text-black font-semibold mb-8 leading-relaxed">
                Hidden Gems, Staying Safe, Maneuvering Around The City, Watching
                Out For Scams, Negotiating, What To Pack. The Ultimate Guide For
                Gringos.
              </p>

              <Button className="px-6 py-3 text-white w-full font-bold rounded bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] hover:brightness-110 transition">
                <a href="https://lacarta.co/cartagena/resources/">
                  https://lacarta.co/cartagena/resources/
                </a>
              </Button>
            </div>

            {/* RIGHT IMAGE STACK */}
            <div className="relative flex justify-center">
              <img
                src={carpic}
                alt="Cartagena Travel Guide"
                className="w-[400px] h-[500px] relative z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center uppercase mb-16">
          Free tools for your journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-2">
          {[
            {
              icon: <Headset />,
              label: "Tourist Service Center",
              color: "from-yellow-300 via-yellow-400 to-yellow-600",
              paragraph:
                "If you ever need any help during your time in Cartagena!",
              buttonTxt: "GO",
            },
            {
              icon: <MessageCircleMore />,
              label: "Catagena FAQs",
              color: "from-green-400 via-green-600 to-green-800",
              paragraph: "Cartagena's Most Frequently Asked Questions",
              buttonTxt: "Download",
            },
            {
              icon: <FileSpreadsheet />,
              label: "Cartagena Travel Checklists",
              color: "from-red-400 via-red-600 to-red-800",
              paragraph:
                "Everything you must do before boarding your flight to Cartagena, Colombia!",
              buttonTxt: "Checkoff",
            },
            {
              icon: <Plus />,
              label: "Cartagena Emergency Guides",
              color: "from-yellow-400 via-yellow-600 to-yellow-800",
              paragraph:
                "Save our Emergency Guide with you at all times for all the police stations, hospitals, and medical services!",
              buttonTxt: "Download",
            },
            {
              icon: <Music />,
              label: "Cartagena Spotify Playlists",
              color: "from-green-400 via-green-600 to-green-800",
              paragraph:
                "Enhance your Cartagena trip by immersing yourself to the Cartagena Carribean beats!",
              buttonTxt: "Download",
            },
          ].map((tool, i) => (
            <div
              key={i}
              className="mt-5  rounded-md shadow-lg pt-10 pb-3 px-3 lg:pt-9 lg:pb-2 lg:px-2  relative text-start 
             flex flex-col h-auto"
            >
              

              <div
                className={`absolute -top-8 left-1/2  -translate-x-1/2 
              w-14 h-14 flex items-center border-4 border-white justify-center
              rounded-full text-white shadow-lg bg-gradient-to-r ${tool.color}`}
              >
                {tool.icon}
              </div>
              <div className="inline text-black font-bold absolute top-3 right-2">
                <Heart size={25} />
              </div>

              {/* <div className="px-2">/ */}
              <h5 className="font-bold text-black">{tool.label}</h5>
               <p className="text-xs font-semibold pt-1 text-gray-500 flex-grow">
                {tool.paragraph}
              </p>
              <Button
                className={`w-full rounded-md text-white font-bold bg-gradient-to-r hover:brightness-110 ${tool.color}`}
              >
                {tool.buttonTxt}
              </Button>
              
            </div>
          ))}
        </div>
      </div>

      <ConciergeCTA />

      <HowToDoCartagena />

      <Pizza />

      {/* Carasole Section */}
      <TopNewsCartagena />


      {/* Search Section */}
      <CartagenaNews />
    </div>
  );
};

export default HomePage;
