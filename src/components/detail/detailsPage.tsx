import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent,CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Snowflake,
  Zap,
  Car,
  Bike,
  Dumbbell,
  Waves,
  PawPrint,
  Mountain,
} from "lucide-react"
import PlayaScondidaCard from "./per-item-detail";
import PlayaScondidaAbout from "./gyst-detailed-content";



export default function DetailedPage({ project }) {
  // const [activeImage, setActiveImage] = useState(0);

  return (
    <>
        {/* HEADER */}
         La Carta - Cartagena Culture & Tourism &rsaquo; Accommodations &rsaquo; Glamping/Nature &rsaquo; Playa Scondida
        <PlayaScondidaCard />
        <PlayaScondidaAbout />  
      </>
  );
}
