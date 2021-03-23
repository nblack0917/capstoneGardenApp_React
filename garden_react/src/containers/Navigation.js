import { connect } from 'react-redux'
import Navbar from '../components/Navigation/Navigation'
import { enableLogin, disableLogin, updateUserName, fetchUserbyUserName } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enableLogin: () => dispatch(enableLogin()),
        disableLogin: () => dispatch(disableLogin()),
        updateUserName: (userName) => dispatch(updateUserName(userName)),
        fetchUserbyUserName: (userName => dispatch(fetchUserbyUserName(userName))),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)