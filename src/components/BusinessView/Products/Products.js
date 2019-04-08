import React from 'react'
import BusinessProductCard from '../../../UI/BusinessProductCard/BusinessProductCard';
import './Products.css';
const Products = props => {
return (
    <div className='business_products_container'>
    <h4 className="business_product_title">Product/Service</h4>
        {
    props.products.map((product, index) => 
        <div key={index}>
            <BusinessProductCard product={product} />
        </div>
    )
    }
    </div>
)
}
export default Products