import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PaginationListing({
  premiumListings = [],
  text = "Premium Listing",
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-4xl font-['Bebas_Neue'] text-black font-bold">
        {text}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {premiumListings.map((item) => (
          <Link to={`${item.href}`}>
            <Card key={item.id} className="shadow relative overflow-hidden">
              <img
                src={item.image}
                alt="thumbnail"
                className="absolute top-5 left-3 h-12 w-16 object-cover border-4 border-white shadow"
              />

              {/* Heart icon (right) */}
              <Button className="absolute top-3 right-3 h-8 w-8 rounded-full  backdrop-blur-md border bg-transparent border-white p-0 flex items-center justify-center  transition">
                <Heart className="h-5 w-5 font-bold fill-white text-white" />
              </Button>
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader className="space-y-1">
                <h6 className="w-fit font-sm font-semibold text-gray-600">
                  {item.category}
                </h6>
                <h3 className="text-lg text-black font-bold  font-['Bebas_Neue']">
                  {item.title}
                </h3>
                <p className="text-sm truncate text-gray-600">
                  {item.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <span className="">
                  {/* Stars */}
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 text-[#E6B65C] ${
                          star <= Math.round(item.rating)
                            ? "fill-[#E6B65C] text-[#E6B65C]"
                            : "text-[#E6B65C]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Rating badge */}
                  {/* <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary text-white">
                    {item.rating}
                  </span> */}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="p-0 border-0 bg-transparent text-[#22c35d] font-extrabold underline underline-offset-4 decoration-[#23c55e] hover:text-[#4bd87d] hover:decoration-[#4bd87d]"
                >
                  MENU
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
