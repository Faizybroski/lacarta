// components/PlayaScondidaAbout.tsx
import { Card, CardContent } from "@/components/ui/card";
import {Clock,CalendarDays,Luggage,Phone,Link,Mail} from 'lucide-react'

export default function PlayaScondidaAbout() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container gap-5 px-4 md:grid grid-cols-[2.3fr_2.7fr] md:px-6 mx-auto max-w-7xl">
        {/* Main title + description */}
        <div className="md:max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-muted-foreground font-serif font-bold tracking-tight mb-6">DISCOVER</h6>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black font-bold tracking-tight mb-6">
            About Snorkeling
          </h1>
          
          <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">
            <p className="mb-6">
               Nestled on the pristine shores of <span className="font-bold text-black">Isla Barú</span>, just a scenic boat ride from Cartagena's
               historic walls, Playa Scondida offers an unparalleled eco-luxury glamping experience. 
               Here, the Caribbean Sea whispers secrets of ancient mariners, while the jungle canopy
               shelters you in its emerald embrace. 
               Our philosophy is simple: authentic luxury that honors the land. Each bungalow is crafted from 
               locally-sourced materials, designed to blend seamlessly with the surrounding nature while providing
               every modern comfort you desire. Wake to the calls of tropical birds, dine on freshly- caught seafood
               by candlelight, and fall asleep to the rhythm of gentle waves. With private docks offering direct ocean 
               access, secluded beach coves, and immersive nature trails, Playa Scondida is more than accommodation—it's 
               a transformation. Here, time moves differently, allowing you to reconnect with what truly matters.
            </p>
          </div>

             <Card className="border-none mt-5 shadow-lg relative bg-white/80 backdrop-blur-sm">
              <CardContent className="py-3 px-5 rounded bg-[#f8f5e9] border-1 border-amber-300 md:p-10">
                <div className="inline-block absolute -top-3 mb-6 rounded-full bg-[#d0a944] px-2 py-1 text-white font-bold text-sm">
                  Perfect For
                </div>
                <p className="text-2x1 font-bold text-black leading-relaxed italic">
                  "Ideal for couples, nature lovers & slow travelers seeking an authentic Caribbean escape far from the ordinary."
                </p>
              </CardContent>
            </Card>
        </div>

        <div>
          {/* Right sidebar - Information + Travel Tips */}
          <div className="space-y-8">
            {/* Information Card */}
            <Card className="bg-[#f8f5e9] text-white relative border-1 border-amber-300 shadow-xl">
              <CardContent className="px-5 py-2 lg:px-5 lg:py-2 ">
                <div className="inline-block absolute -top-4 mb-6 rounded-full bg-[#d0a944] px-2 py-1 text-white font-bold text-sm">Information</div>
                
                <div className="space-y-2 text-black">
                  <div>
                    <p className="text-black font-normal my-2">Address</p>
                    <p className="text-xl font-bold font-['Inter']">Isla Barú, Provincia de Cartagena, Bolívar, Colombia</p>
                  </div>

                  <div>
                    <p className="text-black font-medium mb-1">Contact</p>
                    <div className="space-y-2 text-sm font-semibold">
                      <div className="flex gap-2 font-bold align-items-center"><Mail size={15}></Mail> reservas@hotelplayascondidabaru.com</div>
                      <div className="flex gap-2 font-bold align-items-center"><Link size={15}></Link> https://playascondidabaru.com</div>
                      <div className="flex gap-2 font-bold align-items-center"><Phone size={15}></Phone> +57 350 368 24000</div>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

             <div className="">
                    <p className="text-gray-500">
                     Located on the southwestern tip of Isla Barú, our property occupies a pristine stretch of coastline where the Caribbean Sea meets lush mangrove forests. Accessible only by water, Playa Scondida offers the ultimate escape from the everyday world.
                    </p>
                  </div>

            {/* Travel Tips */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-black">Travel Tips</h3>

              <div className="grid gap-3">
                <div className="align-items-center flex items-start gap-2 p-2 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm ">
                  <div className="text-3xl"><Clock className="text-amber-600" size={20}></Clock></div>
                  <div>
                    <p className="font-bold text-slate-800">Speedboat Time</p>
                    <p className="text-slate-600 text-sm">45-60 minutes from Cartagena marina</p>
                  </div>
                </div>

                <div className="align-items-center flex items-start gap-2 p-2 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm ">
                  <div className="text-3xl"><CalendarDays className="text-amber-600" ></CalendarDays></div>
                  <div>
                    <p className="font-bold text-slate-800">Best Season</p>
                    <p className="text-slate-600 text-sm">December to April (dry season)</p>
                  </div>
                </div>

                <div className="align-items-center flex items-start gap-2 p-2 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm ">
                  <div className="text-3xl"><Luggage className="text-amber-600" ></Luggage></div>
                  <div>
                    <p className="font-bold text-slate-800">What to Bring</p>
                    <p className="text-slate-600 text-sm">Light clothing, reef-safe sunscreen, camera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}