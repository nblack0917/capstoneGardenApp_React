import React, { useState } from 'react'
import {
    TextField,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BackgroundPattern from './Leaf_pattern_1.png'
import './EnterDimensions.css'

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
    textField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

function EnterBeds(props) {
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);
    const [zipcode, setZipcode] = useState(0);
    const classes = useStyles();
    // const [hasWidth, setHasWidth] = useState(false)
    // const [hasLength, setHasLength] = useState(false)
    // const [hasZipcode, setHasZipcode] = useState(false)

    console.log("enterDimensions:", props.createGarden)

    const handleWidthChange = (e) => {
        const newChar = e.target.value
        setWidth(newChar)
        // if(hasWidth) {
        //     // setHasWidth(!hasWidth)
        // }
        props.handleParentWidthChange(newChar)
    }
    const handleLengthChange = (e) => {
        const newChar = e.target.value
        setLength(newChar)
        // if(hasLength) {
        //     // setHasLength(!hasLength)
        // }
        props.handleParentLengthChange(newChar)
    }
    const handleZipcodeChange = (e) => {
        const newChar = e.target.value
        setZipcode(newChar)
        // if(hasZipcode) {
        //     // setHasZipcode(!hasZipcode)
        // }
        props.handleParentZipcodeChange(newChar)
    }

    const boxStyle = {
        backgroundImage: `url(${BackgroundPattern})`,
        backgroundRepeat: 'repeat',
        border: '6px dashed #c77547',
        borderRadius: 5,
        marginBottom: 10,
        maxWidth: 450,
        maxHeight: 450,
        width: parseInt(width),
        height: parseInt(length),
    }

    // const checkLogin = () => {
    //     if(!width || !length) {
    //         if(!width) {
    //             setHasWidth(!hasWidth)
    //         }
    //         if(!length) {
    //             setHasLength(!hasLength)
    //         if(!zipcode) {
    //             setHasZipcode(!hasZipcode)
    //         }
    //     }else if(width && length && zipcode) {  
    //         // props.updateUserName(email);
    //         // props.fetchUserbyUserName(email)
    //     }
    // }

    // const updateDimensions = () => {
    //     const newDimensions = {
    //         width: width,
    //         height: length,
    //     }
    //     // console.log(newDimensions)
    //     props.handleNewDimensions(newDimensions)
    // }

    return (
        <div className="addDimension">
            <div className="heading">
                <Typography variant="h4" gutterBottom>
                    Let's add a garden!
                </Typography>
                <Typography variant="h5" gutterBottom>
                What are the total dimensions of your garden? Keep in mind that anywhere can be a garden. It can be your yard, patio, balcony, or living room. We’ll add garden beds and planters in the next step. Also add your zipcode so we can find the right plants for where you live.
                </Typography>
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
                    label="Width in inches"
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
                    label="Length in inches"
                    type="number"
                    variant="outlined"
                    className={classes.textField}/>
            </div>
            <div>
                <TextField
                    required
                    // error={hasZipcode}
                    id="zipcode"
                    value={zipcode}
                    onChange={handleZipcodeChange}
                    name="zipcode"
                    label="5 digit Zip Code"
                    type="number"
                    variant="outlined"
                    className={classes.textField}/>
            </div>
            <div className="gardenBox" style={boxStyle}></div>
        </div>
    )
}

export default EnterBeds
