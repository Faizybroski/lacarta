import ListingPage from "@/components/listings/ListingPage";
import { gastronomyData } from "@/data/gastronomy.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "@/components/layout/cartagenaNews";

export default function Gastronomy() {
  return (
    <>
      <Hero {...gastronomyData.hero} />
      <PaginationListing {...gastronomyData} />
      <ListingPage {...gastronomyData} />
      <CartagenaNews />
    </>
  );
}
