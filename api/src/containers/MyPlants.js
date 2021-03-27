import { connect } from 'react-redux'
import MyPlants from '../components/MyPlants/MyPlants'
import { removePlantFromUserList } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userPlantList: state.userPlantList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlantFromUserList: (index) => dispatch(removePlantFromUserList(index)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MyPlants)