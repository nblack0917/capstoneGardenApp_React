import React, { useState, useEffect } from 'react'
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
// import BedList from '../BedList/BedList'
import BackgroundPattern from './Leaf_pattern_1.png'
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'
import './GardenGrid.css'

const ReactGridLayout = WidthProvider(RGL);


function BedGrid(props) {

  // const currentGardenBeds = props.allGardenBeds.filter(bed => bed.garden_id === props.gardenId)
  console.log("gridLayout", props.gridLayout, "indexNum", props.indexNum)
  const currentGardens = props.userGardens[props.indexNum]
  console.log("current Beds", currentGardens)

  const layout = props.gridLayout[props.indexNum]
  const numOfItems = layout.length;
  console.log("new Layout", layout)

  //function to round garden dimensions to nearest factor of 12
  const roundDozens = (num) => {
    let results = Math.round(num/12)*12;
    return results
  }

  // variables and swith to set size and scale of grid and keep items square and round
  let gardenWidth = roundDozens(parseInt(currentGardens.garden_width))
  let gardenHeight = roundDozens(parseInt(currentGardens.garden_length))
  const findGardenContainerHeight = () => {
    let widthScale = 650 / gardenWidth;
    return gardenHeight * widthScale + 30;
  }
  let gardenContainerHeight = findGardenContainerHeight()
  let gridRowHeight = 18;
  let numOfCols = 24;
  let lastColumn = gardenWidth+1
  let hiddenBoxHeight = 53
  switch(gardenWidth) {
    case 12:
      gridRowHeight = 130;
      numOfCols = 5;
      break;
    case 24:
      gridRowHeight = 65;
      numOfCols = 9;
      break;
    case 36:
      gridRowHeight = 48;
      numOfCols = 12;
      break;
    case 48:
      gridRowHeight = 31;
      numOfCols = 17;
      break;
    case 60:
      gridRowHeight = 22;
      numOfCols = 21;
      break;
    case 72:
      gridRowHeight = 17;
      numOfCols = 25;
      break;
    case 84:
      gridRowHeight = 14;
      numOfCols = 29;
      break;
    case 96:
      gridRowHeight = 10;
      numOfCols = 33;
      break;
    case 108:
      gridRowHeight = 8;
      numOfCols = 37;
      break;
    case 120:
      gridRowHeight = 6;
      numOfCols = 41;
      break;
    case 132:
      gridRowHeight = 5;
      numOfCols = 45;
      break;
    case 144:
      gridRowHeight = 4;
      numOfCols = 49;
      break;
    case 156:
      gridRowHeight = 3;
      numOfCols = 53;
      break;
    case 168:
      gridRowHeight = 2;
      numOfCols = 57;
      break;
    case 180:
      gridRowHeight = 1;
      numOfCols = 61;
      break;
    default:
      console.log("Error, invalid size")
  }
  switch(gardenHeight) {
    case 12:
      hiddenBoxHeight = 3.825
      break;
    case 24:
      hiddenBoxHeight = 7.55
      break;
    case 36:
      hiddenBoxHeight = 11.125
      break;
    case 48:
      hiddenBoxHeight = 16
      break;
    case 60:
      hiddenBoxHeight = 20
      break;
    case 72:
      hiddenBoxHeight = 23
      break;
    case 84:
      hiddenBoxHeight = 28
      break;
    case 96:
      hiddenBoxHeight = 32
      break;
    case 108:
      hiddenBoxHeight = 37
      break;
    case 120:
      hiddenBoxHeight = 40
      break;
    case 132:
      hiddenBoxHeight = 45
      break;
    case 144:
      hiddenBoxHeight = 48;
      break;
    case 156:
      hiddenBoxHeight = 52
      break;
    case 168:
      hiddenBoxHeight = 56;
      break;
    case 180:
      hiddenBoxHeight = 62
      break;
    default:
      console.log("Error, invalid size")
  }

  // let importedLayout = [];

  // const createNewLayout = () => {
  //   let lastItem = {i: '0', x: lastColumn, y: 0, w: 1, h: hiddenBoxHeight, static: true, isPlanter: false};
  //   newLayout.push(lastItem)
  //   for (let item of currentGardenBeds) {
  //     console.log("item", item)
  //     let planter = false;
  //     if (item.isPlanter === 0) {
  //       planter = false;
  //     } else {
  //       planter = true;
  //     };
  //     let newW = item.w/3;
  //     let newH = item.h/3;
  //     let newItem = {i: item.i.toString(), x: item.x, y: item.y, w: newW, h: newH, isDraggable: false, isResizable: false, isPlanter: planter}
  //     importedLayout.push(newItem)
  //   }
  //   console.log("new Layout", importedLayout)
  //   setLayoutList(importedLayout)
  // }

  //states
  const [layoutList, setLayoutList] = useState([
    // {i: '0', x:19, y: 1, w: 4, h: 7.6666666667, isDraggable: true, isResizable: false, isPlanter: false},
    // {i: '1', x:8, y: 5, w: 4, h: 4, isDraggable: true, isResizable: false, isPlanter: true},
    // {i: '2', x:3, y: 12, w: 4, h: 4, isDraggable: true, isResizable: false, isPlanter: true},
    // {i: '3', x:16, y: 5, w: 4, h: 7.6666666667, isDraggable: true, isResizable: false, isPlanter: false},
    // {i: '4', x: lastColumn, y: 0, w: 1, h: hiddenBoxHeight, static: true, isPlanter: false},
  ]);
  const [currentSize, setCurrentSize] = useState({});
  const [defaultProps, setDefaultProps] = useState(
    {
      className: "layout",
      items: numOfItems,
      cols: numOfCols,
      rowHeight: gridRowHeight,
      onLayoutChange: function() {},
      // This turns off compaction so you can place items wherever.
      // verticalCompact: false,
      compactType: null,
      preventCollision: true,
    }
  )

  //style for garden box
  const boxStyle = {
    background: '#F0E5C9',
    border: '6px dashed #c77547',
    borderRadius: 5,
    marginBottom: 10,
    width: 675,
    height: gardenContainerHeight,
    // width: parseInt(width),
    // height: parseInt(length),
    margin: '0 auto'
  }

      //builds list of items based on value of i
      //also applies appropriate className depending on isPlanter boolean or lastItem
      //lastItem is invisible barrier to create bounding effect for grid height
      const generateDOM = () => {
        let lastItem = layout.length - 1
        let currentState = layoutList
        return _.map(_.range(defaultProps.items), function(iKey) {
              if ( layout[iKey].isPlanter) {
                return (
                    <div key={iKey} className="roundBed">
                      {/* <span className="text">{iKey}</span> */}
                    </div>
                  );
            } else if ( parseInt(iKey)===parseInt(lastItem)) {
                return (
                    <div key={iKey} className="lastElement">
                    </div>
                  );
            } else {
          return (
            <div key={iKey} className="gridBoxBed">
              {/* <span className="text">{iKey}</span> */}
            </div>
          );
            }
        });
      }

       const onLayoutChange = (layout) => {
        defaultProps.onLayoutChange(layout);
        // this.generateDOM()
      }
      

      //update layoutList to new layout when moving items
      //also updates layout state with each move
      const onDragStop = (layout) => {
        let stateList = layoutList
        let newStateList = []
        console.log("layout", layoutList)

        for ( let gridItem of layout) {
          // console.log("gridItem from Layout", gridItem)
          let currentItem = stateList.filter(listItem => listItem.i === gridItem.i );
          // console.log("current Item", currentItem[0])
          if ( currentItem[0].x !== gridItem.x || currentItem[0].y !== gridItem.y ) {
            // console.log("grid item changed")
            currentItem[0].x = gridItem.x;
            currentItem[0].y = gridItem.y;
          }
          newStateList.push(currentItem[0])
        }
        setLayoutList(newStateList)
        props.handleCurrentLayout(layoutList)
      }

      //When new item is dropped from outside...
      //get copy of layout state
      //find index and i value of last item
      //create new item based on size and coords of new item with i value of removed item
      //create new last item with i value increased
      //remove last item
      //add new items then add new last item to state copy
      //set state to state copy
      //update layout state with each dropped item

      const onDrop = (layout, layoutItem, _event) => {
        // let lastItem = layoutList[layoutList.length - 1]
        // let newItemSize = currentSize
        // // console.log(newItemSize)
        // let stateList = layoutList
        // //pull size and coords from dropped item
        // const itemX= layoutItem.x; const itemY= layoutItem.y; const itemW=parseInt(newItemSize.width)/3; const itemH=parseInt(newItemSize.length)/3; const itemPlanter = newItemSize.isPlanter
        // // console.log(layoutItem)
        // const layoutLength = stateList.length
        // const lastItemI = parseInt(stateList[layoutLength - 1].i)
        // const newIInt = lastItemI+1;
        // const newIString = newIInt.toString();
        // // console.log("layoutLength", layoutLength, "lastItem", lastItem, " newIInt", newIInt, "NewIString", newIString)
        // const newItem = {i: lastItemI.toString(), x: itemX, y: itemY, w: itemW, h: itemH, minH: 1, maxH: 1, isResizable: false, isDraggable: true, isPlanter: itemPlanter}
        // const newLastItem = {i: newIString, x: lastItem.x, y: lastItem.y, w: lastItem.w, h: lastItem.h, static: true}

        // stateList.pop()
        // // itemNum++;
        // let nextItemsNum = defaultProps.items + 1
        // setDefaultProps({
        //   ...defaultProps, ['items'] : nextItemsNum
        // })
        // stateList.push(newItem);
        // stateList.push(newLastItem)
        // // console.log("stateList", stateList)
        // setLayoutList(stateList)
        // props.handleCurrentLayout(layoutList)
        // // console.log("layout after", layout)
      };

      const dragStart = (index) => {
        //  console.log("index", index)
         let currentItem = props.createGarden.beds[index]
         setCurrentSize(currentItem)
        //  console.log("currentItem", currentItem)
      }
      const handleUpdateItem = (index) => {
        props.handleUpdateItem(index)
      }


    // console.log("Starting layout", this.state.layoutList)


    // load current layout state as layout 
    //not currently working right
    // useEffect(() => {
    //   const currentLayout = props.createGarden.layout
    //   if (currentLayout.length > 0) {
    //     setLayoutList(currentLayout)
    //     console.log('set current layout', currentLayout)
    //     console.log("cols", numOfCols)
    //     generateDOM()
    //   }else{
    //     console.log("no current layout", currentLayout)
    //   }      
    // }, [layoutList])

    //create copy of state to assist in refresh of component
    // let newLayout = JSON.parse(JSON.stringify(layoutList))
    // newLayout.x =+ 2

    // const updateToNewLayout = (layout) => {
    //   let newList = [];
    //   setLayoutList([])
    //   for(let item in layout) {
    //     newList.push(item)
    //     setLayoutList(newList)
    //   }
    // }

    useEffect(() => {
      // updateToNewLayout(layout)
    },[])

    return (
      <div className="gardenLayoutContainer">
                <div style={boxStyle}>
                  <ReactGridLayout
                    
                    layout={layout}
                    // onLayoutChange={this.onLayoutChange}
                    onDragStop={onDragStop}
                    isBounded={true}
                    onDrop={onDrop}
                    isDroppable={true}
                    {...defaultProps}
                  >
                    
                  {generateDOM()}
                  </ReactGridLayout>
                </div>
            </div>
      );
}

export default BedGrid;