import React from 'react';
import './SignInSignOut.styles.scss';
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'

const SignInSignOut = ()=>(
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignOut;