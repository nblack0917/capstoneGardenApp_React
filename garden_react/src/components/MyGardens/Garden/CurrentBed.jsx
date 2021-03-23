import React, { useState, useEffect } from 'react'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import './Garden.css'

function CurrentBed(props) {

    const layout = props.gridLayout[props.indexNum]
    const gardenArray = props.gardenPlantArray[props.selectedBedKey]
    console.log("gardenArray", gardenArray)

    const FlowerIcon = () => {
        return <LocalFloristIcon color="secondary" style={{ marginLeft: 5}}/>
    }


    if (!props.selectedBedId) {
        return (
            <div style={{ textAlign: 'center'}}>
                <Typography variant="h5" style={{ fontWeight: 600, color: "#009344" }}>Select a garden bed from your garden</Typography>
            </div>
        )
    } else {
        return (
            <div className="currentBedContainer">
                <Typography variant="h5" style={{ fontWeight: 600, color: "#009344" }}>Current Bed # {props.selectedBedId ? props.selectedBedId : ''}</Typography>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                        {gardenArray.map((plant, index) => {
                            return <li className="plantChip" key={index}> <Chip
                            icon={<FlowerIcon />}
                            label={plant.variety_name}
                            // clickable
                            // color="primary"
                            onDelete={() => props.handleRemoveBedPlantClick(index)}
                            style={{ fontWeight: '600', color: "#009344", backgroundColor: '#DDD3B8' }}
                            /> </li>
                        })}
                    </ul>
            </div>
        )
    }
}

export default CurrentBed
