import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const addededProducts = products.find(product => product.id === id)
            if (addededProducts) {
                const quantity = storedCart[id]
                addededProducts.quantity = quantity
                savedCart.push(addededProducts)

            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart]
}
export default useCart;