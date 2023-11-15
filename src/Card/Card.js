import './Card.css'


export default function Card(props){
    return(
        <div className='dpcard'>
            <div className='dpcard-image'>
                <img src={props.image}></img>
            </div>
            <div className='dpcard-content'>
                <h2 className="title">{props.name}</h2>
            </div>
        </div>
    )
}