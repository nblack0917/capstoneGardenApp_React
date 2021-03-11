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
    const byTypeUrl = "http://localhost:8080/plants/plantTypes";
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
    const userInfoUrl = `http://localhost:8080/users/${userName}`
    return (dispatch) => {
        fetch(userInfoUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_USER_BY_USERNAME',
                    value: response[0]
                }
                // console.log(response[0])
                dispatch(action)
            })
    }
}

export const fetchUserGardensById = (id) => {
    const userGardensUrl = `http://localhost:8080/gardens/id/${id}`
    return (dispatch) => {
        fetch(userGardensUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_USER_GARDENS',
                    value: response
                }
                console.log(response)
                dispatch(action)
            })
    }
}

export const fetchUserGardenPlantsById = (id) => {
    const userGardenPlantsUrl = `http://localhost:8080/users/gardens/${id}`
    return (dispatch) => {
        fetch(userGardenPlantsUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_ALL_GARDEN_PLANTS_BY_USER',
                    value: response
                }
                console.log("allplantsbyID", response)
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

export const updateNewGardenDimensions = (dim) => {
    return {
        type: 'UPDATE_DIMENSIONS',
        value: dim
    }
}

export const addNewBed = (bed) => {
    return {
        type: 'ADD_BED',
        value: bed
    }
}