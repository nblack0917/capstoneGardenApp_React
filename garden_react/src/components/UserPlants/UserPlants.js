import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import './UserPlants.css'
import leafLogo from './Leaf_lg.png'
import { addPlantToUserList } from '../../redux/actions';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f7f5ed",
    width: '80%',
    margin: '20px auto'
  },
  paper: {
      background: "#f7f5ed",
  }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const stateCheck = () => {
        console.log(props.allPlantsByType)
    }
    
    const fruitList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Fruit")
    const veggieList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Vegetable")
    const herbList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Herb")
    const flowerList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Flower")
    
    const addPlant = index => {
        let selectedPlant = fruitList[index];
        console.log(selectedPlant)
        addPlantToUserList(selectedPlant)
    }

    useEffect(() => {
        props.getAllPlantsByType()
    }, [])

    useEffect(() => {
        console.log(props.userPlantList)
    })

    return (
        <div className="plantsBody">
            <div className="listContainer">
                <div className="selectedPlants">
                    <h3>Hello</h3>
                    <ul>
                        {props.userPlantList.map(plant => {
                            return <li>{plant.plantParent_name}</li>
                        })}
                    </ul>
                    
                </div>
            </div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    centered
                    aria-label="full width tabs example"
                    >
                    <Tab label="Fruits" {...a11yProps(0)} />
                    <Tab label="Vegetables" {...a11yProps(1)} />
                    <Tab label="Herbs" {...a11yProps(2)} />
                    <Tab label="Flowers" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <ul style={{listStyle: 'none'}}>
                        {fruitList.map((plant, index) => {
                            return <li key={index}><img src={leafLogo} alt="Logo" style={{height: 20}} /> {plant.plantGroupName} - {plant.plantParent_name} <ControlPointIcon color="primary" style={{cursor: "pointer"}} onClick={() => addPlant(index)} /></li>
                            })}
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul style={{listStyle: 'none'}}>
                            {veggieList.map(plant => {
                            return <li><img src={leafLogo} alt="Logo" style={{height: 20}} /> {plant.plantGroupName} - {plant.plantParent_name}</li>
                            })}
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul style={{listStyle: 'none'}}>
                            {herbList.map(plant => {
                                return <li><img src={leafLogo} alt="Logo" style={{height: 20}} /> {plant.plantGroupName} - {plant.plantParent_name}</li>
                            })}
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ul style={{listStyle: 'none'}}>
                            {flowerList.map(plant => {
                                return <li><img src={leafLogo} alt="Logo" style={{height: 20}} /> {plant.plantGroupName} - {plant.plantParent_name}</li>
                            })}
                    </ul>
                </TabPanel>
            </div>
        </div>
    );
}

