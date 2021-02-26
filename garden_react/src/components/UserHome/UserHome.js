import React from 'react'
import './UserHome.css'

function UserHome(props) {
    return (
        <div className="userHomeBody">
            <h1>Welcome {props.userName}</h1>
        </div>
    )
}

export default UserHome
