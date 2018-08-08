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



    render() {

        let sellers = this.props.users.map(item => (<Link class="dropdown-item" to={'/seller/' + item.username}>{item.username}</Link>))



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
                            <Link class="dropdown-item" to='/items'>Filtered Items</Link>
                            <Link class="dropdown-item" to='/itemdetails'>Item details</Link>
                        </div>
                    </div>
                    </div>

                    <div className = "menu">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            RayBan
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    </div>

                    <div className = "menu">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Prada
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    </div>

                    <div className = "menu">
                     <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lacoste
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    </div>

                



                </div>

            </div>
        );
    }
}


export default Menu;