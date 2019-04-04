import React from 'react'
import BusinessProductCard from '../../../UI/BusinessProductCard/BusinessProductCard';
import './Products.css';
const Products = props => {
return (
    props.products.map((product, index) => 
        <div key={index} className='business_products_container'>
        <h4 className="business_product_title">Product/Service</h4>
            <BusinessProductCard product={product} />
        </div>
    )
)
}
export default Products