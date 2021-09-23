import React, { Component } from "react";

export default class ImgThumbnail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.images[0]
        }
    }

    handleImg = (img) => {
        this.setState({
            display: img
        })
    }


    render() {

        return (
            <div>
                <img className="display-image-main-image" src={this.state.display}></img>
                {this.props.images.map(img =>
                    <div>
                        <img className="display-image-thumbnail-image" src={img} onClick={() => this.handleImg(img)}></img>
                        {/* style={{ height: '200px' }} */}
                    </div>)}
            </div>
        )
    }
}