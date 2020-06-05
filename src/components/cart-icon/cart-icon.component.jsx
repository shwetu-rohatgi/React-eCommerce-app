import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import { ToggleCartActions } from '../../redux/cart-reducer/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selector';

const CartIcon = ({ToggleCartActions, itemCount}) => (
    <div className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' onClick = { ToggleCartActions }/>
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchtoProps = dispatch =>({
    ToggleCartActions: () => dispatch(ToggleCartActions())
});

const mapStatetoProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);