import { useStore } from '../store';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  iconButton: {
    fontSize: '1rem',
    borderRadius: 'unset',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: theme.spacing(2),
  },
}));

export function Navbar() {
  const store = useStore();

  const classes = useStyles();

  function getUserInitials() {
    return store.user
      .split(' ')
      .map(name => name[0].toUpperCase())
      .join('');
  }

  function handleSignOut() {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');

    store.setAuthState({
      isLoggedIn: false,
      user: null,
      token: null,
    });
  }

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">EMPLOYEE DBMS</Typography>
          <Box display="flex" alignItems="center">
            {store.isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className={classes.link}
                  onClick={handleSignOut}
                >
                  <IconButton color="inherit" className={classes.iconButton}>
                    Sign Out
                  </IconButton>
                </Link>
                <Avatar className={classes.avatar}>
                  <Badge>{getUserInitials()}</Badge>
                </Avatar>
              </>
            ) : (
              <>
                <Link to="/login" className={classes.link}>
                  <IconButton color="inherit" className={classes.iconButton}>
                    Login
                  </IconButton>
                </Link>
                <Link to="/register" className={classes.link}>
                  <IconButton color="inherit" className={classes.iconButton}>
                    Register
                  </IconButton>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
