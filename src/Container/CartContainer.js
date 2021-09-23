import React, { Component } from "react"
import CartItem from "../Component/CartItem.js"
import { Link } from "react-router-dom"
import Footer from "../Component/Footer"

export default class CartContainer extends Component {
    render() {
        return (
            <div className="cart-container-div">
                {this.props.myCart.length >= 2
                    ? <div>
                        <h1 className="myShoppingCart">MY SHOPPING CART</h1>
                        <Link to="/collection">
                            <button>
                                Continue shopping
                    </button>
                        </Link>
                        <br />
                        {this.props.myCart.map(item =>
                            <CartItem
                                glasses={item}
                                increaseQuantity={this.props.increaseQuantity}
                                decreaseQuantity={this.props.decreaseQuantity}
                                deleteItem={this.props.deleteItem}
                            />)}
                        <h3>
                            {this.props.myCart.length > 0 ?
                                `Total Price: $${this.props.myCart.map(item => parseInt(item.price) * parseInt(item.quantity)).reduce((a, b) => a + b)}`
                                : "$0"
                            }
                        </h3>
                        <br />
                        <Link to="/compare">
                            <button className="comparison-button">
                                COMPARE OPTICALS
                    </button>
                        </Link>
                        <br />
                        <button className="checkout-button">
                            CHECKOUT
                    </button>
                    </div>
                    : <div>
                        <h1 className="myShoppingCart">MY SHOPPING CART</h1>
                        <Link to="/collection">
                            <button className="gray-button">
                                Continue shopping
                              </button>
                        </Link>
                        <br />
                        {this.props.myCart.map(item =>
                            <CartItem
                                glasses={item}
                                increaseQuantity={this.props.increaseQuantity}
                                decreaseQuantity={this.props.decreaseQuantity}
                                deleteItem={this.props.deleteItem}
                            />)}
                        <h3>
                            {this.props.myCart.length > 0 ?
                                `Total Price: $${this.props.myCart.map(item => parseInt(item.price) * parseInt(item.quantity)).reduce((a, b) => a + b)}`
                                : "$0"
                            }
                        </h3>
                        <br />
                        <button className="checkout-button">
                            CHECKOUT
                        </button>
                    </div>}

                <Footer />
            </div>
        )
    }
}