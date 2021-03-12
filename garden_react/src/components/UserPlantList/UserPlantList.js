import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function UserPlantList(props) {
    console.log(props.UserPlantList)
    return (
        <div className="listContainer">
            <div className="selectedPlants">
                <h3>Selected Plants</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                    {props.userPlantList.map((plant, index) => {
                        return <li style={{ listStyle: 'none'}}>{plant.variety_name} <DeleteForeverIcon color="secondary" style={{ cursor: 'pointer' }} onClick={() => props.handleRemovePlantClick(index)} /></li>
                    })}
                </ul>
                
            </div>
        </div>
    )
}

export default UserPlantList
