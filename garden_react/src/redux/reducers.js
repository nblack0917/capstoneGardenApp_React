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

const createGarden = (state = {
    width: 0,
    length: 0,
    zipcode: 0,
    beds: [],
    }, action) => {
        switch(action.type) {
            case 'UPDATE_DIMENSIONS':
                console.log("reduce", action.value)
                return action.value
            case 'ADD_BED':
                console.log("reduce addbed", action.value)
                return {
                    ...state,
                    beds: [...state.beds, action.value]
                }
            default:
                return state
        }
    }


export default combineReducers({  loggedIn, userName, allPlantsByType, userPlantList, lastTab, userInfo, userGardens, userAllGardenPlants, gardenId, createGarden })