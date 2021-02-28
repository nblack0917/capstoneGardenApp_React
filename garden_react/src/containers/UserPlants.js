import { connect } from 'react-redux'
import UserPlants from '../components/UserPlants/UserPlants'
import { addPlantToUserList, getAllPlantsByType } from '../redux/actions'

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
        addPlantToUserList: () => dispatch(addPlantToUserList()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlants)