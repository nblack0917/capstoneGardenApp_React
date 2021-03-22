import { connect } from 'react-redux'
import Garden from '../components/MyGardens/Garden/Garden'
import { removePlantFromUserList, getAllUserGardenBeds } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName,
        userInfo: state.userInfo,
        gardenId: state.gardenId,
        userPlantList: state.userPlantList,
        userAllGardenPlants: state.userAllGardenPlants,
        allGardenBeds: state.allGardenBeds,
        selectedIndexNum: state.selectedIndexNum,
        gridLayout: state.gridLayout,
        userGardens: state.userGardens,
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlantFromUserList: (index) => dispatch(removePlantFromUserList(index)),
        getAllUserGardenBeds: (beds) => dispatch(getAllUserGardenBeds(beds))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Garden)