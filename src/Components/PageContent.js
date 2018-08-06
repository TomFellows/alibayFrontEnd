import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ItemDetails from './ItemDetails.js'

import Carousel from './Carousel.js';
import HighlightArea from './HighlightArea.js'
import FilteredItemsPage from './FilteredItemsPage.js';
import AccountDetails from './AccountDetails.js';

class PageContent extends Component {


    constructor () {

        super()

        this.renderMainPage = this.renderMainPage.bind(this)
        this.renderFilteredItems = this.renderFilteredItems.bind(this)
        this.renderAccountDetails = this.renderAccountDetails.bind(this)
        this.renderItemDetails = this.renderItemDetails.bind(this)
        this.renderSeller = this.renderSeller.bind(this)
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
            <AccountDetails/>
            </div>)

    }

    renderSeller (routerData) {

        let renderedSeller = routerData.match.params.name
        
        
        let seller = this.props.users.filter(item => {
            return item.name === renderedSeller.toString()})[0]
       


        
        return (<FilteredItemsPage seller={seller} key={seller.userId}/>)
    }
    



    render () {
        return(
        <div>
        <Route exact={true} path='/' render={this.renderMainPage} />
        <Route exact={true} path='/items' render={this.renderFilteredItems} />
        <Route exact={true} path='/accountdetails' render={this.renderAccountDetails} />
        <Route exact={true} path='/itemdetails' render={this.renderItemDetails} />
        <Route exact={true} path='/seller/:name' render={this.renderSeller}/>
        
        </div>
        )
        
    }
}

export default PageContent