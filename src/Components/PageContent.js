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

    renderItemDetails () {
        return (<div>
            <ItemDetails/>
            </div>)

    }

    renderAccountDetails () {
        return (<div>
            <AccountDetails userId={this.props.userId} username={this.props.username}/>
            </div>)

    }

    renderItemsBought () {
        return (<div>
            <ItemsBought/>
            </div>)

    }

    renderItemsSold () {
        return (<div>
            <ItemsSold/>
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
        
        return (<FilteredItemsPage brand={brand} />)
    }

      
  



    render () {
        return(
        <div>
        <Route exact={true} path='/' render={this.renderMainPage} />
        <Route exact={true} path='/items' render={this.renderFilteredItems} />
        <Route exact={true} path='/accountdetails' render={this.renderAccountDetails} />
        <Route exact={true} path='/itemsbought' render={this.renderItemsBought} />
        <Route exact={true} path='/itemssold' render={this.renderItemsSold} />
            
        <Route exact={true} path='/itemdetails' render={this.renderItemDetails} />
        <Route exact={true} path='/seller/:username' render={this.renderSeller}/>
        <Route exact={true} path='/brand/:brandName' render={this.renderBrand} />

        
        </div>
        )
        
    }
}

export default PageContent