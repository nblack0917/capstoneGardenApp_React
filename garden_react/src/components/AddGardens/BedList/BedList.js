import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './BedList.css'

function BedList(props) {
    console.log("bedlist",props.createGarden)

    const adjustSize =(width, length) => {
        let newWidth;
        let newLength;

        const adjustSize =(size, multiplier) => {
            return size * multiplier
        }

        if (width < 10 && length < 10) {
            newWidth = adjustSize(width, 20);
            newLength = adjustSize(length, 20);
        } else if ( width < 30 && length < 30) {
            newWidth = adjustSize(width, 7);
            newLength = adjustSize(length, 7);
        } else if ( width < 60 && length < 60) {
            newWidth = adjustSize(width, 4);
            newLength = adjustSize(length, 4);
        } else if ( width < 110 && length < 110) {
            newWidth = adjustSize(width, 2);
            newLength = adjustSize(length, 2);
        } else {
            newWidth = width;
            newLength = length;
        }

        return [newWidth, newLength]
    }

    const setBedType = (planter) => {
        let bedType;
        if (planter === 'planter') {
            bedType = '50%';
        } else {
            bedType = 5;
        }
        return bedType;
    }


    return (
        <div className="bedContainer">
            <div className="addedBeds">
                <h3>Added Beds</h3>
                {/* <ul style={{ listStyle: 'none', margin: 0, padding: 0}}> */}
                    {props.createGarden.map((bed, index) => {
                        let adjustedSizes = adjustSize(bed.width, bed.length);
                        let bedType = setBedType(bed.planter)
                        let bedStyle = {
                            background: '#ddd3b8',
                            border: '3px solid #c77547',
                            borderRadius: bedType,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 10,
                            maxWidth: 250,
                            maxHeight: 250,
                            width: parseInt(adjustedSizes[0]),
                            height: parseInt(adjustedSizes[1]),
                        }
                        console.log(bedStyle)
                        return <div style={bedStyle}>{bed.width}" x {bed.length}"</div> 
                        {/* return <li style={{ listStyle: 'none'}}><div style={bedStyle}>{bed.width}{bed.length}</div> </li> */}
                        // return <li style={{ listStyle: 'none'}}>{bed.variety_name} <DeleteForeverIcon color="secondary" style={{ cursor: 'pointer' }} onClick={() => props.handleRemovePlantClick(index)} /></li>
                    })}
                {/* </ul> */}
                
            </div>
        </div>
    )
}


export default BedList
