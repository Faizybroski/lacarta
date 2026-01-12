import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Snowflake,
  Zap,
  Car,
  Bike,
  Dumbbell,
  Waves,
  PawPrint,
  Mountain,
} from "lucide-react";

export default function ProjectDetailsPage({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-[#f7f7f7] px-5">
      <div className="mx-auto max-w-7xl md:px-4">
        <div className="mx-auto my-5 max-w-7xl px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-moonscape font-black leading-tight text-black mb-8 mt-2">
            Complete guide of all Gastronomy projects in Lacarta.
          </h1>
          <div className="flex max-w-2xl gap-1 mx-auto bg-white overflow-hidden p-1">
            <input
              className="flex-grow p-2 text-black border rounded-full"
              type="email"
              placeholder="Where/What you are Looking For"
            />
            <Button className="text-white my-auto rounded-full px-6 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
              Seacrh
            </Button>
          </div>
        </div>
        {/* HEADER */}
        <Card className="mb-8 shadow">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="fs-2 text-black font-bold">{project.title}</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-black">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{project.rating}</span>
              <span>({project.reviews} reviews)</span>
            </div>
            <p className="font-bold text-gray-700">
              Starting at <strong>${project.price}</strong> / month
            </p>
            {project.keyFeature.map((i) => (
              <li className="font-italic mx-3 text-muted-foreground">{i}</li>
            ))}
          </CardHeader>

          {/* IMAGE GALLERY */}
          <div className="relative w-full h-[260px] overflow-hidden">
            <img
              src={project.images[activeImage]}
              className="h-full w-full object-cover"
              alt="project"
            />

            {/* Arrows */}
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
            >
              <ChevronLeft className="text-black" />
            </button>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
            >
              <ChevronRight className="text-black" />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 p-4 overflow-x-auto pb-2">
            {project.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`
        flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 transition-all
        ${
          index === activeImage
            ? "border-green-500 shadow-sm"
            : "border-transparent hover:border-gray-300"
        }
      `}
              >
                <img
                  src={img}
                  className="h-20 w-28 object-cover"
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Main Content */}

        <div className="max-w-7xl mx-auto px-0 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT CONTENT */}
            <div className="md:col-span-2 space-y-6">
              {/* Header */}
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl text-black font-bold">
                    Market rental habitats
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Market rental habitats offer a multitude of advantages to
                    their residents, thanks to a prime location in the heart of
                    Chomedey, Laval...
                  </p>
                  <button className="text-green-600 text-sm mt-1">
                    Full description +
                  </button>
                </div>
              </div>

              {/* Accordions */}
              <Accordion type="multiple" className="w-full">
                {[
                  "Contact details and website for this project",
                  "Real estate developer(s)",
                  "Features",
                  "User comment(s) (0)",
                  "Blog posts related to this project",
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-black">
                      {item}
                    </AccordionTrigger>
                    <AccordionContent>Content goes here</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Features Grid */}
              <div>
                <h3 className="font-bold text-black my-4">Features</h3>

                <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                  <Feature icon={Snowflake} label="Air conditioning" />
                  <Feature icon={Zap} label="Charging stations" />
                  <Feature icon={Car} label="Indoor parking" />
                  <Feature icon={Bike} label="Bike storage" />
                  <Feature icon={Dumbbell} label="Gym" />
                  <Feature icon={Waves} label="Indoor pool" />
                  <Feature icon={PawPrint} label="Pets allowed" />
                  <Feature icon={Mountain} label="Rooftop terrace" />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="md:sticky md:top-6 h-fit">
              <Card className="shadow">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg text-black font-bold">
                    Interested in this project?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Let us share your request with similar COLLECTIONS listings.
                  </p>

                  <label className="text-muted-foreground fw-bold mx-1 py-0">
                    Your Name
                  </label>
                  <Input placeholder="John Doe" />
                  <label className="text-muted-foreground fw-bold mx-1 py-0">
                    Your Phone
                  </label>
                  <Input placeholder="(514) 555-0123" />
                  <label className="text-muted-foreground fw-bold mx-1 py-0">
                    Your Email
                  </label>
                  <Input placeholder="john@example.com" />

                  <div className="flex items-center text-muted-foreground p-3 gap-2 text-sm">
                    <Checkbox id="robot" />
                    <label htmlFor="robot">I'm not a robot</label>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Checkbox id="agree" />
                    <label htmlFor="agree">
                      I agree to receive communications from Guide Immo
                    </label>
                  </div>

                  <Button className="w-full text-white font-bold rounded-full bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] hover:brightness-110">
                    Submit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="border bg-[#f9f9fb] fw-bold rounded-lg p-2 flex md:col-span-1 flex-col items-center text-center gap-2">
      <Icon className="w-6 h-6 text-muted-foreground" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"

// import {
//   Snowflake,
//   Zap,
//   Car,
//   Bike,
//   Dumbbell,
//   Waves,
//   PawPrint,
//   Mountain,
// } from "lucide-react"

// export default function ProjectDetailsPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* LEFT CONTENT */}
//         <div className="md:col-span-2 space-y-6">

//           {/* Header */}
//           <div className="flex gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//               className="w-20 h-20 rounded-lg object-cover"
//             />
//             <div>
//               <h2 className="text-xl font-semibold">
//                 Market rental habitats
//               </h2>
//               <p className="text-sm text-muted-foreground">
//                 Market rental habitats offer a multitude of advantages to their
//                 residents, thanks to a prime location in the heart of Chomedey,
//                 Laval...
//               </p>
//               <button className="text-green-600 text-sm mt-1">
//                 Full description +
//               </button>
//             </div>
//           </div>

//           {/* Accordions */}
//           <Accordion type="multiple" className="w-full">
//             {[
//               "Contact details and website for this project",
//               "Real estate developer(s)",
//               "Features",
//               "User comment(s) (0)",
//               "Blog posts related to this project",
//             ].map((item, i) => (
//               <AccordionItem key={i} value={`item-${i}`}>
//                 <AccordionTrigger>{item}</AccordionTrigger>
//                 <AccordionContent>
//                   Content goes here
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>

//           {/* Features Grid */}
//           <div>
//             <h3 className="font-semibold mb-4">Features</h3>

//             <div className="grid grid-cols-8 sm:grid-cols-4 gap-4">
//               <Feature icon={Snowflake} label="Air conditioning" />
//               <Feature icon={Zap} label="Charging stations" />
//               <Feature icon={Car} label="Indoor parking" />
//               <Feature icon={Bike} label="Bike storage" />
//               <Feature icon={Dumbbell} label="Gym" />
//               <Feature icon={Waves} label="Indoor pool" />
//               <Feature icon={PawPrint} label="Pets allowed" />
//               <Feature icon={Mountain} label="Rooftop terrace" />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="md:sticky md:top-6 h-fit">
//           <Card>
//             <CardContent className="p-6 space-y-4">
//               <h3 className="text-lg font-semibold">
//                 Interested in this project?
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 Let us share your request with similar listings.
//               </p>

//               <Input placeholder="Your name" />
//               <Input placeholder="Your phone" />
//               <Input placeholder="Your email" />

//               <div className="flex items-center gap-2 text-sm">
//                 <Checkbox id="robot" />
//                 <label htmlFor="robot">I'm not a robot</label>
//               </div>

//               <div className="flex items-center gap-2 text-xs">
//                 <Checkbox id="agree" />
//                 <label htmlFor="agree">
//                   I agree to receive communications
//                 </label>
//               </div>

//               <Button className="w-full rounded-full bg-green-600 hover:bg-green-700">
//                 Submit
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Feature({ icon: Icon, label }) {
//   return (
//     <div className="border rounded-lg p-2 flex md:col-span-2 flex-col items-center text-center gap-2">
//       <Icon className="w-6 h-6 text-muted-foreground" />
//       <span className="text-sm">{label}</span>
//     </div>
//   )
// }
