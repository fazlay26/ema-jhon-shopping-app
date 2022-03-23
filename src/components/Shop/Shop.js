import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    //const [cart, setCart] = useState(0)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = []
        for (const id in storedCart) {
            const addededProducts = products.find(product => product.id === id)
            if (addededProducts) {
                const quantity = storedCart[id];
                addededProducts.quantity = quantity

                savedCart.push(addededProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = []; //7
        const exists = cart.find(product => product.id === selectedProduct);//5
        //6
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct] //8

        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id) //9
            exists.quantity = exists.quantity + 1 //10
            newCart = [...rest, exists] //11
        }
        //const newCart = [...cart, selectedProduct]
        setCart(newCart)
        addToDb(selectedProduct.id)
        // const newCart = cart + 1;
        // setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;