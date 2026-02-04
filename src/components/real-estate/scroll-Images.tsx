// components/NeighborhoodsSection.tsx
import { useEffect, useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import img from '/assets/real-estate/Historic Center.png'

const neighborhoods = [
  {
    name: "Historic Center",
    imageUrl: img,
   
  },
  {
    name: "Islas del Rosario",
    imageUrl: img,
    
  },
  {
    name: "Baru",
    imageUrl: img,
    
  },
  {
    name: "Getsemaní",
    imageUrl: img,
    
  }, {
    name: "Getsemaní",
    imageUrl: img,
    
  },
]

export default function NeighborhoodsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  )

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-8 md:mb-12 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Neighborhoods
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {neighborhoods.map((neighborhood, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group relative overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[3/3.5] w-full overflow-hidden bg-gray-200">
                    <img
                      src={neighborhood.imageUrl}
                      alt={neighborhood.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-4 font-['Inter']  w-full text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                      {neighborhood.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Previous / Next arrows - hidden on mobile */}
          <div className="hidden sm:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 border-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="right-0 translate-x-1/2 border-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
          </div>

          {/* Dots pagination at bottom */}
          {count > 1 && (
            <div className="mt-6 flex justify-center gap-3">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`
                    h-3 w-3 rounded-full transition-all duration-300
                    ${current === index + 1 
                      ? "bg-primary scale-125" 
                      : "bg-muted hover:bg-muted-foreground/70"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </Carousel>
      </div>
    </section>
  )
}