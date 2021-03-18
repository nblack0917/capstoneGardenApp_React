import React from 'react'
import GridList from '@material-ui/core/GridList';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import GridListTile from '@material-ui/core/GridListTile';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Badge from '@material-ui/core/Badge';
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'
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
        } else if ( width < 37 && length < 37) {
            newWidth = adjustSize(width, 5);
            newLength = adjustSize(length, 5);
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
        if (planter === true) {
            bedType = '50%';
        } else {
            bedType = 5;
        }
        return bedType;
    }

    const dragStart = (index) => {
        // let currentItem = props.createGarden[index]
        props.handleUpdateItem(index)
        console.log("bedlist item index", index)
    }

    const pointer = { cursor: 'pointer' }

    if (props.removeBed) { 
        return (
            <div className="bedListContainer">
                    <h3>Added Beds</h3>
                <div className="addedBeds">
                        <GridList cellHeight={'auto'} className="gridList" cols={1} >
                                {props.createGarden.map((bed, index) => {
                                    let adjustedSizes = adjustSize(bed.width, bed.length);
                                    let bedType = setBedType(bed.isPlanter)
                                    let bedStyle = {
                                        background: '#ddd3b8',
                                        border: '3px solid #c77547',
                                        borderRadius: bedType,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        maxWidth: 250,
                                        maxHeight: 250,
                                        width: parseInt(adjustedSizes[0]),
                                        height: parseInt(adjustedSizes[1]),
                                        cursor: 'pointer',
                                    }
                                    let bedBoxStyle = {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 10,
                                        maxWidth: 250,
                                        maxHeight: 250,
                                        width: '100%',
                                    }
                                    console.log(bedStyle)
                                    return (
                                            <div style={bedBoxStyle}>
                                                <Badge color="secondary" overlap="circle" badgeContent="X" onClick={() => {props.handleRemoveBedClick(index)}} style={pointer}>
                                                    <div style={bedStyle}>
                                                        {bed.width}" x {bed.length}"
                                                    </div>
                                                </Badge>
                                            </div>
                                            )
                                })}
                        </GridList>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div className="bedListContainer">
                    <h3>Added Beds</h3>
                <div className="addedBeds">
                        <GridList cellHeight={'auto'} className="gridList" cols={1} >
                                {props.createGarden.map((bed, index) => {
                                    let adjustedSizes = adjustSize(bed.width, bed.length);
                                    let bedType = setBedType(bed.isPlanter)
                                    let bedStyle = {
                                        background: '#ddd3b8',
                                        border: '3px solid #c77547',
                                        borderRadius: bedType,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        maxWidth: 250,
                                        maxHeight: 250,
                                        width: parseInt(adjustedSizes[0]),
                                        height: parseInt(adjustedSizes[1]),
                                    }
                                    let bedBoxStyle = {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 10,
                                        maxWidth: 250,
                                        maxHeight: 250,
                                        width: '100%',
                                    }
                                    console.log(bedStyle)
                                    return (
                                            <div style={bedBoxStyle}>
                                                    <div 
                                                        className="droppable-element"
                                                        draggable={true}
                                                        unselectable="on"
                                                        onDragStart={() => dragStart(index)}
                                                        style={bedStyle}
                                                    >
                                                        {bed.width}" x {bed.length}"
                                                    </div>
                                            </div>
                                            )
                                })}
                        </GridList>
                    
                </div>
            </div>
        )
    }
}


export default BedList
