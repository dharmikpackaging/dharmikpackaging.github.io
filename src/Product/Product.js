import image1 from '../assets/brandable-box-yiU8G1K85AM-unsplash.jpg'
import image2 from '../assets/roberto-sorin-7Z1pgI77BoE-unsplash.jpg'
import image3 from '../assets/erda-estremera-sxNt9g77PE0-unsplash.jpg'
import './Product.css'
export default function Product(props){
    if(props.rotate){
        return(
            <div className="product" style={{backgroundColor:'var(--background)'}}>
                <div className="product-image">
                {/* <img src={image1} alt="Image 1" /> */}
                {props.number === 1 && <img src={image1} alt="Image 1" />}
                {props.number === 2 && <img src={image2} alt="Image 2" />}
                {props.number === 3 && <img src={image3} alt="Image 3" />}
                </div>
                <div className="content">
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
                </div>
            </div>
        )
    }else{
        return(
            <div className="product">
                <div className="content">
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
                </div>
                <div className="product-image">
                {props.number === 1 && <img src={image1} alt="Image 1" />}
                {props.number === 2 && <img src={image2} alt="Image 2" />}
                {props.number === 3 && <img src={image3} alt="Image 3" />}
                </div>
            </div>
        )
    }
}