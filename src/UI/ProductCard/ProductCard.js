import React, { Component } from 'react';
class ProductCard extends Component {
    render() {
        // console.log('product card prop', this.props.product)
        return (
            <div className='product-card'>
            <div className='product-img-container'>
            <img  src={this.props.product.photo} alt={this.props.product.name} />
            </div>
            <div className='product-card-info'>
            {this.props.product.name}
            {this.props.product.price}
            {this.props.product.business.name}
            </div>
            </div>
        )
    }
}
export default ProductCard;