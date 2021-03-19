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
    
    const recheckGardens = (id) => {
        console.log("refreshing gardens", id)
        const userID = props.userInfo.id
        props.fetchUserGardensById(userID)
    }

    console.log("user info", props.userInfo)
    console.log("user gardens",props.userGardens)
    console.log("user Plants",props.userPlantList)
    // console.log("user name", props.userName)

    return (
        <div className="userHomeBody">
            <GardenCard
                userInfo={props.userInfo}
                userGardens={userGardens}
                handleGardenClick={e => handleGardenClick(e)}
                recheckGardens={(id) => recheckGardens(id)}
                resetGarden={() => props.resetGarden()}
            />
        </div>
    )
}

export default MyGardens
