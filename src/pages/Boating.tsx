import ListingPage from "@/components/listings/ListingPage";
import { boatingData } from "@/data/boating.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "../components/cartagenaNews";

export default function Boating() {
  return (
    <>
      <Hero {...boatingData.hero} />
      <PaginationListing {...boatingData} />
      <ListingPage {...boatingData} />
      <CartagenaNews />
    </>
  );
}
