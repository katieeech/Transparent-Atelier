import React, { Component } from "react";
import CompareItem from "../Component/CompareItem"
import Footer from "../Component/Footer"

export default class CompareContainer extends Component {
    render() {
        return (
            <div >
                <p className="compare-p">Compare glasses
                <br />
                Click the button below the glasses to delete the item.
                <br />
                Select the right pair for you.</p>
                <div className="compare-page">
                    <div className="compare-container-div">
                        {this.props.myCart.slice(0, 2).map(glasses =>
                            <CompareItem
                                glasses={glasses}
                                handleDelete={this.props.handleDelete}
                                myCart={this.props.myCart}
                            />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}