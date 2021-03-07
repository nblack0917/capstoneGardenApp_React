import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PlantCard from '../PlantCard/PlantCard'
import Box from '@material-ui/core/Box';
import './Plants.css'
import leafLogo from './Leaf_lg.png'


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
  const legumeList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Legume")
  const greensList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Leafy Greens")
  const herbList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Herb")
  const flowerList = props.allPlantsByType.filter(plant => plant.plantGroupName==="Flower")

  useEffect(() => {
    props.getAllPlantsByType()
  }, [])

  return (
    <div className="plantsBody">
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
                    <Tab label="Legumes" {...a11yProps(2)} />
                    <Tab label="Leafy Greens" {...a11yProps(3)} />
                    <Tab label="Herbs" {...a11yProps(4)} />
                    <Tab label="Flowers" {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div className="plantCardContainer">
                        {fruitList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="plantCardContainer">
                        {veggieList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="plantCardContainer">
                        {legumeList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="plantCardContainer">
                        {greensList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className="plantCardContainer">
                        {herbList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <div className="plantCardContainer">
                        {flowerList.map((plant, index) => {
                            return <div className="plantCard"><PlantCard plant={plant} index={index} loggedIn={props.loggedIn}  /></div>
                            })}
                    </div>
                </TabPanel>
        </div>
    </div>
  );
}

