import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Header extends Component {
    render() {
        // const cartlogo = require('../images/carts.png')
        return (
            <div className="header-container">
                <Link to="/" className="link-to-home">
                    <div className="websiteTitle">APP-TIQUE VISUELLE</div>
                </Link>
                <Link to="/cart">
                    {/* <div className="mycart-btn-container"> */}
                    <button className="mycart-btn">MY CART </button>
                    {/* </div> */}
                </Link>
            </div>
        )
    }
}