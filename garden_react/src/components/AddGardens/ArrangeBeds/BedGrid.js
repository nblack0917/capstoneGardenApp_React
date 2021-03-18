import React, { useState, useEffect } from 'react'
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import BedList from '../BedList/BedList'
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'
import './BedGrid.css'

const ReactGridLayout = WidthProvider(RGL);


function BedGrid(props) {
  let rowHeight = 8;
  const [layoutList, setLayoutList] = useState([
    {i: '0', x: 0, y: 0, w: 4, h: 4, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: false},
    {i: '1', x: 6, y: 3, w: 2, h: 3, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: false},
    {i: '2', x: 8, y: 0, w: 1, h: 1, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: true},
    {i: '3', x: 8, y: 3, w: 3, h: 3, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: false},
    {i: '4', x: 6, y: 0, w: 2, h: 2, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: true},
    {i: '5', x: 0, y: 4, w: 2, h: 2, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: true},
    {i: '6', x: 9, y: 0, w: 2, h: 2, minH: 2, maxH: 2, isResizable: false, isDraggable: true, isPlanter: true},
    {i: '7', x: 3, y: 5, w: 1, h: 1, minH: 2, maxH: 1, isResizable: false, isDraggable: true, isPlanter: true},
    {i: '8', x: 12, y: 0, w: 1, h: rowHeight, static: true, isPlanter: false},
  ]);
  const [newSizes] = useState([
    {w: 2, h: 1, isPlanter: false},
    {w: 3, h: 2, isPlanter: false},
    {w: 2, h: 2, isPlanter: true},
  ])
  const [currentSize, setCurrentSize] = useState({});
  // let itemNum = layoutList.length;
  const [defaultProps, setDefaultProps] = useState(
    {
      className: "layout",
      items: 8,
      cols: 12,
      rowHeight: 47,
      width: 500,
      onLayoutChange: function() {},
      // This turns off compaction so you can place items wherever.
      // verticalCompact: false,
      compactType: null,
      preventCollision: true,
    }
  )

      //builds list of items based on value of i
      //also applies appropriate className depending on isPlanter boolean or lastItem
      //lastItem is invisible barrier to create bounding effect for grid height
      const generateDOM = () => {
        let lastItem = layoutList.length - 1
        let currentState = layoutList
        return _.map(_.range(defaultProps.items), function(iKey) {
              if ( currentState[iKey].isPlanter) {
                return (
                    <div key={iKey} className="round">
                      <span className="text">{iKey}</span>
                    </div>
                  );
            } else if ( iKey===lastItem) {
                return (
                    <div key={iKey} className="lastElement">
                    </div>
                  );
            } else {
          return (
            <div key={iKey} className="gridBox">
              <span className="text">{iKey}</span>
            </div>
          );
            }
        });
      }

      const onLayoutChange = (layout) => {
        defaultProps.onLayoutChange(layout);
        // this.generateDOM()
      }
      
      const onDragStop = (layout) => {
        let stateList = layoutList
        let newStateList = []
        // console.log(layout)

        for ( let gridItem of layout) {
          console.log("gridItem from Layout", gridItem)
          let currentItem = stateList.filter(listItem => listItem.i === gridItem.i );
          console.log("current Item", currentItem[0])
          if ( currentItem[0].x !== gridItem.x || currentItem[0].y !== gridItem.y ) {
            console.log("grid item changed")
            currentItem[0].x = gridItem.x;
            currentItem[0].y = gridItem.y;
          }
          newStateList.push(currentItem[0])
        }
        setLayoutList(newStateList)
      }

      //When new item is dropped from outside...
      //get copy of layout state
      //find index and i value of last item
      //create new item based on size and coords of new item with i value of removed item
      //create new last item with i value increased
      //remove last item
      //add new items then add new last item to state copy
      //set state to state copy

      const onDrop = (layout, layoutItem, _event) => {
        

        let newItemSize = currentSize
        // console.log(newItemSize)

        let stateList = layoutList
        //pull size and coords from dropped item
        const itemX= layoutItem.x; const itemY= layoutItem.y; const itemW= newItemSize.w; const itemH= newItemSize.h; const itemPlanter = newItemSize.isPlanter
        // console.log(layoutItem)
        const layoutLength = stateList.length
        const lastItem = parseInt(stateList[layoutLength - 1].i)
        const newIInt = lastItem+1;
        const newIString = newIInt.toString();
        console.log("layoutLength", layoutLength, "lastItem", lastItem, " newIInt", newIInt, "NewIString", newIString)
        const newItem = {i: lastItem.toString(), x: itemX, y: itemY, w: itemW, h: itemH, minH: 1, maxH: 1, isResizable: false, isDraggable: true, isPlanter: itemPlanter}
        const newLastItem = {i: newIString, x: 12, y: 0, w: 1, h: 8, static: true}


        stateList.pop()
        // itemNum++;
        let nextItemsNum = defaultProps.items + 1
        setDefaultProps({
          ...defaultProps, ['items'] : nextItemsNum
        })
        stateList.push(newItem);
        stateList.push(newLastItem)
        // console.log("stateList", stateList)
        setLayoutList(stateList)
        // console.log("layout after", layout)
        // generateDOM();
      };

      const dragStart = (index) => {
        //  console.log("index", index)
         let currentItem = newSizes[index]
         setCurrentSize(currentItem)
         console.log("currentItem", currentItem)
      }
      const handleUpdateItem = (index) => {
        props.handleUpdateItem(index)
      }

    // console.log("Starting layout", this.state.layoutList)


    useEffect(() => {
      console.log("creategarden bedgrid", props.createGarden)
    })
    //create copy of state to assist in refresh of component
    let newLayout = JSON.parse(JSON.stringify(layoutList))
    newLayout.x =+ 2

    return (
      <div className="bedContainer">
              <BedList createGarden={props.createGarden} removeBeds={false} handleUpdateItem={e => {handleUpdateItem(e)}} />
                {/* <div className="listContainer">
                  {newSizes.map((item, index) => {
                    //  console.log(index)
                    let newWidth = item.w * 50;
                    let newHeight = item.h * 50;
                    let planterStyle = {};
                    if (!item.isPlanter) {
                      planterStyle = {
                        width: newWidth,
                        height: newHeight,
                        borderRadius: 5,
                      }
                    } else {
                      planterStyle = {
                        width: newWidth,
                        height: newHeight,
                        borderRadius: '50%',
                      }
                    }
                    return (
                      <div
                          className="droppable-element"
                          draggable={true}
                          unselectable="off"
                          style={planterStyle}
                          // this is a hack for firefox
                          // Firefox requires some kind of initialization
                          // which we can do by adding this attribute
                          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                          onDragStart={() => dragStart(index)}
                          // onDrag={this.drag}
                          >
                          {item.w} x {item.h}
                      </div>
                    )
                  })}
                </div> */}
                <div className="gridContainer">
                  <ReactGridLayout
                  
                    layout={newLayout}
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