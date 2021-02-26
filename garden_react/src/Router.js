import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home/Home'
import UserHome from './containers/UserHome'
import Login from './containers/Login'
import Plants from './containers/Plants'
import Contact from './containers/Contact'
// import BusinessDetail from './containers/BusinessDetail'
// import AddBusiness from './containers/AddBusiness'
import Navigation from './containers/Navigation'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // console.log(cookies)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => checkAuth()
                ? <Component {...props } />
                : <Redirect to='/login' />
            }
        />
    )
}

const Router = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/plants" component={Plants} />
                <Route path="/contact" component={Contact} />
                <ProtectedRoute exact path="/home" component={UserHome} />
            </Switch>
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id" component={BusinessDetail} />
                <Route path="/add" component={AddBusiness} />
            </Switch> */}
        </div>
    )
}


export default Router