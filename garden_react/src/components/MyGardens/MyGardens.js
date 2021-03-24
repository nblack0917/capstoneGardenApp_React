import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import GardenCard from './GardenCard/GardenCard'
import axios from 'axios';
import './MyGardens.css';
import { set } from 'lodash';

function MyGardens(props)  {
    const [gardenPlants, setGardenPlants] = useState([])
    const [gardenState, setGardenState] = useState(false)
    const userGardens = props.userGardens;


    const checkGardenPlants = () => {
        const userID = props.userInfo.id
        // console.log("usr id", userID)
        props.fetchUserGardenPlantsById(userID)
        setGardenState(!gardenState)
    }

    const handleGardenClick = (event) => {
        props.updateGardenId(event)
    }

    const updateLayout = (layout) => {
        // console.log("layout obj", layout)
        props.updateLayout(layout)
    }

    
    const recheckGardens = (id) => {
        // console.log("refreshing gardens", id)
        const userID = props.userInfo.id
        props.fetchUserGardensById(userID)
        console.log(props.userAllGardenPlants)
        setGardenState(!gardenState)
    }
    
    const updateSelectedIndex = (num) => {
        props.updateSelectedIndex(num)
    }
    
    // console.log("user info", props.userInfo)
    // console.log("user gardens",props.userGardens)
    // console.log("user Plants",props.userPlantList)
    // console.log("user name", props.userName)

    useEffect(() => {
        checkGardenPlants()
        // console.log("allGardenBeds", props.allGardenBeds)
    }, [])
    useEffect(() => {
        setGardenPlants(props.userAllGardenPlants)
        console.log("All garden plants", props.userAllGardenPlants)
        // console.log("allGardenBeds", props.allGardenBeds)
    }, [gardenState])

    return (
        <div className="userHomeBody">
            <GardenCard
                userInfo={props.userInfo}
                userGardens={userGardens}
                handleGardenClick={e => handleGardenClick(e)}
                recheckGardens={(id) => recheckGardens(id)}
                resetGarden={() => props.resetGarden()}
                allGardenBeds={props.allGardenBeds}
                updateLayout={e => updateLayout(e)}
                updateSelectedIndex={(num) => updateSelectedIndex(num)}
                state={props.state}
            />
        </div>
    )
}

export default MyGardens
