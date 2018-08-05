import React, { Component } from 'react';

import '../CSS/PopUpWindow.css'



class PopUpWindow extends Component {

    constructor() {

        super()

        this.closeWindow = this.closeWindow.bind(this)


    }


    closeWindow() {
        this.props.removeSelf()

    }



    render() {

        return (<div className='popUpwindow'>
        <div className='innerPopupWindow'>
        <button onClick={this.closeWindow} className='closeButton'>X</button>
        {this.props.children}
        </div>

        </div>)

    }
}

export default PopUpWindow