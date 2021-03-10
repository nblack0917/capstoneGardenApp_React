import { connect } from 'react-redux'
import MyGardens from '../components/MyGardens/MyGardens'
import { fetchUserGardenPlantsById, updateGardenId, fetchUserGardensById } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        userGardens: state.userGardens,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
        updateGardenId: (id => dispatch(updateGardenId(id))),
        fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGardens)

