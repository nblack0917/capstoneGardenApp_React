import { connect } from 'react-redux'
import UserPlants from '../components/UserPlants/UserPlants'
import { getAllPlantsByType } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        allPlantsByType: state.allPlantsByType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlantsByType: () => dispatch(getAllPlantsByType()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlants)