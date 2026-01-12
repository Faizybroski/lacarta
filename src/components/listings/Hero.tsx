import React from "react";
import { Button } from "@/components/ui/button";

const Hero = ({ bgImage, title, subtitle, path, cta }) => {
  return (
    <div
      className="relative bg-cover bg-center py-24 md:py-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h5 className="mt-4 fw-bold text-lg text-white/90">{path}</h5>
        <h1 className="text-4xl md:text-6xl font-moonscape font-black leading-tight mb-8 mt-2">
          {title}
        </h1>
        <p className="my-4 fw-bold text-white/90">{subtitle}</p>

        <Button
          className="px-6 py-3 text-white font-extrabold rounded-lg 
bg-gradient-to-r from-[#E6B65C] via-[#D4A74A] to-[#B8902F] hover:brightness-110
transition"
        >
          <a href="https://lacarta.co/cartagena/resources/">{cta}</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
