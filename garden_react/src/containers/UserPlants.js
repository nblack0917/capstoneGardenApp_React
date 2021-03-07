import { connect } from 'react-redux'
import UserPlants from '../components/UserPlants/UserPlants'
import { addPlantToUserList, getAllPlantsByType, removePlantFromUserList, updateLastTab } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        allPlantsByType: state.allPlantsByType,
        userPlantList: state.userPlantList,
        lastTab: state.lastTab,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlantsByType: () => dispatch(getAllPlantsByType()),
        addPlantToUserList: (plant) => dispatch(addPlantToUserList(plant)),
        removePlantFromUserList: (index) => dispatch(removePlantFromUserList(index)),
        updateLastTab: (tab) => dispatch(updateLastTab(tab))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlants)