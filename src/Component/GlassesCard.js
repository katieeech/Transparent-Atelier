import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class GlassesCard extends Component {

    render() {
        return (
            <div >
                <Link key={this.props.glasses.id} to={`/collection/${this.props.glasses.id}`} className="link-to-glassesid">
                    <div className="glasses-card">
                        <img src={this.props.glasses.image[0]} alt="glasses image" className="card-image"></img>
                        <h4 className="glasses-name">{this.props.glasses.name}</h4>
                        <p className="glasses-brand">{this.props.glasses.brand}</p>
                        <p className="glasses-price">${this.props.glasses.price}</p>
                    </div >
                </Link>
            </div>
        )
    }
}