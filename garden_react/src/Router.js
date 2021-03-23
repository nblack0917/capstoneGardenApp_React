import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home/Home'
import PlantDetails from './containers/PlantDetails'
import UserHome from './containers/UserHome'
import Login from './containers/Login'
import Plants from './containers/Plants'
import UserPlants from './containers/UserPlants'
import MyPlants from './containers/MyPlants'
import MyGardens from './containers/MyGardens'
import AddGardens from './containers/AddGardens'
import Garden from './containers/Garden'
import MyCalendar from './components/MyCalendar/MyCalendar'
import Contact from './containers/Contact'
import GetStarted from './containers/GetStarted'
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
const ProtectedPlantRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => checkAuth()
                ? <Component {...props } />
                : <Redirect to='/plants' />
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
                <Route path="/get_started" component={GetStarted} />
                <Route path="/plant/:id" component={PlantDetails} />
                <ProtectedRoute exact path="/home" component={UserHome} />
                <ProtectedPlantRoute exact path="/user_plants" component={UserPlants} />
                <ProtectedPlantRoute exact path="/my_plants" component={MyPlants} />
                <ProtectedPlantRoute exact path="/add_garden" component={AddGardens} />
                <ProtectedRoute exact path="/my_gardens" component={MyGardens} />
                <ProtectedRoute exact path="/my_gardens/garden" component={Garden} />
                <ProtectedRoute exact path="/my_calendar" component={MyCalendar} />
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