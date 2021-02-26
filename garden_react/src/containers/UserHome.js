import { connect } from 'react-redux'
import UserHome from '../components/UserHome/UserHome'
import { enableLogin, updateUserName } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         enableLogin: () => dispatch(enableLogin()),
//         updateUserName: (userName) => dispatch(updateUserName(userName))
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
export default connect(mapStateToProps)(UserHome)