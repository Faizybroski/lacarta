import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo.png.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Cloudy
} from "lucide-react";

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="flex items-center justify-between px-6 py-4 bg-black md:px-16 relative">
      {/* Logo */}
      <div>
        <img src={logo} className="h-10 w-auto" alt="Logo" />
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm uppercase text-white font-semibold">
        {["Activities","Hotels","Beaches","Boating","Tours","Gastronomy"].map(
          (item) => (
            <Link key={item} to="" className="hover:text-[#d0a439] transition-colors">
              {item}
            </Link>
          )
        )}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link to="#" className="text-white">
          <Heart className="text-[#d0a439] w-6 h-6" />
        </Link>

        <Link to="#" className="text-white text-sm hidden md:block">
          Login
        </Link>

        <Button className="bg-[#d0a439] hover:bg-[#b88f30] text-black font-bold rounded-sm px-6 hidden sm:block">
          BOOK TRIP
        </Button>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black z-50 flex flex-col items-center gap-6 py-6 text-white uppercase font-semibold md:hidden">
          {["Activities","Hotels","Beaches","Boating","Tours","Gastronomy"].map(
            (item) => (
              <Link
                key={item}
                to=""
                className="hover:text-[#d0a439]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      )}
    </header>


      <main>{children}</main>

      <footer className="bg-black text-white pt-20 pb-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-11 gap-12">
  {/* Left: Logo + Text + Social */}
  <div className="md:col-span-3">
    <img src={logo} className="w-100 w-md-60 mb-6" alt="LaCarta" />

    <p className="text-gray-400 leading-relaxed mb-8 hidden md:block">
      We are native Cartagenero Costeños passionate about everything Cartagena.
      Our magazine is here to help you discover the marvels of Cartagena la
      Heroica.
    </p>

    <Button className="bg-[#d0a439] hover:bg-[#b88f30] text-white font-bold rounded-lg px-6 w-100">
            BOOK TRIP
          </Button>
  </div>

  {/* About */}
  <div className="hidden md:block md:col-span-2 py-5">
    <h5 className="font-bold uppercase mb-6">About</h5>
    <ul className="space-y-3 text-gray-400">
      {[
        "About Us",
        "Contact",
        "Our Culture",
        "Work With Us",
        "Submit a Story",
        "Advertise with Us",
        "Editorial Standards",
      ].map((l) => (
        <li key={l}>
          <Link to="#" className="hover:text-white transition">
            {l}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Cartagena */}
  <div className="hidden md:block md:col-span-2 py-5">
    <h5 className="font-bold uppercase mb-6">Cartagena</h5>
    <ul className="space-y-3 text-gray-400">
      {[
        "Activities",
        "Hotels",
        "Beach Trips",
        "Rentals",
        "Medical",
        "Real Estate",
        "More",
      ].map((l) => (
        <li key={l}>
          <Link to="#" className="hover:text-white transition">
            {l}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Help */}
  <div className="md:block text-center text-md-start md:col-span-2 py-5">
    <h5 className="font-bold uppercase mb-6">Help</h5>
    <ul className="space-y-3 text-gray-400">
      {[
        "FAQ",
        "Travel Guide",
        "Resources",
        "Glossary",
        "Safety Map",
        "Staying Safe",
        "Tourist Center",
      ].map((l) => (
        <li key={l}>
          <Link to="#" className="hover:text-white transition">
            {l}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Weather Card */}
   <div className="hidden md:flex justify-end md:col-span-2 py-5">
      <div className="  max-w-xs  rounded-2xl bg-gradient-to-b from-[#7bb9ff] to-[#4d9cfb] text-white px-6 py-0 text-center align-content-center shadow-lg">
        
        {/* Location */}
        <h4 className="font-bold uppercase text-lg tracking-wide">
          Cartagena, CO
        </h4>

        {/* Time & Date */}
        <p className="text-sm opacity-90 mb-4">
          7:20 am, Dec 19, 2025
        </p>

        {/* Temperature */}
        <div className="flex items-center justify-center gap-2 text-5xl font-extrabold mb-3">
          <Cloudy size={42} />
          <span>25°C</span>
        </div>

        {/* Description */}
        <p className="text-sm font-semibold uppercase tracking-widest opacity-90">
          Few Clouds
        </p>
      </div>
    </div>
</div>


<div className="container hidden md:block mx-auto px-4 mt-20 text-sm text-white">
  <div className="flex flex-col md:flex-row items-center justify-between gap-2">
    <span><div className="flex gap-2">
      {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
        <Link
          key={i}
          to="#"
          className="p-2 text-white 
                     hover:bg-white hover:text-black transition"
        >
          <Icon size={22} />
        </Link>
      ))}
    </div></span>
    <span className="fw-bold">My Favorites</span>
  </div>
</div>


        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/50 text-sm text-gray-500">
  <div className="flex flex-col md:flex-row items-center justify-between gap-2">
    <span>© LaCarta 2023 – 2025. All rights reserved</span>
    <span>Privacy Policy | Terms & Conditions</span>
  </div>
</div>

      </footer>
    </>
  );
};

export default Layout;
