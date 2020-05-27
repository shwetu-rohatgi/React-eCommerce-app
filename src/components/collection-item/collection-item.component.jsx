import React from 'react';
import CustomButton from '../button/button.component';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart-reducer/cart.action'

import './collection-item.styles.scss';

const CollectionItem = ({item, addItems}) => {
    const { name, imageUrl, price} = item
    return (
        <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <CustomButton onClick={() => addItems(item)} inverted>Add to cart</CustomButton>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div> 
    </div>
    )
}

const mapDispatchtoProps = dispatch => ({
    addItems: item => dispatch(addItems(item))
});

export default connect(null, mapDispatchtoProps)(CollectionItem);