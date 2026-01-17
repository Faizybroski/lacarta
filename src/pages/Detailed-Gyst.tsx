import DetailedPage from "@/components/detail/detailsPage";
import { gastronomyData } from "@/data/detailed-gastronomy.data";
import AroundThisPlace from "../components/card/DetailedPageCard";
import HomeArea from "../components/HomeInArea";
import FaqSection from "@/components/detail/faq-Section";
import PaginationListing from "@/components/listings/PaginationListing";
import PlayaScondidaCard from "@/components/detail/per-item-detail";
import PlayaScondidaAbout from "@/components/detail/detailed-content";
import KeyFeatures from "@/components/detail/key-Feature";
import ServicesAmenities from "@/components/detail/services-Amenities";
import ContactBooking from "@/components/detail/contact-Booking";
import CartagenaNews from "@/components/layout/cartagenaNews";


export default function DetailedGastronomy() {
  // console.log("....................", projectData.details)
  return (
    <>
    <div className="bg-[#f7f7f7] px-1 py-3 md:py-5 md:px-5">
      <div className="mx-auto max-w-7xl md:px-4">
      <PlayaScondidaCard />
      <PaginationListing {...gastronomyData}></PaginationListing>
      <PlayaScondidaAbout />
      <HomeArea />
      <KeyFeatures />
      <ServicesAmenities />
      <ContactBooking />
      <AroundThisPlace  {...gastronomyData}/>
      </div></div>
      <FaqSection />
      <CartagenaNews />
  </>
  )
}