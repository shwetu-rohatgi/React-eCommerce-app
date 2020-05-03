import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';
import { createUserProfileDocument,auth } from './firebase/firebase.utils';
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
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser: user})
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( snapShot=>(
        this.setState({
          currentUser : {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, ()=>{
          console.log(this.state);  //have to log here so that promise is completed
        })
      ))
      }
      else{
        this.setState({currentUser: null})
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
