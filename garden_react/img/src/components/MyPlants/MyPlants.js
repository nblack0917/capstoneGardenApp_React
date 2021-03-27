import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import './MyPlants.css';

const useStyles = makeStyles((theme) => ({
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

const MyPlants = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const handleDelete = (index) => {
        props.removePlantFromUserList(index)
    }
    const handleAddPlantsClick = () => {
        history.push('/user_plants')
    }
    // console.log(props.userPlantList)
    if (props.userPlantList.length === 0) {
        return (
            <div className="userPlantsBody">
                <div className="addPlants">
                    <h2>Looks like you don't have any plants selected yet</h2>
                    <Button variant="contained" className={classes.buttonStyle} onClick={handleAddPlantsClick}>Add Some Plants</Button>
                </div>
            </div>
        )  
    } else {
        return (
            <div className="userPlantsBody">
                <div className="plantCardContainer">
                    {props.userPlantList.map((plant, index) => {
                        return <div key={index} className="plantCard">
                            <PlantCard 
                                plant={plant}
                                index={index}
                                loggedIn={props.loggedIn}
                                myPlants={true}
                                handleDelete={e => handleDelete(e)}
                            /> 
                        </div>
                    })}
                </div>
            </div>
        )       
    }
}

export default MyPlants
