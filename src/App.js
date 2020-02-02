import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { push } from 'connected-react-router';
import Loader from './Components/Loader/Component';
import Snack from './Components/Snack/Component';
import Router from './Router';
import { auth, createUserProfileDocument } from './firebase/utils.js';
import { connect } from 'react-redux';
import { store } from './redux/store';
import { onUserChange, closeSnack } from './redux/reducers/common/actions';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#64B5F6', light: '#9BE7FF', dark: '#2286C3' },
    secondary: { main: '#00E575', light: '#66FFA5', dark: '#00B147' },
  },
});

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  redirectTo: state.common.redirectTo,
  snackStatus: state.common.snackStatus,
  snackMessage: state.common.snackMessage,
  snackType: state.common.snackType,
  authState: state.common.authState,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(onUserChange(user)),
  handleCloseSnackBar: () => dispatch(closeSnack()),
});

const App = ({
  appLoaded,
  setCurrentUser,
  redirectTo,
  snackStatus,
  snackMessage,
  handleCloseSnackBar,
  snackType,
  authState,
}) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const token = await userAuth.getIdToken();
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
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser, authState]);

  useEffect(() => {
    store.dispatch(push(redirectTo));
  }, [redirectTo]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {appLoaded ? <Router /> : <Loader />}
      <Snack
        open={snackStatus}
        variant={snackType}
        message={snackMessage}
        onClose={handleCloseSnackBar}
      ></Snack>
    </MuiThemeProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
