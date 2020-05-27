import { CartTypes } from './cart.type' 

export const ToggleCartActions = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItems = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})