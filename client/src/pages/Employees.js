import { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

import { EmployeeService } from '../services/EmployeeService';
import { EditForm } from '../components/EditForm';
import { AddForm } from '../components/AddForm';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: 'first_name',
    numeric: false,
    disablePadding: true,
    label: 'First Name',
  },
  { id: 'last_name', numeric: false, disablePadding: true, label: 'Last Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all employees' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const {
    toastMessage,
    setToastMessage,
    toastAction,
    setToastAction,
    numSelected,
    handleDeleteEmployee,
    handleEditEmployee,
  } = props;
  const classes = useToolbarStyles();
  const theme = useTheme();

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      setToastMessage('');
      setToastAction('');
    }, 4000);
    return () => {
      clearTimeout(toastTimeout);
    };
  });

  return (
    <Toolbar
      className={`${classes.root} ${numSelected > 0 && classes.highlight}`}
      style={{
        backgroundColor:
          toastAction === 'add'
            ? lighten(green[500], 0.85)
            : toastAction === 'delete'
            ? lighten(theme.palette.secondary.light, 0.85)
            : toastAction === 'update'
            ? lighten(theme.palette.primary.light, 0.85)
            : null,
        color:
          toastAction === 'add'
            ? green[500]
            : toastAction === 'delete'
            ? theme.palette.secondary.main
            : toastAction === 'update'
            ? theme.palette.primary.main
            : null,
      }}
    >
      {toastMessage.length > 0 && <Typography>{toastMessage}</Typography>}
      {numSelected > 0 && (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      )}

      {numSelected === 0 && toastMessage.length === 0 && (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Employee List
        </Typography>
      )}

      {numSelected > 0 && (
        <>
          <IconButton aria-label="delete" onClick={handleDeleteEmployee}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={handleEditEmployee}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableRow: {
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  addButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '& svg': {
      fontSize: '2rem',
    },
  },
}));

export function Employees() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('gender');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [data, setData] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastAction, setToastAction] = useState('');
  const classes = useStyles();

  useEffect(() => {
    (async function getEmployees() {
      const response = await EmployeeService.getEmployees();
      setData(response.data);
      if (response?.data?.length > 0) {
        setRowsPerPage(10);
      }
    })();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.first_name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, first_name) => {
    const selectedIndex = selected.indexOf(first_name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, first_name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = first_name => selected.indexOf(first_name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleDeleteEmployee = async () => {
    const response = await EmployeeService.deleteEmployee(selectedID);
    if (response?.data?.message) {
      // deterministic remove data from ui
      setData(prev => prev.filter(item => item.id !== selectedID));
      setSelected([]);
      setToastMessage('employee was deleted');
      setToastAction('delete');
    }
  };

  const handleEditEmployee = async () => {
    const filteredData = data.filter(item => item.id === selectedID)[0];
    setSelectedData(filteredData);
    setEditIsOpen(true);
  };

  const handleUpdateEmployee = async formData => {
    const mappedData = data.map(item => {
      if (item.id === formData.id) {
        return { ...item, ...formData };
      }
      return item;
    });
    setData(mappedData);
    setEditIsOpen(false);
    setSelected([]);
    setToastMessage('employee was updated');
    setToastAction('update');
  };

  const handleAddEmployee = async newEmployee => {
    setData(prev => [...prev, newEmployee]);
    setAddIsOpen(false);
    setToastMessage('employee was added');
    setToastAction('add');
  };

  return (
    <>
      {editIsOpen && (
        <EditForm
          selectedData={selectedData}
          isOpen={editIsOpen}
          setIsOpen={setEditIsOpen}
          handleUpdateEmployee={handleUpdateEmployee}
        />
      )}
      {addIsOpen && (
        <AddForm
          isOpen={addIsOpen}
          setIsOpen={setAddIsOpen}
          handleAddEmployee={handleAddEmployee}
        />
      )}
      <Container maxWidth="lg" className={classes.container}>
        {data.length > 0 ? (
          <>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <EnhancedTableToolbar
                  toastMessage={toastMessage}
                  setToastMessage={setToastMessage}
                  toastAction={toastAction}
                  setToastAction={setToastAction}
                  numSelected={selected.length}
                  handleDeleteEmployee={handleDeleteEmployee}
                  handleEditEmployee={handleEditEmployee}
                />
                <TableContainer>
                  <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size="small"
                    aria-label="enhanced employees table"
                  >
                    <EnhancedTableHead
                      classes={classes}
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={data.length}
                    />
                    <TableBody>
                      {stableSort(data, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.first_name);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={event => {
                                handleClick(event, row.first_name);
                                setSelectedID(row.id);
                              }}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.first_name}
                              selected={isItemSelected}
                              className={classes.tableRow}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{ 'aria-labelledby': labelId }}
                                />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.first_name}
                              </TableCell>
                              <TableCell align="left">
                                {row.last_name}
                              </TableCell>
                              <TableCell align="left">{row.email}</TableCell>
                              <TableCell align="left">{row.gender}</TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 33 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
            <IconButton
              aria-label="add employee"
              className={classes.addButton}
              onClick={() => {
                setAddIsOpen(true);
                setSelected([]);
              }}
            >
              <AddIcon />
            </IconButton>
          </>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
}
