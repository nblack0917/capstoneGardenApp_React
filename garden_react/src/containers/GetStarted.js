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
} from '../redux/actions'


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
        updateNextGardenId: (id => dispatch(updateNextGardenId(id))),
        updateNewGardenDimensions: (dim => dispatch(updateNewGardenDimensions(dim))),
        addNewBed: (bed => dispatch(addNewBed(bed))),
        removeBedFromList: (index) => dispatch(removeBedFromList(index)),
        updateCurrentItem: (index) => dispatch(updateCurrentItem(index)),
        updateCurrentLayout: (layout) => dispatch(updateCurrentLayout(layout)),
        resetGarden: () => dispatch(resetGarden()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetStarted)