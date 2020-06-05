import React from 'react';
import './checkout-item.styles.scss'

const CheckoutItem = ({item: {imageUrl, name, price, quantity}}) =>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img className='img' src={imageUrl} alt={name}/>     
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>{quantity}</div>
            <div className='price'>{price}</div>
            <div className='remove-button'>&#10005;</div>
        </div>
)};

export default CheckoutItem;
