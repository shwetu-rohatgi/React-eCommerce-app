import React from 'react';
import './button.styles.scss';

const CustomButton = ({type, isGoogleSignedIn, ...otherProps}) => (
<button className={`${isGoogleSignedIn ? 'google-sign-in':'' } custom-button`} type={type}{...otherProps}></button>
);

export default CustomButton;