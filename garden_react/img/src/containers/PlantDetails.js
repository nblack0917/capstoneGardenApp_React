import { connect } from 'react-redux'
import PlantDetails from '../components/PlantDetails/PlantDetails'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        allPlantsByType: state.allPlantsByType,
    }
}

export default connect(mapStateToProps)(PlantDetails)