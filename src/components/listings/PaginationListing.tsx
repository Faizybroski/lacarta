import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {Star, Heart} from 'lucide-react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PaginationListing({premiumListings = []}){
    return(
        <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-4xl text-black font-bold">Premium Listing</h2>
        
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {premiumListings.map((item) => (
        <Card key={item.id} className="shadow relative overflow-hidden">
     <img
    src={item.image} 
    alt="thumbnail"
    className="absolute top-5 left-3 h-12 w-16 object-cover border-4 border-white shadow"
  />

  {/* Heart icon (right) */}
  <Button
  className="
    absolute top-3 right-3
    h-10 w-10
    rounded-full
    bg-[#e5c0a9]
    border border-white
    p-0
    flex items-center justify-center
    hover:bg-gray-500/30
    transition
  "
>
  <Heart className="h-5 w-5 font-bold fill-white text-white" />
</Button>
        <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
        />
        <CardHeader className="space-y-1">
        <h6 className="text-black w-fit">Premium</h6>
        <h3 className="text-lg text-black font-bold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
        {item.subtitle}
        </p>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
        <span className="text-sm text-black font-medium flex gap-2"><Star></Star>{item.rating}</span>
        <Button  variant="outline"
  size="sm"
  className="
    border-0 
    bg-transparent 
    text-[#22c35d] 
    font-extrabold
    underline 
    underline-offset-4
    decoration-[#23c55e]
    hover:text-[#4bd87d]
    hover:decoration-[#4bd87d]">
        MENU 
        </Button>
        </CardContent>
        </Card>
        ))}
        </div>
        </section>
    )
}