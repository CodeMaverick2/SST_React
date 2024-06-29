import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindow from "../../hooks/UseWindow/useWindow";
import Cart from "../Cart/Cart";
import "./Product.css";
import CartContext from "../../context/CartContext";
import { useSelector } from "react-redux";
import Categories from "../Categories";

function Products() {
    const { cart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res);
                setFilteredProducts(res);
            });
    }, []);

    function handleCategory(category) {
        setSelectedCategory(category);
        if (category === "ALL") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    }
    

    return (
        <div class="product">
            <div /* style={{display: "flex", justifyContent:"space-between"}} */>
                <Categories onSelectCategory={handleCategory} />
            </div>
            <hr style={{ height: '3px', backgroundColor: '#333', border: 'none', margin: '10px', width: '100%' }}></hr>
            <div className="productcard-container">
                {
                    filteredProducts.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default React.memo(Products);
