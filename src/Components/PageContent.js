import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

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

    renderAccountDetails () {
        return (<div>
            <AccountDetails/>
            </div>)

    }



    render () {
        return(
        <div>
        <Route exact={true} path='/' render={this.renderMainPage} />
        <Route exact={true} path='/items' render={this.renderFilteredItems} />
        <Route exact={true} path='/accountdetails' render={this.renderAccountDetails} />
        
        </div>
        )
        
    }
}

export default PageContent