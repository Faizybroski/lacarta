import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import img7 from "../assets/Six-C-img1.png";
// import img8 from "../assets/Six-C-img2.png";
// import img9 from "../assets/Six-C-img3.png";
// import img0 from "../assets/Six-C-img4.png";

const cards = [
  {
    category: "BEACH",
    title: "Where to find the Best Exchange Rates",
    description:
      "Don’t Exchange Money at the Airport! Here are the best places to find ATMs & currency exchange in Cartagena.",
    author: "May",
    color: "bg-gradient-to-r from-[#E6B65C] via-[#D4A74A] to-[#B8902F]",
    image: "/images/Six-C-img1.png",
  },
  {
    category: "CULTURE",
    title: "Is Cartagena a Safe City to Visit?",
    description:
      "Cartagena is very friendly but sometimes you will encounter scammers. Here is what to do & how to stay safe.",
    author: "Miguel",
    color: "bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E0000]",
    image: "/images/Six-C-img2.png",
  },
  {
    category: "CULTURE",
    title: "The Best Monuments and Statues of Cartagena, Colombia",
    description:
      "Here are some of the most famous statues of Cartagena and recognizable monuments from Cartagena.",
    author: "Luz",
    color: "bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E0000]",
    image: "/images/Six-C-img3.png",
  },
  {
    category: "ACTIVITIES",
    title: "How to order taxis in Cartagena",
    description:
      "Are Taxis Safe in Colombia? Find out in our step by step guide on how to order taxis in Cartagena.",
    author: "Alejandra",
      color: "bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A]",
    image: "/images/Six-C-img4.png",
  },
]

export default function HowToDoCartagena() {
  return (
    <section className="container mx-auto px-4 py-16">
  {/* Title */}
  <h2 className="text-3xl md:text-4xl font-black text-black text-center uppercase mb-16">
    How To Do Cartagena
  </h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    {cards.map((card, index) => (
      <Card
        key={index}
        className="overflow-hidden shadow-lg flex flex-col h-full"
      >
        {/* Image */}
        <CardHeader className="p-0 relative">
          <img
            src={card.image}
            alt={card.title}
            className="h-48 w-full object-cover"
          />

          {/* Badge */}
          <Badge
            className={`absolute top-0 right-1 px-3 py-2 
                        text-white rounded-none border-0 ${card.color}`}
          >
            {card.category}
          </Badge>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold fw-bold text-black text-lg mb-2">
            {card.title}
          </h3>

          {/* Auto-adjusting paragraph */}
          <p className="text-sm text-muted-foreground flex-grow">
            {card.description}
          </p>

          {/* Button always aligned */}
          <button className="text-sm font-medium text-black hover:underline mt-4 self-start">
            Read More →
          </button>
        </CardContent>

        {/* Footer stays at bottom */}
        <CardFooter className="p-4 flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>
              {card.author[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm fw-bold text-black">{card.author}</span>
        </CardFooter>
      </Card>
    ))}
  </div>
</section>

  )
}
