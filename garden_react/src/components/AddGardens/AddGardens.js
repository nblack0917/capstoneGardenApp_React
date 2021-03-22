import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import Typography from '@material-ui/core/Typography';
import EnterDimensions from './EnterDimensions/EnterDimensions';
import EnterBeds from './EnterBeds/EnterBeds';
import ArrangeBeds from './ArrangeBeds/ArrangeBeds'
import axios from 'axios';
import './AddGardens.css'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



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
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function AddGardens(props) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [zipcode, setZipcode] = useState(0);
  const [zipcodeError, setZipcodeError] = useState('');
  const [zone, setZone] = useState(0)
  const [activeStep, setActiveStep] = useState(0);
  const [currentLayout, setCurrentLayout] = useState([]);
  const [lastBedId, setLastBedId] = useState(0)
  const [lastGardenId, setLastGardenId] = useState(0)
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0})

  // console.log(props.userInfo)

  function getSteps() {
    return ['Enter Garden Dimensions and Zip code', 'Add Garden Beds or Planters', 'Arrange Beds/Planters in Garden', 'Submit'];
  }

  const steps = getSteps();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

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

const recheckGardens = (id) => {
  // console.log("refreshing gardens", id)
  const userID = props.userInfo.id
  props.fetchUserGardensById(userID)
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

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

const handleFinishLoading = () => {
  setSuccess(true);
  setLoading(false);
}
// const handleNewDimensions = (dim) => {
//   console.log(dim)
//   setDimensions(dim)
//   // console.log(dimensions)
// } 

  const getLastBedId = async () => {
    let bedId = 0;

    axios.get('http://localhost:8080/last_bed')
      .then((res) => {
        // console.log("get data", res.data)
        bedId = parseInt(res.data)
        setLastBedId(bedId)
      }).catch((error) => console.log(error))
  }
  const getLastGardenId = async () => {
    let gardenId = 0;

    axios.get('http://localhost:8080/last_garden')
      .then((res) => {
        // console.log("get data", res.data)
        gardenId = parseInt(res.data)
        setLastGardenId(gardenId)
      }).catch((error) => console.log(error))
  }

  const sendData = async() => {
    async function wait(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }

    const newGarden = {
      id: props.userInfo.id,
      zone: zone,
      width: props.createGarden.width,
      length: props.createGarden.length
    }
    const gardenInfo = props.createGarden;
    const layoutInfo = {lastBedId, lastGardenId, gardenInfo}
    const bedInfo = {lastGardenId, gardenInfo}
    console.log(layoutInfo)

    let sendGarden = await axios.post('http://localhost:8080/users/gardens/create', newGarden)
      .then((res) => {
        console.log("update userGardens", res.status)
      }).catch((error) => console.log(error))

    let firstWait = await wait(1000);

    let sendBeds = await axios.post('http://localhost:8080/users/gardens/create/beds', bedInfo)
    .then((res) => {
      console.log("update gardenBeds", res.status)
    }).catch((error) => console.log(error))

    let secondWait = await wait(1000)

    let sendLayout = await axios.post('http://localhost:8080/users/gardens/create/layout', layoutInfo)
    .then((res) => {
      console.log("update gardenLayout", res.status)
    }).catch((error) => console.log(error))
    console.log("Data Sent!")
    handleClick()
    return handleFinishLoading()
  }


  //Separate POST requests // No longer in use
  
  // const updateUserGardenDB = () => {
  //   const newGarden = {
  //     id: props.userInfo.id,
  //     zone: zone,
  //     width: props.createGarden.width,
  //     length: props.createGarden.length
  //   }
  //   // console.log("newGarden obj", newGarden)
  //   axios.post('http://localhost:8080/users/gardens/create', newGarden)
  //   // axios({
  //   //   method: 'post',
  //   //   url: 'http://localhost:8080/users/gardens/create',
  //   //   data: newGarden
  //   // })
  //     .then((res) => {
  //       // console.log("update userGardens",res.data)
  //     }).catch((error) => console.log(error))
  // }

  // const updateUserGardenBedsDB = () => {
  //   const gardenInfo = props.createGarden;
  //   const layoutInfo = {lastGardenId, gardenInfo}
  //   axios.post('http://localhost:8080/users/gardens/create/beds', layoutInfo)
  //   .then((res) => {
  //     console.log("update gardenBeds", res.data)
  //   }).catch((error) => console.log(error))
  // }
  
  // const updateUserGardenLayoutDB = () => {
  //   const gardenInfo = props.createGarden;
  //   const layoutInfo = {lastBedId, gardenInfo}
  //   console.log("layoutInfo sent", layoutInfo)
  //   axios.post('http://localhost:8080/users/gardens/create/layout', layoutInfo)
  //   .then((res) => {
  //     console.log("update gardenLayout",res.data)
  //   }).catch((error) => console.log(error))
  // }

  const handleStartLoading = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
  }

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
        updateNextGardenId();
        console.log("lastBedId", lastBedId)
        props.updateNewGardenDimensions(newDimensions)
      break;
      case 1:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      break;
      case 2:
          // console.log("finished")
          console.log("created garden", props.createGarden)
          // Promise.all([updateUserGardenDB(), updateUserGardenBedsDB(), updateUserGardenLayoutDB()])
          // // Promise.all([updateUserGardenDB(), updateUserGardenBedsDB()])
          //   .then(function (results) {
          //     console.log(results)
          // });   
          sendData();
          handleStartLoading()
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          recheckGardens(props.userInfo.id)
      break;
      case 3:
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            history.push('/home')
      break;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    props.resetGarden()
    setActiveStep(0);
  };

  const handleRemoveBedClick = (index) => {
    props.removeBedFromList(index)
    console.log("bedlist", props.beds)
}
const handleUpdateItem = (index) => {
  props.updateCurrentItem(index)
  // console.log("current Index", index)
  // console.log("current Item", props.createGarden.beds[index])
}
const handleCurrentLayout = (layout) => {
  setCurrentLayout(layout)
  props.updateCurrentLayout(layout)
  // console.log("current layout", layout)
}

const updateNextGardenId = () => {
  // const lastIndex = props.userGardens.length - 1;
  let lastGarden = lastGardenId;
  props.updateNextGardenId(lastGarden);
}

useEffect(() => {
  convertZiptoZone();
  getLastBedId();
  getLastGardenId();
  
  console.log("createGarden start", props.createGarden)
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
          handleCurrentLayout={e => {handleCurrentLayout(e)}}
          
        />;
        case 3:
            return (
              <div>Saving your garden.</div>
            )
      default:
        return 'Unknown stepIndex';
    }
  }

  const LastButton = () => {
    if (activeStep === steps.length - 1) {
      return (
        <div className={classes.wrapper}>
                <Fab
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleNext}
                >
                  {success ? <CheckIcon /> : <LocalFloristIcon />}
                </Fab>
                {loading && <CircularProgress size={68} className={classes.fabProgress} />}
              </div>
      )
    } else {
      return (
        <Button variant="contained" className={classes.buttonStyle} onClick={handleNext}>
          Next
        </Button>
      )
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
              <LastButton />
              {/* <Button variant="contained" className={classes.buttonStyle} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your Garden has be saved!
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
          
    </div>
  );
}
