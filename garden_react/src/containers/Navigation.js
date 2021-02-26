import { connect } from 'react-redux'
import Navbar from '../components/Navigation/Navigation'
import { disableLogin, updateUserName } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        disableLogin: () => dispatch(disableLogin()),
        updateUserName: (userName) => dispatch(updateUserName(userName))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)