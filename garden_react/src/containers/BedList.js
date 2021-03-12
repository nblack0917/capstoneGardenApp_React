import { connect } from 'react-redux'
import BedList from '../components/BedList/BedList'
import { fetchUserGardenPlantsById, updateGardenId, fetchUserGardensById } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        userGardens: state.userGardens,
        createGarden: state.createGarden,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
        updateGardenId: (id => dispatch(updateGardenId(id))),
        fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BedList)

