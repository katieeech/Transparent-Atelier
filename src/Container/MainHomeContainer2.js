import React, { Component } from "react"
import { Helmet } from 'react-helmet';

export default class MainHomeContainer2 extends Component {
    render() {
        return (
            <div id="home-image-container">
                <Helmet bodyAttributes={{ style: 'background-color : #000' }} />

                <div className="clear-lenses">
                    <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyClear()
                    }}
                        className="clear-lenses-btn" >
                        Eyeglasses
                        </button>
                </div>

                <div className="tinted-lenses">
                    <button onClick={() => {
                        this.props.history.push("/collection")
                        this.props.showOnlyTint()
                    }}
                        className="tinted-lenses-btn">
                        Sunglasses
                </button>
                </div>

            </div >
        )
    }
}