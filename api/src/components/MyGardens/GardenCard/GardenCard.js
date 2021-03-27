import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
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
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

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
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'garden_id', numeric: true, disablePadding: true, label: 'Garden ID #' },
  { id: 'zone_num', numeric: true, disablePadding: false, label: 'Hardiness Zone' },
  { id: 'width', numeric: true, disablePadding: false, label: 'Width (inches)' },
  { id: 'length', numeric: true, disablePadding: false, label: 'Length (inches)' },
//   { id: 'bed_num', numeric: true, disablePadding: false, label: '# of beds/planters' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

//   console.log("gardens",props.userGardens)

  return (
    <TableHead>
      <TableRow>
                {headCells.map((headCell) => (
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
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

let selectedIndexes = [];

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  
  
  const handleDelete = () => {
      // console.log(selectedIndexes)
      selectedIndexes.forEach(id => {
        fetch(`http://localhost:8080/users/gardens/remove/${id}`, { method: 'DELETE' })
        .then(console.log({ status: 'Delete successful' }))
        // .then(setUpdate(update+1))
      });
      props.recheckGardens(props.userInfo.id);   
  }



  // console.log("Toolbar user", props.userInfo)
  // console.log("Toolbar gardens", props.userGardens)

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          My Gardens
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon onClick={handleDelete}/>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '900px',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
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
  buttonStyle: {
    backgroundColor: "#009344",
    color: "white",
    fontWeight: 300,
    marginRight: 10,
    fontSize: 18,
    borderRadius: 20,
    "&:hover": {
        backgroundColor: "#009344",
        opacity: "0.7"
    }
},
}));

export default function GardenCard(props) {
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [selectedIndexNum, setSelectedIndexNum] = useState(0)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [gardens, setGardens] = useState([]);
  const [layoutList, setLayoutList] = useState([])
  const rows = props.userGardens;

  // console.log("state", props.state)
  // console.log("User Gardens", gardens)
  let layoutRows = rows.map(row => row.garden_id)
  let userLayouts = []
  for (let row of layoutRows) {
    let layout = props.allGardenBeds.filter(beds => beds.garden_id===row);
    userLayouts.push(layout);
  }
  // console.log("layoutRows", layoutRows)
  // console.log("userLayotus", userLayouts)
  // const currentGardenBeds = props.allGardenBeds.filter(bed => bed.garden_id === props.gardenId)
  // console.log("current Beds", currentGardenBeds)

  let importedLayout = [];
  let otherItem = []
  
  const createNewLayout = () => {
    let lastItem = {};
    let index = 0;
    let lastI = 0;
    for (let item of userLayouts) {
      let gardenItem = [];
      // console.log("gardenItem start", gardenItem)
      // console.log("item", item, item.length, index)
      if (item.length !== 0) {
        // console.log("item", item)
        for(let bed of item) {
          // console.log("bed", bed)
          let planter = false;
          if (bed.isPlanter === 0) {
            planter = false;
          } else {
            planter = true;
          };
          let newW = bed.w/3;
          let newH = bed.h/3;
          let iKey = parseInt(bed.i)
          let newItem = {i: iKey.toString(), x: bed.x, y: bed.y, w: newW, h: newH, isDraggable: false, isResizable: false, isPlanter: planter, garden_width: bed.garden_width}
          lastI = iKey
          // console.log("gardenItem before add", gardenItem)
          gardenItem.push(newItem)
          // console.log("gardenItem add", gardenItem)
        }
        let lastItemSizes = convertLastItem(index)
        let finalIKey = lastI + 1
        lastItem = {i: finalIKey.toString(), x: lastItemSizes.lastColumn, y: 0, w: 1, h: lastItemSizes.hiddenBoxHeight, static: true, isPlanter: false};
      }
      index = index + 1
      gardenItem.push(lastItem)
      importedLayout.push(gardenItem)
    }
    // console.log("new Layout", importedLayout)
    setLayoutList(importedLayout)
    props.updateLayout(importedLayout)
  }

  const convertLastItem = (index) => {
    // console.log("convert index", index)

    let returnedSizes ={}
    //function to round garden dimensions to nearest factor of 12
    const roundDozens = (num) => {
      let results = Math.round(num/12)*12;
      return results
    }

    let currentLayout = userLayouts[index]

    // variables and swith to set size and scale of grid and keep items square and round
    let gardenWidth = roundDozens(parseInt(currentLayout[0].garden_width))
    let gardenHeight = roundDozens(parseInt(currentLayout[0].garden_length))
    // const findGardenContainerHeight = () => {
    //   let widthScale = 650 / gardenWidth;
    //   return gardenHeight * widthScale + 30;
    // }
    // let gardenContainerHeight = findGardenContainerHeight()
    let gridRowHeight = 18;
    let numOfCols = 24;
    let lastColumn = gardenWidth+1
    let hiddenBoxHeight = 53
    switch(gardenWidth) {
      case 12:
        gridRowHeight = 130;
        numOfCols = 5;
        break;
      case 24:
        gridRowHeight = 65;
        numOfCols = 9;
        break;
      case 36:
        gridRowHeight = 48;
        numOfCols = 12;
        break;
      case 48:
        gridRowHeight = 31;
        numOfCols = 17;
        break;
      case 60:
        gridRowHeight = 22;
        numOfCols = 21;
        break;
      case 72:
        gridRowHeight = 17;
        numOfCols = 25;
        break;
      case 84:
        gridRowHeight = 14;
        numOfCols = 29;
        break;
      case 96:
        gridRowHeight = 10;
        numOfCols = 33;
        break;
      case 108:
        gridRowHeight = 8;
        numOfCols = 37;
        break;
      case 120:
        gridRowHeight = 6;
        numOfCols = 41;
        break;
      case 132:
        gridRowHeight = 5;
        numOfCols = 45;
        break;
      case 144:
        gridRowHeight = 4;
        numOfCols = 49;
        break;
      case 156:
        gridRowHeight = 3;
        numOfCols = 53;
        break;
      case 168:
        gridRowHeight = 2;
        numOfCols = 57;
        break;
      case 180:
        gridRowHeight = 1;
        numOfCols = 61;
        break;
      default:
        console.log("Error, invalid size")
    }
    switch(gardenHeight) {
      case 12:
        hiddenBoxHeight = 3.825
        break;
      case 24:
        hiddenBoxHeight = 7.55
        break;
      case 36:
        hiddenBoxHeight = 11.125
        break;
      case 48:
        hiddenBoxHeight = 16
        break;
      case 60:
        hiddenBoxHeight = 20
        break;
      case 72:
        hiddenBoxHeight = 23
        break;
      case 84:
        hiddenBoxHeight = 28
        break;
      case 96:
        hiddenBoxHeight = 32
        break;
      case 108:
        hiddenBoxHeight = 37
        break;
      case 120:
        hiddenBoxHeight = 40
        break;
      case 132:
        hiddenBoxHeight = 45
        break;
      case 144:
        hiddenBoxHeight = 48;
        break;
      case 156:
        hiddenBoxHeight = 52
        break;
      case 168:
        hiddenBoxHeight = 56;
        break;
      case 180:
        hiddenBoxHeight = 62
        break;
      default:
        console.log("Error, invalid size")
    }
    returnedSizes = { lastColumn, hiddenBoxHeight}
    return returnedSizes

}


const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelectedIndexNum(selectedIndex)
    setSelected(newSelected);
    selectedIndexes = newSelected;
    // console.log("selected",newSelected)
  };

  const handleGardenClick = (id, index) => {
      // console.log("hllo", id);
      // console.log("selected Index", index)
      props.updateSelectedIndex(index)
      props.handleGardenClick(id)
      history.push('/my_gardens/garden')
  }   


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddGarden = () => {
      props.resetGarden()
      history.push('/add_garden')
  }

  const handleDeleteClick = () => {
    const id = props.userInfo.id
    props.recheckGardens(id);
    // const update = setGardens(props.userGardens);
    // setTimeout(update, 2000)
    let removeSelected = gardens;
    for (let item of selected) {
      let idx = removeSelected.indexOf(item);
      removeSelected.splice(idx, 1)
    }
    setGardens(removeSelected);
    setSelected([]);
  }

  const handleUpdateLayouts = (layout) => {
    props.updateLayout(layout)
  }

useEffect(() => {
  setGardens(rows)
  handleUpdateLayouts(userLayouts)
  createNewLayout();
}, [])

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
            numSelected={selected.length}
            userInfo={props.userInfo}
            userGardens={rows}
            recheckGardens={handleDeleteClick}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}             
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(gardens, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.garden_id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={() => handleGardenClick(row.garden_id, index)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.garden_id}
                      selected={isItemSelected}
                    >
                    
                      <TableCell component="th" id={labelId} scope="row" padding="none" align="right">
                        {row.garden_id}
                      </TableCell>
                      <TableCell align="right">Zone # {row.zone_id}</TableCell>
                      <TableCell align="right">{row.garden_width}</TableCell>
                      <TableCell align="right">{row.garden_length}</TableCell>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, row.garden_id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
        <Button variant="contained" className={classes.buttonStyle} onClick={handleAddGarden}>Add  garden</Button>
    </div>
  );
}
