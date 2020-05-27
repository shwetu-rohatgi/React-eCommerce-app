import React from 'react';
import './button.styles.scss';

const CustomButton = ({type, isGoogleSignedIn, inverted, ...otherProps}) => (
<button className={`${inverted ? 'inverted':'' } ${isGoogleSignedIn ? 'google-sign-in':'' } custom-button`} type={type}{...otherProps}></button>
);

export default CustomButton;