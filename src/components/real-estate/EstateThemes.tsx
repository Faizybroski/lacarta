// components/RealEstateThemes.tsx
import { Badge } from "@/components/ui/badge";
import fishImg from "../../assets/Fish.png";

const featured = {
  id: "collection",
  title: "COLLECTION™ Projects",
  image: fishImg,
  tag: "COLLECTION",
};
const themes = [
  {
    id: "collection",
    title: "COLLECTION™ Projects",
    image: fishImg,
    tag: "COLLECTION",
  },
  {
    id: "sale",
    title: "Homes For Sale",
    image: fishImg,
    tag: "FOR SALE",
  },
  {
    id: "rent",
    title: "Homes For Rent",
    image: fishImg,
    tag: "FOR RENT",
  },
  {
    id: "special",
    title: "Special Offers",
    image: fishImg,
    tag: "OFFERS",
  },
  {
    id: "pre",
    title: "Pre-Construction",
    image: fishImg,
    tag: "NEW BUILD",
  },
  {
    id: "historic",
    title: "Historic Centre",
    image: fishImg,
    tag: "HERITAGE",
  },
  {
    id: "beach",
    title: "By The Beach",
    image: fishImg,
    tag: "BEACHFRONT",
  },
  {
    id: "luxury",
    title: "Luxury Collection",
    image: fishImg,
    tag: "PREMIUM",
  },
];

export default function EstateThemes() {
  // const featured = themes.find((t) => t.featured)
  // const others = themes.filter((t) => !t.featured)

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-14">
          Real estate projects by theme
        </h2>

        <div className="grid bg-dark grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT – Big featured card */}
          {
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                <Badge
                  variant="secondary"
                  className="mb-4 w-fit px-5 py-2 text-base bg-white/20 hover:bg-white/30 backdrop-blur-md border-0 text-white"
                >
                  {featured.tag}
                </Badge>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
                  {featured.title}
                </h3>
              </div>
            </div>
          }

          {/* RIGHT – Smaller cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <Badge
                    variant="secondary"
                    className="mb-2 w-fit bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white text-xs sm:text-sm"
                  >
                    {theme.tag}
                  </Badge>
                  <h4 className="text-sm sm:text-base font-semibold text-white drop-shadow">
                    {theme.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
