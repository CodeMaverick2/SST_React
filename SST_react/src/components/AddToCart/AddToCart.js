import CartContext from "../../context/CartContext";
import { useContext } from "react";

function AddToCart({product}){

    const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

    function increase(){
        increaseQuantity(product);
    }
    function decrease(){
        decreaseQuantity(product);
    }
    let quantity = cart[product.title] ? cart[product.title].quantity : 0;

    console.log("addtocart " + product.id);
    if(quantity === 0){
        return(
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={decrease}>-</button>
                <span style={{ color: 'black', padding: 0 }}>Quantity - {quantity}</span>
                <button onClick={increase}>+</button>
            </div>
            
        )
    }
    
    
}
export default AddToCart;


/* 
cart => [
        {Product,Quantity,Price},{Product,Quantity,Price},.......
    ]
An Array of Objects;

or

Object of Objects;
{
    id:{Product,Quantity,Price},
    id:{Product,Quantity,Price},
    ....
    ....
    ....
}
*/