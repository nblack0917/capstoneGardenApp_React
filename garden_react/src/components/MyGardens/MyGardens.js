import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import './MyGardens.css';

const MyGardens = (props) => {

    // const checkGardenPlants = () => {
    //     const userID = props.userInfo.id
    //     props.fetchUserGardenPlantsById(userID)
    // }

    // useEffect(() => {
    //     checkGardenPlants()
    // }, [])

    console.log("user info", props.userInfo)
    // console.log("user gardens",props.userGardens)
    // console.log("all gardens",props.userAllGardenPlants)
    // console.log("user Plants",props.userPlantList)
    console.log("user name", props.userName)

    return (
        <div className="userHomeBody">
            <Paper className="gardenListContainer">
                My Gardens
            </Paper>
        </div>
    )
}

export default MyGardens
