import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Result from "./Pages/Result";
import Camera from "./Pages/Camera";
import {
  auth,
  createUserProfileDocument
} from "./firebase/utils.js";
import agent from "./agent";
import { createSubstancesArray } from "./substances.js";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#66BB6A", light: "#98ee99", dark: "#338A3E" },
    secondary: { main: "#0288D1", light: "#5EB8FF", dark: "#005B9F" }
  }
});

const response = {
  date: new Date(),
  substances: {
    lei: 125,
    ket: 0,
    nit: 0,
    uro: 33,
    bil: 0,
    pro: 0.15,
    glu: 0,
    sg: 1.025,
    bld: 200,
    ph: 5.0
  }
};

// const description = "Тест от 17.09.2019";
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const [authPending, setAuthPending] = useState(true);
  const results = createSubstancesArray(response);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      setAuthPending(true);
      if (userAuth) {
        const token = await userAuth.getIdToken();
        console.log(token);
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
              photoURL: userAuth.photoURL
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
      setAuthPending(false);
      setAppLoaded(true);
    });
    return () => unsubscribeFromAuth();
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {appLoaded && !authPending ? (
            <>
              <Route
                exact
                path="/"
                render={() => (currentUser ? <Home /> : <Welcome />)}
              />
              <Route
                exact
                path="/home"
                render={() => (currentUser ? <Home /> : <Welcome />)}
              />
              <Route
                exact
                path="/signin"
                render={() => (currentUser ? <Home /> : <SignIn />)}
              />
              <Route
                exact
                path="/signup"
                render={() => (currentUser ? <Home /> : <SignUp />)}
              />
              <Route exact path="/camera" component={Camera} />
              <Route
                exact
                path="/result/:id"
                component={(e) => (
                  <Result id={e.match.params.id}/>
                )}
              />
            </>
          ) : (
            <Loader />
          )}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
