import React, { Component } from 'react'

export default class ProductsEdit extends Component {
    render() {
        return (
            this.props.tab === 'Products'
            ? 
            <div className='business_products_edit'>
                products
            </div>
            : null
        )
    }
}