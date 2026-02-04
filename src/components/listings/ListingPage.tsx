import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import CategoryFilters from "@/components/listings/CategoryFilters";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 8;
// const currentPage =1

export default function ListingPage({ categories = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredCategories = useMemo(() => {
    if (activeFilter === "All") return categories;
    return categories.filter((item) => item.type === activeFilter);
  }, [activeFilter, categories]);

  const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredCategories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-10">
          <CategoryFilters
            activeFilter={activeFilter}
            setActiveFilter={(filter) => {
              setActiveFilter(filter);
              setCurrentPage(1); // reset page on filter
            }}
            onClear={() => {
              setActiveFilter("All");
              setCurrentPage(1);
            }}
          />
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentItems.map((cat) => (
              <Link to={`${cat.href}`}>
                <Card
                  key={cat.id}
                  className="relative border-0 overflow-hidden bg-transparent shadow-none"
                >
                  <CardHeader>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-48 w-full object-cover rounded-sm"
                    />
                  </CardHeader>

                  <CardContent className="space-y-1 text-center">
                    <h3 className="text-lg text-black font-bold font-['Bebas_Neue']">
                      {cat.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
