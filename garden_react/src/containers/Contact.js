import { connect } from 'react-redux'
import Contact from '../components/Contact/Contact'
// import { enableLogin, updateUserName } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

export default connect(mapStateToProps)(Contact)