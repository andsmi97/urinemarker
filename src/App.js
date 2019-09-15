import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline'
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Result from "./Pages/Result";

// const styles = {
//   "@global": {
//     "*": {
//       margin: 0,
//       padding: 0
//     }
//   }
// };

const theme = createMuiTheme({
  palette: {
    primary: { main: "#66BB6A", light: "#338A3E", dark: "#338A3E" },
    secondary: { main: "#0288D1", light: "#5EB8FF", dark: "#005B9F" }
  }
});

const results = [
  {
    fullName: "Лейкоциты",
    shortName: "LEI",
    value: 125,
    metric: "Cells/L"
  },
  { fullName: "Нитраты", shortName: "NIT", value: "-", metric: "" }
];

const description = "Тест от 17.09.2019";
const App = () => {
  const [appLoaded, loadApp] = useState(true);
  // const currentUser = useState(null);
  return (
    <MuiThemeProvider theme={theme}>
      
      <BrowserRouter>
        <Switch>
          {appLoaded ? (
            <>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route
                exact
                path="/result"
                render={() => (
                  <Result results={results} description={description} />
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

export default withStyles(styles)(App);
