// import carasolePic from "../assets/carasole.png";
import {ChevronRight ,ChevronLeft } from 'lucide-react';
import carasolePic from "/assets/ncartagen.png";

export default function TopNewsCartagena() {
  return (
    <section className="d-none d-md-block py-5">
      <h2 className="text-3xl md:text-4xl font-black text-black text-center uppercase mb-16">
        TOP NEWS OF CARTAGENA
      </h2>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div
              id="imageCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded overflow-hidden">
                <div className="carousel-item active relative">
                  <img
                    src={carasolePic}
                    className="d-block w-100"
                    alt="Slide 1"
                  />

                <div className="absolute inset-0 flex bg-gradient-to-t from-black/40 via-black/20 to-transparent items-end">
  <div className="p-6 md:p-10 text-white">
    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
      The Most Luxurious Hotel <br />
      Of Cartagena
    </h2>

    <p className="mt-3 text-sm tracking-widest uppercase opacity-90">
      7 MIN READ
    </p>
  </div>
</div>

                </div>
                <div className="carousel-item relative">
                  <img
                    src={carasolePic}
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                  <div className="absolute inset-0 flex bg-gradient-to-t from-black/40 via-black/20 to-transparent items-end">
  <div className="p-6 md:p-10 text-white">
    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
      The Most Luxurious Hotel <br />
      Of Cartagena
    </h2>

    <p className="mt-3 text-sm tracking-widest uppercase opacity-90">
      7 MIN READ
    </p>
  </div>
</div>
                </div>
                <div className="carousel-item relative">
                  <img
                    src={carasolePic}
                    className="d-block w-100"
                    alt="Slide 3"
                  />
<div className="absolute inset-0 flex bg-gradient-to-t from-black/40 via-black/20 to-transparent items-end">
  <div className="p-6 md:p-10 text-white">
    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
      The Most Luxurious Hotel <br />
      Of Cartagena
    </h2>

    <p className="mt-3 text-sm tracking-widest uppercase opacity-90">
      7 MIN READ
    </p>
  </div>
</div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="prev"
              >
                <ChevronLeft size={50}/>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="next"
              >
                 <ChevronRight size={50}/>

              </button>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
            <div className="d-flex my-5 align-items-center">
              <div>
                <span>Accomodation - Hotels</span>
                <h5 className="fw-bold my-2 text-black">
                  the most luxurious hotel of cartagena
                </h5>
                <span>3 Min Read</span>
              </div>
              <div>
                <button className="btn fs-2 fw-bold">
                  <i className="bi bi-arrow-right-circle text-[#d0a439] hover:text-[#b88f30]"></i>
                </button>
              </div>
            </div>

            <div className="d-flex my-5 align-items-center">
              <div>
                <span>Accomodation - Hotels</span>
                <h5 className="fw-bold my-2 text-black">
                  Want To Exercise? The Best Spots For All Types Of Workouts
                </h5>
                <span>3 Min Read</span>
              </div>
              <div>
                <button className="btn fs-2 fw-bold">
                  <i className="bi bi-arrow-right-circle text-[#d0a439] hover:text-[#b88f30]"></i>
                </button>
              </div>
            </div>

            <div className="d-flex my-5 align-items-center">
              <div>
                <span>Accomodation - Hotels</span>
                <h5 className="fw-bold my-2 text-black">
                  the top 7 instagrammable places of cartagena
                </h5>
                <span>3 Min Read</span>
              </div>
              <div>
                <button className="btn fs-2 fw-bold">
                  <i className="text-[#d0a439] hover:text-[#b88f30] bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
