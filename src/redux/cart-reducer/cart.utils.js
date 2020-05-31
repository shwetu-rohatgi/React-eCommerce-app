export const addItemstoCart = (cartItems, addtoCart) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id===addtoCart.id)

    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id===addtoCart.id ? 
            {...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    }

    return [...cartItems, {...addtoCart, quantity: 1}]
}