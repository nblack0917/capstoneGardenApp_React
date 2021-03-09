import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import GardenCard from './GardenCard/GardenCard'
import './MyGardens.css';

function MyGardens(props)  {
    const userGardens = props.userGardens;


    const checkGardenPlants = () => {
        const userID = props.userInfo.id
        console.log("usr id", userID)
        props.fetchUserGardenPlantsById(userID)
    }

    const handleGardenClick = (event) => {
        props.updateGardenId(event)
    }

    useEffect(() => {
        checkGardenPlants()
    }, [])
    
    const checkPlants = () => {
        console.log("all gardens",props.userAllGardenPlants)
    }

    console.log("user info", props.userInfo)
    console.log("user gardens",props.userGardens)
    console.log("user Plants",props.userPlantList)
    // console.log("user name", props.userName)

    return (
        <div className="userHomeBody">
            <GardenCard userGardens={userGardens} handleGardenClick={e => handleGardenClick(e)} />
        </div>
    )
}

export default MyGardens
