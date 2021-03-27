import { connect } from 'react-redux'
import Plants from '../components/Plants/Plants'
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

export default connect(mapStateToProps, mapDispatchToProps)(Plants)