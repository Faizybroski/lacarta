import guidepic from "../assets/img13.png";

export default function ConciergeCTA() {
  return (
    <>
    <div className="container-fluid p-5 backgroud-image2 d-none d-md-block">
  <div className="container">
    <div className="row bg-white py-4 px-3 shadow rounded">

      {/* Left content */}
      <div className="col-md-7">
        <h2 className='fonted-title text-black fw-bold'>Concierge Cartagena Travel Guides</h2>
        <p className='fs-5 my-4 text-black'>
          From flights, accommodations, stays, and activities.
          You’re in safe hands with our team!
        </p>
        <button className="btn text-light font-bold bg-gradient-to-r from-[#E6B65C] via-[#D4A74A] to-[#B8902F] hover:brightness-110 btn-md w-100">BOOK TRIP</button>
      </div>

      {/* Right image */}
      <div className="col-md-5 text-end">
        <img src={guidepic} alt="Guide Photo" className="img-fluid rounded" />
      </div>

    </div>
  </div>
</div>

{/* MOBILE VIEW */}
<div className="container-fluid p-0 d-block d-md-none">
  <img src={guidepic} alt="Guide Photo" className="img-fluid w-100" />
  <div className="container mt-3">
    <div className="bg-white text-center p-3">
      <h2>Concierge Cartagena Travel Guides</h2>
      <p className='px-5'>
        From flights, accommodations, stays, and activities.
        You’re in safe hands with our team!
      </p>
      <button className="btn c2 font-bold text-light btn-md w-100">BOOK TRIP</button>
    </div>
  </div>
</div> 
</>
  )
}
