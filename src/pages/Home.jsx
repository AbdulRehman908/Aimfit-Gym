
// eslint-disable-next-line no-unused-vars
import React from 'react'

import gym from '../img/gym.jpg'
import lifting from "../img/lifting.png"
import body from "../img/body.png"
import zumba1 from "../img/zumba1.png"
import aerobics from "../img/aerobics.png"
import open from "../img/open.png"
import muscle from "../img/muscle.png"
import blog from "../img/blog.jpg"
import blog4 from "../img/blog4.jpeg"
import blog3 from "../img/blog3.jpg"
import ahmed from "../img/ahmed.jpeg"
import shah from "../img/shah.jpeg"
import farwa from "../img/farwa.jpeg"
import car1 from "../img/car1.jpg"
import caro2 from "../img/caro2.jpg"

const Home = () => {
  return (
     <>
     {/* Carousel Start */}
     <div className="container-fluid p-0 mb-5">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={car1} 
          
           alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase">Best Gym Center</h5>
              <h1 className="display-2 text-white text-uppercase mb-md-4">Build Your Body Strong With AIMLIFT</h1>
              <a href className="btn btn-info py-md-3 px-md-5 me-3">Join Us</a>
              <a href className="btn btn-light py-md-3 px-md-5">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src={caro2} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase">Best Gym Center</h5>
              <h1 className="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</h1>
              <a href className="btn btn-info py-md-3 px-md-5 me-3">Join Us</a>
              <a href className="btn btn-light py-md-3 px-md-5">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
   {/* Carousel End */}
   
     <div>

  {/* About Start */}
  <div className="container-fluid p-5">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: 500}}>
      <div className="position-relative h-100">
          <img className="position-absolute w-100 h-100 rounded" src={gym} style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4">
          <h5 className="text-info text-uppercase">About Us</h5>
          <h1 className="display-3 text-uppercase mb-0">Welcome to Aimfit</h1>
        </div>
        <h4 className="text-body mb-4">At AimFit Lahore Gym, we're committed to helping you achieve your fitness goals with personalized training and top-notch equipment. Join our supportive community and start your journey to becoming the best version of yourself today!</h4>
        <p className="mb-4">Welcome to Aimfit Lahore, where your fitness journey begins! At AimFit Lahore, we are dedicated to helping you achieve your health and wellness goals through personalized training programs, state-of-the-art equipment, and a supportive community. Whether you're a seasoned athlete or just starting out, our expert trainers and friendly staff are here to guide and motivate you every step of the way. Join us at AimFit Lahore Gym and discover a space where you can push your limits, celebrate your progress, and become the best version of yourself. Your fitness success story starts here!</p>
        <div className="rounded bg-dark p-5">
          <ul className="nav nav-pills justify-content-between mb-3">
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center active" data-bs-toggle="pill" href="#pills-1">About Us</a>
            </li>
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center" data-bs-toggle="pill" href="#pills-1">Why Choose Us</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-1">
              <p className="text-secondary mb-0">At our gym, we're more than just a fitness center; we're a dedicated community focused on empowering individuals to lead healthier lives. With a passion for well-being, we offer top-of-the-line equipment, personalized training sessions, and a variety of classes tailored to every fitness level. Our experienced trainers are committed to guiding you on your fitness journey, while our supportive atmosphere fosters motivation and camaraderie among members. We pride ourselves on our clean and safe facility, convenient hours, and exclusive member benefits.</p>
            </div>
            <div className="tab-pane fade" id="pills-2">
              <p className="text-secondary mb-0">Choose our gym for your fitness journey because we provide cutting-edge equipment, expert trainers, and diverse classes that cater to all fitness levels. Our welcoming and supportive community creates an environment where you can thrive. With convenient hours, a spotless facility, and exclusive member perks, we offer an exceptional experience designed to help you reach your health and fitness goals. Join us and be part of a community dedicated to your success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Programe Start */}
  <div className="container-fluid programe position-relative px-5 mt-5" style={{marginBottom: 135}}>
    <div className="row g-5 gb-5">
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={body}/>
          <h3 className="text-uppercase my-4">Body Building</h3>
          <p>Bodybuilding is the art of sculpting one's physique through dedicated training and nutrition.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={lifting}/>
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4" >Weight Lifting</h3>
          <p>Weightlifting is the practice of resistance training using weights to build strength, endurance, and muscle mass.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     


      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={muscle}/>
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4" >MUSCLE BUILDING</h3>
          <p>Muscle building involves the systematic training and nutrition strategies aimed at increasing muscle size, strength, and definition.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     





      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={zumba1}/>
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4" >Zumba Classes</h3>
          <p>Zumba classes offer a dynamic and exhilarating workout experience, combining dance moves with energetic music for a fun way to improve fitness and coordination.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     





      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={aerobics}/>
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4" >AEROBICS CLASSES</h3>
          <p>Aerobics classes offer a dynamic and engaging workout that improves cardiovascular fitness and boosts energy levels. Join a class to enjoy upbeat music, fun routines and a supportive community while getting fit!</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     




      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={open}/>
          <i className="flaticon-bodybuilding display-1 text-primary" />
          <h3 className="text-uppercase my-4">OPEN 24 HOURS</h3>
          <p>Experience the freedom of fitness on your own schedule with our 24-hour gym access. Break a sweat at any hour, empowering you to reach your fitness goals at your convenience.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}}>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>

      <div className="col-lg-12 col-md-6 text-center">
        <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
        <a href className="btn btn-info py-3 px-5">Become A Member</a>
      </div>
    </div>
  </div>
  {/* Programe Start */}
  {/* Class Timetable Start */}
  <div className="container-fluid p-5">
    <div className="mb-5 text-center">
      <h5 className="text-info text-uppercase">Class Schedule</h5>
      <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
    </div>
    <div className="tab-class text-center">
      <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1" >Monday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Tuesday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Wednesday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-4">Thursday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-5">Friday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-6">Saturday</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-7">Sunday</a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">Ahmed Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali Shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-2" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-3" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-4" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-5" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-6" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-7" className="tab-pane fade p-0">
          <div className="row g-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                <h5 className="text-uppercase text-info">Power Lifting</h5>
                <p className="text-uppercase text-secondary mb-0">AHMED KHAN</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                <h5 className="text-uppercase text-info">Body Building</h5>
                <p className="text-uppercase text-secondary mb-0">Ali shah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                <h5 className="text-uppercase text-info">Cardio Program</h5>
                <p className="text-uppercase text-secondary mb-0">Farwa Batool</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                <h5 className="text-uppercase text-info">Weight Loose</h5>
                <p className="text-uppercase text-secondary mb-0">Usman Raza</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                <h5 className="text-uppercase text-info">Fitness Program</h5>
                <p className="text-uppercase text-secondary mb-0">Bilal Ahmeds</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                <h5 className="text-uppercase text-info">Crossfit Class</h5>
                <p className="text-uppercase text-secondary mb-0">Fahad Khan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                <h5 className="text-uppercase text-info">Muscle Building</h5>
                <p className="text-uppercase text-secondary mb-0">Imran Mahmood</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                <h5 className="text-uppercase text-info">Yoga Class</h5>
                <p className="text-uppercase text-secondary mb-0">Saad Ali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Class Timetable Start */}
  {/* Facts Start */}
  <div className="container-fluid bg-dark facts p-5 my-5">
    <div className="row gx-5 gy-4 py-5">
      <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div className="bg-info rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
            <i className="fa fa-star fs-4 text-white" />
          </div>
          <div className="ps-4">
            <h5 className="text-secondary text-uppercase">Experience</h5>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">63+ Yrs</h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div className="bg-info rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
            <i className="fa fa-users fs-4 text-white" />
          </div>
          <div className="ps-4">
            <h5 className="text-secondary text-uppercase">Our Trainers</h5>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">5000+</h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div className="bg-info rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
            <i className="fa fa-check fs-4 text-white" />
          </div>
          <div className="ps-4">
            <h5 className="text-secondary text-uppercase">Complete Project</h5>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">7500+</h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="d-flex">
          <div className="bg-info rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
            <i className="fa fa-mug-hot fs-4 text-white" />
          </div>
          <div className="ps-4">
            <h5 className="text-secondary text-uppercase">Happy Clients</h5>
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">50K+</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
  {/* Team Start */}
  <div className="container-fluid p-5">
    <div className="mb-5 text-center">
      <h5 className="text-info text-uppercase">The Team</h5>
      <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid" src={ahmed}/>
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
            <h5 className="text-uppercase text-light">AHMED KHAN</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
          <img className="img-fluid" src={shah}/>
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
            <h5 className="text-uppercase text-light">ALI SHAH</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
          <img className="img-fluid" src={farwa}/>
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
            <h5 className="text-uppercase text-light">Farwa Batool</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}


  {/* Testimonial Start */}

  <div className="container-fluid p-0 my-5">
    <div className="row g-0">
      <div className="col-lg-6" style={{minHeight: 500}}>
        <div className="position-relative h-100">
          <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-6 bg-dark p-5">
        <div className="mb-5">
          <h5 className="text-info text-uppercase">Testimonial</h5>
          <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item">
            <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt />
              <div className="ps-4">
                <h5 className="text-uppercase text-light">Client Name</h5>
                <span className="text-uppercase text-secondary">Profession</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt />
              <div className="ps-4">
                <h5 className="text-uppercase text-light">Client Name</h5>
                <span className="text-uppercase text-secondary">Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Testimonial End */}

  {/* Blog Start */}
  
  <div className="container-fluid p-5">
    <div className="mb-5 text-center">
      <h5 className="text-info text-uppercase">Our Blogs</h5>
      <h1 className="display-3 text-uppercase mb-0">Recent Blog Posts</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
          <img className="img-fluid" src={blog} />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>22</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2023</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Start your day with a moment of calm by basking in the morning sunlight - it's nature's way of recharging your mind and body.</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
          <img className="img-fluid" src={blog4} />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">November</h6>
              <span>2024</span>
            </div>
            <a className="h5 text-uppercase text-light" href> Embrace the warmth and watch your day transform with renewed energy and positivity</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
          <img className="img-fluid" src={blog3} />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>15</span>
              <h6 className="text-light text-uppercase mb-0">February</h6>
              <span>2024</span>
            </div>
            <a className="h5 text-uppercase text-light" href>By cultivating gratitude, presence, and a slower pace, we can uncover the happiness that exists in our daily lives.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-dark py-3 fs-4 back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

</>
  )
}

export default Home


