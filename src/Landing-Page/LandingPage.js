import image from '../assets/Landing Image.png'
import './LandingPage.css';


export default function LandingPage(){
    return(
        <div className="landingPage">
            <div className='left'>
                <h1>Boxing up your success</h1>
                <p>Boxing up your success! We are a leading box packing company that specializes in providing high-quality packaging solutions for businesses of all sizes.
                    Our custom packaging solutions are designed to help you protect your products and build your brand.</p>
            </div>
            <div className='right'>
                <img src={image}></img>
            </div>
        </div>
    )
}