import React from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// <-------- Import Pages -------->
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Pin from '../pages/Pin';
import UpdateProfile from '../pages/UpdateProfile';
import ChatRoom from '../pages/ChatRoom';

function Router() {
  return (
    <Switch>
      <PrivateRoute exact path='/' privateComponent={Home} />
      <PrivateRoute exact path='/update-profile' privateComponent={UpdateProfile} />
      <PrivateRoute exact path='/chat/:id' privateComponent={ChatRoom} />
      <Route exact path='/signin'>
        <Signin />
      </Route>
      <Route exact path='/pin'>
        <Pin />
      </Route>
    </Switch>
  )
}

export default Router
