'use client'
const { createContext, useState, useEffect, useReducer } = require("react");



export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {


    //force reload of page
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const [cartItems, setCartItems] = useState([])
    const [store, setStore] = useState(0)
    let totalamount = 0
    console.log(store);

    for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        totalamount += element.price * element.quantity
        { () => setStore(totalamount) }

    }

    let cart;
    function handleAddToCart(getCurrentItem, qty, placeIndex) {
        forceUpdate()
        cart = cartItems ?? []
        let idProduct = getCurrentItem._id
        let price = getCurrentItem.price
        let title = getCurrentItem.title
        let position = cart?.findIndex(value => value.product_id === idProduct);
        console.log(position)
        console.log(placeIndex);
        let quantity = qty ? cartItems[position].quantity - 1 : (position < 0 ? 1 : cartItems[position].quantity + 1)
        if (placeIndex) {
            cart.splice(position, 1)
        } else {
            if (quantity <= 0) {
                cart.splice(position, 1)
            } else if (position < 0) {
                cart.push({
                    product_id: idProduct,
                    quantity: 1,
                    price: price,
                    title: title
                })
            } else {
                cart[position].quantity = quantity
            }

        }

    }




    useEffect(() => {
        if (typeof window !== 'undefined') {

            localStorage.setItem('cartItems', JSON.stringify(cart));
            setCartItems(cart);

        }

        if (typeof window !== 'undefined') {

            setCartItems(JSON.parse(localStorage.getItem('cartItems')));
            forceUpdate(cartItems)
        }
    }, [])

    return (
        <CartContext.Provider value={{ cartItems, store, handleAddToCart, forceUpdate }}>
            {children}
        </CartContext.Provider>
    )
}


// function handleAddToCart(getCurrentItem) {
//     const carts = cartItems ?? []
//     console.log("cart: ", cartItems);
//     carts.push(getCurrentItem);
//     setCartItems(carts)
//     localStorage.setItem('cartItems', JSON.stringify(carts));
//     }
