import React, {Component} from 'react'
import Overview from '../components/Overview'
import Photos from '../components/Photos'
import Reviews from '../components/Reviews'
import DealsIn from '../components/DealsIn'
import Hotel from '../components/features/Hotel'
import Products from '../components/features/Products/Products'
class BusinessContents extends Component {
    
    render() {
        const { business, hotel, products, hotelAmenities } = this.props
        return (
            <div className='business_contents'>
                <Overview business={business} />
                <Photos photos={business.photos_url} />
                {
                    hotel
                        ?
                        <Hotel businessSlug={business.slug} hotelAmenities={hotelAmenities} />
                        : null
                }
                <DealsIn dealsIn={business.dealsin_url} />
                {
                    products && products.length > 0
                        ?
                        <Products products={products} />
                        : null
                }
                <Reviews reviews={business.reviews_url} />
            </div>
    
    
        )
    }
}
export default BusinessContents