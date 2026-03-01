import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero(
   { bgImage, title, subtitle, path, cta }
){
    return(
        <div
        className="relative bg-cover bg-center py-24 md:py-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h5 className="mt-4 fw-bold text-lg text-white/90">
{path}
</h5>
          <h1 className="text-4xl md:text-5xl font-luxury shadow-lg font-black leading-tight mb-8 mt-2">
            {title}
          </h1>
          <p className="my-4 text-sm mx-auto w-75 font-semibold text-gray/90">
{subtitle}
</p>

        <Button className="py-6 rounded-sm w-[60%] bg-gradient-to-t from-yellow-400 via-yellow-500 to-yellow-600 font-['Bebas_Neue'] text-2xl text-white hover:brightness-110 transition">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}
