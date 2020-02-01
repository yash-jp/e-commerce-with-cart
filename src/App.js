import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

const HatPage = ()=>{
  return(
    <h1>Hats page!</h1>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/hats' component={HatPage}/>
        <Route exact={true} path='/shop' component={ShopPage}/>
        <Route exact={true} path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
