import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserPlantList from '../../UserPlantList/UserPlantList'
import GardenGrid from './GardenGrid'
import CurrentBed from './CurrentBed'
import './Garden.css'
import { Typography } from '@material-ui/core'

let tempGardenPlantArray = {}

const useStyles = makeStyles((theme) => ({
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    // fabProgress: {
    //   color: green[500],
    //   position: 'absolute',
    //   top: -6,
    //   left: -6,
    //   zIndex: 1,
    // },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }));

function Garden(props) {
    const [bedIdx, setBedIdx] = useState();
    const [selectedBed, setSelectedBed] = useState();
    const [selectedBedID, setSelectedBedId] = useState(0);
    const [selectedBedKey, setSelectedBedKey] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    // const [gardenPlantArray, setGardenPlantArray] = useState({})
    const history = useHistory();
    const classes = useStyles();

    let bedNumArr = []

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
      });

    // console.log("plants", props.userAllGardenPlants)
    // console.log("beds", props.allGardenBeds)
    // console.log(props.state)

    const currentGardenAllBeds = props.allGardenBeds.filter(bed => bed.garden_id===props.gardenId)
    // console.log("currentGardenAllBeds", currentGardenAllBeds)
    


    const handleRemovePlantClick = (index) => {
        props.removePlantFromUserList(index)
    }
    const handleBedClick = (key) => {
        // console.log("garden key", key)
        setBedIdx(key)
        const selectedBedByIndex = currentGardenAllBeds[key]
        // console.log("selectedBed", selectedBed)
        setSelectedBed(selectedBedByIndex)
        setSelectedBedId(selectedBedByIndex.bed_id)
        setSelectedBedKey("bed" + selectedBedByIndex.bed_id)
        console.log("tempbedarr", tempGardenPlantArray)
        console.log("state array", props.gardenPlantArray)
    }

    const handleAddPlantClick = (plant) => {
        // console.log("add plant click", plant)
        const newPlant = plant;
        const bedId = selectedBedKey
        newPlant.bed_id = selectedBedID;
        // // console.log(bedId)        
        // // console.log("newPlant", newPlant)
        // const targetObj = tempGardenPlantArray[bedId]
        // if(!targetObj.some(existingPlant => existingPlant.variety_name === plant.variety_name)) {
        //     targetObj.push(newPlant)
        // }
        // setGardenPlantArray(tempGardenPlantArray)
        // console.log("tempbedarr", tempGardenPlantArray)
        // props.updateGardenPlantArray(tempGardenPlantArray)
        props.addToGardenPlantArray(bedId, newPlant)
    }

    const handleRemoveBedPlantClick = (index) => {
        // const targetObj = gardenPlantArray[selectedBedKey]
        // targetObj.splice(index, 1)
        // setGardenPlantArray(targetObj)
        // props.updateGardenPlantArray(targetObj)
        const bedId = selectedBedKey
        props.removeFromGardenPlantArray(bedId, index)
        
    }   

    const createPlantArray = () => {
        let newArray = {};
        let numArr = []
        for (let bed of currentGardenAllBeds) {
            let id = "bed" + bed.bed_id
            newArray[id] = [];
            numArr.push(id)
        }
        tempGardenPlantArray = newArray
        bedNumArr = numArr;
        // setGardenPlantArray(tempGardenPlantArray)
        props.updateGardenPlantArray(tempGardenPlantArray)
        // console.log("tempGardenPlantArray", tempGardenPlantArray)
    }

    const sendPlantData = async() => {
        async function wait(ms) {
          return new Promise(resolve => {
            setTimeout(resolve, ms);
          });
        }
    
        const historyPush = () => {
            history.push('/my_gardens')
        }

        const newGardenPlants = props.gardenPlantArray
    
        let sendPlants = await axios.post('http://localhost:8080/beds/create/gardenPlants', newGardenPlants)
          .then((res) => {
            console.log("update userGardens", res.status)
          }).catch((error) => console.log(error))
    
        let firstWait = await wait(1000);
        
        let sendBeds = handleFinishLoading()

        let secondWait = await wait(1000);

        historyPush();
      }

      const handleStartLoading = () => {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          sendPlantData()
        }
      }

    const handleFinishLoading = () => {
        setSuccess(true);
        setLoading(false);
      }

    const UploadButton = () => {
        return (
            <div className={classes.wrapper}>
                <Button
                    variant="contained"
                    color="disabled"
                    className={buttonClassname}
                    disabled={loading}
                    onClick={handleStartLoading}
                    >
                    Save Plants
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                {/* <Fab
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleNext}
                >
                  {success ? <CheckIcon /> : <LocalFloristIcon />}
                </Fab>
                {loading && <CircularProgress size={68} className={classes.fabProgress} />} */}
            </div>
        )
    }

    useEffect(() => {
        createPlantArray()
    }, [])

    return (
        <div className="userHomeBody">
            <Typography variant="h4" style={{ color: 'green', fontWeight: 800 }} >Garden # {props.gardenId}</Typography><UploadButton />
            <div className="gardenGridConatiner">
                <UserPlantList userPlantList={props.userPlantList} handleRemovePlantClick={e => handleRemovePlantClick(e)} handleAddPlantClick={e => handleAddPlantClick(e)} myGardens={true} />
                <CurrentBed
                    gardneId={props.gardenId}
                    allGardenBeds={props.allGardenBeds}
                    gridLayout={props.gridLayout}
                    indexNum={props.selectedIndexNum}
                    selectedBed={selectedBed}
                    selectedBedId={selectedBedID}
                    selectedBedKey={selectedBedKey}
                    currentGardenAllBeds={currentGardenAllBeds}
                    gardenPlantArray={props.gardenPlantArray}
                    handleRemoveBedPlantClick={e => handleRemoveBedPlantClick(e)}
                />
                <GardenGrid handleBedClick={e => handleBedClick(e)}  userGardens={props.userGardens} gridLayout={props.gridLayout} gardenId={props.gardenId} indexNum={props.selectedIndexNum} allGardenBeds={props.allGardenBeds} />
            </div>
        </div>
    )
}

export default Garden
