import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/assets/Logo.png.png";
import footerbg from "/assets/footer-bg.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { TopBar } from "./TopBar";
import {
  Heart,
  Facebook,
  Share2,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CloudMoon,
} from "lucide-react";

const Layout = ({ children }) => {
  const NAV_LINKS = [
    { label: "Activities", path: "/activities" },
    { label: "Hotels", path: "/hotels" },
    { label: "Beaches", path: "/beaches" },
    { label: "Boating", path: "/boating" },
    { label: "Real Estate", path: "/realState" },
    { label: "Gastronomy", path: "/gastronomy" },
  ];
  const FooterNavLinks = [
    { label: "Activities", path: "/activities" },
    { label: "Hotels", path: "/hotels" },
    { label: "Beach Trips", path: "/beaches" },
    { label: "Rentals", path: "/" },
    { label: "Medical", path: "/" },
    { label: "Real Estate", path: "/" },
    { label: "More", path: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="flex items-center justify-between px-6 py-4 bg-black md:px-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(245, 242, 242, 0.2) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} className="h-16 w-44" alt="Logo" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center  gap-3 text-sm uppercase text-white font-medium">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link to="#" className="text-white">
            <Heart className="text-gold w-6 h-6" />
          </Link>

          <p>|</p>
          <Link to="#" className="text-white text-sm hidden md:block">
            Login
          </Link>
          <Button className="bg-gradient-to-r from-gold to-gold-light hover:bg-[#b88f30] text-white  rounded-sm px-6 hidden sm:block">
            BOOK A TRIP
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="inline fixed z-[999] top-44 left-10">
          <div className="bg-[#f15c5d] rounded-full">
            <Share2
              size={60}
              className="p-3 text-white font-bold bg-red-400 mb-6 fill-white"
            />
          </div>
          <div className="bg-yellow-400 rounded-full">
            <Heart size={60} className="p-3 text-black font-bold " />
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-black z-50 flex flex-col items-center gap-6 py-6 text-white uppercase font-semibold md:hidden">
            {[
              { label: "Activities", path: "/activities" },
              { label: "Hotels", path: "/hotels" },
              { label: "Beaches", path: "/beaches" },
              { label: "Boating", path: "/boating" },
              { label: "Real Estate", path: "/realState" },
              { label: "Gastronomy", path: "/gastronomy" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="hover:text-[#d0a439]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer
        className="bg-black text-white pt-20 pb-10 relative bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(245, 242, 242, 0.2) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%)",
          }}
        ></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-11 gap-12">
            {/* Left: Logo + Text + Social */}
            <div className="md:col-span-3">
              <Link to="/">
                <img src={logo} className="w-100 w-md-60 mb-6" alt="LaCarta" />
              </Link>

              <p className="text-gray-400 leading-relaxed mb-8 hidden md:block">
                We are native Cartagenero Costeños passionate about everything
                Cartagena. Our magazine is here to help you discover the marvels
                of Cartagena la Heroica.
              </p>

              <Button className="bg-gradient-to-r from-yellow-300 to-yellow-600 hover:bg-[#b88f30] text-white font-bold rounded px-6 w-100">
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
                {FooterNavLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="hover:text-white transition">
                      {label}
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
              <div className="max-w-xs h-60 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-500 text-white px-6 py-4 text-center shadow-lg flex flex-col justify-between">
                {/* Location */}
                <h4 className="font-bold uppercase text-lg tracking-wide">
                  Cartagena, CO
                </h4>

                {/* Time & Date */}
                <p className="text-sm opacity-90">7:20 am, Dec 19, 2025</p>

                {/* Temperature */}
                <div className="flex items-center justify-center gap-2 text-5xl font-extrabold">
                  <CloudMoon className="w-10 h-10 font-bold" />
                  <span>25°C</span>
                </div>

                {/* Description */}
                <p className="text-sm font-bold uppercase tracking-widest opacity-90">
                  Few Clouds
                </p>

                {/* Footer */}
                <p className="text-xs opacity-70 mt-2">
                  Weather from OpenWeatherMap
                </p>
              </div>
            </div>
          </div>

          <div className="container hidden md:block mx-auto px-4 mt-20 text-sm text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <span>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                    (Icon, i) => (
                      <Link
                        key={i}
                        to="#"
                        className="p-2 text-white 
                     hover:bg-white hover:text-black transition"
                      >
                        <Icon size={22} />
                      </Link>
                    ),
                  )}
                </div>
              </span>
              <span className="fw-bold">My Favorites</span>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/50 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <span>© LaCarta 2023 – 2025. All rights reserved</span>
              <span>Privacy Policy | Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
