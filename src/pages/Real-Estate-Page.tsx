import React from "react";
import EstateHero from "@/components/real-estate/realEstate-hero";
import EstateThemes from "@/components/real-estate/EstateThemes";

export default function RealestatePage() {
  return (
    <>
      <div className="bg-[#f7f7f7] px-3 px-md-5">
        <div className="mx-auto max-w-7xl md:px-4">
          <EstateHero />
          <EstateThemes />
        </div>
      </div>
    </>
  );
}
