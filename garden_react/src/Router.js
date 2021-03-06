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
import MyCalendar from './containers/MyCalendar'
import Contact from './containers/Contact'
import GetStarted from './containers/GetStarted'
// import BusinessDetail from './containers/BusinessDetail'
// import AddBusiness from './containers/AddBusiness'
import Navigation from './containers/Navigation'
import Footer from './components/Footer/Footer'

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

const GitHubLink = () => {
    window.location.href = "https://github.com/nblack0917/capstoneGardenApp_React";
    return null
}
const LinkedInLink = () => {
    window.location.href = "https://www.linkedin.com/in/nick-a-black/";
    return null
}

const Router = () => {
    return (
        <div className="routerContainer">
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/plants" component={Plants} />
                <Route path="/contact" component={Contact} />
                <Route path="/get_started" component={GetStarted} />
                <Route path="/plant/:id" component={PlantDetails} />
                <Route path="/git" component={GitHubLink} />
                <Route path="/linkedin" component={LinkedInLink} />
                <ProtectedRoute exact path="/home" component={UserHome} />
                <ProtectedPlantRoute exact path="/user_plants" component={UserPlants} />
                <ProtectedPlantRoute exact path="/my_plants" component={MyPlants} />
                <ProtectedPlantRoute exact path="/add_garden" component={AddGardens} />
                <ProtectedRoute exact path="/my_gardens" component={MyGardens} />
                <ProtectedRoute exact path="/my_gardens/garden" component={Garden} />
                <ProtectedRoute exact path="/my_calendar" component={MyCalendar} />
            </Switch>
            {/* <Footer /> */}
        </div>
    )
}


export default Router