import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Global.css';
import Image from './Image.js';
import HighlightArea from './HighlightArea.js'
import Carousel from './Carousel.js'

class Menu extends Component {
    constructor(props) {
        super(props)
    }
    search(evt){
        evt.preventDefault();
        
    }


    render() {

        let sellers = this.props.users.map(item => (<Link class="dropdown-item" to={'/seller/' + item.username}>{item.username}</Link>))

        let brands = this.props.brands.map(item => (<Link class="dropdown-item" to={'/brand/' + item.brandName}>{item.brandName}</Link>))

        let priceRanges = this.props.priceRanges.map(item => (<Link class="dropdown-item" to={'/pricerange/' + item.lowerLimit}> {item.lowerLimit} to {item.upperLimit} </Link>))

        return (
            <div className = "menuBackground">

               

                <div className="parentOfHeaders">

                    {/* <div className = "menu" className = "logo">
                        <Image src = "logo.png"/>
                    </div> */}
                    
                    <div className = "menu">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sellers
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {sellers}
                            
                        </div>
                    </div>
                    </div>

                    <div className = "menu">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Brands
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {brands}
                        </div>
                    </div>
                    </div>

                    <div className = "menu">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Price
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {priceRanges}
                        </div>
                    </div>
                    </div>

                    
                    <div className = "menu">
                    <input className = "searchbar" type = "search" placeholder = "Search..."/>
                    <button className = "searchbutton" onClick = {this.search}>GO</button>
                    </div>
                  


                </div>

            </div>
        );
    }
}


export default Menu;