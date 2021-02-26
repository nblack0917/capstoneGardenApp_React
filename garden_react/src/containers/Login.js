import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { enableLogin, updateUserName } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enableLogin: () => dispatch(enableLogin()),
        updateUserName: (userName) => dispatch(updateUserName(userName))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)