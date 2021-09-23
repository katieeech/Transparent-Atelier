import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class CartItem extends Component {
    render() {
        return (
            <div className="cartitem-div">
                <Link to={`/collection/${this.props.glasses.id}`}>
                    <img className="cart-item-image" src={this.props.glasses.image[0]} alt="glasses"></img>
                </Link>
                <div id="cart-item-info">
                    <h2>{this.props.glasses.name}</h2>
                    <h3>{this.props.glasses.brand}</h3>
                    <h4>${this.props.glasses.price}</h4>
                    <p>Quantity: {this.props.glasses.quantity}</p>

                    <div className="cart-quantity-div">
                        <button className="gray-button" onClick={() => this.props.increaseQuantity(this.props.glasses)}>Increase Quanity</button>
                        <button className="gray-button" onClick={() => this.props.decreaseQuantity(this.props.glasses)}>Decrease Quanity</button>
                        <button className="gray-button" onClick={() => this.props.deleteItem(this.props.glasses)}>Delete Item</button>
                    </div>
                </div>
            </div>
        )
    }
}