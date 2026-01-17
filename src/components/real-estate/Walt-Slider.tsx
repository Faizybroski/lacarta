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
    title: "WALT",
    subtitle: "Rental Habitats in the Heart of Dorval",
    tag: "NOW PRE-LEASING",
    imageUrl:
      "https://thumbs.dreamstime.com/b/stylish-rooftop-terrace-sunset-modern-design-includes-outdoor-kitchen-lounge-area-plants-lighting-evening-ambiance-relaxing-417081729.jpg",
  },
  {
    title: "WALT",
    subtitle: "Elevated Living with Panoramic Views",
    tag: "NOW PRE-LEASING",
    imageUrl:
      "https://thumbs.dreamstime.com/b/serene-rooftop-terrace-lounge-chairs-city-skyline-sunset-tranquil-featuring-comfortable-surrounded-lush-greenery-379393482.jpg",
  },
  {
    title: "WALT",
    subtitle: "Modern Luxury Rooftop Retreats",
    tag: "NOW PRE-LEASING",
    imageUrl:
      "https://thumbs.dreamstime.com/b/chic-city-rooftop-bar-sunset-panoramic-views-stylish-atmosphere-outdoor-cafe-tables-chairs-luxury-lounge-setting-sofas-385607171.jpg",
  },
  {
    title: "WALT",
    subtitle: "Serene Oceanfront Elegance",
    tag: "NOW PRE-LEASING",
    imageUrl:
      "https://thumbs.dreamstime.com/z/elegant-oceanfront-balcony-blooming-flowers-cozy-outdoor-sofa-set-golden-sunset-luxury-summer-lifestyle-luxurious-sea-376396904.jpg",
  },
];

export default function WaltSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
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
                    grid grid-cols-1 md:grid-cols-10 
                    overflow-hidden rounded-2xl shadow-2xl 
                    bg-gray-900
                    min-h-[200px] md:min-h-[300px] lg:min-h-[380px]
                    group
                  `}
                >
                  {/* Left: Content ≈ 30% */}
                  <div className="md:col-span-3 bg-[#0e171e] backdrop-blur-sm flex flex-col justify-center text-center p-8 md:p-10 lg:p-12 order-1 md:order-1">
                    <h2 className="text-6xl md:text-8xl lg:text-7xl font-black tracking-tight uppercase text-white font-['Bebas_Neue']">
                      {slide.title}
                    </h2>
                    <p className="text-2x2 md:text-2x2 font-bold uppercase tracking-wide text-gray/90 mt-4 font-['Inter']">
                      {slide.subtitle}
                    </p>
                    <div className="mt-6 inline-block bg-primary/90 text-white px-6 py-3 rounded-md text-md font-sarif uppercase tracking-wider">
                      {slide.tag}
                    </div>
                  </div>

                  {/* Right: Image ≈ 70% */}
                  <div className="md:col-span-7 relative overflow-hidden order-2 md:order-2">
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
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows only (no dots) */}
          <div className="hidden md:block">
            <CarouselPrevious
              className="
                left-0 md:left-0 -translate-x-1/2 
                bg-[#d0a235] backdrop-blur-md 
                hover:bg-[#fed358] text-white border-none hover:text-black 
                
              "
            />
            <CarouselNext
              className="
                right-0 md:right-0 border-none translate-x-1/2 
                bg-[#d0a235] backdrop-blur-md 
                hover:bg-[#fed358] text-white hover:text-black 
              "
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}