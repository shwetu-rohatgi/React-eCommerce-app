import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import { ToggleCartActions } from '../../redux/cart-reducer/cart.action';
import { connect } from 'react-redux';

const CartIcon = ({ToggleCartActions, itemCount}) => (
    <div className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' onClick = { ToggleCartActions }/>
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchtoProps = dispatch =>({
    ToggleCartActions: () => dispatch(ToggleCartActions())
});

const mapStatetoProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity+cartItems.quantity, 0)
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);