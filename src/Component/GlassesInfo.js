import React, { Component } from "react"

export default class GlassesInfo extends Component {
    render() {
        return (
            <div>

                <div id="glasses-info-header">
                    <h2>{this.props.glass.name}</h2>
                    <h3>{this.props.glass.brand}</h3>
                    <h3>Price: ${this.props.glass.price}</h3>
                </div>
                <div className="detailed-data" >
                    <span>Product code:</span>
                    <b>SPR17W_EBRU_F09K1_C_049</b>
                    <br/>
                    <br/>
                    <p>Acetate sunglasses with an oversized, geometric design. The bold frame front has an avant-garde silhouette defined by the extreme angled cut of the outer corners. The three-dimensional design of the temples is decorated with an iconographic interpretation of the traditional Prada triangle logo.</p>
                    <ul className="detail-list">
                        <li>Acetate frame front in Aqua</li>
                        <li>Frame not compatible with graduated lenses</li>
                        <li>100% UVA / UVB protection</li>
                        <li>Standard fit</li>
                        <li>Lens-nose-temple measurements: 49-20-145 mm</li>
                        <li>Article comes with dedicated packaging</li>
                    </ul>
                </div>



            </div>
        )
    }
}