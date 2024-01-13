import './App.css';
// import MouseFollower from "mouse-follower";
import { useEffect,useRef } from "react";
import Navbar from "./Navbar/Navbar"
import Product from './Product/Product';
import LandingPage from './Landing-Page/LandingPage';
import Contact from './Contact/Contact';
import About from './About us/About';
import Cta from './CTA/Cta';

// const initializeCursor = () => {
//   MouseFollower.registerGSAP(gsap);
//   const cursor = new MouseFollower({ skewing: 2 });
//   $('[data-magnetic]').each(function () { new Magnetic(this); });
//   return cursor;
// };

function App() {
  const boxes_description = "Corrugated boxes are a type of packaging made from corrugated cardboard, which consists of a fluted inner layer sandwiched between two flat outer layers. These boxes are known for their strength, durability, and versatility. They are widely used for shipping, storage, and as retail packaging for various products. Corrugated boxes offer excellent protection and support, making them ideal for transporting items while minimizing the risk of damage. They come in various sizes and styles to suit different packaging needs and are often customized with printing for branding and product identification. Corrugated boxes are eco-friendly and recyclable, making them a popular choice for sustainable packaging solutions."
  const sheet_description = "Corrugated sheets are flat, strong, and lightweight materials made from corrugated cardboard, featuring a series of parallel ridges and furrows. They are commonly used for packaging, shipping, and as protective layers, providing strength and rigidity while remaining relatively lightweight. Corrugated sheets are highly versatile and can be customized for various applications, making them a popular choice in packaging and construction."
  const roll_description = "Corrugated rolls are long sheets of strong, wavy cardboard. They're often used for wrapping and protecting items, especially when shipping or moving. These rolls can be easily cut to size and provide cushioning and support for various products."
  
  useEffect(() => {
    console.log("App loaded");
  //  const cursor =initializeCursor();

  //  const bootstrap = require('bootstrap');

  //  // Activate the carousel
  //  const carouselElement = document.querySelector('#carousel');
  //  new bootstrap.Carousel(carouselElement, {
  //    interval:3000,
  //    ride:'carousel'
  //  });
  
    // return () => {cursor.destroy();};
  });

  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      {/* <Carousel/> */}
      <div id="products" className='products'>
        <h1 className='product-heading' >Products</h1>
        <Product number = {1} heading = "Corrogated Boxes" description = {boxes_description} rotate = {false} />
        <Product number = {2} heading = "Corrogated Sheets" description = {sheet_description} rotate = {true} />
        <Product number = {3} heading = "Corrogated Rolls" description = {roll_description} rotate = {false} />
        <div className='view-cta'>
          <Cta className='View' name='View more'/>
        </div>
      </div>
      <div>
       <About/>
      </div>
      {/* <div>
       <Uses/>
      </div> */}
      <div>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
