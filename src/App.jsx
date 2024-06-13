
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/bootstrap.min.css";
import "./css/style.css";

import './lib/owlcarousel/assets/owl.carousel.min.css'

import Home from './pages/Home';

import "./lib/easing/easing.min.js";
import './lib/waypoints/waypoints.min.js';
import "./lib/counterup/counterup.min.js";
import "./lib/owlcarousel/owl.carousel.min.js";
import Header from './layout/Header.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Classtime from './pages/Classtime.jsx';
import Footer from './layout/Footer.jsx';
import Trainers from './pages/Trainers.jsx';
import Contactus from './pages/Contactus.jsx';
import Equipments from './pages/Equipments.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Carousel from './layout/Carousel.jsx';



function App() {
 

  return (
    <>
      
      <Router>

          <Header />
          {/* <Carousel/> */}
           <Routes>

            <Route path="/" element={<Home />} />
             <Route path="/about" element={<Aboutus />} />
            <Route path="/classes" element={<Classtime />} />
            <Route path="/trainers" element={<Trainers/>} />
            <Route path="/equipments" element={<Equipments/>} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/testimonial" element={<Testimonial/>} />

           </Routes>
           
       <Footer/>

      </Router>

    </>
  )
}

export default App
