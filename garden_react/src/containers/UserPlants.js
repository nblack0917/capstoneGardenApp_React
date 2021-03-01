import { connect } from 'react-redux'
import UserPlants from '../components/UserPlants/UserPlants'
import { addPlantToUserList, getAllPlantsByType, removePlantFromUserList } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        allPlantsByType: state.allPlantsByType,
        userPlantList: state.userPlantList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlantsByType: () => dispatch(getAllPlantsByType()),
        addPlantToUserList: (plant) => dispatch(addPlantToUserList(plant)),
        removePlantFromUserList: (index) => dispatch(removePlantFromUserList(index)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlants)