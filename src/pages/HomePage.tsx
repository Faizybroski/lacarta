import React from "react";
import logo from "../assets/Logo.png.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img33.png";
import img4 from "../assets/4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import carpic from "../assets/car.png";
import girlpic from "../assets/girl.png";
import beachpic from "../assets/beach.png";
import shippic from "../assets/ship.png";
import artpic from "../assets/art.png";
import resturantpic from "../assets/resturant.png";
import hotelpic from "../assets/hotels.png";

import Card from "@/components/card/Card";
import CircleCard from "@/components/card/CircularCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Headset,
  MessageCircleMore,
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
import TopNewsCartagena from "@/components/TopNewsCartagena";
import ConciergeCTA from "@/components/ConciergeCTA";
// Category Color Map to replace c1, c2, c3 etc.
const catColors = {
  green: "bg-[#20bb59]",
  gold: "bg-[#d0a439]",
  yellow: "bg-[#fed358]",
  purple: "bg-[#ca77e7]",
  teal: "bg-[#5bc7c1]",
  red: "bg-[#f52929]",
};

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 md:py-40"
        style={{ backgroundImage: `url('/src/assets/Hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-moonscape font-black leading-tight mb-8">
            EVERYTHING <br /> CARTAGENA
          </h1>

          <nav className="lg:flex hidden flex-wrap justify-center gap-3 mb-10">
            {[
              "Beaches",
              "Accommodations",
              "Boating",
              "Tours",
              "Activities",
              "Gastronomy",
            ].map((tag) => (
              <Link
                key={tag}
                to="#"
                className="bg-white text-black px-4 py-2 text-sm font-bold rounded-sm hover:bg-gray-200"
              >
                {tag}
              </Link>
            ))}
          </nav>

          <div className="flex max-w-2xl mx-auto bg-white rounded-md overflow-hidden p-1">
            <input
              className="flex-grow p-2 text-black outline-none"
              type="text"
              placeholder="Search for Anything"
            />
            <Button className="text-white my-auto px-6 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
              Search
            </Button>
          </div>
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
              color: "from-[#E6B65C] via-[#D4A74A] to-[#B8902F]",
            },
            {
              label: "Beaches",
              img: img2,
              color: "from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A]",
            },
            {
              label: "Activities",
              img: img3,
              color: "from-[#C62828] via-[#B71C1C] to-[#8E0000]",
            },
            {
              label: "Tours & Sightseeing",
              img: img4,
              color: "from-[#E6B65C] via-[#D4A74A] to-[#B8902F]",
            },
            {
              label: "Boat Rentals",
              img: img5,
              color: "  from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A]",
            },
            {
              label: "Gastronomy",
              img: img6,
              color: "from-[#C62828] via-[#B71C1C] to-[#8E0000]",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full p-2 text-white font-bold fs-5 text-center z-10 bg-gradient-to-r ${item.color}`}
              >
                {item.label}
              </div>
              <img
                src={item.img}
                className="w-full h-110 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.label}
              />
            </div>
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
            className="row-span-2"
          />

          {/* Restaurants */}
          <Card
            image={resturantpic}
            category="Gastronomy"
            title="The Best Restaurants of Cartagena."
            author="May"
            time="10 min"
          />

          {/* Activities – Tall */}
          <Card
            image={shippic}
            category="ACTIVITIES"
            title="What to do in Cartagena"
            author="Maria"
            time="10 min"
            className="row-span-2"
          />

          {/* Fashion – Tall */}
          <Card
            image={girlpic}
            category="Fashion"
            title="The Best Shopping in Cartagena"
            author="Alejandra"
            time="7 min"
            className="row-span-3"
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
            className="mt-5"
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
              <h2 className="text-5xl font-serif font-extrabold leading-tight mb-6 text-black">
                How to thrive in Cartagena, Colombia like a local.
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hidden gems, staying safe, maneuvering around the city, watching
                out for scams, negotiating, what to pack. The ultimate guide for
                Gringos.
              </p>

              <Button
                className="px-6 py-3 text-white font-semibold rounded-lg 
bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] hover:brightness-110
transition"
              >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <Headset />,
              label: "Tourist Service Center",
              color: "from-[#E6B65C] via-[#D4A74A] to-[#B8902F]",
              paragraph:
                "If you ever need any help during your time in Cartagena!",
              buttonTxt: "GO",
            },
            {
              icon: <MessageCircleMore />,
              label: "Catagena FAQs",
              color: "from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A]",
              paragraph: "Cartagena's Most Frequently Asked Questions",
              buttonTxt: "Download",
            },
            {
              icon: <FileSpreadsheet />,
              label: "Cartagena Travel Checklists",
              color: "from-[#C62828] via-[#B71C1C] to-[#8E0000]",
              paragraph:
                "Everything you must do before boarding your flight to Cartagena, Colombia!",
              buttonTxt: "Checkoff",
            },
            {
              icon: <Plus />,
              label: "Cartagena Emergency Guides",
              color: "from-[#E6B65C] via-[#D4A74A] to-[#B8902F]",
              paragraph:
                "Save our Emergency Guide with you at all times for all the police stations, hospitals, and medical services!",
              buttonTxt: "Download",
            },
            {
              icon: <Music />,
              label: "Cartagena Spotify Playlists",
              color: "from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A]",
              paragraph:
                "Enhance your Cartagena trip by immersing yourself to the Cartagena Carribean beats!",
              buttonTxt: "Download",
            },
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white mt-5 rounded-2xl shadow-lg p-6 pt-12 relative text-start 
             flex flex-col h-auto"
            >
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 
              w-14 h-14 flex items-center border-4 border-white justify-center
              rounded-full text-white shadow-lg bg-gradient-to-r ${tool.color}`}
              >
                {tool.icon}
              </div>

              <h5 className="font-bold text-black">{tool.label}</h5>

              {/* This section will auto-adjust */}
              <p className="text-xs fw-bold pt-3 text-gray-500 flex-grow">
                {tool.paragraph}
              </p>

              {/* Button always at bottom */}
              <button
                className={`w-full py-2 mt-6 rounded-lg text-white font-bold bg-gradient-to-r hover:brightness-110 ${tool.color}`}
              >
                {tool.buttonTxt}
              </button>
            </div>
          ))}
        </div>
      </div>

      <ConciergeCTA></ConciergeCTA>

      <HowToDoCartagena></HowToDoCartagena>

      {/* Carasole Section */}
      <TopNewsCartagena></TopNewsCartagena>

      {/* Search Section */}
      <div className="overlayed-pic container-fluid p-3 text-light p-relative">
        <div className="overlay">
          <div className="container col-lg-8 col-md-8 col-12 mb-4 py-5 mb-md-0 m-auto text-center text-white">
            <h2 className="fs-1 fw-bold">CARTAGENA NEWSLETTER</h2>
            <p className="fs-5 my-3">
              Get the latest discounts, deals, coupons, news, & tips of
              Cartagena.
            </p>
            <div className="flex max-w-2xl mx-auto bg-white rounded-md overflow-hidden p-1">
              <input
                className="flex-grow p-2 text-black outline-none"
                type="email"
                placeholder="Enter Your Email"
              />
              <Button className="text-white my-auto px-6 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
