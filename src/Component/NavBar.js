import React, { Component } from "react"

export default class NavBar extends Component {
    render() {
        return (
            <div className="filter-sort-div-container">
                <div className="filters-category">
                    <label>
                        <input className="filter" type="checkbox" value="tinted" checked={this.props.showLens.some(value => value === "tinted")} onClick={(e) => this.props.lensSelect(e)} /> Tinted Lens
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="clear" checked={this.props.showLens.some(value => value === "clear")} onClick={(e) => this.props.lensSelect(e)} /> Clear Lens
                    </label>
                </div>

                <div className="filters-category">
                    <label>
                        <input className="filter" type="checkbox" value="Black" checked={this.props.showColor.some(value => value === "Black")} onClick={(e) => this.props.colorSelect(e)} /> Black
                    </label>
                    <label>
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Brown" checked={this.props.showColor.some(value => value === "Brown")} onClick={(e) => this.props.colorSelect(e)} /> Brown
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Pink" checked={this.props.showColor.some(value => value === "Pink")} onClick={(e) => this.props.colorSelect(e)} /> Pink
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Blue" checked={this.props.showColor.some(value => value === "Blue")} onClick={(e) => this.props.colorSelect(e)} /> Blue
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Silver" checked={this.props.showColor.some(value => value === "Silver")} onClick={(e) => this.props.colorSelect(e)} /> Silver
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Gold" checked={this.props.showColor.some(value => value === "Gold")} onClick={(e) => this.props.colorSelect(e)} /> Gold
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Other" checked={this.props.showColor.some(value => value === "Other")} onClick={(e) => this.props.colorSelect(e)} /> Other
                    </label>
                </div>

                <div className="filters-category">
                    <label>
                        <input className="filter" type="checkbox" value="Prada" checked={this.props.showBrand.some(value => value === "Prada")} onClick={(e) => this.props.brandSelect(e)} /> Prada
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Tom Ford" checked={this.props.showBrand.some(value => value === "Tom Ford")} onClick={(e) => this.props.brandSelect(e)} /> Tom Ford
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Warby Parker" checked={this.props.showBrand.some(value => value === "Warby Parker")} onClick={(e) => this.props.brandSelect(e)} /> Warby Parker
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Gentle Monster" checked={this.props.showBrand.some(value => value === "Gentle Monster")} onClick={(e) => this.props.brandSelect(e)} /> Gentle Monster
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Oliver Peoples" checked={this.props.showBrand.some(value => value === "Oliver Peoples")} onClick={(e) => this.props.brandSelect(e)} /> Oliver Peoples
                    </label>
                </div>

                <div className="filters-category">
                    <label>
                        <input className="filter" type="checkbox" value="Acetate" checked={this.props.showMaterial.some(value => value === "Acetate")} onClick={(e) => this.props.materialSelect(e)} /> Acetate
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Metal" checked={this.props.showMaterial.some(value => value === "Metal")} onClick={(e) => this.props.materialSelect(e)} /> Metal
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Other" checked={this.props.showMaterial.some(value => value === "Other")} onClick={(e) => this.props.materialSelect(e)} /> Other
                    </label>
                </div>

                <div className="filters-category">
                    <label>
                        <input className="filter" type="checkbox" value="Men" checked={this.props.showGender.some(value => value === "Men")} onClick={(e) => this.props.genderSelect(e)} /> Men
                    </label>
                    <label>
                        <input className="filter" type="checkbox" value="Women" checked={this.props.showGender.some(value => value === "Women")} onClick={(e) => this.props.genderSelect(e)} /> Women
                    </label>
                </div>

                <div className="div-navbuttons">

                    <button className="sort-Buttons gray-button" value="brand" onClick={(e) => this.props.sortProducts(e.target.value)}>Sort by Brand</button>

                    <br/>

                    <button className="sort-Buttons gray-button" value="price" onClick={(e) => this.props.sortProducts(e.target.value)}>Sort by Price</button>

                </div>
            </div>
        )
    }
}