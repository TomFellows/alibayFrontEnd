import React, { Component } from 'react';
import Carousel from './Carousel.js';
import HighlightArea from './HighlightArea.js'

class PageContent extends Component {

    render () {

        return (<div>
            <Carousel/>
            <HighlightArea/>
        </div>)
    }
}

export default PageContent