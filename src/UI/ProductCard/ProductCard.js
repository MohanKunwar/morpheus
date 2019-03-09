import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';
class ProductCard extends Component {
    render() {
        console.log('product card prop', this.props.product)
        return (
            <div className='product-card'>
            <div className='product-img-container'>
            <img  src={this.props.product.photo} alt={this.props.product.name} />
            </div>
            <div className='product-card-info'>
            <Link className='search-item' key={this.props.index} to={`/product/${this.props.product.slug}`}>
            <h5 className="product_heading">
            {this.props.product.name}
            </h5></Link>
            <div className="product_price">
            Rs. {this.props.product.price}
            </div>
            <div className="product_business_name">
            <Link className='search-item' key={this.props.index} to={`/product/${this.props.product.business.slug}`}>{this.props.product.business.name}</Link>
            </div>
            </div>
            </div>
        )
    }
}
export default ProductCard;