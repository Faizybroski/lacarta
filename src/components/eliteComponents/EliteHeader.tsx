import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star,Search,SlidersHorizontal } from "lucide-react"
import { eliteListing } from "@/data/elite-data"


export function EliteHeader() {
  return (
    <div className="max-w-6xl mx-auto mb-2 space-y-3">
      {/* Header */}
      <section>
       <div className='bg-white container-fluid p-3 text-light p-relative'>
        <div >
        <div className='container col-lg-8 col-md-8 col-12 mb-4 py-5 mb-md-0 m-auto text-center text-white'>
          <h1 className="text-4xl text-black font-serif font-semibold">
        Discover Our Elite Sponsors
      </h1>
         <div className="flex max-w-3xl mx-auto bg-white rounded overflow-hidden p-1">
                 <div className="relative w-full">
  <input
    type="text"
    placeholder="Where/What are you Looking for?"
    className="w-full border rounded-full py-2 pl-4 pr-10 bg-white text-black outline-none"
  />

  <SlidersHorizontal
    className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
  />
</div>
                  <Button className="text-white rounded-full w-[250px] my-auto rounded p-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                    Search
                  </Button>
                </div>
        </div>
        </div>
      </div>
      </section>


      <Badge className="w-fit bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-400 hover:bg-yellow-300 p-2 text-white font-bold">Elite Sponsored</Badge>

      <p className="text-sm text-muted-foreground">
        {eliteListing.category} · {eliteListing.location}
      </p>

      <h1 className="text-6xl text-yellow-500 font-serif font-semibold">
        {eliteListing.title}
      </h1>

       <p className="text-sm text-muted-foreground">
        Where Mediterranean Elegance Meets Pacific Serenity.
      </p>

      <div className="flex items-center gap-2 text-sm">
        <div className="flex text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span className="text-muted-foreground">
          {eliteListing.rating} ({eliteListing.reviews} reviews)
        </span>
      </div>

      <div className="flex items-end gap-3">
        <p className="text-3xl font-semibold">{eliteListing.price}</p>
        <Badge variant="secondary">{eliteListing.discount}</Badge>
      </div>

      <p className="text-sm text-muted-foreground">
        or {eliteListing.monthly} / monthly
      </p>
    </div>
  )
}
