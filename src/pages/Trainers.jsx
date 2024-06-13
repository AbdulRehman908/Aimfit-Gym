// eslint-disable-next-line no-unused-vars
import React from 'react'
import ahmed from "../img/ahmed.jpeg"
import shah from "../img/shah.jpeg"
import farwa from "../img/farwa.jpeg"
const Trainers = () => {
  return (
<>

<div className="container-fluid bg-primary p-5 bg-hero mb-5">
  <div className="row py-5">
    <div className="col-12 text-center">
      <h1 className="display-2 text-uppercase text-white mb-md-4">Our Trainers</h1>
      <a href className="btn btn-info py-md-3 px-md-5 me-3">Home</a>
      <a href className="btn btn-light py-md-3 px-md-5">Contact  Us</a>
    </div>
  </div>
</div>






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
</>
  )
}

export default Trainers
