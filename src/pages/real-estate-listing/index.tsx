import React from "react";

import ProjectGallery from "./components/ProjectGallery";
import ProjectDetails from "./components/ProjectDetails";
import ContactFormCard from "./components/ContactFormCard";
import EstateHero from "./components/estatehero";
import EstateCard from "./../../components/card/RealEstate-Card";
import { realEsteteData } from "@/data/real-estate-page";
import HomeArea from "./../../components/HomeInArea";

export default function RealestateListing() {
  return (
    <>
      <div className="bg-white px-3 px-md-5">
        <div className="mx-auto max-w-7xl md:px-4">
          <EstateHero />
        </div>
        <section className="max-w-7xl mx-auto px-4 py-8">
          <ProjectGallery />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-8">
            <ProjectDetails />
            <ContactFormCard />
          </div>
        </section>

        <EstateCard {...realEsteteData} columns={"grid gap-6 md:grid-cols-3"} />
        <HomeArea />
        <EstateCard {...realEsteteData} columns={"grid gap-6 md:grid-cols-4"} />
      </div>
    </>
  );
}
