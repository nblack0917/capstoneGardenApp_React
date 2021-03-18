import { connect } from 'react-redux'
import AddGardens from '../components/AddGardens/AddGardens'
import {
    fetchUserGardenPlantsById,
    updateGardenId,
    fetchUserGardensById,
    updateNewGardenDimensions,
    addNewBed,
    removeBedFromList,
    updateCurrentItem,
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
        updateNewGardenDimensions: (dim => dispatch(updateNewGardenDimensions(dim))),
        addNewBed: (bed => dispatch(addNewBed(bed))),
        removeBedFromList: (index) => dispatch(removeBedFromList(index)),
        updateCurrentItem: (index) => dispatch(updateCurrentItem(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGardens)

