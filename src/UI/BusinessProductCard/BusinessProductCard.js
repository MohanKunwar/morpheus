import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessProductCard.css';
const BusinessProductCard = props => {
  console.log('product card prop', props.product);
  return (
    <div className='business_product-card'>
      <div className='business_product-img-container'>
        {props.product.photo ? (
          <img src={props.product.photo} alt={props.product.name} />
        ) : (
          <img
            src={require('../../assets/images/khoz-ph.jpg')}
            alt={props.product.name}
          />
        )}
      </div>
      <div className='business_product-card-info'>
        <p className='business_product_heading'>{props.product.name}</p>
        <h3 className='business_product_price'>
          Rs. {props.product.price}
        </h3>
        <p className='product_feature'>{props.product.description}</p>
        <Link
          className='business_product-view'
          key={props.index}
          to={`/product/${props.product.slug}`}
        >
          View
        </Link>
      </div>
    </div>
  );
};
export default BusinessProductCard;
