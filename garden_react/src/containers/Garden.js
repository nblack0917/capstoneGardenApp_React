import { connect } from 'react-redux'
import Garden from '../components/MyGardens/Garden/Garden'
import { removePlantFromUserList } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName,
        userInfo: state.userInfo,
        gardenId: state.gardenId,
        userPlantList: state.userPlantList,
        userAllGardenPlants: state.userAllGardenPlants,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlantFromUserList: (index) => dispatch(removePlantFromUserList(index)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Garden)