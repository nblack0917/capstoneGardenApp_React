import { connect } from 'react-redux'
import MyCalendar from '../components/MyCalendar/MyCalendar'
import { fetchUserGardensById, getAllUserGardenBeds, fetchUserGardenPlantsById } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName,
        userInfo: state.userInfo,
        userAllGardenPlants: state.userAllGardenPlants,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
//         getAllUserGardenBeds: (beds) => dispatch(getAllUserGardenBeds(beds)),
//         fetchUserGardenPlantsById: (id => dispatch(fetchUserGardenPlantsById(id))),
//     }
// }


export default connect(mapStateToProps)(MyCalendar)