import React from 'react'
import BusinessProductCard from '../../../UI/BusinessProductCard/BusinessProductCard';
const Products = props => {
return (
    props.products.map((product, index) => 
        <div key={index} className='business_products_container'>
            <BusinessProductCard product={product} />
        </div>
    )
)
}
export default Products