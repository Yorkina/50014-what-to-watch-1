import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {withProtectedRoute} from '../../hocs/with-protected-route/with-protected-route';
import {Favorites} from '../favorites/favorites';


const ProtectedRoute = withProtectedRoute(Route);

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main}/>

      <Route path="/login" component={SignIn}/>

      <ProtectedRoute path={`/favorites`} component={Favorites} />
    </Switch>
  );
};
