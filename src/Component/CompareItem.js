import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CompareItem extends Component {
    render() {
        return (
            <div className="img-comparison-parent-div">

                <div className="img-comparison">
                    <img className="img-item-compared" src={this.props.glasses.image[0]} alt="glasses"></img>
                    <br />
                    <h2>{this.props.glasses.name}</h2>
                    <br />
                    <h3>{this.props.glasses.brand}</h3>
                    <br />
                    <h4>${this.props.glasses.price}</h4>
                    <br />
                    {this.props.myCart.length <= 2
                        ? <Link className="link-to-cart" to="/cart">
                            <button gray-button className="x-btn gray-button" onClick={() => this.props.handleDelete(this.props.glasses)}>X</button>
                        </Link>
                        : <button className="x-btn gray-button" onClick={() => this.props.handleDelete(this.props.glasses)}>X</button>}
                </div>


            </div >
        )
    }
}