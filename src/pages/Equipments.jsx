/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import treadmil from "../img/treadmill.jpg"
import rower from "../img/rower.png"
import bike from "../img/bike.jpg"
import big from "../img/big.jpg"
import life from "../img/life.jpg"
import fglove from "../img/fglove.jpg"
import glove from "../img/glove.jpg"
import dumbell from "../img/dumbell.jpg"
import stand from "../img/stand.jpg"
import barbell from "../img/barbell.jpg"
import squat from "../img/squat.png"
import rod from "../img/rod.jpg"
import balls from "../img/balls.jpg"
import bagss from "../img/bagss.jpg"
import mat from "../img/mat.png"
import rope from "../img/rope.jpg"
import cross from "../img/cross.jpg"
import grip from "../img/grip.jpeg"
import machine from "../img/machine.png"
import chair from "../img/chair.jpg"



const Equipments = () => {
  return (
  <>


<div className="container-fluid bg-primary p-5 bg-hero mb-5">
  <div className="row py-5">
    <div className="col-12 text-center">
      <h1 className="display-2 text-uppercase text-white mb-md-4">Buy Premium Equipments</h1>
      <a href className="btn btn-info py-md-3 px-md-5 me-3">Home</a>
      <a href className="btn btn-light py-md-3 px-md-5">Contact  Us</a>
    </div>
  </div>
</div>





{/* <---Section Starts---> */}

<Row className='arrange'>
<div className="card" style={{margin : '20px'}}>

  <div className="card-img"><img src={treadmil}/></div>
  <div className="card-title">Treadmill</div>
  <div className="card-subtitle">High-quality treadmill featuring a powerful motor, adjustable incline, and a spacious running belt. Ideal for home workouts, it includes preset fitness programs, heart rate monitoring, and a foldable design for easy storage.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">Rs210,000 </div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>

<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={cross}/></div>
  <div className="card-title">93260 CLASSIC II Elliptical Cross</div>
  <div className="card-subtitle">Top-of-the-line elliptical cross trainer with adjustable resistance levels and smooth, low-impact motion. Features include a digital display, built-in workout programs, and heart rate sensors for a comprehensive fitness experience.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">Rs78,000 </div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>

<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={bike}/></div>
  <div className="card-title">Folding exercise bike</div>
  <div className="card-subtitle">Compact and easy to store, this folding exercise bike offers a smooth, quiet ride with adjustable resistance levels, perfect for home workouts. Its foldable design saves space, making it ideal for small apartments or limited spaces.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨45,000</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={rower}/></div>
  <div className="card-title">American Rower Machines</div>
  <div className="card-subtitle">Achieve a full-body workout with this rower machine, designed for smooth, adjustable resistance to mimic real rowing. Its compact, foldable design ensures easy storage and convenience for any home gym.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨175,000</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={big}/></div>
  <div className="card-title">American Fitness Home Gym 7080</div>
  <div className="card-subtitle">Upgrade your workouts with the American Fitness Home Gym 7080, offering versatile strength training with multiple exercise stations. This durable, compact system is perfect for achieving full-body fitness in the comfort of your home.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨125,000</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={life}/></div>
  <div className="card-title">ABDO BENCH 1208</div>
  <div className="card-subtitle">
Achieve core strength and sculpted abs with the ABDO BENCH 1208, featuring adjustable incline levels for tailored workouts. Compact and sturdy, it's the perfect addition to your home gym for targeted abdominal exercises.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨28,500</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={fglove}/></div>
  <div className="card-title">Adidas Women’s Gloves</div>
  <div className="card-subtitle">
  Experience comfort and style with these women's gloves, crafted with premium materials for durability and a perfect fit. Ideal for various activities, from workouts to everyday wear, offering both functionality and fashion.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨1,999</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>


<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={glove}/></div>
  <div className="card-title">AAdidas Essential Adjustable Gloves</div>
  <div className="card-subtitle">
  Conquer your workout in comfort with Adidas Essential Adjustable Gloves, featuring a breathable design and adjustable wrist closure for a secure fit.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨1,999</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={dumbell}/></div>
  <div className="card-title">APOLLO CUSTOM STYLE RUBBER DUMBBELL PAIR</div>
  <div className="card-subtitle">
  Enhance your strength training routine with the Apollo Custom Style Rubber Dumbbell Pair, crafted for durability and versatility in workouts.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨2,380 – ₨47,600</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>




<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={stand}/></div>
  <div className="card-title">APOLLO DUMBBELL STAND AP-995</div>
  <div className="card-subtitle">
  Apollo Dumbbell Stand Rack AP-995, providing a sturdy and space-saving solution for storing your dumbbells. Its sleek design and durable construction make it an essential addition to any fitness space.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨8,700</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>




<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={barbell}/></div>
  <div className="card-title">LIVEPRO PREMIUM EZ CURL URETHANE BARBELL</div>
  <div className="card-subtitle">
  Crafted with premium urethane coating, it ensures a smooth lifting experience and long-lasting quality for your home or commercial gym.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨8,700</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={squat}/></div>
  <div className="card-title">ADJUSTABLE SQUAT RACK</div>
  <div className="card-subtitle">
  Maximize your strength training with this Adjustable Squat Rack, offering versatility and stability for various workouts. Perfect for home gyms, it adjusts to multiple heights.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨26,500</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>




<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={rod}/></div>
  <div className="card-title">LIVEUP OLYMPIC EZ BAR 4FT</div>
  <div className="card-subtitle">
  LIVEUP Olympic EZ Bar 4FT, engineered for ergonomic grip and versatile workouts. Ideal for targeting specific muscle groups, this bar enhances your lifting experience with durable construction and efficient design.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨32,500</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={balls}/></div>
  <div className="card-title">LIVEPRO MEDICINE BALL</div>
  <div className="card-subtitle">
  LIVEPRO Medicine Ball, designed for versatile strength and conditioning workouts. Its durable construction and textured surface ensure a secure grip, perfect for both home and gym use.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨8,000 – ₨19,500</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>




<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={bagss}/></div>
  <div className="card-title">LIVEPRO POWER BAGS</div>
  <div className="card-subtitle">
  LIVEPRO POWER BAGSL, offering versatile workouts with its durable design and multiple grip handles. Perfect for functional fitness routines, this power bag enhances stability and core strength for all fitness levels.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨15,000 – ₨24,000</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>



<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={mat}/></div>
  <div className="card-title">Foldable Leather Mat</div>
  <div className="card-subtitle">
  LIVEPRO POWER BAGSL, offering versatile workouts with its durable design and multiple grip handles. Perfect for functional fitness routines, this power bag enhances stability and core strength for all fitness levels.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨12,500</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>

<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={rope}/></div>
  <div className="card-title">Tangle Free Jump Rope Professional</div>
  <div className="card-subtitle">
  Enhance your cardio workout with the Jump Rope Professional, featuring a tangle-free design and adjustable steel cable for rapid speed. Its foam handles provide a comfortable grip, making it ideal for fitness aiming for a slim and fit body.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨1,999</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>


<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={grip}/></div>
  <div className="card-title">6 PCS Hand Grip Strengthener Kit </div>
  <div className="card-subtitle">
  Enhance your grip strength with this 6 PCS Hand Grip Strengthener Kit, featuring a variety of tools for comprehensive hand and finger workouts. Comes with a convenient storage pouch for easy organization and portability.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨1,999</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>


<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={machine}/></div>
  <div className="card-title">Electronic Personal Scale EB9360</div>
  <div className="card-subtitle">
Monitor your health with precision using the Electronic Personal Scale EB9360, featuring a sleek design and high-accuracy sensors. Its easy-to-read digital display and durable construction make it a reliable addition to any home.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨3,750</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>


<div className="card" style={{margin : '20px'}}>
  <div className="card-img"><img src={chair}/></div>
  <div className="card-title">Electrical Health Massager Chair </div>
  <div className="card-subtitle">
  Indulge in full-body relaxation with this Electric Massager Health Massage Chair, offering multi-function massage for waist, legs, back, neck, and head. Perfect for home use, it provides automatic, customizable relief for real comfort and wellness.</div>
  <hr className="card-divider" />
  <div className="card-footer">
    <div className="card-price">₨190,000</div>
    <button className="card-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
    </button>
  </div>
</div>
</Row>
<Container/>

{/* <---Section Ends---> */}
</>
  )
}

export default Equipments
