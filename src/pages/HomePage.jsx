import React from 'react'
import '../Custom-Css/Homepage.css'
import logo from '../assets/Logo.png.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img33.png'
import img4 from '../assets/4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/Six-C-img1.png'
import img8 from '../assets/Six-C-img2.png'
import img9 from '../assets/Six-C-img3.png'
import img0 from '../assets/Six-C-img4.png'
import profile from '../assets/profile-pic.png'
import guidepic from '../assets/img13.png'
import carpic from '../assets/car.png'
import girlpic from '../assets/girl.png'
import beachpic from '../assets/beach.png'
import shippic from '../assets/ship.png'
import artpic from '../assets/art.png'
import resturantpic from '../assets/resturant.png'
import hotelpic from '../assets/hotels.png'
import carasolepic from '../assets/carasole.png'


const HomePage = () => {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-3">
  <div className="container-fluid px-4">



   
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src={logo} alt="La Carta" height="42"></img>
    </a>

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className=" navbar-collapse justify-content-center" id="mainNavbar">

     
      <ul className="navbar-nav gap-lg-4 text-uppercase fw-semibold">
        <li className="nav-item"><a className="nav-link" href="#">Activities</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Hotels</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Beaches</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Boating</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Tours</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Gastronomy</a></li>
      </ul>
    </div>

   
    <div className="d-none d-lg-flex align-items-center gap-3">
      <a href="#" className="btn btn-warning rounded-pill px-4 fw-bold">
        BOOK TRIP
      </a>
      <a href="#" className="text-white fs-5">
        <i className="bi bi-heart"></i>
      </a>

      <a href="#" className="text-white text-decoration-none small">
        Login
      </a>
    </div>

  </div>
</nav>

{/* Hero Section */}

<div className='Hero-pic container-fluid p-3 text-light p-relative'>
  <div className='overlay'>
  <div className='container col-lg-8 col-md-8 col-12 mb-4 py-5 mb-md-0 m-auto text-center text-white'>
    <h1  className='fs-1 fw-bold'>EVERYTHING <br></br> CARTAGENA</h1>

    <div className="navbar-collapse d-flex justify-content-center mt-5" id="mainNavbar">


      <ul className="list-unstyled hero-ul  text-black d-flex flex-column flex-md-row gap-1">
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Beaches</a></li>
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Accommodations</a></li>
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Boating</a></li>
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Tours</a></li>
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Activities</a></li>
        <li className="nav-item bg-white px-3 py-2 border-none"><a className="nav-link" href="#">Gastronomy</a></li>
</ul>
    </div>
    
    <div className='bg-white hero-search col-7 m-auto '>
    <input className='search-section-input p-3 mx-1 my-1 col-lg-9 col-md-9 col-9' type="text" placeholder='Search for Real Estate'/>
    <input className='submit-btn col-lg-2 p-2 col-md-2 col-2 text-white ' type="submit" value="SUBSCRIBE" />
    </div>

  </div>
  </div>
</div>

{/* Title Section */}
<div className='container-fluid my-3 mt-5'>
  <div className='container text-center py-3'>
    <h2 className='fs-1 fw-bold'>WHAT TO DO IN CARTAGENA,COLOMBIA</h2>
  </div>
</div>


{/* Second-section */}
<div className="container-fluid py-5">
  <div className=" row g-3">

    
    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c1 fs-4 text-black img-title">Hotels</div>
        <img src={img1} className="img-fluid" alt=""></img>
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c2 fs-4 text-black img-title">Beaches</div>
        <img src={img2} className="img-fluid" alt=""></img>
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c3 fs-4 text-black img-title">Activities</div>
        <img src={img3} className="img-fluid" alt=""></img>
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c4 fs-4 text-black img-title">Tours & Sightseeing</div>
        <img src={img4} className="img-fluid" alt=""></img>
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c5 fs-4 text-black img-title">Boat Rentals</div>
        <img src={img5} className="img-fluid" alt=""></img>
      </div>
    </div>

    <div className="col-md-4 col-6">
      <div className="img-card">
        <div className="c6 fs-4 text-black img-title">Gastronomy</div>
        <img src={img6} className="img-fluid" alt=""></img>
      </div>
    </div>

  </div>
</div>

{/* Images Mosonry */}

<section className="py-5">
  <div className="container">
    <div className="row g-4">

    
      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={beachpic} className="img-fluid w-100" alt="Beaches" />

          
          <div className="position-absolute styled bottom-0 start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">BEACHES</span>
            <h5 className="fw-bold mb-2">Best Beaches of Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>Miguel</span>
              <span className="ms-auto">17 min</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={resturantpic} className="img-fluid w-100" alt="Food" height="auto" />

          <div className="position-absolute bottom-0 styled start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">GASTRONOMY</span>
            <h5 className="fw-bold mb-2">The Best Restaurants of Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>May</span>
              <span className="ms-auto">10 min</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={shippic} className="img-fluid w-100" alt="Activities" />

          <div className="position-absolute bottom-0 styled start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">ACTIVITIES</span>
            <h5 className="fw-bold mb-2">What to do in Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>Maria</span>
              <span className="ms-auto">10 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={hotelpic} className="img-fluid w-100" alt="Food" />

          <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">HOTELS</span>
            <h5 className="fw-bold mb-2">Top Hotels of Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>Natalia</span>
              <span className="ms-auto">10 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={girlpic} className="img-fluid w-100" alt="Food" height="auto" />

          <div className="position-absolute bottom-0 styled start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">GASTRONOMY</span>
            <h5 className="fw-bold mb-2">The Best Restaurants of Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>May</span>
              <span className="ms-auto">10 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="position-relative overflow-hidden rounded">
          <img src={artpic} className="img-fluid w-100" alt="Food" />

          <div className="position-absolute bottom-0 styled start-0 w-100 p-3 text-white">

            <span className="badge bg-warning text-dark mb-2">GASTRONOMY</span>
            <h5 className="fw-bold mb-2">The Best Restaurants of Cartagena</h5>

            <div className="d-flex align-items-center small">
              <img src={carpic} className="rounded-circle me-2" width="24" />
              <span>May</span>
              <span className="ms-auto">10 min</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Title Section */}
<div className='container-fluid my-3 mt-5'>
  <div className='container text-center py-3'>
    <h2 className='fs-1 fw-bold'>THE BEST OF CARTAGENA, COLOMBIA</h2>
  </div>
</div>


{/* 2nd Section */}
<div className="container-fluid p-5 my-5 backgroud-image1 d-none d-md-block">
  <div className="container">
    <div className="row py-4 px-3 rounded align-items-center">

      {/* Left content */}
      <div className="col-md-7">
        <h2 className='fonted-title'>How to thrive in Cartagena, Colombia Like a Local.</h2>
        <p className='fs-5 my-4'>
          Hidden Gems, Staying Safe, Maneuvering around the city, watching out for scams, negotiating, what to pack. The ultimate guide for Gringos.
        </p>
        <button className="btn c1 text-light btn-md w-100">https://lacarta.co/cartagena/resources</button>
      </div>

      {/* Right image */}
      <div className="col-md-5 text-end">
        <img src={carpic} alt="Guide Photo" className="img-fluid rounded" />
      </div>

    </div>
  </div>
</div>

{/* MOBILE VIEW */}
<div className="container-fluid p-0 d-block d-md-none">
  <img src={carpic} alt="Car Book Photo" className="img-fluid w-100" />
  <div className="container mt-3">
    <div className="bg-white text-center p-3">
      <h2 className='fw-bold'>How to thrive in Cartagena, Colombia Like a Local.</h2>
      <p className='px-1 fw-bold my-4'>
       Hidden Gems, Staying Safe, Maneuvering around the city, watching out for scams, negotiating, what to pack. The ultimate guide for Gringos.
      </p>
      <button className="btn c2 text-dark btn-md w-100">DOWNLOAD TRAVEL GUIDE</button>
    </div>
  </div>
</div>

{/* Title Section */}
<div className='container-fluid my-5 mt-5'>
  <div className='container text-center py-3'>
    <h2 className='fs-1 fw-bold'>free tools for your Cartagena journey</h2>
  </div>
</div>

{/* Section 3 */}
<div className='container-fluid'>
  <div className="container">
  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 g-3'>
        <div className="col">
  <div className="card border-0 mb-4 pt-4 px-2 shadow">

    <div className="view overlay">
      <div className="c2 logo-title shadow p-1">
        <i className="bi bi-headset"></i>
        </div>
    </div>

    <div className="card-body">
      <div className='text-end m-0'>
      <i className="bi bi-heart m-0"></i>
      </div>
      <h5 className="card-title">Tourist Service Center</h5>
      <p className="card-text my-2">If you ever need any help during your time in Cartagena.</p>
      <button type="button" className="btn mb-2 c2 text-light w-100 m-auto btn-md">Go</button>
    </div>

  </div>
  </div>

      <div className="col">
  <div className="card border-0 mb-4 pt-4 px-2 shadow">

    <div className="view overlay">
      <div className="c1 logo-title shadow p-1">
        <i className="bi bi-chat-dots"></i>
        </div>
    </div>

    <div className="card-body">
      <div className='text-end m-0'>
      <i className="bi bi-heart m-0"></i>
      </div>
      <h5 className="card-title">Tourist Service Center</h5>
      <p className="card-text my-2">If you ever need any help during your time in Cartagena.</p>
      <button type="button" className="btn mb-2 c1 text-light w-100 m-auto btn-md">Download</button>
    </div>

  </div>
  </div>

      <div className="col">
  <div className="card  border-0 mb-4 pt-4 px-2 shadow">

    <div className="view overlay">
      <div className="c6 logo-title shadow p-1">
        <i className="bi bi-file-earmark-spreadsheet"></i>
        </div>
    </div>

    <div className="card-body">
      <div className='text-end m-0'>
      <i className="bi bi-heart m-0"></i>
      </div>
      <h5 className="card-title">Tourist Service Center</h5>
      <p className="card-text my-2">If you ever need any help during your time in Cartagena.</p>
      <button type="button" className="btn mb-2 c6 text-light w-100 m-auto btn-md">Check Off</button>
    </div>

  </div>
  </div>

      <div className="col">
  <div className="card border-0  mb-4 pt-4 px-2 shadow">

    <div className="view overlay">
      <div className="c2 logo-title shadow p-1">
        <i className="bi bi-plus"></i>
        </div>
    </div>

    <div className="card-body">
      <div className='text-end m-0'>
      <i className="bi bi-heart m-0"></i>
      </div>
      <h5 className="card-title">Tourist Service Center</h5>
      <p className="card-text my-2">If you ever need any help during your time in Cartagena.</p>
      <button type="button" className="btn mb-2 c2 text-light w-100 m-auto btn-md">Download</button>
    </div>

  </div>
  </div>

      <div className="col">
  <div className="card border-0 mb-4 pt-4 px-2 shadow">

    <div className="view overlay">
      <div className="c1 logo-title shadow p-1">
        <i className="bi bi-music-note-beamed"></i>
        </div>
    </div>

    <div className="card-body">
      <div className='text-end m-0'>
      <i className="bi bi-heart m-0"></i>
      </div>
      <h5 className="card-title">Tourist Service Center</h5>
      <p className="card-text my-2">If you ever need any help during your time in Cartagena.</p>
      <button type="button" className="btn mb-2 c1 text-light w-100 m-auto btn-md">Download</button>
    </div>

  </div>
  </div>
  
  </div>
  </div>
</div>

{/* Fourth Section */}
<div className="container-fluid p-5 backgroud-image2 d-none d-md-block">
  <div className="container">
    <div className="row bg-white py-4 px-3 shadow rounded">

      {/* Left content */}
      <div className="col-md-7">
        <h2 className='fonted-title'>Concierge Cartagena Travel Guides</h2>
        <p className='fs-5 my-4'>
          From flights, accommodations, stays, and activities.
          You’re in safe hands with our team!
        </p>
        <button className="btn c2 text-light btn-md w-100">BOOK TRIP</button>
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
      <button className="btn c2 text-light btn-md w-100">BOOK TRIP</button>
    </div>
  </div>
</div>



{/* Title Section */}
<div className='container-fluid my-3 mt-5'>
  <div className='container text-center py-3'>
    <h2 className='fs-1 fw-bold'>How To Do Cartagena</h2>
  </div>
</div>
 

{/* Six Card Section */}
<div className="container">

<div className="row">

  <div className="col-xs-12 col-sm-12 col-md-3">
  <div className="card mb-4 shadow">

    <div className="view overlay">
      <div className="c2 text-light img-title2">
        <h6>BEACH</h6>
        </div>
      <img className="card-img-top" src={img7} alt="Card image cap" />
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    <div className="card-body">

      <h5 className="card-title">Where to find the Best Exchange Rates</h5>
      <p className="card-text">Don’t Exchange Money at the Airport! Here are the best places to find ATMS & Currency exchange in Cartagena.</p>
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>
       <div className="d-flex my-3 px-2 align-items-center gap-2">
        <img src={profile} alt="Profile" className="profile-img mb-2" />
        <div className="fw-semibold">May</div>
      </div>
    </div>

  </div>
  </div>

  <div className="col-xs-12 col-sm-12 col-md-3">
  <div className="card mb-4 shadow">

    <div className="view overlay">
      <div className="c6 text-light img-title2">
        <h6>CULTURE</h6>
        </div>
      <img className="card-img-top" src={img8} alt="Card image cap" />
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    <div className="card-body">

      <h5 className="card-title">Is Cartagena a Safe City to Visit?</h5>
      <p className="card-text">Cartagena is very friendly but some times you will encounter scammers. Here is what to do avoid and how to stay safe.</p>
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>
       <div className="d-flex my-3 px-2 align-items-center gap-2">
        <img src={profile} alt="Profile" className="profile-img mb-2" />
        <div className="fw-semibold">Miguel</div>
      </div>
    </div>

  </div>
</div>

<div className="col-xs-12 col-sm-12 col-md-3">
  <div className="card mb-4 shadow">

    <div className="view overlay">
      <div className="c6 text-light img-title2">
        <h6>CULTURE</h6>
        </div>
      <img className="card-img-top" src={img9} alt="Card image cap" />
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    <div className="card-body">

      <h5 className="card-title">The Best Monuments and Statues of Cartagena, Colombia</h5>
      <p className="card-text">Here are some of the most famous statues of Cartagena and recognizable monuments from Cartagena.</p>
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>
       <div className="d-flex my-3 px-2 align-items-center gap-2">
        <img src={profile} alt="Profile" className="profile-img mb-2" />
        <div className="fw-semibold">Luz</div>
      </div>
    </div>

  </div>
</div>

<div className="col-xs-12 col-sm-12 col-md-3">
  <div className="card mb-4 shadow">

    <div className="view overlay">
      <div className="c1 text-light img-title2">
        <h6>ACTIVITIES</h6>
        </div>
      <img className="card-img-top" src={img0} alt="Card image cap" />
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    <div className="card-body">

      <h5 className="card-title">How to order taxis in Cartagena</h5>
      <p className="card-text">Are Taxis Safe in Colombia? Find out in our step by step guide on how to order taxis in Cartagena.</p>
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>
       <div className="d-flex my-3 px-2 align-items-center gap-2">
        <img src={profile} alt="Profile" className="profile-img mb-2" />
        <div className="fw-semibold">Alegandra</div>
      </div>
    </div>

  </div>
</div>

  
</div>
  
</div>


{/* Title Section */}
<div className='container-fluid my-3 mt-5'>
  <div className='container text-center py-3'>
    <h2 className='fs-1 fw-bold'>TOP NEWS OF CARTAGENA</h2>
  </div>
</div>

{/* Carasole Section */}

<section className="d-noe py-5">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-8 col-md-7">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner rounded overflow-hidden">
            <div className="carousel-item active">
              <img src={carasolepic} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={carasolepic} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={carasolepic} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
        <div className='d-flex my-4 align-items-center'>
         <div>
           <span>Accomodation - Hotels</span>
          <h5 className="fw-bold">the most luxurious hotel of cartagena</h5>
          <span>3 Min Read</span>
         </div>
         <div>
          <button className='btn fs-2'><i class="bi bi-arrow-right-circle"></i></button>
         </div>
        </div>

         <div className='d-flex my-4 align-items-center'>
         <div>
           <span>Accomodation - Hotels</span>
          <h5 className="fw-bold">the most luxurious hotel of cartagena</h5>
          <span>3 Min Read</span>
         </div>
         <div>
          <button className='btn fs-2'><i class="bi bi-arrow-right-circle"></i></button>
         </div>
        </div>

         <div className='d-flex my-4 align-items-center'>
         <div>
           <span>Accomodation - Hotels</span>
          <h5 className="fw-bold">the most luxurious hotel of cartagena</h5>
          <span>3 Min Read</span>
         </div>
         <div>
          <button className='btn fs-2'><i class="bi bi-arrow-right-circle"></i></button>
         </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Search Section */}
<div className='overlayed-pic container-fluid p-3 text-light p-relative'>
  <div className='overlay'>
  <div className='container col-lg-8 col-md-8 col-12 mb-4 py-5 mb-md-0 m-auto text-center text-white'>
    <h2  className='fs-1 fw-bold'>CARTAGENA NEWSLETTER</h2>
    <p className='fs-5'>Get the latest discounts, deals, coupons, news, & tips of Cartagena.</p>
    <input className='search-section-input p-3 col-lg-5 col-md-5 col-12 ' type="text" placeholder='E-MAIL'/>
    <input className='submit-btn col-lg-2 p-3 mx-lg-2 col-md-2 col-12' type="submit" value="SUBSCRIBE" />
  </div>
  </div>
</div>


{/* Footer */}
<div className="container-fluid px-0">
  <footer
          className="text-center text-lg-start text-white bg-black"
          >
    <div className="container-fluid py-3 px-3">
      
      <section className="">
    
        <div className="row">
       
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <img className='footer-logo w-100 w-lg-auto' src={logo}></img>

            <p className='my-4 d-none d-md-block'>
              We are native Cartagenero Costeños passionate about everything
               Cartagena. Our Cartagena Culture Magazine is here to help you
                discover the marvels of Cartagena la Heroica.
            </p>

            <button className='footer-Btn py-2 px-5 mt-3 w-100'>BOOK TRIP</button>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 my-5 d-none d-md-block">
            <h5 className="text-uppercase">About</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">About Us</a>
              </li>
              <li>
                <a href="#!" className="text-white">Contact</a>
              </li>
              <li>
                <a href="#!" className="text-white">Our Culture</a>
              </li>
              <li>
                <a href="#!" className="text-white">Work With Us</a>
              </li>
               <li>
                <a href="#!" className="text-white">Submit a Story</a>
              </li>
               <li>
                <a href="#!" className="text-white">Advertise With Us</a>
              </li>
               <li>
                <a href="#!" className="text-white">Editorial Standards</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 my-5 d-none d-md-block">
            <h5 className="text-uppercase">Cartagena</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Activities</a>
              </li>
              <li>
                <a href="#!" className="text-white">Hotels</a>
              </li>
              <li>
                <a href="#!" className="text-white">Beach Trips</a>
              </li>
              <li>
                <a href="#!" className="text-white">Deals</a>
              </li>
               <li>
                <a href="#!" className="text-white">Mdeical</a>
              </li>
               <li>
                <a href="#!" className="text-white">Real Estate</a>
              </li>
               <li>
                <a href="#!" className="text-white">More</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 my-5">
            <h5 className="text-uppercase">Help</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">FAQ</a>
              </li>
              <li>
                <a href="#!" className="text-white">Travel Guide</a>
              </li>
              <li>
                <a href="#!" className="text-white">Resources</a>
              </li>
              <li>
                <a href="#!" className="text-white">Glossary</a>
              </li>
              <li>
                <a href="#!" className="text-white">Safety Map</a>
              </li>
              <li>
                <a href="#!" className="text-white">Staying Safe</a>
              </li>
              <li>
                <a href="#!" className="text-white">Tourist Center</a>
              </li>
            </ul>
          </div>
        
          <div className="weather col-lg-3 col-md-6 py-5 my-4 mb-md-0 text-center d-none d-md-block">
            <h4 className="text-uppercase">Cartagena, CO</h4>
            <p>9:55 am, Dec 19, 2025</p>
            <h4>30C</h4>
            <h5>Few Clouds</h5>
            <p>Weather from OpenWeatherMap</p>
          </div>
  
        </div>
       
      </section>
     
<section className="my-5 text-start  d-none d-md-block">
       
        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-facebook-f"></i
          ></a>
        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-twitter"></i
          ></a>

        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-google"></i
          ></a>

        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-instagram"></i
          ></a>


        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-linkedin-in"></i
          ></a>

        <a
           className="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i className="fab fa-github"></i
          ></a>
      </section>

      <hr className="mb-4  d-none d-md-block" />

  
      

    </div>
    
    <div
         className="text-center p-3 bg-black  d-none d-md-block"
         >
     <span> © LaCarta 2023 – 2024. All rights reserved</span>
      <span>Privacy Policy
Terms & Conditions</span>
    </div>
  </footer>
</div>
</>
  )
}

export default HomePage
