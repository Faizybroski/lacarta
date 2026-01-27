import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Heart, Check, MapPin, BedDouble, Bath } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EstateCard({ details = [], heading, columns }) {
  return (
    <section className="w-full px-5 py-16">
      <h2 className="mb-8 text-2xl md:text-4xl text-black font-bold">
        {heading}
      </h2>

      <div className={`${columns}`}>
        {details.map((item) => (
          <Card key={item.id} className="shadow relative overflow-hidden">
            {/* Heart icon (right) */}
            <Button
              className="absolute right-2
    top-2
    h-10 w-10
    rounded-full
    bg-[#fed358]
    p-0
    flex items-center justify-center
    hover:bg-gray-500/30
    transition"
            >
              <Heart className="h-5 w-5 font-bold fill-white text-black" />
            </Button>
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <CardHeader className="space-y-1">
              <h3 className="text-lg text-black font-bold">{item.title}</h3>
              <h6 className="text-muted-foreground font-bold">Home for Rent</h6>
              <p className="text-sm flex gap-2 text-muted-foreground">
                <MapPin size={18}></MapPin>
                {item.location}
              </p>
              <p className="text-sm flex gap-2 text-muted-foreground">
                <BedDouble size={18}></BedDouble>Number of Bedrooms :{" "}
                {item.noOfBed}
              </p>
              <p className="text-sm flex gap-2 text-muted-foreground">
                <Bath size={18}></Bath>Number of Bathrooms : {item.noOfBed}
              </p>
            </CardHeader>
            <CardContent className="items-center justify-between">
              <h5 className="text-bold text-muted-foreground font-bold">
                Starting at ${item.price}
                <span className="text-muted-foreground">/month</span>
              </h5>
              <span className="text-sm my-2 text-muted-foreground font-medium flex gap-5">
                <span>
                  <Star className="text-black"></Star>
                </span>
                {item.rating}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="
            border-0
            w-full
            border
            bg-transparent 
            text-black
            font-extrabold
            underline 
            underline-offset-4
            decoration-[#23c55e]
            hover:text-[#4bd87d]
            hover:decoration-[#4bd87d]"
              >
                SEE THIS PROJECT
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
