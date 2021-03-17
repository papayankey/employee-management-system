import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../store';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import { AuthenticationService } from '../services/AuthenticationService';

export const useStyles = makeStyles(theme => ({
  container: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: 'flex',
    alignItems: 'center',
  },
  gridItem: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
  info: {
    marginTop: theme.spacing(2),
    color: grey[700],
  },
}));

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const store = useStore();

  const classes = useStyles();

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    try {
      const response = await AuthenticationService.login(formData);

      if (response?.data?.token) {
        const { name, token } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', name);

        store.setAuthState({
          isLoggedIn: true,
          user: name,
        });

        history.push('/employees');
      }
    } catch {}
  }

  const handleChanged = changedEvent => {
    const value = changedEvent.target.value;
    const name = changedEvent.target.id;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <section>
        <Typography variant="h4" align="center">
          Log in
        </Typography>
        <Typography align="center" className={classes.info}>
          sign in to access dashboard
        </Typography>
        <Grid container>
          <Grid item className={classes.gridItem}>
            <Paper className={classes.paper}>
              <form method="post" onSubmit={handleSubmit}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="email"
                    value={formData.email}
                    id="email"
                    fullWidth
                    required
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="password"
                    value={formData.password}
                    id="password"
                    fullWidth
                    required
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className={classes.submitButton}
                >
                  Sign in
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          <Typography style={{ marginRight: 5 }}>
            Don't have an account?{' '}
          </Typography>
          <Typography
            style={{ color: '#3f51b5', cursor: 'pointer' }}
            onClick={() => {
              history.push('/register');
            }}
          >
            register
          </Typography>
        </div>
      </section>
    </Container>
  );
}
