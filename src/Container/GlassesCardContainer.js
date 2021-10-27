import React, { Component } from "react"
import GlassesFilter from "../Component/GlassesFilter"
import GlassesCard from "../Component/GlassesCard"
import Footer from "../Component/Footer"
// import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class GlassesCardContainer extends Component {
    render() {
        return (
            <div className="glasses-collection-outer-container">
                <div className="collection-top-image-div">
                </div>

                <div className="glasses-collection-container">
                    <GlassesFilter
                        showLens={this.props.showLens}
                        showTinted={this.props.showTinted}
                        showClear={this.props.showClear}
                        filterTint={this.props.filterTint}
                        filterClear={this.props.filterClear}
                        colorSelect={this.props.colorSelect}
                        brandSelect={this.props.brandSelect}
                        lensSelect={this.props.lensSelect}
                        genderSelect={this.props.genderSelect}
                        materialSelect={this.props.materialSelect}
                        sortProducts={this.props.sortProducts}
                        showColor={this.props.showColor}
                        showBrand={this.props.showBrand}
                        showGender={this.props.showGender}
                        showMaterial={this.props.showMaterial}
                    />
                    <div className="glasses-card-container">
                        {this.props.glassesCollection.map(glasses =>
                            <div className="glasses-card">
                                <GlassesCard glasses={glasses} />
                            </div>
                            // <div>
                            //     <Route exact path={`${this.props.match.url}/:glassesId`} render={(routerProps) => <GlassesCard glasses={glasses} {...routerProps} />} />
                            // </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}