import Card from '../Card/Card'
import './Uses.css'
import foodImage from '../assets/Food-Beverage-Services-Learnership.webp' 
import fruitImage from '../assets/Fruits & Vegetables.jpg' 
import FMCGImage from '../assets/FMCG.jpg' 
import automobileImage from '../assets/Automobile.jpg' 
import garmentImage from '../assets/Garment-TEXtalks-Textile-News.jpg' 
import personalCareImage from '../assets/Personal-Care-Products-Manufacturers.jpg' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
export default function Uses(){
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
    return(
        <div className='uses'>
            <h1 data-cursor="-opaque" data-magnetic >The Many Faces of Our Boxes</h1>
            <div data-aos="fade-right" className='uses-content'>
                <Card  name = 'Food & Beverages' image ={foodImage}/>
                <Card name = 'Fruits & Vegetables' image ={fruitImage}/>
                <Card name = 'FMCG' image ={FMCGImage}/>
            </div>
            <div data-aos="fade-left" className='uses-content'>
                <Card name = 'Automobile Industry' image ={automobileImage}/>
                <Card name = 'Garment & Textiles' image ={garmentImage}/>
                <Card name = 'Personal Care' image ={personalCareImage}/>
            </div>
        </div>
    )
}