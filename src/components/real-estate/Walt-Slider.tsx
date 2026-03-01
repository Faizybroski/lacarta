// components/WaltSection.tsx
import { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "The Grand Horizon Residences",
    subtitle:
      "Contemporary rental living designed for comfort, connection, and community in Dorval’s most vibrant district",
    tag: "NOW PRE-LEASING",
    imageUrl: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f00",
  },
  {
    title: "Skyline Terrace Collection",
    subtitle:
      "Luxury rooftop retreats featuring panoramic city views and thoughtfully curated social spaces",
    tag: "LIMITED UNITS AVAILABLE",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
  {
    title: "Aurora Waterfront Suites",
    subtitle:
      "Serene oceanfront-inspired residences blending modern architecture with natural elegance",
    tag: "MOVE-IN READY",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "The Urban Oasis Living Experience",
    subtitle:
      "Smart homes with premium finishes, rooftop lounges, and curated lifestyle amenities",
    tag: "NEW RELEASE",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    title: "Emerald Heights Luxury Rentals",
    subtitle:
      "Spacious interiors, floor-to-ceiling windows, and seamless indoor-outdoor living",
    tag: "COMING SOON",
    imageUrl: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
  },
  {
    title: "The Signature Collection at Parkview",
    subtitle:
      "Elevated apartment living with designer kitchens and resort-style rooftop amenities",
    tag: "BOOK A TOUR",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
];

export default function WaltSection() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div
                  className={`
                    grid grid-cols-1 lg:grid-cols-[1.5fr_3.5fr]  md:grid-cols-[2fr_3fr]
                    overflow-hidden rounded-2xl 
                    bg-gray-900
                     md:h-[480px] lg:h-[440px]
                    group
                  `}
                  // min-h-[200px] md:min-h-[300px] lg:min-h-[380px]
                >
                  {/* Left: Content ≈ 30% */}
                  <div
                    className="
                    bg-[#0e171e]
                      flex flex-col justify-center items-center
                      text-center md:items-start 
                      px-6  py-10 md:py-8
                      overflow-hidden
                      "
                  >
                    {/* lg:col-span-3 */}
                    <div className="max-w-[420px]">
                      <h2 className="text-4xl font-black uppercase text-white font-antigua  line-clamp-2">
                        {slide.title}
                      </h2>

                      <p className="text-base  font-normal uppercase  text-gray-200 mt-4  line-clamp-2">
                        {slide.subtitle}
                      </p>

                      <div className="mt-6 inline-block bg-primary/90 text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider">
                        {slide.tag}
                      </div>
                    </div>
                  </div>
                  {/* <div className="md:col-span-3 bg-[#0e171e] backdrop-blur-sm flex flex-col justify-center text-center p-8 md:p-10 lg:p-12 order-1 md:order-1">
                    <h2 className="text-6xl md:text-8xl lg:text-7xl font-black tracking-tight uppercase text-white font-['Bebas_Neue']">
                      {slide.title}
                    </h2>
                    <p className="text-2x2 md:text-2x2 font-bold uppercase tracking-wide text-gray/90 mt-4 font-['Inter']">
                      {slide.subtitle}
                    </p>
                    <div className="mt-6 inline-block bg-primary/90 text-white px-6 py-3 rounded-md text-md font-sarif uppercase tracking-wider">
                      {slide.tag}
                    </div>
                  </div> */}

                  {/* Right: Image ≈ 70% */}
                  <div
                    className=" relative w-full 
                h-[220px] sm:h-[260px] 
                md:h-full"
                  >
                    {/* lg:col-span-7 */}
                    {/* <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-full"> */}
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="
                      absolute inset-0
        w-full h-full object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    {/* </div> */}
                  </div>
                  {/* <div className="md:col-span-7 relative overflow-hidden order-2 md:order-2">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="
                        absolute inset-0 w-full h-full 
                        object-cover 
                        transition-transform duration-700 
                        group-hover:scale-105
                      "
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows only (no dots) */}
          <div className="hidden md:block">
            <CarouselPrevious
              className="
                left-0 md:left-0 h-10 w-10 -translate-x-1/2 
                bg-yellow-500 backdrop-blur-md 
                hover:bg-gold-light bg-gradient-to-r to-gold-light from-gold text-white border-none hover:text-black 
                
              "
            />
            <CarouselNext
              className="
                right-0 md:right-0 h-10 w-10 border-none translate-x-1/2 
                bg-yellow-500 backdrop-blur-md 
                hover:bg-gold-light bg-gradient-to-r from-gold-light to-gold text-white hover:text-black 
              "
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
