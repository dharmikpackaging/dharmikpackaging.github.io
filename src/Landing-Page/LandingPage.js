import { useEffect } from 'react';
import Cta from '../CTA/Cta';
import image from '../assets/Landing-Image.svg'
import './LandingPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LandingPage(){
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
      
    return(
        <div id='home'  className="landingPage">
            <div data-aos='fade-right' className='left'>
                <h1 >Boxing up your success</h1>
                <p>Boxing up your success! We are a leading box packing company that specializes in providing high-quality packaging solutions for businesses of all sizes.
                    Our custom packaging solutions are designed to help you protect your products and build your brand.</p>

                    <br></br>
                    <Cta name='Contact us'></Cta>
            </div>
            <div data-aos='fade-left' className='right'>
                <img src={image}></img>
            </div>
        </div>
    )
}