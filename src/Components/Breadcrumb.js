import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../CSS/Breadcrumb.css'

class BreadcrumbBare extends Component {

    render() {

        let currentURL = this.props.location.pathname

        let breadcrumb = '';

        if (currentURL === '/') {
            breadcrumb = 'Home'
        } else {

            let arr = currentURL.split('/').slice();

            arr = arr.map(item => {
                if (item === "accountdetails") {return 'Account details'}
                if (item === "itemdetails") {return 'Item details'}
                if (item === 'items') {return 'Items'}
                if (item === 'seller') {return 'Seller'}

                return item
            })

            arr.splice(0, 1);

            breadcrumb = arr.join(' > ')
        }



        return (<div className='breadcrumb'>{breadcrumb}</div>)
    }
}

let Breadcrumb = withRouter(BreadcrumbBare)

export default Breadcrumb