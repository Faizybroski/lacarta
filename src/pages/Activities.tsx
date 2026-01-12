import ListingPage from "@/components/listings/ListingPage";
import { activitiesData } from "@/data/activities.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "@/components/cartagenaNews";

export default function Activities() {
  return (
    <>
      <Hero {...activitiesData.hero} />
      <PaginationListing {...activitiesData} />
      <ListingPage {...activitiesData} />
      <CartagenaNews />
    </>
  );
}
