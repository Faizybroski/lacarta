import ListingPage from "@/components/listings/ListingPage";
import { realEstateData } from "@/data/realEstate.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "@/components/layout/cartagenaNews";

export default function RealEstate() {
  return (
    <>
      <Hero {...realEstateData.hero} />
      <PaginationListing {...realEstateData} />
      <ListingPage {...realEstateData} />
      <CartagenaNews />
    </>
  );
}
