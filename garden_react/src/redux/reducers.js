import { combineReducers } from 'redux'

const userName = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
            const newName = action.value;
            return newName
        default:
            return state
    }
}

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'ENABLE_LOGIN':
            const trueState = action.value;
            return trueState;
        case 'DISABLE_LOGIN':
            const falseState = action.value;
            return falseState;
        default:
            return state
    }
}

const allPlantsByType = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PLANTS_BY_TYPE':
            return action.value
        default:
            return state
    }
}

const userPlantList = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PLANT':
            // console.log("adding plant", action.value)
            return [...state, action.value]
        case 'REMOVE_PLANT':
            const plantList = [...state]
            plantList.splice(action.value, 1)
            return plantList
        default:
            return state
    }
}

const lastTab = (state = [], action) => {
    switch(action.type) {
        case 'CHANGE_TAB':
            const newTab = action.value
            return newTab;
        default:
            return state
    }
}

const userInfo = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_USER_BY_USERNAME':
            const userInfo = action.value
            return userInfo
        default:
            return state
    }
}

const userGardens = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USER_GARDENS':
            return action.value
        default:
            return state
    }
}

const userAllGardenPlants = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_GARDEN_PLANTS_BY_USER':
            return action.value
        default:
            return state
    }
}

const gardenId = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_GARDEN_ID':
            const newID = action.value
            return newID
        default:
            return state
    }
}

const selectedIndexNum = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_INDEX_NUM':
            const newIDX = action.value
            return newIDX
        default:
            return state
    }
}

const createGarden = (state = {
    garden_id: 0,
    width: 0,
    length: 0,
    zipcode: 0,
    beds: [],
    currentItem: {},
    layout: [],
    }, action) => {
        switch(action.type) {
            case 'UPDATE_NEXT_GARDEN_ID':
                return {
                    ...state,
                    garden_id: action.value
                }
            case 'UPDATE_DIMENSIONS':
                // console.log("reduce", action.value)
                let values = action.value;
                return {
                    ...state,
                    width: values.width,
                    length: values.length,
                    zipcode: values.zipcode,
                }
            case 'ADD_BED':
                // console.log("reduce addbed", action.value)
                return {
                    ...state,
                    beds: [...state.beds, action.value]
                }
            case 'REMOVE_BED':
                const bedList = [...state.beds]
                bedList.splice(action.value, 1)
                return {
                    ...state,
                    beds: bedList
                }
            case 'UPDATE_CURRENT_ITEM':
                const selectList = [...state.beds];
                const selectedItem = selectList[action.value]
                // console.log("selected Item", selectedItem)
                return {
                    ...state,
                        currentItem: selectedItem
                }
            case 'UPDATE_LAYOUT':
                const newLayout = action.value;
                // console.log("reduer layout", newLayout)
                return {
                    ...state,
                        layout: newLayout
                }
            case 'RESET_GARDEN':
                return action.value
            default:
                return state
        }
    }

    const allGardenBeds = (state = [], action) => {
        switch(action.type) {
            case 'GET_ALL_USER_BEDS':
                return action.value
            default: 
                return state
        }
    }

    const gridLayout = (state = [], action) => {
        switch(action.type) {
            case 'UPDATE_SAVED_LAYOUT':
                // console.log("reducer update layout", action.value)
                return action.value
            default: 
                return state
        }
    }
    
    const gardenPlantArray = (state = {}, action) => {
        switch(action.type) {
            case 'UPDATE_PLANT_ARRAY':
                console.log("reduce plant array", action.value)
                return action.value
            case 'ADD_PLANT_TO_BED':
                console.log("action", action)
                // const values = action.value
                // const id = values[0];
                // const plant = values[1];
                return {
                    ...state,
                    [action.value]: [...state[action.value], action.plant]
                }
            case 'REMOVE_PLANT_FROM_BED':
                const bedList = [...state[action.value]]
                bedList.splice(action.index, 1)
                return {
                    ...state,
                    [action.value]: bedList
                }
            default: 
                return state
        }
    }

export default combineReducers({ 
    loggedIn,
    userName,
    allPlantsByType,
    userPlantList,
    lastTab,
    userInfo,
    userGardens,
    userAllGardenPlants,
    gardenId,
    createGarden,
    allGardenBeds,
    gridLayout,
    selectedIndexNum,
    gardenPlantArray,
})