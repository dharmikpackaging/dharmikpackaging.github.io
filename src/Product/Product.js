import image1 from '../assets/brandable-box-yiU8G1K85AM-unsplash.jpg'
import image2 from '../assets/roberto-sorin-7Z1pgI77BoE-unsplash.jpg'
import image3 from '../assets/erda-estremera-sxNt9g77PE0-unsplash.jpg'
import './Product.css'
import {useEffect} from 'react'
import AOS from 'aos';
import Grid from '@mui/material/Grid';
import 'aos/dist/aos.css';

export default function Product(props){
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
    if(props.rotate){
        return(
            <Grid container className="product" style={{backgroundColor:'var(--background)'}}>
                <Grid item md={6} xs={12} className="product-image">
                    {/* <img src={image1} alt="Image 1" /> */}
                    {props.number === 1 && <img data-aos='fade-right' src={image1} alt="Image 1" />}
                    {props.number === 2 && <img  data-aos='fade-right' src={image2} alt="Image 2" />}
                    {props.number === 3 && <img data-aos='fade-right' src={image3} alt="Image 3" />}
                </Grid>
                <Grid item md={6} xs={12} data-aos='fade-left' className="content">
                    <div className="heading">
                        <h1>
                            {props.heading}
                        </h1>
                    </div>
                    <div className="description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </Grid>
            </Grid>
        )
    }else{
        return(
            <Grid container className="product">
                <Grid item md={6} xs={12}   data-aos='fade-right' className="content">
                    <div className="heading">
                        <h1>
                            {props.heading}
                        </h1>
                    </div>
                    <div className="description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} className="product-image">
                    {props.number === 1 && <img data-aos='fade-left' src={image1} alt="Image 1" />}
                    {props.number === 2 && <img data-aos='fade-left' src={image2} alt="Image 2" />}
                    {props.number === 3 && <img data-aos='fade-left' src={image3} alt="Image 3" />}
                </Grid>
            </Grid>
        )
    }
}