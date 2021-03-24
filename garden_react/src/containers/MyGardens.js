import { connect } from 'react-redux'
import MyGardens from '../components/MyGardens/MyGardens'
import { fetchUserGardenPlantsById, updateGardenId, fetchUserGardensById, resetGarden, updateLayout, updateSelectedIndex } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        userGardens: state.userGardens,
        allGardenBeds: state.allGardenBeds,
        selectedIndexNum: state.selectedIndexNum,
        userAllGardenPlants: state.userAllGardenPlants,
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
        updateGardenId: (id => dispatch(updateGardenId(id))),
        fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
        resetGarden: () => dispatch(resetGarden()),
        updateLayout: (layout => dispatch(updateLayout(layout))),
        updateSelectedIndex: (num => dispatch(updateSelectedIndex(num)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGardens)

