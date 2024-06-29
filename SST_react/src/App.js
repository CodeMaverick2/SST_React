import logo from './logo.svg';
import './App.css';
import Products from './components/Product/Products.js';
// import {b} from './Products';
import Effect from './components/Effect/Effect.js';
import NavBar from './components/Portfolio/NavBar/NavBar.js';
import TypeWriter from './components/Portfolio/TypeWriter/TypeWriter.js';
import Tile from './components/Portfolio/Tile/Tile.js';
import Banner from './components/Portfolio/Banner/Banner.jsx';
import ProgressBar from './components/Portfolio/ProgressBar/ProgressBar.jsx';
import { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import CartContext from './context/CartContext.js';


function App() {
  // console.log(b);
  // const [percentage,SetPercentage] = useState(0);
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     SetPercentage((prev)=>(prev<90? prev+10 : 100));
  //   },1000)
  //   return () => clearInterval(interval)
  // })

  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    
    const newCart = {...cart};

    if (!newCart[product.title]) {
      newCart[product.title] = { ...product, quantity:0};
    } 
    newCart[product.title].quantity += 1;
    
    setCart(newCart);
  }

  function decreaseQuantity(product) {

    const newCart = {...cart};

    if (!newCart[product.title]) return;

    newCart[product.title].quantity -= 1;
    if (newCart[product.title].quantity <= 0) {
      delete newCart[product.title];
    } 
    
    setCart(newCart);
  }


  
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
        <div className="App">
          <Products />
        </div>
    </CartContext.Provider>
  );
}

export default App;
