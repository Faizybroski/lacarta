import imgleft from '../assets/pizzaBackground.png'
import imgRight from '../assets/pizzaBackground2.png'
import selvioImg from '../assets/selvio.png'

export default function Pizza() {
  return (
    <section className="w-full bg-gradient-to-t from-black via-[#303030] to-black">
      <div className="relative flex h-[160px] md:h-[180px] lg:h-[200px] overflow-hidden">

        {/* LEFT IMAGE */}
        <div
          className="w-[28%] bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/images/pizza-left.jpg')",
          }}>
            <img src={imgleft} className="w-full h-full" />
          </div>

       {/* CENTER CONTENT */}
<div className="relative grid grid-cols-1 lg:grid-cols-[70%_30%] text-center lg:text-start items-center">
  {/* LEFT CONTENT */}
  <div className="w-full m-auto text-center lg:text-start px-4 md:px-0">

    <h2 className="
      text-white
      uppercase
      font-bold
      tracking-[0.12em]
      text-[14px]
      md:text-[16px]
    ">
      THE BEST PIZZA IN CARTAGENA
    </h2>

    <p className="
      mt-1
      text-[11px]
      md:text-[12px]
      text-white
      tracking-wide
    ">
      A PLACE THAT DELIGHTS THE SOUL AND PALATE.
    </p>

    <button className="
      mt-4
      py-2.5
      w-full
      rounded
      text-white
      text-[12px]
      font-bold
      tracking-wide
      bg-gradient-to-t
      from-[#D4A72C]
      to-[#8C6A1E]
      hover:opacity-90
      transition
    ">
      BOOK NOW
    </button>

  </div>

  {/*  Selvio Img */}
  <div className="hidden md:block py-5 w-full h-full">
    <div>
    <img
      src={selvioImg}
      className="w-full h-full object-cover"
      alt=""
    />
    </div>
  </div>

</div>

        {/* RIGHT IMAGE */}
        <div
          className="w-[28%] bg-cover bg-center hidden md:block">
            <img src={imgRight} className="w-full h-full" />
        </div>

      </div>
    </section>
  )
}