import { useEffect, useState } from 'react';
import Cta from '../CTA/Cta';
import image from '../assets/Landing-Image.svg'
import './LandingPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid } from '@mui/material';
export default function LandingPage(){
    const [isXsScreen, setIsXsScreen] = useState(window.innerWidth < 900);
   
    useEffect(()=>{
        const handleResize = () => {
            setIsXsScreen(window.innerWidth < 900);
        }
        window.addEventListener('resize', handleResize);

        AOS.init({duration:1000});
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      },[]);
    return(
        <Grid container id='home'  className="landingPage">
            <Grid item md={6} xs={12} data-aos='fade-right' className='left'>
                <h1 >Boxing up your success</h1>
                <p>Boxing up your success! We are a leading box packing company that specializes in providing high-quality packaging solutions for businesses of all sizes.
                    Our custom packaging solutions are designed to help you protect your products and build your brand.</p>
                    <br></br>
                    <Cta name='Contact us'></Cta>
            </Grid>
            {isXsScreen?null: <Grid item md={6} xs={0} data-aos='fade-left' className='right'>
                <img src={image}></img>
            </Grid>}
        </Grid>
    )
}