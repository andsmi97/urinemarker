import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Container';
import SignIn from './Pages/SignIn/Container';
import SignUp from './Pages/SignUp/Container';
import Result from './Pages/Result/Container';
import Welcome from './Pages/Welcome/Page';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import NotFound from './Pages/NotFound/Container';
const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
});

const Router = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/result/:id"
            component={e => <Result id={e.match.params.id} />}
          />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    );
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect(mapStateToProps)(Router);
