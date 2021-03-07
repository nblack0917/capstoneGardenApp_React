import { connect } from 'react-redux'
import PlantCard from '../components/PlantCard/PlantCard'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}


export default connect(mapStateToProps)(PlantCard)