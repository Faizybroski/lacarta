import React from 'react'
import EstateHero from '../components/real-estate/realEstate-Hero';
import EstateThemes from '../components/real-estate/EstateThemes';
import Neighborhoods from '../components/real-estate/scroll-Images';
import WaltSection from '../components/real-estate/Walt-Slider';
import EstateCard from '../components/card/RealEstate-Card';
import { realEsteteData } from '../data/real-estate-page.data';


export default function RealestatePage(){
  return (
    <>
    <div className="bg-[#f7f7f7] px-3 px-md-5">
      <div className="mx-auto max-w-7xl md:px-4">
        <EstateHero />
        <EstateThemes />
        <Neighborhoods />
        <WaltSection />
        <EstateCard {...realEsteteData} columns={"grid gap-6 md:grid-cols-3"}/>
      </div>
      </div>
      
    </>
  )
}