import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loader from './Components/Loader';
// import Home from './Pages/Home';
// import Landing from './Pages/Landing';
import Welcome from './Pages/Welcome';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';
import { auth, createUserProfileDocument } from './firebase/utils.js';
import agent from './agent';
import { history } from './redux/store';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, APP_LOAD } from './redux/constants/actionTypes';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#64B5F6', light: '#9BE7FF', dark: '#2286C3' },
    secondary: { main: '#00E575', light: '#66FFA5', dark: '#00B147' },
  },
});

const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
  appLoaded: state.common.appLoaded,
});

const mapDispatchToProps = dispatch => ({
  onAppLoad: () => dispatch({ type: APP_LOAD }),
  setCurrentUser: user => dispatch({ type: SET_CURRENT_USER, payload: user }),
});

const App = ({ currentUser, appLoaded, onAppLoad, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const token = await userAuth.getIdToken();
        agent.setToken(token);
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef === undefined) {
          setCurrentUser(userAuth);
        } else {
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
              token,
              photoURL: userAuth.photoURL,
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
      onAppLoad();
    });
    return () => unsubscribeFromAuth();
  }, [onAppLoad, setCurrentUser]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ConnectedRouter history={history}>
        <Switch>
          {appLoaded ? (
            <>{currentUser ? <Routes /> : <Welcome />}</>
          ) : (
            <Loader />
          )}
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
