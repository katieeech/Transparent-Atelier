import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHomeContainer from "./Container/MainHomeContainer";
import CartContainer from "./Container/CartContainer";
import CompareContainer from "./Container/CompareContainer";
import GlassesCardContainer from "./Container/GlassesCardContainer";
import DisplayContainer from "./Container/DisplayContainer";
import Header from "./Component/Header";



class App extends Component {
  constructor() {
    super()

    this.state = {
      glassesCollection: [],
      myCart: [],
      showLens: [],
      showColor: [], //["Black", "Red"]
      showBrand: [],//["Prada", "Tom Ford"]
      showGender: [],
      showMaterial: [],
      sortParam: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/glasses")
      .then((r) => r.json())
      .then((glassesArray) => {
        this.setState({
          glassesCollection: glassesArray
        })
      });
  }

  addToCart = (glassesObj) => {
    if (!this.state.myCart.find(glasses => glasses.id === glassesObj.id)) {
      let updatedObj = { ...glassesObj }
      updatedObj.quantity = 1
      this.setState({
        myCart: [...this.state.myCart, updatedObj]
      })
    } else {
      let updatedObj = { ...glassesObj }
      updatedObj.quantity = this.state.myCart.find(glasses => glasses.id === glassesObj.id).quantity + 1
      let overwritten = this.state.myCart.map(glasses => glasses.id === updatedObj.id ? updatedObj : glasses)
      this.setState({
        myCart: overwritten
      })
    }
  }

  filterTint = (e) => {
    console.log(e.target.checked)
    this.setState({
      showTinted: e.target.checked
    })
  }

  filterClear = (e) => {
    console.log(e.target.checked)
    this.setState({
      showClear: e.target.checked
    })
  }

  lensSelect = (e) => {
    if (e.target.checked) {
      if (!this.state.showLens.find(lens => e.target.value === lens)) {
        this.setState({
          showLens: [...this.state.showLens, e.target.value]
        })
      }
    } else if (!e.target.checked) {
      let filteredOutshowLens = this.state.showLens.filter(lens => lens !== e.target.value)
      this.setState({
        showLens: filteredOutshowLens
      })
    }
  }

  colorSelect = (e) => {
    if (e.target.checked) {
      if (!this.state.showColor.find(color => e.target.value === color)) {
        this.setState({
          showColor: [...this.state.showColor, e.target.value]
        })
      }
    } else if (!e.target.checked) {
      let filteredOutshowColor = this.state.showColor.filter(color => color !== e.target.value)
      this.setState({
        showColor: filteredOutshowColor
      })
    }
  }

  brandSelect = (e) => {
    if (e.target.checked) {
      if (!this.state.showBrand.find(brand => e.target.value === brand)) {
        this.setState({
          showBrand: [...this.state.showBrand, e.target.value]
        })
      }
    } else if (!e.target.checked) {
      let filteredOutshowBrand = this.state.showBrand.filter(brand => brand !== e.target.value)
      this.setState({
        showBrand: filteredOutshowBrand
      })
    }
  }

  genderSelect = (e) => {
    if (e.target.checked) {
      if (!this.state.showGender.find(gender => e.target.value === gender)) {
        this.setState({
          showGender: [...this.state.showGender, e.target.value]
        })
      }
    } else if (!e.target.checked) {
      let filteredOutshowGender = this.state.showGender.filter(gender => gender !== e.target.value)
      this.setState({
        showGender: filteredOutshowGender
      })
    }
  }

  materialSelect = (e) => {
    if (e.target.checked) {
      if (!this.state.showMaterial.find(material => e.target.value === material)) {
        this.setState({
          showMaterial: [...this.state.showMaterial, e.target.value]
        })
      }
    } else if (!e.target.checked) {
      let filteredOutshowMaterial = this.state.showMaterial.filter(material => material !== e.target.value)
      this.setState({
        showMaterial: filteredOutshowMaterial
      })
    }
  }

  showOnlyTint = () => {
    this.setState({
      showLens: ["tinted"]
    })
  }

  showOnlyClear = () => {
    this.setState({
      showLens: ["clear"]
    })
  }

  sortProducts = (parameter) => {
    this.setState({
      sortParam: parameter
    })
  }

  postReview = (newGlassesObj) => {
    let updatedCollection = this.state.glassesCollection.map(glassesObj => glassesObj.id === newGlassesObj.id ? newGlassesObj : glassesObj)
    console.log(updatedCollection)
    this.setState({
      glassesCollection: updatedCollection
    })
  }

  handleDelete = (dislikedObj) => {
    let filteredOutMyCart = this.state.myCart.filter(glasses => glasses.id !== dislikedObj.id)
    this.setState({
      myCart: filteredOutMyCart
    })
  }

  increaseQuantity = (glassesObj) => {
    let updatedGlasses = glassesObj
    updatedGlasses.quantity = updatedGlasses.quantity + 1
    let updatedCart = this.state.myCart.map(glasses => glasses.id === glassesObj.id ? updatedGlasses : glasses)
    this.setState({
      myCart: updatedCart
    })
  }

  decreaseQuantity = (glassesObj) => {
    if (glassesObj.quantity === 1) {
      let updatedCart = this.state.myCart.filter(glasses => glassesObj.id !== glasses.id)
      this.setState({
        myCart: updatedCart
      })
    } else {
      let updatedGlasses = glassesObj
      updatedGlasses.quantity = updatedGlasses.quantity - 1
      let updatedCart = this.state.myCart.map(glasses => glasses.id === glassesObj.id ? updatedGlasses : glasses)
      console.log(updatedCart)
      this.setState({
        myCart: updatedCart
      })
    }
  }

  deleteItem = (glassesObj) => {
    let updatedCart = this.state.myCart.filter(glasses => glassesObj.id !== glasses.id)
    this.setState({
      myCart: updatedCart
    })
  }


  render() {

    let filteredGlasses = this.state.glassesCollection.map(glassesObj => {
      let typeSatisfied = false
      if (this.state.showLens.length !== 0) {
        typeSatisfied = this.state.showLens.some(lens => lens === glassesObj.type)
      } else { typeSatisfied = true }
      let colorSatisfied = false
      if (this.state.showColor.length !== 0) {
        colorSatisfied = this.state.showColor.some(color => color === glassesObj.color)
      } else { colorSatisfied = true }
      let brandSatisfied = false
      if (this.state.showBrand.length !== 0) {
        brandSatisfied = this.state.showBrand.some(brand => brand === glassesObj.brand)
      } else { brandSatisfied = true }
      let genderSatisfied = false
      if (this.state.showGender.length !== 0) {
        if (glassesObj.gender === "Unisex") {
          genderSatisfied = true
        } else {
          genderSatisfied = this.state.showGender.some(gender => gender === glassesObj.gender)
        }
      } else { genderSatisfied = true }
      let materialSatisfied = false
      if (this.state.showMaterial.length !== 0) {
        materialSatisfied = this.state.showMaterial.some(material => material === glassesObj.material)
      } else { materialSatisfied = true }

      if (typeSatisfied && colorSatisfied && brandSatisfied && genderSatisfied && materialSatisfied) { return glassesObj }
    })



    let filteredOutUndefined = filteredGlasses.filter(obj => obj)

    let sortedCollection = filteredOutUndefined
    if (this.state.sortParam === "price") {
      sortedCollection = sortedCollection.sort((a, b) => a.price - b.price)
    } else if (this.state.sortParam === "brand") {
      sortedCollection = sortedCollection.sort((a, b) => a.brand.localeCompare(b.brand))
    }



    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/"
            render={(routerProps) => <MainHomeContainer
              {...routerProps}
              showOnlyClear={this.showOnlyClear}
              showOnlyTint={this.showOnlyTint} />} />
          <Route exact path="/collection"
            render={(routerProps) => <GlassesCardContainer
              {...routerProps}
              glassesCollection={sortedCollection}
              showLens={this.state.showLens}
              showTinted={this.state.showTinted}
              showClear={this.state.showClear}
              filterTint={this.filterTint}
              filterClear={this.filterClear}
              lensSelect={this.lensSelect}
              colorSelect={this.colorSelect}
              brandSelect={this.brandSelect}
              genderSelect={this.genderSelect}
              materialSelect={this.materialSelect}
              sortProducts={this.sortProducts}
              showColor={this.state.showColor}
              showBrand={this.state.showBrand}
              showGender={this.state.showGender}
              showMaterial={this.state.showMaterial}
            />} />

          <Route exact path="/collection/:glassId"
            render={(routerProps) => <DisplayContainer
              {...routerProps}
              glasses={sortedCollection}
              addToCart={this.addToCart}
              postReview={this.postReview}
            />} />

          <Route exact path="/cart"
            render={(routerProps) => <CartContainer
              {...routerProps}
              myCart={this.state.myCart}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
              deleteItem={this.deleteItem}
            />} />
          <Route exact path="/compare"
            render={(routerProps) => <CompareContainer
              {...routerProps}
              myCart={this.state.myCart}
              handleDelete={this.handleDelete}
            />} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
