import React, { Component } from "react"
// import { Helmet } from 'react-helmet';
import HomeImage from '../images/sunglasses.jpeg'
import EyeGlassesImage from '../images/eyeglasses4.jpg'
export default class MainHomeContainer extends Component {
    render() {
        return (
     
            <div className="home-image-container">
                {/* <Helmet bodyAttributes={{ style: 'background-color : #000' }} /> */}
                <div className="home-inner"> 
    <div className="home-text">
        <div>
             <p>Each pair is equipped with scratch-resistant lenses
         that block 100% of UVA and UVB rays.
          Starting at $95, with free shipping and free returns.
             </p>
             <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyTint()
                    }}
                        className="shop-glasses-btn" >
                              Shop Sunglasses
             </button>
             </div>
    </div>

    <div className="home-img">
    <img src={HomeImage}></img>
    </div>

    <div className="home-img">
    <img src={EyeGlassesImage}></img>
    </div>

    <div className="home-text">
      <div>
        <p>Each pair is equipped with scratch-resistant lenses that block 100% of UVA and UVB rays. Starting at $95, with free shipping and free returns.
        </p>
        <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyClear()
                    }}
                        className="shop-glasses-btn" >
                        Shop Eyeglasses
                        </button>
      </div>
    </div>

  </div>

</div >
        )
    }
}