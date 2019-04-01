import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './productCard.css';
class BusinessProductCard extends Component {
    render() {
        console.log('product card prop', this.props.product)
        return (
            <div className='product-card'>
            <div className='product-img-container'>
            {
                this.props.product.photo
                ?
                <img  src={this.props.product.photo} alt={this.props.product.name} />
                :
                <img src={require('../../assets/images/khoz-ph.jpg')} alt={this.props.product.name} />
            }
            </div>
            <div className='product-card-info'>
            <Link className='search-item' key={this.props.index} to={`/product/${this.props.product.slug}`}>
            <div className="hover_product"><p className="product_heading">
            {this.props.product.name}
            </p></div></Link>
            <div className="product_price">
            Rs. {this.props.product.price}
            </div>
            {/* <div className="product_business_name">
            <Link className='search-item' key={this.props.index} to={`/product/${this.props.product.business.slug}`}>{this.props.product.business.name}</Link>
            </div> */}
            </div>
            </div>
        )
    }
}
export default BusinessProductCard;