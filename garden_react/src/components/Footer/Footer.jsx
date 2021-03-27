import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div style={{ margin: '0 20px'}}>© Nick Black 2021</div>
            <div style={{ margin: '0 20px', display: 'flex'}}>
                <div style={{ margin: '0 20px'}}>about</div>
                <div style={{ margin: '0 20px'}}>github logo</div>
            </div>
        </div>
    )
}

export default Footer
