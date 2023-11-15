import { useEffect } from 'react'
import './Cta.css'

export default function Cta(props){
    let scrollId;
    if(props.name == 'Contact us'){
        scrollId = 'contact'
    }
    const scrollFn = ()=>{
        const products = document.getElementById(scrollId);
        if(products){
            products.scrollIntoView({behavior:'smooth'});
        }
    }
    return (
        <button className="cta" onClick={scrollFn}>
            <span>{props.name}</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    )
}