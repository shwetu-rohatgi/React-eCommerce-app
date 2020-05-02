import React from 'react';
import './SignIn.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value});     // so here name will become key like email/password and value will be value of the [name]
    }
    render(){
        return(
            <div className='Sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Signin with your Email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label='Email'/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label='Password'/>

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignedIn={true}>Sign In with Google</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;