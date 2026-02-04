import React from 'react'
import {Search} from 'lucide-react'
import {Button} from '@/components/ui/button';
import bgImage from '/assets/real-estate/Rectangle 1000001778.png';

export default function EstateHero(){
  return (
    <div
        className="relative bg-cover bg-center py-2 font-['Inter'] rounded-lg my-3 my-md-4 py-md-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      <div className="mx-auto my-5 max-w-7xl px-4 text-center">
              <h1 className="text-3xl md:text-6xl font-['Inter'] font-black leading-tight text-white mb-2 mt-2">
                Real Estate In Cartagena
              </h1>
             <p className="font-moonscape w-50 d-none d-md-block mx-auto leading-tight text-white mb-8 mt-2">
                All of our places to stay mentioned have been accommodations that our team at La Carta has personally stayed at. Our team has a grading curriculum tailored for western tourists, from the backpackers to luxury travellers our grades will help you find what you need for your vacation in Cartagena.
              </p>
              <div className="flex max-w-2xl rounded-full gap-1 mx-auto overflow-hidden p-1">
                <input
                  className="flex-grow p-2 text-black border rounded-full"
                  type="email"
                  placeholder="Where/What you are Looking For"
                />
                <Button className="text-lg text-white my-auto rounded-full px-6 py-2 bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                  Seacrh <Search></Search>
                </Button>
              </div>
              <Button className="text-md text-white mt-5 rounded-full px-6 py-2 bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                  List Your Home 
                </Button>
              </div>
            </div>
  )
}

