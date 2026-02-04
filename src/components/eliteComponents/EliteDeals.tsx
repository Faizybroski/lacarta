import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const deals = [
  {
    title: "Extended Stay Package",
    description:
      "Book 5 nights, get the 6th night complimentary. Includes daily breakfast.",
    save: "SAVE 20%",
    expires: "Valid until March 31",
  },
  {
    title: "Romantic Escape",
    description:
      "Private beachfront dinner, couples massage, and champagne on arrival.",
    save: "SAVE 30%",
    expires: "Valid until February 14",
  },
]

export function EliteDeals() {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-4">
      
      <h2 className="text-3xl text-black font-serif font-semibold">
          Deals & Promotions
        </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {deals.map((deal, index) => (
          <Card key={index} className="p-0 bg-[#fbf7ec] border border-[#f1e4c6] overfow-hidden relative">
            <div className="absolute top-0 right-1">
            <Badge className="rounded text-white font-bold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-400 px-2">{deal.save}</Badge>
            </div>
            <CardContent className="px-2 py-3 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-black">{deal.title}</h4>
              </div>

              <p className="text-sm text-muted-foreground">
                {deal.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  {deal.expires}
                </span>
                <Button className="border-0 shadow-none text-yellow-500 font-bold bg-yellow-50 " size="sm" variant="outline">
                  Claim Offer
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
