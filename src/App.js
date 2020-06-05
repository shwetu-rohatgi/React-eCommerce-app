import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUserProfileDocument,auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user-reducer/user.action'

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/SignInSignOut/SignInSignOut.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component{

  unsubscribeAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser: user})
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( snapShot=>(
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        }, ()=>{
          console.log(this.state);  //have to log here so that promise is completed
        })
      ))
      }
      else{
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }
  render(){
    return (
      <div>
        {/*<HomePage />*/}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=>(this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignOut/>))}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }  
}

const mapStatetoProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))  //didn't understand this
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
