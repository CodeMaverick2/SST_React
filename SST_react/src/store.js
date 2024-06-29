
import { createStore } from "redux";
import { omit } from "lodash";
import { type } from "@testing-library/user-event/dist/type";

const ADD_TO_CART = "ADD_TO_CART_ONE";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product){
    return{
        type: ADD_TO_CART,
        payload : product
    }
}
export function removeFromCart(product){
    return{
        type: REMOVE_FROM_CART,
        payload : product
    }
}


function cartReducer(state={items:{}},action){
    switch(action.type){
        case ADD_TO_CART:{
            const product = action.payload;
            
            if(state.items[product.id]){
                // console.log(state.items[product.id]);
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            }else{
                // console.log(product);
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity: 1
                        }
                    }
                }
            }
        }
        case REMOVE_FROM_CART:{
            const product = action.payload;
            if(state.items[product.id].quantity>1){
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                }
            }else{
                return {
                    ...state,
                    items: omit(state.items, [product.id])
                }
            }
        }
        default: 
            return state;
    }
}

const store = createStore(cartReducer);

export default store;