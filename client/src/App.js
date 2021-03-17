import { useState } from 'react';
import { StoreProvider } from './store';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Employees } from './pages/Employees';

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

function App() {
  const [authState, setAuthState] = useState({
    isLoggedIn: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') || null,
  });

  const classes = useStyles();

  return (
    <StoreProvider value={{ ...authState, setAuthState }}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <main className={classes.main}>
          <Switch>
            <Route exact path="/">
              {authState.isLoggedIn ? (
                <Redirect to="/employees" />
              ) : (
                <Redirect to="/register" />
              )}
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/employees">
              {authState.isLoggedIn ? <Employees /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
