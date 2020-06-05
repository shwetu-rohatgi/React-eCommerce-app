import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart-reducer/cart.selector';
import { ToggleCartActions } from '../../redux/cart-reducer/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                (
                cartItems.map((cartItem)=>(
                        <CartItem key={cartItem.id} item={cartItem} quantity={cartItem.quantity}/>
                    ))
                // cartItems.map(cartItem =>  <CartItem key={cartItem.id} item={cartItem}/>))
                )
                :
                (<span className='empty-message'>Your Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick = {()=> {
            history.push('/checkout');
            dispatch(ToggleCartActions());
            }}>GO TO CHECKOUT</CustomButton> {/*Using history from withRouter to route to checkout page that is pushed into url after click of button*/}
    </div>
);

const mapStatetoProps = (state)=>({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));