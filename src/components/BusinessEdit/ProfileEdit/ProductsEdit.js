import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';

export default class ProductsEdit extends Component {
    render() {
        return (
            this.props.products 
            ?
            <div className='business_products_edit'>
                products
            </div>
            : <Spinner />
        )
    }
}