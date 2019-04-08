import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BusinessProductCard.css';
// import './productCard.css';
class BusinessProductCard extends Component {
    render() {
        console.log('product card prop', this.props.product)
        return (
            <div className='business_product-card'>
            <div className='business_product-img-container'>
            {
                this.props.product.photo
                ?
                <img  src={this.props.product.photo} alt={this.props.product.name} />
                :
                <img src={require('../../assets/images/khoz-ph.jpg')} alt={this.props.product.name} />
            }
            </div>
            <div className='business_product-card-info'>
            <p className="business_product_heading">
            {this.props.product.name}
            </p>
            <h3 className="business_product_price">
            Rs. {this.props.product.price}
            </h3>
            <p className="product_feature">{this.props.product.description}</p>
            <Link className='business_product-view' key={this.props.index} to={`/product/${this.props.product.slug}`}>View</Link>
            {/* <div className="product_business_name">
            <Link className='search-item' key={this.props.index} to={`/product/${this.props.product.business.slug}`}>{this.props.product.business.name}</Link>
            </div> */}
            </div>
            </div>
        )
    }
}
export default BusinessProductCard;