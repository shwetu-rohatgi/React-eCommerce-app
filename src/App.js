import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/SignInSignOut/SignInSignOut.component';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeAuth = null;

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(user=>(
      this.setState({currentUser: user})
    ))
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }
  render(){
    return (
      <div>
        {/*<HomePage />*/}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignOut}/>
        </Switch>
      </div>
    );
  }  
}

export default App;
