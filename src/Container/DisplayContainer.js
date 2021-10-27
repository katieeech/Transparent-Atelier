import React, { Component } from "react"
import GlassesInfo from "../Component/GlassesInfo"
import Review from "../Component/Review"
import Form from "../Component/Form"
import { Link } from "react-router-dom"
import ImgThumbnail from "../Component/ImgThumbnail"


const DisplayContainer = ({ match, glasses, addToCart, postReview }) => {

    let glass = glasses.find(glass => glass.id == match.params.glassId)
    // debugger
    return (
        <div className="display-container-wrapper">
                <div className="display-background"></div>
            {glasses.length > 0
                ?
                <div className="display-container-div">

                   <div className="display-image-div">
                        <ImgThumbnail images={glass.image} />
                    </div>

                    <div className="display-info-div">
                        <div>
                            <GlassesInfo glass={glass} />
                        </div>
                        <div className="add-to-cart-button">
                            <Link to="/cart">
                                <button className="gray-button" onClick={() => addToCart(glass)}>Add To Cart</button>
                            </Link>
                        </div>
                        <div>
                            <Form
                                oldReviews={glass.reviews}
                                glassesId={glass.id}
                                postReview={postReview}
                            />
                            {glass.reviews.map(review => <Review review={review} />)}
                        </div>
                </div>

                </div>
                : null}
   
        </div>
    );
}

export default DisplayContainer;
