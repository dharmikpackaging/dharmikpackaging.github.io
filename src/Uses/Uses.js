import Card from '../Card/Card'
import './Uses.css'
import foodImage from '../assets/Food-Beverage-Services-Learnership.webp' 
import fruitImage from '../assets/Fruits & Vegetables.jpg' 
import FMCGImage from '../assets/FMCG.jpg' 
import automobileImage from '../assets/Automobile.jpg' 
import garmentImage from '../assets/Garment-TEXtalks-Textile-News.jpg' 
import personalCareImage from '../assets/Personal-Care-Products-Manufacturers.jpg' 

export default function Uses(){

    return(
        <div className='uses'>
            <h1 data-cursor="-opaque" data-magnetic >The Many Faces of Our Boxes</h1>
            <div className='uses-content'>
                <Card name = 'Food & Beverages' image ={foodImage}/>
                <Card name = 'Fruits & Vegetables' image ={fruitImage}/>
                <Card name = 'FMCG' image ={FMCGImage}/>
            </div>
            <div className='uses-content'>
                <Card name = 'Automobile Industry' image ={automobileImage}/>
                <Card name = 'Garment & Textiles' image ={garmentImage}/>
                <Card name = 'Personal Care' image ={personalCareImage}/>
            </div>
        </div>
    )
}