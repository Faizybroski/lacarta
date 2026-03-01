import React from "react";
import { useState } from "react";
import logo from "/assets/Logo.png.png";
import whatsapp from "/assets/whatsapp.svg";
import footerbg from "/assets/footer-bg.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { TopBar } from "./TopBar";
import {
  Heart,
  Menu,
  X,
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

        <div className="inline absolute z-[999] sm:top-44 top-28 left-10">
          <div className="bg-[#f15c5d] p-1 sm:p-3 rounded-full mb-2 sm:mb-6 ">
            <Share2 className="w-5 h-5 sm:h-10 sm:w-10 text-white font-bold  fill-white" />
          </div>
          <div className="bg-yellow-400 p-1 sm:p-3 rounded-full">
            <Heart className="w-5 h-5 sm:h-10 sm:w-10 text-black font-bold " />
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-2">
          <div>
            <span className="bg-white text-black font-bold px-3 py-1 rounded shadow text-sm hidden md:block">
              Need help? Chat with us
            </span>
          </div>
          <div>
            <a
              href="https://wa.me/+111111111111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full  hover:scale-105 transition"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
            </a>
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
        className="container bg-black text-white pt-20 pb-10 relative bg-no-repeat bg-center bg-contain"
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

              <p className="text-white leading-relaxed text-sm mb-6  hidden md:block">
                We are native Cartagenero Costeños passionate about everything
                Cartagena. Our magazine is here to help you discover the marvels
                of Cartagena la Heroica.
              </p>

              <Button className="bg-gradient-to-r from-gold to-gold-light hover:bg-gold text-white text-lg font-semibold rounded-sm px-6 w-full">
                BOOK TRIP
              </Button>
            </div>

            {/* About */}
            <div className="hidden md:block md:col-span-2 py-5">
              <h5 className="font-bold mb-6">About</h5>
              <ul className="space-y-2 text-white">
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
              <h5 className="font-bold mb-6">Cartagena</h5>
              <ul className="space-y-2 text-white">
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
            <div className="md:block text-center md:text-start md:col-span-2 py-5">
              <h5 className="font-bold mb-6">Help</h5>
              <ul className="space-y-2 text-white">
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
              <div className="w-[320px] h-[260px] rounded-sm bg-gradient-to-br from-[#62B8F6] to-[#396C90] text-white shadow-xl  pt-6 pb-0 flex flex-col text-center">
                {/* Top Section */}
                <div className="px-8">
                  <h4 className="text-2xl font-bold">Cartagena, CO</h4>
                  <p className="text-sm opacity-90 mt-1">
                    7:20 am, Dec 19, 2025
                  </p>
                </div>

                {/* Temperature Section */}
                <div className="flex items-center justify-center gap-3 my-4 px-8">
                  <CloudMoon className="w-12 h-12 opacity-90" />
                  <div className="flex items-start">
                    <span className="text-6xl font-semibold leading-none">
                      25
                    </span>
                    <span className="text-3xl font-semibold mt-1 ml-1">°C</span>
                  </div>
                </div>
                <div className="flex-grow" />

                {/* Description */}
                <p className="text-sm opacity-95 px-8 pb-2">Few Clouds</p>

                {/* Spacer pushes footer down */}

                {/* Footer */}
                <div className="w-full backdrop-blur-md bg-[#396C90]/50 py-2 rounded-b-sm">
                  <p className="text-[10px] opacity-70">
                    Weather from OpenWeatherMap
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container hidden md:block mx-auto px-4 mt-20 text-sm text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <span>
                Follow Us
                <div className="flex pl-0 ml-0 gap-2">
                  {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                    (Icon, i) => (
                      <Link
                        key={i}
                        to="#"
                        className="p-2 text-white hover:text-gold  transition"
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

          <div className="container mx-auto px-4   text-sm text-white">
            <div className="flex flex-col border-t-2 pt-8 mt-16 border-white md:flex-row items-center justify-between gap-2">
              <span>© LaCarta 2023 – 2025. All rights reserved</span>
              <span>Privacy Policy - Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
