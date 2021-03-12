import React from 'react'
import UserPlantList from '../../UserPlantList/UserPlantList'

function Garden(props) {

    console.log(props.userAllGardenPlants)

    const handleRemovePlantClick = (index) => {
        props.removePlantFromUserList(index)
    }

    return (
        <div className="userHomeBody">
            Garden # {props.gardenId}
            <UserPlantList userPlantList={props.userPlantList} handleRemovePlantClick={e => handleRemovePlantClick(e)} />
        </div>
    )
}

export default Garden
