import React from "react";
import Slide1 from "../src/images/uhrgebigiet.jpg"; // Add the missing import
import Slide2 from "../src/images/ferarcosn.jpg";
import Slide3 from "../src/images/joeynguy.jpg";
import Slide4 from "../src/images/titan.jpg";
import Slide5 from "../src/images/notes.jpg";

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={Slide1} className="d-block w-100" alt="Slide 1" height="900px" />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ color: 'white' }}>
              <h1>TIMELESS ELEGANCE ON YOUR WRIST</h1>
              <h4>Experience the sophistication of precision craftsmanship.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slide2} className="d-block w-100" alt="Slide 2" height="900px" />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ color: 'white' }}>
              <h1>UNLEASH YOUR STYLE WITH EVERY TICK</h1>
              <h4>Find the perfect blend of function and fashion.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slide3} className="d-block w-100" alt="Slide 3" height="900px" />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ color: 'white' }}>
              <h1>DISCOVER A NEW DIMENSION OF TIME</h1>
              <h4>Embrace innovation and tradition in every watch.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slide4} className="d-block w-100" alt="Slide 4" height="900px" />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ color: 'white' }}>
              <h1>POWER AND PRECISION</h1>
              <h4>Master every moment with cutting-edge technology.</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slide5} className="d-block w-100" alt="Slide 5" height="900px" />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ color: 'white' }}>
              <h1>CLASSIC DESIGN, MODERN TOUCH</h1>
              <h4>Where tradition meets innovation.</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
