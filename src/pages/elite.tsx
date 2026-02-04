import { EliteHeader } from "@/components/eliteComponents/EliteHeader"
import { EliteGallery } from "@/components/eliteComponents/EliteGallery"
import { EliteAbout } from "@/components/eliteComponents/EliteAbout"
import { EliteTags } from "@/components/eliteComponents/EliteTags"
import { EliteDeals } from "@/components/eliteComponents/EliteDeals"
import { EliteReviews } from "@/components/eliteComponents/EliteReviews"
import { ElitePress } from "@/components/eliteComponents/ElitePress"
import { EliteContactCard } from "@/components/eliteComponents/EliteContactCard"
import { EliteActions } from "@/components/eliteComponents/EliteActions"
import { FeaturedOn } from './../components/eliteComponents/FeaturedOn';


export default function ElitePage() {
  return (
    <main className="bg-background">
        <div className="px-4 py-10">
          <EliteHeader />
          <EliteGallery />
          </div>
      <section className="max-w-[76rem] mx-auto px-4 py-10 grid lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2 space-y-8">
          <EliteAbout />
          <EliteTags />
          <EliteDeals />
          <EliteReviews />
          <ElitePress />
          <FeaturedOn />
        </div>

        <div className=" space-y-6">
          <EliteContactCard />
          <EliteActions />
        </div>
      </section>
    </main>
  )
}
