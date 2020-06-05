import { createSelector } from 'reselect';

const selectCart = state => state.cart;  //input selector

//output selector using input selector return.
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectHiddenCartItems = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

//output selector using return from other output selector.
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity, cartItems) => accumalatedQuantity+cartItems.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedPrice, cartItems) => accumalatedPrice+cartItems.quantity*cartItems.price, 0
    )
)