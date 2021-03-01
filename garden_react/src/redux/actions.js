const byTypeUrl = "http://localhost:8080/plants/plantTypes";

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
    return (dispatch) => {
        fetch(byTypeUrl)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_PLANTS_BY_TYPE',
                    value: response
                }
                console.log(response)
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