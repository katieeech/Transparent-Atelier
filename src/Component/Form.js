import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            title: "",
            rating: 0,
            review: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitReview = (e) => {
        e.preventDefault()
        console.log([...this.props.oldReviews, this.state])

        let newReview = {
            username: this.state.username,
            title: this.state.title,
            rating: parseInt(this.state.rating),
            review: this.state.review
        }

        fetch(`http://localhost:3001/glasses/${this.props.glassesId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                reviews: [...this.props.oldReviews, newReview]

            })
        })
            .then((r) => r.json())
            .then((newGlassesObj) =>
                this.props.postReview(newGlassesObj)
            );
    }

    render() {

        return (
            <div className="review-form">
                <form onChange={(e) => { this.handleInput(e) }} >
                    <input className="username-title-input" label="title" placeholder="Title" name="title" value={this.state.title} />
                    <br />
                    <input className="username-title-input" label="username" placeholder="Username" name="username" value={this.state.name} />
                    <br />
                    <p>Review:</p>
                    <textarea className="review-input" label="review" name="review" value={this.state.review}></textarea>
                    <br />
                    <input className="form-submit-button gray-button" type="submit" onClick={(e) => this.submitReview(e)}></input>
                </form>
            </div>
        )
    }
}