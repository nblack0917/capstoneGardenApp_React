import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EnterDimensions from './EnterDimensions/EnterDimensions';
import EnterBeds from './EnterBeds/EnterBeds';
import ArrangeBeds from './ArrangeBeds/ArrangeBeds'
import './AddGardens.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

export default function AddGardens(props) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [zipcode, setZipcode] = useState(0);
  const [zipcodeError, setZipcodeError] = useState('');
  const [zone, setZone] = useState(0)
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0})

  // console.log(props.userInfo)

  function getSteps() {
    return ['Enter Garden Dimensions and Zip code', 'Add Garden Beds or Planters', 'Arrange Beds/Planters in Garden'];
  }

  const steps = getSteps();

  const handleParentWidthChange = (num) => {
    setWidth(num)
    // if(hasWidth) {
    //     // setHasWidth(!hasWidth)
    // }
}
const handleParentLengthChange = (num) => {
    setLength(num)
    // if(hasLength) {
    //     // setHasLength(!hasLength)
    // }
}
const handleParentZipcodeChange = (zip) => {
    setZipcode(zip)
    // if(hasZipcode) {
    //     // setHasZipcode(!hasZipcode)
    // }
}

const convertZiptoZone = async () => {
  let reducedZip;

  if (zipcode.length === 5) {
    if (zipcode.charAt(0) == "0") {
      reducedZip = zipcode.substring(1)
    } else {
      reducedZip = zipcode
    }
  } else if (zipcode === 0) {
    reducedZip = props.userInfo.zip;
    // console.log("hjadfs")
  } else  {
    setZone(0)
    return setZipcodeError('INVALID ZIPCODE. PLEASE ENTER NEW ZIPCODE')
  }
  const res = await fetch(`https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=${reducedZip}`);
  const data = await res.json();
  return setZone(parseInt(data.zone.charAt(0)));
}

const handleAddBed = (bed) => {
  console.log("bed passed to addgardens", bed)
  props.addNewBed(bed)
}

// const handleNewDimensions = (dim) => {
//   console.log(dim)
//   setDimensions(dim)
//   // console.log(dimensions)
// } 

  const handleNext = () => {
    // console.log(activeStep)
    let userZip;
    if (zipcode === 0) {
      userZip = props.userInfo.zip;
    } else {
      userZip = zipcode;
    };
    switch(activeStep) {
      case 0:
        const newDimensions = {
          width,
          length,
          zipcode: userZip,
          beds: [],
          };
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // console.log("new Dim", newDimensions)
        props.updateNewGardenDimensions(newDimensions)
      break;
      case 1:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
        case 2:
          console.log("finished")
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          break;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleRemoveBedClick = (index) => {
    props.removeBedFromList(index)
    console.log("bedlist", props.beds)
}
const handleUpdateItem = (index) => {
  props.updateCurrentItem(index)
  // console.log("current Index", index)
  console.log("current Item", props.createGarden.beds[index])
}

useEffect(() => {
  convertZiptoZone()
}, [])

  // console.log("addGarden", props.createGarden)

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <EnterDimensions 
          zone={zone}
          userInfo={props.userInfo}
          zipcodeError={zipcodeError}
          createGarden={props.createGarden}
          handleParentWidthChange={e => {handleParentWidthChange(e)}}
          handleParentLengthChange={e => {handleParentLengthChange(e)}}
          handleParentZipcodeChange={e => {handleParentZipcodeChange(e)}}
          convertZiptoZone={() => {convertZiptoZone()}}
          // handleNewDimensions={e => {handleNewDimensions(e)}}
        />;
      case 1:
        return <EnterBeds 
          zone={zone}
          createGarden={props.createGarden}
          handleRemoveBedClick={e => {handleRemoveBedClick(e)}}
          handleAddBed={e => {handleAddBed(e)}}
        />;
      case 2:
        return <ArrangeBeds 
          createGarden={props.createGarden}
          handleUpdateItem={e => {handleUpdateItem(e)}}
        />;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className="userHomeBody">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="navButtons">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" className={classes.buttonStyle} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
          
    </div>
  );
}
