import React, { useState } from 'react'
import {
    TextField,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BedList from '../BedList/BedList'
import './EnterBeds.css'

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
    formControl: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
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

function EnterBeds(props) {
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [isPlanter, setIsPlanter] = useState(true)
    const classes = useStyles();

    const handleWidthChange = (e) => {
        const newChar = e.target.value
        setWidth(newChar)
        // if(hasWidth) {
        //     // setHasWidth(!hasWidth)
        // }
        // props.handleParentWidthChange(newChar)
    }
    const handleLengthChange = (e) => {
        const newChar = e.target.value
        setLength(newChar)
        // if(hasLength) {
        //     // setHasLength(!hasLength)
        // }
        // props.handleParentLengthChange(newChar)
    }
    const handleDiameterChange = (e) => {
        const newChar = e.target.value
        setLength(newChar)
        setWidth(newChar)
    }

    const handlePlanterChange = (event) => {
        const type = event.target.value;
        if (type === true) {
            setIsPlanter(true);
        } else {
            setIsPlanter(false)
        }
      };

    const addBedToList = () => {
        let dimensions = {
            width,
            length,
            isPlanter,
        };
        // dimensions.push(width);
        // dimensions.push(length);
        // dimensions.push(planter)
        // console.log("bed dims", dimensions)
        props.handleAddBed(dimensions)
        setWidth(0);
        setLength(0);
        // setIsPlanter(true)
    }

    // console.log("AddBeds:", props.createGarden)

    if (isPlanter === true) {
        return (
            <div className="enterBedContainer">
                <div>
                    <BedList createGardenBeds={props.createGarden.beds} handleRemoveBedClick={props.handleRemoveBedClick} removeBed={true} />
                </div>
                <div className="addDimension">
                    <div style={{ marginTop: 35}}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="container-type">Type of Container</InputLabel>
                            <Select
                            labelId="container-type"
                            id="container-type"
                            value={isPlanter}
                            onChange={handlePlanterChange}
                            label="Type of Container"
                            >
                            <MenuItem value={true}>Planter(round)</MenuItem>
                            <MenuItem value={false}>Garden Bed(square)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            required
                            id="width"
                            value={width}
                            onChange={handleDiameterChange}
                            name="width"
                            label="Diameter (inches)"
                            type="number"
                            variant="outlined"
                            className={classes.textField}/>
                    </div>
                        <Button variant="contained" className={classes.buttonStyle} onClick={addBedToList}>Add</Button>
                </div>
            </div>
        )
    } else if (isPlanter === false) {
        return (
            <div className="enterBedContainer">
                <div>
                    <BedList createGardenBeds={props.createGarden.beds} removeBed={true} />
                </div>
                <div className="addDimension">
                    {/* <div className="heading">
                        <Typography variant="h4" gutterBottom>
                            Great! Now let’s add some garden beds and planters.
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Not all gardens are made the same. Some have one big garden bed, others have multiple, some are all planters, and everything inbetween.
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Enter the dimensions and select shape and style. Click “Next” when done adding beds and planters.  
                        </Typography>
                    </div> */}
                    <div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="container-type">Type of Container</InputLabel>
                            <Select
                            labelId="container-type"
                            id="container-type"
                            value={isPlanter}
                            onChange={handlePlanterChange}
                            label="Type of Container"
                            >
                            <MenuItem value={true}>Planter(round)</MenuItem>
                            <MenuItem value={false}>Garden Bed(square)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            required
                            // error={hasWidth}
                            id="width"
                            value={width}
                            onChange={handleWidthChange}
                            // onBlur={updateDimensions}
                            name="width"
                            label="Width (inches)"
                            type="number"
                            variant="outlined"
                            className={classes.textField}/>
                        <TextField
                            required
                            // error={hasWidth}
                            id="length"
                            value={length}
                            onChange={handleLengthChange}
                            // onBlur={updateDimensions}
                            name="length"
                            label="Length (inches)"
                            type="number"
                            variant="outlined"
                            className={classes.textField}/>
                    </div>
                        <Button variant="contained" className={classes.buttonStyle} onClick={addBedToList}>Add</Button>
                </div>
            </div>
        )
    }
}

export default EnterBeds
