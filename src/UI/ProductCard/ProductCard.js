import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';
import { FaEdit } from 'react-icons/fa';
const ProductCard = ({ index, product, edit }) => {
  return (
    <div className='product-card'>
      <div className='product-img-container'>
        <FaEdit onClick={() => edit(index)} />
        {product.photo ? (
          <img src={product.photo} alt={product.name} />
        ) : (
            <img
              src={require('../../assets/images/khoz-ph.jpg')}
              alt={product.name}
            />
          )}
      </div>
      <div className='product-card-info'>
        <Link
          className='search-item'
          key={index}
          to={`/product/${product.slug}`}
        >
          <div className='hover_product'>
            <p className='product_heading'>{product.name}</p>
          </div>
        </Link>
        <div className='product_price'>Rs. {product.price}</div>
        <div className='product_business_name'>
          {
            !edit ?
              <Link
                className='search-item'
                key={index}
                to={`/businesses/${product.business.slug}`}
              >
                {product.business.name}
              </Link>
              : null
          }
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
