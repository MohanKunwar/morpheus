import React, { Component } from 'react';
import Axios from '../../services/Axios';
import './ProductContainer.css';
import Spinner from '../../helpers/Spinner';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaMapMarkerAlt, FaRegEnvelope, FaGlobeAsia, FaPhone } from 'react-icons/fa';
import GoogleMap from '../../components/common/GoogleMap/GoogleMap'
class ProductContainer extends Component {
    state = {
        product: null,
        photos: null
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        Axios.instance.get(Axios.API.product.getProductUrl(params.id)).then(
            response => {
                if (response && response.data) {
                    document.title = `${response.data.data.name}-${response.data.data.business.name}`
                    this.setState({ product: response.data.data })
                }
            }
        )
        Axios.instance.get(Axios.API.product.getProductPhotosUrl(params.id)).then(
            response => {
                if (response && response.data) {
                    this.setState({ photos: response.data.data })

                }
            }
        )
    }
    render() {
        console.log(this.state.product);
        return (
            <div className='card-container'>
                {
                    this.state.product
                        ?
                        <React.Fragment>
                            <div className='product-container'>
                                <div className='product-details'>
                                    {
                                        this.state.photos
                                            ?
                                            <Carousel
                                       showArrows
                                       infiniteLoop
                                       autoPlay
                                       interval={3000} 
                                       emulateTouch
                                       className="product_carousel_container"
                                       showStatus={false}
                                    >
                                        {
                                            this.state.photos.map((photo, index) =>
                                                <div key={index}>
                                                    <img src={photo.src} alt={photo.title} />
                                                </div>
                                            )
                                        }
                                    </Carousel>
                                            :
                                            <span>Placeholder</span>
                                    }
                                <div className="product_description">
                                <h3 className="product-description_head">Product Description</h3>
                                <p className="product-description_text">{this.state.product.description}</p>
                                </div>

                                </div>
                            
                            <div className='product-business-details'>
                            <div className="product_price_container">
                                <h2 className="product_container_name">{this.state.product.name}</h2>
                                <div className="product_total_price">Rs.{this.state.product.price}</div>
                                </div>

                                    <div className="overview-contact">
                                    <GoogleMap 
                                        center= {
                                            {
                                              lat: this.state.product.business.latitude,
                                              lng: this.state.product.business.longitude
                                            }
                                          } 
                                        />
                                    <p className="overview_address"><FaMapMarkerAlt className="overview-icon" /> {this.state.product.business.address}</p>
                                    <p className="overview_email"><FaRegEnvelope className="overview-icon" /> {this.state.product.business.email}</p>
                                    {/* // todo
                    // check if user logged in for phone number and hours */}
                                    <p className="overview_mobile_number"><FaPhone className="overview-icon" /> {this.state.product.business.mobile_number}</p>
                                    <p className="overview_website"><FaGlobeAsia className="overview-icon" /> {this.state.product.business.website}</p>
                                    </div>
                                    {/* <div className='overview-rating'>
                            <Img src={star} className="overview_star" />
                                <div className="average_rating">{this.state.product.business.rating_avg}</div>
                                <p className="average_rating_text">Average Rating</p> 
                                <p><Link to={`/business/${this.props.businessUrl}/reviews`} className="review_link">{this.state.product.business.review_count} reviews</Link></p>
                            </div> */}
                                    </div>
                                    </div>
                        </React.Fragment>
                        : <Spinner />
                }
            </div>

        )
    }
}
export default ProductContainer