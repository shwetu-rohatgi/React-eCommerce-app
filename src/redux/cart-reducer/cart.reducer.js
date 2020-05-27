import { CartTypes } from './cart.type';
import { addItemstoCart } from './cart.utils'

const INITAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITAL_STATE, action) => {
    switch (action.type){
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            
        case CartTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemstoCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;

