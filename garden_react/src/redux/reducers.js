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
        // case 'DELETE_MAKE':
        //     console.log(action.value)
        //     const newState = [ ...state ]
        //     newState.splice(action.value, 1);
        //     return newState;
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


export default combineReducers({  loggedIn, userName, allPlantsByType, userPlantList, lastTab })