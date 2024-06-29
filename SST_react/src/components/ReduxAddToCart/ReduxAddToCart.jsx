import { useSelector, useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../../store";

function ReduxAddToCart({product}){
    let dispatch = useDispatch();
    function increase(){
        dispatch(addToCart(product));
    }
    function decrease(){
        dispatch(removeFromCart(product));
    }
    
    let quantity = useSelector((state)=>{
        return state.items[product.id]?.quantity || 0;
    })

    if(quantity === 0){
        return(
            <div>
                <button className="add-to-cart" onClick={increase}>AddToCart</button>
            </div>
        )
    }
    else{
        return(
            // <div>
            //     <button onClick={decrease}>-</button>
            //     <span style={{ color: 'black', padding: 0 }}>{quantity}</span>
            //     <button onClick={increase}>+</button>
            // </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px' 
            }}>
                <button style={{
                    width: '40px', // Adjust size
                    height: '40px', // Adjust size
                    backgroundColor: '#f0f0f0', // Background color
                    border: '1px solid #ccc', // Border styling
                    borderRadius: '5px', // Rounded corners
                    cursor: 'pointer', // Cursor pointer
                    padding: '2px', // Padding inside button
                    margin: '0 5px', // Margin around button
                    ':hover': {
                        backgroundColor: '#e0e0e0' // Hover effect
                    }
                }} onClick={decrease}>-</button>
                <span style={{
                    color: 'black',
                    padding: '0',
                    fontSize: '16px', // Font size
                    border: '1px solid #ccc', // Optional border
                    borderRadius: '5px', // Rounded corners for border
                    padding: '5px 10px', // Padding inside span
                    backgroundColor: '#f9f9f9' // Optional background color
                }}>{quantity}</span>
                <button style={{
                    width: '40px', // Adjust size
                    height: '40px', // Adjust size
                    backgroundColor: '#f0f0f0', // Background color
                    border: '1px solid #ccc', // Border styling
                    borderRadius: '5px', // Rounded corners
                    cursor: 'pointer', // Cursor pointer
                    padding: '5px', // Padding inside button
                    margin: '0 5px', // Margin around button
                    ':hover': {
                        backgroundColor: '#e0e0e0' // Hover effect
                    }
                }} onClick={increase}>+</button>
            </div>
            
        )
    }
    
    
}
export default ReduxAddToCart;