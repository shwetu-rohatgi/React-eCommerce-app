import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart-reducer/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems, cartItemsTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
        cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} item={cartItem} quantity={cartItem.quantity}/>
        ))
        }
        <div className='total'>Total: ${cartItemsTotal}</div>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartTotal
})

export default connect(mapStatetoProps)(CheckoutPage);