import { connect } from 'react-redux'
import MyGardens from '../components/MyGardens/MyGardens'
import { fetchUserGardenPlantsById } from '../redux/actions'


// const mapStateToProps = (state) => {
//     return {
//         userInfo: state.userInfo,
//         userGardens: state.userGardens,
//         userPlantList: state.userPlantList,
//     }
// }
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName,
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGardens)