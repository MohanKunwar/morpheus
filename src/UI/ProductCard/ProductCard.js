import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';
const ProductCard = props => {
  console.log('product card prop', props.product);
  return (
    <div className='product-card'>
      <div className='product-img-container'>
        {props.product.photo ? (
          <img src={props.product.photo} alt={props.product.name} />
        ) : (
          <img
            src={require('../../assets/images/khoz-ph.jpg')}
            alt={props.product.name}
          />
        )}
      </div>
      <div className='product-card-info'>
        <Link
          className='search-item'
          key={props.index}
          to={`/product/${props.product.slug}`}
        >
          <div className='hover_product'>
            <p className='product_heading'>{props.product.name}</p>
          </div>
        </Link>
        <div className='product_price'>Rs. {props.product.price}</div>
        <div className='product_business_name'>
          <Link
            className='search-item'
            key={props.index}
            to={`/product/${props.product.business.slug}`}
          >
            {props.product.business.name}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
