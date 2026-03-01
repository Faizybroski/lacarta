import ListingPage from "@/components/listings/ListingPage";
import { beachesData } from "@/data/beaches.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "@/components/layout/cartagenaNews";

export default function Beaches() {
  return (
    <>
      <Hero {...beachesData.hero} />
      <PaginationListing {...beachesData} />
      <ListingPage {...beachesData} />
      <CartagenaNews />
    </>
  );
}
