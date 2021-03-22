import React from 'react'
import UserPlantList from '../../UserPlantList/UserPlantList'
import GardenGrid from './GardenGrid'
import CurrentBed from './CurrentBed'
import './Garden.css'

function Garden(props) {

    console.log("plants", props.userAllGardenPlants)
    console.log("beds", props.allGardenBeds)
    console.log(props.state)

    const handleRemovePlantClick = (index) => {
        props.removePlantFromUserList(index)
    }

    return (
        <div className="userHomeBody">
            Garden # {props.gardenId}
            <div className="gardenGridConatiner">
                <UserPlantList userPlantList={props.userPlantList} handleRemovePlantClick={e => handleRemovePlantClick(e)} />
                <CurrentBed />
                <GardenGrid userGardens={props.userGardens} gridLayout={props.gridLayout} gardenId={props.gardenId} indexNum={props.selectedIndexNum} allGardenBeds={props.allGardenBeds} />
            </div>
        </div>
    )
}

export default Garden
