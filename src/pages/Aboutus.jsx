// eslint-disable-next-line no-unused-vars
import React from 'react'
import gym from '../img/gym.jpg'
import body from "../img/body.png"
import lifting from "../img/lifting.png"
import zumba1 from "../img/zumba1.png"
import aerobics from "../img/aerobics.png"
import open from "../img/open.png"
import muscle from "../img/muscle.png"
import car1 from "../img/car1.jpg"
import caro2 from "../img/caro2.jpg"
const Aboutus = () => {
  return (
    <>
    
<div className="container-fluid bg-primary p-5 bg-hero mb-5">
  <div className="row py-5">
    <div className="col-12 text-center">
      <h1 className="display-2 text-uppercase text-white mb-md-4">About Us</h1>
      <a href className="btn btn-info py-md-3 px-md-5 me-3">Home</a>
      <a href className="btn btn-light py-md-3 px-md-5">About Us</a>
    </div>
  </div>
</div>



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
          <h1 className="display-3 text-uppercase mb-0">Welcome to AimFit</h1>
        </div>
        <h4 className="text-body mb-4">At AimFit Lahore Gym, we're committed to helping you achieve your fitness goals with personalized training and top-notch equipment. Join our supportive community and start your journey to becoming the best version of yourself today!</h4>
        <p className="mb-4">Welcome to Aimfit Lahore, where your fitness journey begins! At AimFit Lahore, we are dedicated to helping you achieve your health and wellness goals through personalized training programs, state-of-the-art equipment, and a supportive community. Whether you're a seasoned athlete or just starting out, our expert trainers and friendly staff are here to guide and motivate you every step of the way. Join us at AimFit Lahore Gym and discover a space where you can push your limits, celebrate your progress, and become the best version of yourself. Your fitness success story starts here!</p>
        <div className="rounded bg-dark p-5">
          <ul className="nav nav-pills justify-content-between mb-3">
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
            </li>
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-1">
              <p className="text-secondary mb-0">At our gym, we're more than just a fitness center; we're a dedicated community focused on empowering individuals to lead healthier lives. With a passion for well-being, we offer top-of-the-line equipment, personalized training sessions, and a variety of classes tailored to every fitness level. Our experienced trainers are committed to guiding you on your fitness journey, while our supportive atmosphere fosters motivation and camaraderie among members. We pride ourselves on our clean and safe facility, convenient hours, and exclusive member benefits..</p>
            </div>
            <div className="tab-pane fade" id="pills-2">
              <p className="text-secondary mb-0">Choose our gym for your fitness journey because we provide cutting-edge equipment, expert trainers, and diverse classes that cater to all fitness levels. Our welcoming and supportive community creates an environment where you can thrive. With convenient hours, a spotless facility, and exclusive member perks, we offer an exceptional experience designed to help you reach your health and fitness goals. Join us and be part of a community dedicated to your success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   {/* Programe Start */}
   <div className="container-fluid programe position-relative px-5 mt-5" style={{marginBottom: 135}}>
    <div className="row g-5 gb-5">
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={body}/>
          <i className="flaticon-six-pack display-1 text-primary" />
          <h3 className="text-uppercase my-4">Body Building</h3>
          <p>Bodybuilding is the art of sculpting one's physique through dedicated training and nutrition.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={lifting}/>
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4">Weight Lifting</h3>
          <p>Weightlifting is the practice of resistance training using weights to build strength, endurance, and muscle mass.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>


      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={muscle}/>
          <h3 className="text-uppercase my-4">Muscle Building</h3>
          <p>Muscle building involves the systematic training and nutrition strategies aimed at increasing muscle size, strength, and definition.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={zumba1}/>
          <h3 className="text-uppercase my-4" >Zumba Classes</h3>
          <p>Zumba classes offer a dynamic and exhilarating workout experience, combining dance moves with energetic music for a fun way to improve fitness and coordination.</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     


      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={aerobics}/>
          <h3 className="text-uppercase my-4" >AEROBICS CLASSES</h3>
          <p>Aerobics classes offer a dynamic and engaging workout that improves cardiovascular fitness and boosts energy levels. Join a class to enjoy upbeat music, fun routines and a supportive community while getting fit!</p>
          <a className="text-uppercase" style={{color:"#24A0ED"}} href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>     




      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
        <img src={open}/>     
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
  <break/>
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
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up"> With 25+ Years of Experience</h1>
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
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">500+ Trainers</h1>
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
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">5000+</h1>
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
            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">250K+</h1>
          </div>
        </div>
      </div>
    </div>
  </div>





  
  {/* Facts End */}
   {/* Footer Start */}
  
  </>
  )
}

export default Aboutus
