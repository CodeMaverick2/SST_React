import {useRef} from 'react';
import { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import ReduxAddToCart from '../ReduxAddToCart';
import './ProductCard.css';

function ProductCard({product}){
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    const [inputValue, setInputValue] = useState('class');
    // console.log(pRef);
    function printTitle(){
        // console.log("konichiwa");
        pRef.current.style.display = 'block';
    }

    function changeText(e){
        // const text1 = iRef.current.value;
        setInputValue(e.target.value);
        
        // oRef.current.innerText = oRef.current.innerText + text1;
        // oRef.current.innerText = `Over here - ${text1}`;

        // if (oRef.current) {
        //   oRef.current.innerText = `Over here - ${text1}`;
        // }
    };
    console.log("product " + product.id);
    return(
        <div>
            <div className='card'>
                <p onClick={printTitle}><span id='text'> Name : </span> {product.title}</p>
                <p ref={pRef}><span id='text'> Brand : </span> {product.brand}</p>
                <p ><span id='text'> Price : </span>{product.price.value}</p>
                <p ><span id='text'> Category : </span> {product.category}</p>
                <ReduxAddToCart product={product} />
            </div>

            {/* <p onClick={printTitle}>Products</p>
            <p style={{display: 'none'}} ref={pRef}>10</p> */}
            {/* <input type='text' ref={iRef} value={inputValue} onChange={changeText}></input>
            <p ref={oRef}>Over here - {inputValue}</p> */}
            
        </div>
    )
}

export default ProductCard;