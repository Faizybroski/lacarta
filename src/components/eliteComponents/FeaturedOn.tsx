import { Badge } from "@/components/ui/badge"
import {Facebook,Instagram,Twitter} from 'lucide-react'

const tags = [
    {
        name:'Instagram',
        logo: <Instagram  size={30} className="p-1" />,
    },{
        name:'Facebook',
        logo: <Facebook  size={30} className="p-1" /> ,
    },{
        name:'Twitter',
        logo: <Twitter  size={30} className="p-1" /> ,
    },
]

export function FeaturedOn() {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-3">
    
       <h2 className="text-3xl text-black font-serif font-semibold">
          Featured On
        </h2>

     <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
  {tags.map((tag) => (
    <Badge
      variant="secondary"
      className="flex items-center justify-center py-2 bg-[#fbf7ec] border-1 border-[#f1e4c6] text-center"
    >
        {tag.logo}
      {tag.name}
    </Badge>
  ))}
</div>
    </section>
  )
}
