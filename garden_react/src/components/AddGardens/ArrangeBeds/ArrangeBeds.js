import React from 'react'
import BedGrid from './BedGrid'

function ArrangeBeds(props) {
    const handleUpdateItem = (index) => {
        props.handleUpdateItem(index)
    }
    console.log("ArrangeBeds", props.createGarden)

    return (
        <div className="userHomeBody">
            Arrange the beds in the garden. I don't know how. Just do it!!!!!
            <BedGrid createGarden={props.createGarden} handleUpdateItem={e => handleUpdateItem(e)} />
        </div>
    )
}

export default ArrangeBeds
