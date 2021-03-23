import React from 'react'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import './UserPlantList.css'

function UserPlantList(props) {
    // console.log(props.UserPlantList)

    const FlowerIcon = () => {
        return <LocalFloristIcon color="secondary" style={{ marginLeft: 5}}/>
    }

    if (props.myGardens === true) {
        return (
            <div className="listContainer">
                <div className="selectedPlants">
                    <Typography variant="h5" style={{ color: "#009344" }}>Selected Plants</Typography>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                        {props.userPlantList.map((plant, index) => {
                            return <li className="plantChip">
                                <Chip
                                    icon={<FlowerIcon />}
                                    label={plant.variety_name}
                                    // clickable
                                    deleteIcon={<CheckCircleIcon style={{ color: "green"}}/>}
                                    onDelete={() => props.handleAddPlantClick(plant)}
                                    style={{ fontWeight: '600', color: "#009344", backgroundColor: '#DDD3B8' }}
                                />
                            </li>
                        })}
                    </ul>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div className="listContainer">
                <div className="selectedPlants">
                    <Typography variant="h5" style={{ color: "#009344" }}>Selected Plants</Typography>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                        {props.userPlantList.map((plant, index) => {
                            return <li className="plantChip"> <Chip
                            icon={<FlowerIcon />}
                            label={plant.variety_name}
                            // clickable
                            // color="primary"
                            onDelete={() => props.handleRemovePlantClick(index)}
                            style={{ fontWeight: '600', color: "#009344", backgroundColor: '#DDD3B8' }}
                            /> </li>
                        })}
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default UserPlantList
