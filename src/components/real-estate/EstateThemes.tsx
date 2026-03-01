// components/RealEstateThemes.tsx
import { Badge } from "@/components/ui/badge"
import fishImg from "/assets/real-estate/Collection projects.png"

const featured = {
  id: "collection",
    title: "COLLECTION™ Projects",
    image: fishImg,
    tag: "COLLECTION",
}
const themes = [
  {
    id: "collection",
    title: "COLLECTION™ Projects",
    image: fishImg,
    image2: fishImg,
    tag: "COLLECTION",
    orderClass:'1.7fr_2.3fr'
  },
  {
    id: "sale",
    title: "Homes For Sale",
    image: fishImg,
    image2: fishImg,
    tag: "FOR SALE",
    orderClass:'2.3fr_1.7fr'
  },
  {
    id: "rent",
    title: "Homes For Rent",
    image: fishImg,
    image2: fishImg,
    tag: "FOR RENT",
    orderClass:'1.7fr_2.3fr'
  },
]

export default function EstateThemes() {
  // const featured = themes.find((t) => t.featured)
  // const others = themes.filter((t) => !t.featured)

  return (
   <section className="py-12 md:py-16 lg:py-20">
  <div className="container px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14">
      Real estate projects by theme
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 lg:items-stretch">
      {/* LEFT – Big featured card */}
      <div className="relative rounded overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[520px]">
        <img
          src={featured.image}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 font-['Inter'] w-full">
                    <h3 className=" text-xl font-bold text-white drop-shadow-md">
                      {featured.title}
                    </h3>
                  </div>
      </div>

      {/* RIGHT – Smaller themed cards – now fills full height */}
      <div className="grid gap-2 md:gap-2 lg:h-full">
        {themes.map((item, index) => (
         <div
  key={index}
  className="grid grid-cols-2 gap-2 group h-full"
  style={{
    gridTemplateColumns: item.orderClass.replace("_", " "),
  }}
>
            {/* Left image – stretch to fill */}
            <div className="relative rounded overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
              <img
                src={item.image || "https://images.pexels.com/photos/11729105/pexels-photo-11729105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt={`${item.title || 'Theme'} - Left`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
              <div className="absolute bottom-2 font-sarif  w-full text-center">
                    <h3 className=" font-bold text-white drop-shadow-md">
                      {item.tag}
                    </h3>
                  </div>
            </div>

            {/* Right image – stretch to fill */}
            <div className="relative rounded overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
              <img
                src={item.image2 || "https://media.architecturaldigest.com/photos/62a240a9591c098967e89725/16:9/w_2560,c_limit/1641_The%20Grid_KCAP_(c)Ossip_09_LR.jpg"}
                alt={`${item.title || 'Theme'} - Right`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
            <div className="absolute bottom-2 font-sarif w-full text-center">
                    <h3 className=" font-bold text-white drop-shadow-md">
                      {item.tag}
                    </h3>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}