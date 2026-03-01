import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Heart, MapPin, BedDouble, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EstateCard({ details = [], columns }) {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(details.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = details.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="w-full px-5 py-16">
      <h2 className="mb-8 text-2xl md:text-4xl text-black font-bold">
        Visit COLLECTION™ projects located nearby
      </h2>

      {/* CARDS */}
      <div className={columns}>
        {currentItems.map((item) => (
          <Link key={item.id} to={item.href}>
            <Card className="shadow relative overflow-hidden">
              <Button
                className="absolute right-2 top-2 h-10 w-10 rounded-full bg-[#fed358] p-0 flex items-center justify-center"
              >
                <Heart className="h-5 w-5 text-black" />
              </Button>

              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <CardHeader className="space-y-1 p-3">
                <h3 className="text-lg text-black font-bold">{item.title}</h3>
                <p className="text-sm flex gap-2 text-muted-foreground">
                  <MapPin size={18} />
                  {item.location}
                </p>
                <p className="text-sm flex gap-2 text-muted-foreground">
                  <BedDouble size={18} /> Bedrooms: {item.noOfBed}
                </p>
                <p className="text-sm flex gap-2 text-muted-foreground">
                  <Bath size={18} /> Bathrooms: {item.noOfBath}
                </p>
              </CardHeader>

              <CardContent>
                <h5 className="font-bold text-muted-foreground">
                  Starting at ${item.price}/month
                </h5>

                <div className="flex gap-2 items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-black" />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    {item.rating}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-0 bg-transparent text-yellow-500 font-extrabold underline"
                >
                  SEE THIS PROJECT
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <Button
        className="text-black bg-white font-bold"
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </Button>

        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            {index + 1}
          </Button>
        ))}

        <Button
        className="text-black bg-white font-bold"
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
