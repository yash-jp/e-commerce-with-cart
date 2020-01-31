import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component'

const HatPage = ()=>{
  return(
    <h1>Hats page!</h1>
  )
}

function App() {
  return (
    <Switch>
      <Route exact={true} path='/' component={Homepage}/>
      <Route exact={true} path='/hats' component={HatPage}/>
      <Route exact={true} path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
