import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Result from './Pages/Result';

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/signin" render={() => <SignIn />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route
        exact
        path="/result/:id"
        component={e => <Result id={e.match.params.id} />}
      />
    </>
  );
};

export default Routes;
