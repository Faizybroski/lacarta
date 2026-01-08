const Card = ({ image, category, title, author, time, className = "" }) => (
  <div
    className={`relative overflow-hidden shadow-lg group ${className}`}
  >
    <img
      src={image}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="inline-block relative left-3 top-4 bg-white text-black text-[10px] font-black px-2 py-1 mb-2">
        {category}
      </span>

      <div className="bg-[#e5c15a] text-black font-bold text-lg fs-4 leading-tight p-3">
        {title}
      </div>

      <div className="bg-red-600 text-white relative w-100 left-9 bottom-3  w-100 text-xs flex items-center px-3 py-2">
        <span>{author}</span>
        <span className="ml-auto opacity-80">{time}</span>
      </div>
    </div>
  </div>
);
export default Card;