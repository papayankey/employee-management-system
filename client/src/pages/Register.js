import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { lighten, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

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
  success: {
    backgroundColor: lighten(green[500], 0.85),
    color: green[500],
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  placeholder: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
}));

export function Register() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      setSuccess(false);
    }, 4000);
    return () => {
      clearTimeout(toastTimeout);
    };
  });

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    try {
      const response = await AuthenticationService.register(formData);
      if (response?.data?.message) {
        setSuccess(true);
        setFormData({ name: '', email: '', password: '' });
      }
    } catch {}
  }

  const handleChanged = changedEvent => {
    const value = changedEvent.target.value;
    const name = changedEvent.target.id;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <section>
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <Typography align="center" className={classes.info}>
          create account to access the dashboard
        </Typography>
        {success && (
          <div className={classes.success}>
            <Typography>registration complete</Typography>
          </div>
        )}
        <Grid container>
          <Grid item className={classes.gridItem}>
            <Paper className={classes.paper}>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="text"
                    value={formData.name}
                    id="name"
                    fullWidth
                    required
                  />
                </FormControl>
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
                  Sign up
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          <Typography style={{ marginRight: 5 }}>
            Already have an account?{' '}
          </Typography>
          <Typography
            style={{ color: '#3f51b5', cursor: 'pointer' }}
            onClick={() => {
              history.push('/login');
            }}
          >
            Sign in
          </Typography>
        </div>
      </section>
    </Container>
  );
}
