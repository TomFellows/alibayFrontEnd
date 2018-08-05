import React, { Component } from 'react';
import Carousel from './Carousel.js';
import HighlightArea from './HighlightArea.js'
import FilteredItemsPage from './FilteredItemsPage.js';

class PageContent extends Component {

    render () {

        return (<div>
            {/* <Carousel/>
            <HighlightArea/> */}
            <FilteredItemsPage/>
        </div>)
    }
}

export default PageContent