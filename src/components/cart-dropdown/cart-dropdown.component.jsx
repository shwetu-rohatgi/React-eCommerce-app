import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem,k)=>(
                        <CartItem key={cartItem.id} item={cartItem} quantity={cartItem.quantity}/>
                    ))
                // cartItems.map(cartItem =>  <CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStatetoProps = ({cart: {cartItems}})=>({
    cartItems
});

export default connect(mapStatetoProps)(CartDropdown);