import { Eye } from "lucide-react";

const CircleCard = ({
  image,
  category,
  title,
  author,
  time,
  className = "",
}) => (
  <div
    className={`relative rounded-full mb-5 overflow-hidden shadow-lg group aspect-square ${className}`}
  >
    <img
      src={image}
      className="absolute inset-0 w-full h-full rounded-full object-cover transition-transform duration-500 "
      alt=""
    />

    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" /> */}

    <div className="absolute bottom-10 left-3 right-3 p-5">
      <span className="inline-block relative left-3 top-3 bg-white text-black text-sm font-extrabold px-2 py-1 mb-2">
        {category}
      </span>

      <div className="bg-gradient-to-b from-gold to-gold-light text-black font-bold text-2xl w-[90%] leading-tight py-2 px-3">
        {title}
      </div>

      <div className="bg-gradient-to-b from-red  to-red-light text-white relative left-10  bottom-2 w-56  text-xs flex items-center px-3 py-1">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7">
            <img
              src={image}
              className="inset-0 w-full h-full rounded-full object-cover transition-transform duration-500 "
              alt=""
            />
          </div>
          <div>
            <span>{author}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 relative -right-16">
          <div>
            <Eye size={20} className="text-white" />
          </div>
          <div>
            <span className="relative left-2 opacity-80">{time}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default CircleCard;
