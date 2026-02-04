import {Eye} from 'lucide-react'

const CircleCard = ({ image, category, title, author, time }) => (
  <div className="relative rounded-full mb-5 overflow-hidden shadow-lg group aspect-square">
    <img
      src={image}
      className="absolute inset-0 w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

     <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="inline-block relative left-3 top-3 bg-white text-black text-[12px] font-bold px-2 py-1 mb-2">
        {category}
      </span>

      <div className="bg-gradient-to-t from-[#d1b259]  to-[#d0a337] text-black font-bold text-lg fs-4 leading-tight py-1 px-2">
        {title}
      </div>

      <div className="bg-gradient-to-t from-red-700 via-red-800 to-red-900 text-white relative w-100 left-9 bottom-1 justify-between  w-100 text-xs flex items-center px-2 py-1">
       <div className="flex items-center gap-2">
        <div className="h-7 w-7">
          <img
      src={image}
      className="inset-0 w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
      alt="" /></div>
       <div><span>{author}</span></div>
    </div>
        <div className='flex items-center gap-1'>
          <div><Eye  size={20} className="text-white"/></div>
              <div>
              <span className="ml-auto opacity-80">{time}</span>
              </div>
              </div>
      </div>
    </div>
  </div>
);
export default CircleCard;