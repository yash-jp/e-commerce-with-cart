import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage-component';

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
    </Switch>
  );
}

export default App;
