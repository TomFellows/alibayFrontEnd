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
<<<<<<< HEAD
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
        
=======
             <Carousel/>
            <HighlightArea/> 
            {/* <FilteredItemsPage/> */}
        </div>)
>>>>>>> e04d76ff00aed80ff1c50a51f9ae70c63d0714b7
    }
}

export default PageContent