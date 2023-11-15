import React from 'react';
import image1 from '../assets/brandable-box-yiU8G1K85AM-unsplash.jpg'
import image2 from '../assets/pickawood-6tAIO3pxde4-unsplash.jpg'
import image3 from '../assets/chuttersnap-BNBA1h-NgdY-unsplash.jpg'
import './Carousel.css'
import Cta from '../CTA/Cta';
const Carousel = () => {
  return (
    <div id='home'>
    <div id="carousel" className="carousel slide">
        {/* Bottom buttons */}
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className='carousel-image'>
            <img src={image1}></img>
        </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
        <div className='carousel-image'>
            <img src={image2}></img>
        </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
            <div className='carousel-image'>
                <img src={image3}></img>
            </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button  className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span data-cursor="-opaque" className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span data-cursor="-opaque" className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span data-cursor="-opaque" className="carousel-control-next-icon" aria-hidden="true"></span>
        <span data-cursor="-opaque" className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Carousel;
