export const enableLogin = () => {
    return {
        type: 'ENABLE_LOGIN',
        value: true
    }
}

export const disableLogin = () => {
    return {
        type: 'DISABLE_LOGIN',
        value: false
    }
}

export const updateUserName = (userName) => {
    return {
        type: "UPDATE_USERNAME",
        value: userName
    }
}

export const getAllPlantsByType = (plantList) => {
    const byTypeUrl = "https://xpsx862ed6.execute-api.us-east-2.amazonaws.com/latest/plants/plantTypes";
    return (dispatch) => {
        fetch(byTypeUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_PLANTS_BY_TYPE',
                    value: response
                }
                // console.log(response)
                dispatch(action)
            })
    }
}

export const addPlantToUserList = (plant) => {
    return  {
        type: "ADD_PLANT",
        value: plant
    }
}

export const removePlantFromUserList = (index) => {
    return {
        type: 'REMOVE_PLANT',
        value: index
    }
}

export const updateLastTab = (tab) => {
    return {
        type: 'CHANGE_TAB',
        value: tab
    }
}

export const fetchUserbyUserName = (userName) => {
    console.log(userName)
    const userInfoUrl = `https://xpsx862ed6.execute-api.us-east-2.amazonaws.com/latest/users/${userName}`
    // console.log(userInfoUrl)
    return (dispatch) => {
        fetch(userInfoUrl)
            .then(res => res.json())
            .then(response => {
                console.log("get user response", response)
                let action;
                if (response.length === 0) {
                    let newUser = {user: "newuser"}
                    action = {
                        type: 'FETCH_USER_BY_USERNAME',
                        value: newUser
                    }
                } else {
                    action = {
                        type: 'FETCH_USER_BY_USERNAME',
                        value: response[0]
                    }
                dispatch(action)
            }
        })
    }
}

export const resetUserInfo = () => {
    const defaultUser = {};
    return {
        type: 'RESET_USER_INFO',
        value: defaultUser
    }
}

export const fetchUserGardensById = (id) => {
    const userGardensUrl = `https://xpsx862ed6.execute-api.us-east-2.amazonaws.com/latest/gardens/id/${id}`
    return (dispatch) => {
        fetch(userGardensUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_USER_GARDENS',
                    value: response
                }
                // console.log(response)
                dispatch(action)
            })
    }
}

export const fetchUserGardenPlantsById = (id) => {
    const userGardenPlantsUrl = `https://xpsx862ed6.execute-api.us-east-2.amazonaws.com/latest/users/gardens/${id}`
    return (dispatch) => {
        fetch(userGardenPlantsUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_ALL_GARDEN_PLANTS_BY_USER',
                    value: response
                }
                // console.log("allplantsbyID", response)
                dispatch(action)
            })
    }
}

export const updateGardenId = (id) => {
    return {
        type: 'UPDATE_GARDEN_ID',
        value: id
    }
}

export const updateSelectedIndex = (num) => {
    return {
        type: 'UPDATE_INDEX_NUM',
        value: num
    }
}

export const updateNextGardenId = (id) => {
    return {
        type: 'UPDATE_NEXT_GARDEN_ID',
        value: id
    }
}

export const updateNewGardenDimensions = (dim) => {
    return {
        type: 'UPDATE_DIMENSIONS',
        value: dim
    }
}

export const addNewBed = (bed) => {
    console.log("action bed", bed)
    return {
        type: 'ADD_BED',
        value: bed
    }
}

export const removeBedFromList = (index) => {
    return {
        type: 'REMOVE_BED',
        value: index
    }
}

export const updateCurrentItem = (index) => {
    return {
        type: 'UPDATE_CURRENT_ITEM',
        value: index
    }
}

export const updateCurrentLayout = (layout) => {
    return {
        type: 'UPDATE_LAYOUT',
        value: layout
    }
}

export const resetGarden = () => {
    const defaultValues = {
        width: 0,
        length: 0,
        zipcode: 0,
        beds: [],
        currentItem: {},
        layout: [],
    }
    return {
        type: 'RESET_GARDEN',
        value: defaultValues
    }
}

export const getAllUserGardenBeds = (beds) => {
    return {
        type: 'GET_ALL_USER_BEDS',
        value: beds
    }
}

export const updateLayout = (layout) => {
    return {
        type: 'UPDATE_SAVED_LAYOUT',
        value: layout
    }
}

export const updateGardenPlantArray = (layout) => {
    return {
        type: 'UPDATE_PLANT_ARRAY',
        value: layout
    }
}

export const addToGardenPlantArray = (key, plant) => {
    return {
        type: 'ADD_PLANT_TO_BED',
        value: key, plant
    }
}

export const removeFromGardenPlantArray = (key, index) => {
    return {
        type: 'REMOVE_PLANT_FROM_BED',
        value: key, index
    }
}

export const updateEmail = (email) => {
    return {
        type: 'UPDATE_EMAIL',
        value: email
    }
}

export const updateRemainingInfo = (info) => {
    return {
        type: 'UPDATE_REMAINING_INFO',
        value: info
    }
}
