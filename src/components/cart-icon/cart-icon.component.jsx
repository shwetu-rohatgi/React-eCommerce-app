import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import { ToggleCartActions } from '../../redux/cart-reducer/cart.action';
import { connect } from 'react-redux';

const CartIcon = ({ToggleCartActions}) => (
    <div className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' onClick = { ToggleCartActions }/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchtoProps = dispatch =>({
    ToggleCartActions: () => dispatch(ToggleCartActions())
});

export default connect(null, mapDispatchtoProps)(CartIcon);