import React from 'react'
import BedGrid from './BedGrid'

function ArrangeBeds(props) {
    const handleUpdateItem = (index) => {
        props.handleUpdateItem(index)
    }
    const handleCurrentLayout = (layout) => {
        props.handleCurrentLayout(layout)
    }
    // console.log("ArrangeBeds", props.createGarden)

    return (
        <div className="userHomeBody">
            <BedGrid createGarden={props.createGarden} handleUpdateItem={e => handleUpdateItem(e)} handleCurrentLayout={e => {handleCurrentLayout(e)}}/>
        </div>
    )
}

export default ArrangeBeds
