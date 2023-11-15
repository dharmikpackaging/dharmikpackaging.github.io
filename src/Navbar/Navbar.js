import $ from 'jquery';
import { useEffect, useRef } from "react";
import './Navbar.css'
import NavButtons from './NavButtons/NavButtons';

function Navbar() {
  const scrollFn = (section)=>{
    const products = document.getElementById(section);
    if(products){
        products.scrollIntoView({behavior:'smooth'});
    }
};
  useEffect(()=>{
  });
  return (
      <nav className=''>
        <div className='brand'>
          <h1 data-cursor="-opaque" data-cursor-stick=".brand" data-magnetic >Dharmik Packaging</h1>
        </div>
        <div className='buttons'>
          <NavButtons name ={"home"} onClick={scrollFn} />
          <NavButtons name ={"products"} onClick={scrollFn} />
          <NavButtons name ={"contact"} onClick={scrollFn} />
          <NavButtons name ={"about us"} onClick={scrollFn} />
        </div>
      </nav>
  );
}

export default Navbar;
