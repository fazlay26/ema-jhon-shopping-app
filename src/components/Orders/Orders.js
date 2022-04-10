import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevewOrder from '../RevewOrder/RevewOrder';


const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const removeHandler = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div>
            <h1>this is orders compo:{products.length}</h1>
            <p>cart  has:{cart.length}</p>
            <div className="shop-container">
                <div className="review-container">
                    {
                        cart.map(product => <RevewOrder
                            key={product.id}
                            product={product}
                            removeHandler={removeHandler}

                        ></RevewOrder>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to={'/Shipment'}>
                            <button>Proceed Shipment</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;