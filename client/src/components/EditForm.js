import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';

import { EmployeeService } from '../services/EmployeeService';

export const useStyles = makeStyles(theme => ({
  container: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: 'flex',
    alignItems: 'center',
  },
  gridItem: {
    width: '100%',
    marginTop: theme.spacing(8),
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
  backdrop: {
    zIndex: theme.zIndex.modal,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
}));

export function EditForm({
  selectedData,
  isOpen,
  setIsOpen,
  handleUpdateEmployee,
}) {
  const classes = useStyles();
  const [formData, setFormData] = useState({ ...selectedData });

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    try {
      const response = await EmployeeService.editEmployee(
        selectedData.id,
        formData
      );
      if (response?.data?.message) {
        handleUpdateEmployee(formData);
      }
    } catch {}
  }

  const handleChanged = changedEvent => {
    const value = changedEvent.target.value;
    const name = changedEvent.target.id;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Backdrop open={isOpen} className={classes.backdrop}>
      <Container maxWidth="xs" className={classes.container}>
        <Grid container>
          <Grid item className={classes.gridItem}>
            <Paper className={classes.paper}>
              <div className={classes.heading}>
                <Typography variant="h6" className={classes.title}>
                  Edit Employee
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="first_name">FirstName</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="text"
                    value={formData.first_name}
                    id="first_name"
                    fullWidth
                    required
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="last_name">LastName</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="text"
                    value={formData.last_name}
                    id="last_name"
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
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Input
                    onChange={handleChanged}
                    type="gender"
                    value={formData.gender}
                    id="gender"
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
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Backdrop>
  );
}
