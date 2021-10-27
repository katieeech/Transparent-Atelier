import React, { Component } from "react"
// import { Helmet } from 'react-helmet';
import HomeImage from '../images/sunglasses.jpeg'
import EyeGlassesImage from '../images/eyeglasses4.jpg'
export default class MainHomeContainer extends Component {
    render() {
        return (
            <div className="home-image-container">
                {/* <Helmet bodyAttributes={{ style: 'background-color : #000' }} /> */}

    <div className="home-text">
        <div><h2>Shop Sunglasses</h2>
    <p>Each pair is equipped with scratch-resistant lenses that block 100% of UVA and UVB rays. Starting at $95, with free shipping and free returns.
</p></div>
    
 
    </div>
    <div className="home-img">
    <img src={HomeImage}></img>
    </div>

    <div className="home-img">
    <img src={EyeGlassesImage}></img>
    </div>

    <div className="home-text">
    <div><h2>Shop eyeglasses</h2>
    <p>Each pair is equipped with scratch-resistant lenses that block 100% of UVA and UVB rays. Starting at $95, with free shipping and free returns.
</p></div>
       </div>

{/* <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyClear()
                    }}
                        className="clear-lenses-btn" >
                        Eyeglasses
                        </button>
                        <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyTint()
                    }}
                        className="tinted-lenses-btn">
                        Sunglasses
                </button> */}




            </div >
        )
    }
}