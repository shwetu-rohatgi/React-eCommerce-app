import React from 'react';
import './SignUp.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("Password don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({displayName:'', email:'', password:'', confirmPassword:''})
        }catch(err){
            console.log(err.message);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value});     // so here name will become key like email/password and value will be value of the [name]
    }
    render(){
        return(
            <div className='Sign-up'>
                <h2>I don't have an account</h2>
                <span className='title'>SignUp for an Account</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} handleChange={this.handleChange} label='Username'/>  
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label='Email'/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label='Password'/>
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} label='Confirm Password'/>

                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;