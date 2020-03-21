import React from 'react';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';
import {Route} from 'react-router-dom';

import './App.css';



function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
     
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
