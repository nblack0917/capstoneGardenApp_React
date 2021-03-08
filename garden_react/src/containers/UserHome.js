import { connect } from 'react-redux'
import UserHome from '../components/UserHome/UserHome'
import { fetchUserGardensById } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName,
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGardensById: (id => dispatch(fetchUserGardensById(id))),
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
export default connect(mapStateToProps, mapDispatchToProps)(UserHome)