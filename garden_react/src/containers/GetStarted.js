import { connect } from 'react-redux'
import GetStarted from '../components/AddGardens/GetStarted'
import {
    fetchUserGardenPlantsById,
    updateGardenId,
    fetchUserGardensById,
    updateNextGardenId,
    updateNewGardenDimensions,
    addNewBed,
    removeBedFromList,
    updateCurrentItem,
    updateCurrentLayout,
    resetGarden,
    updateRemainingInfo,
} from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        userGardens: state.userGardens,
        createGarden: state.createGarden,
        createNewUser: state.createNewUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
        updateGardenId: (id => dispatch(updateGardenId(id))),
        fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
        updateNextGardenId: (id => dispatch(updateNextGardenId(id))),
        updateNewGardenDimensions: (dim => dispatch(updateNewGardenDimensions(dim))),
        addNewBed: (bed => dispatch(addNewBed(bed))),
        removeBedFromList: (index) => dispatch(removeBedFromList(index)),
        updateCurrentItem: (index) => dispatch(updateCurrentItem(index)),
        updateCurrentLayout: (layout) => dispatch(updateCurrentLayout(layout)),
        resetGarden: () => dispatch(resetGarden()),
        updateRemainingInfo: (info) => dispatch(updateRemainingInfo(info)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetStarted)