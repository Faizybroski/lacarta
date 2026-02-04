import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ElitePress() {
  return (
    <section className="max-w-6xl mx-auto px-4 ">
    <Card className="bg-[#fbf7ec] border border-[#f1e4c6]">
      <CardContent className="p-6 space-y-5">
        <p className="text-md font-bold text-yellow-600">
                      FREE RELEASE
                    </p>

         <h2 className="text-3xl text-black font-serif font-bold">
          Casa Dorada Unveils New Oceanfront Wellness Pavilion
        </h2>

         <p className="text-sm font-semibold text-muted-foreground">
                      January 15, 2026
                    </p>

        <p className="text-sm text-gray-600">
          Casa Dorada Beach & Golf Resort is proud to announce the grand opening of our new
Oceanfront Wellness Pavilion, a 15,000 square foot sanctuary dedicated to holistic
health and rejuvenation.
        </p>

        <p className="text-sm text-gray-600">
          Designed by renowned architect Tadao Ando, the pavilion features floor-to-ceiling glass
walls that blur the boundary between interior spaces and the Pacific horizon. The
facility includes 12 treatment rooms, a hydrotherapy circuit, meditation gardens, and a
rooftop yoga deck.
        </p>

         <p className="text-sm text-gray-600">
          "This represents our commitment to offering guests not just luxury, but transformative
experiences," said General Manager Elena Vargas. "The Wellness Pavilion is where
ancient healing traditions meet modern science."
        </p>

         <p className="text-sm text-gray-600">
          The pavilion will offer exclusive treatments using locally-sourced botanical ingredients,
including signature therapies developed in partnership with indigenous Huichol healers.
        </p>
      </CardContent>
    </Card>
    </section>
  )
}
