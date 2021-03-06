import React, { useState, useEffect } from 'react'
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
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [zipcode, setZipcode] = useState('');
    const classes = useStyles();

    

    const handleWidthChange = (e) => {
        const newChar = e.target.value
        setWidth(newChar)
        props.handleParentWidthChange(newChar)
    }
    const handleLengthChange = (e) => {
        const newChar = e.target.value
        setLength(newChar)
        props.handleParentLengthChange(newChar)
    }
    const handleZipcodeChange = (e) => {
        const newChar = e.target.value
        setZipcode(newChar)
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

    useEffect(() => {
        // setZipcode(props.userInfo.zip.toString())
        if (props.createGarden.width && props.createGarden.length) {
            setWidth(props.createGarden.width);
            setLength(props.createGarden.length)
        }
    }, [])

    return (
        <div className="addDimension">
            <div>
                <TextField
                    required
                    // error={hasZipcode}
                    id="zipcode"
                    value={zipcode}
                    onChange={handleZipcodeChange}
                    onBlur={props.convertZiptoZone}
                    name="zipcode"
                    label="Zip Code"
                    type="number"
                    variant="outlined"
                    className={classes.textField}/>
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
            </div>
            <div>
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
            {props.zone ? `This garden is in Zone ${props.zone}` : <span className="errorMessage">{props.zipcodeError}</span>}
            <div className="gardenBox" style={boxStyle}></div>
        </div>
    )
}

export default EnterBeds
