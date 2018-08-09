import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ItemDetails from './ItemDetails.js'

import Carousel from './Carousel.js';
import HighlightArea from './HighlightArea.js'
import FilteredItemsPage from './FilteredItemsPage.js';
import AccountDetails from './AccountDetails.js';
import ItemsBought from './ItemsBought.js';
import ItemsSold from './ItemsSold.js';


class PageContent extends Component {


    constructor () {

        super()

        this.renderMainPage = this.renderMainPage.bind(this)
        this.renderFilteredItems = this.renderFilteredItems.bind(this)
        this.renderAccountDetails = this.renderAccountDetails.bind(this)
        this.renderItemDetails = this.renderItemDetails.bind(this)
        this.renderSeller = this.renderSeller.bind(this)
        this.renderBrand = this.renderBrand.bind(this)
        this.renderItemsBought = this.renderItemsBought.bind(this)
        this.renderItemsSold = this.renderItemsSold.bind(this)
        this.renderPriceRange = this.renderPriceRange.bind(this)
    }

    renderMainPage () {
        return (<div>
          
           
           <Carousel/>
            <HighlightArea/>
           
            </div>)
    }

    renderFilteredItems () {

        return (<div>
            <FilteredItemsPage/>
            </div>)

    }

    renderItemDetails (routerData) {

        let renderedItemId = routerData.match.params.itemId
        
        return (<div>
            <ItemDetails userId={this.props.userId} itemId={renderedItemId}/>
            </div>)

    }

    renderAccountDetails () {
        return (<div>
            <AccountDetails userId={this.props.userId} username={this.props.username}/>
            </div>)

    }

    renderItemsBought () {
        return (<div>
            <ItemsBought userId={this.props.userId} username={this.props.username} />
            </div>)

    }

    renderItemsSold () {
        return (<div>
            <ItemsSold userId={this.props.userId} username={this.props.username} />
            </div>)

    }

    renderSeller (routerData) {

        let renderedSeller = routerData.match.params.username
        
        
        let seller = this.props.users.filter(item => {
            return item.username === renderedSeller.toString()})[0]

        return (<FilteredItemsPage seller={seller} key={seller.userId}/>)
    }
    
    renderBrand(routerData) {

        let renderedBrand = routerData.match.params.brandName

        let brand = this.props.brands.filter(item => {
            return item.brandName === renderedBrand.toString()})[0]
        
        return (<FilteredItemsPage brand={brand} key={renderedBrand}/>)
    }

    renderPriceRange(routerData) {
        let renderedPriceRange = routerData.match.params.price

        let price = this.props.priceRanges.filter(item => {
            return item.lowerLimit.toString() === renderedPriceRange.toString()})[0]
        
        return (<FilteredItemsPage price={price} key={renderedPriceRange}/>)

    }
      
  



    render () {
        return(
        <div>
        <Route exact={true} path='/' render={this.renderMainPage} />
        <Route exact={true} path='/items' render={this.renderFilteredItems} />
        <Route exact={true} path='/accountdetails' render={this.renderAccountDetails} />
        <Route exact={true} path='/itemsbought' render={this.renderItemsBought} />
        <Route exact={true} path='/itemssold' render={this.renderItemsSold} />

        <Route exact={true} path='/itemdetails/:itemId' render={this.renderItemDetails} />
        <Route exact={true} path='/seller/:username' render={this.renderSeller}/>
        <Route exact={true} path='/brand/:brandName' render={this.renderBrand} />
        <Route exact={true} path='/pricerange/:price' render={this.renderPriceRange} />

        
        </div>
        )
        
    }
}

export default PageContent