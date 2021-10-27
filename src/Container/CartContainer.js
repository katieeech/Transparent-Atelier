import React, { Component } from "react"
import CartItem from "../Component/CartItem.js"
import { Link } from "react-router-dom"

export default class CartContainer extends Component {
    render() {
        return (
            <div className="cart-container-div">
                {this.props.myCart.length >= 2
                    ? <div>
                        <h1 className="myShoppingCart">MY SHOPPING CART</h1>
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

                        <div className="cart-btn-container">
                        <Link to="/compare">
                            <button className="comparison-button">
                                COMPARE OPTICALS
                        </button>
                        </Link>
                        <button className="checkout-button">
                            CHECKOUT
                         </button>
          
                         <Link to="/collection">
                            <button className="continue-shopping-btn">
                                Continue shopping
                           </button>
                        </Link>
                        </div>

                    </div>
                    : <div>
                        <h1 className="myShoppingCart">MY SHOPPING CART</h1>


                        {this.props.myCart.map(item =>
                            <CartItem
                                glasses={item}
                                increaseQuantity={this.props.increaseQuantity}
                                decreaseQuantity={this.props.decreaseQuantity}
                                deleteItem={this.props.deleteItem}
                            />)}
                        <h3 className="total-price">
                            {this.props.myCart.length > 0 ?
                                `Total Price: $${this.props.myCart.map(item => parseInt(item.price) * parseInt(item.quantity)).reduce((a, b) => a + b)}`
                                : "$0"
                            }
                        </h3>

                    <div className="cart-btn-container">
                        <button className="checkout-button">
                            CHECKOUT
                        </button>
                        <Link to="/collection">
                            <button className="continue-shopping-btn">
                                CONTINUE SHOPPING
                              </button>
                        </Link>
                        </div>
           
                    </div>}

            </div>
        )
    }
}