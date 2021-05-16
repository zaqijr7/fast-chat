import React from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// <-------- Import Pages -------->
import Home from '../pages/Home';
import Signin from '../pages/Signin';

function Router() {
  return (
    <Switch>
      <PrivateRoute exact path='/' privateComponent={Home} />
      <Route exact path='/signin'>
        <Signin />
      </Route>
    </Switch>
  )
}

export default Router
