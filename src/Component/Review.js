import React, { Component } from "react"

export default class Review extends Component {
    render() {
        return (
            <div className="review-container-div">
                <h3 className="review-title">{this.props.review.title}</h3>
                <p className="review-username">{this.props.review.username}</p>
                <p className="review"> {this.props.review.review}</p>
            </div>
        )
    }
}