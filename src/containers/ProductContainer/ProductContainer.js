import React, { Component } from 'react';
import Axios from '../../services/Axios';
import Spinner from '../../helpers/Spinner';
// import { Carousel } from 'react-responsive-carousel';
import { GoogleMap } from '../../components/common/GoogleMap/GoogleMap';
import { FaMapMarkerAlt, FaRegEnvelope, FaGlobeAsia, FaPhone } from 'react-icons/fa';

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
        return (
            <div className='card-container'>
                {
                    this.state.product
                        ?
                        <React.Fragment>
                            <div className='product-container'>
                                <div className='product-images'>
                                    {
                                        this.state.photos
                                            ?
                                            <span>photo carousel goes here</span>
                                            // <Carousel
                                            //     // showArrows
                                            //     infiniteLoop
                                            //     autoPlay
                                            //     interval={2000}
                                            //     showThumbs={false}
                                            //     showStatus={false}
                                            //     emulateTouch
                                            //     stopOnHover={false}
                                            // >
                                            //     {
                                            //         this.state.photos.map((photo, index) =>
                                            //             <div key={index}>
                                            //                 <img src={photo.src} alt={photo.id} />
                                            //                 {/* <p className="legend">{banner.body}</p> */}
                                            //             </div>
                                            //         )
                                            //     }
                                            // </Carousel>
                                            :
                                            <span>Placeholder</span>
                                    }
                                </div>
                                <h2>{this.state.product.name}</h2>
                                <span>{this.state.product.price}</span>
                                <span>{this.state.product.description}</span>

                            </div>
                            <div className='product-business-details'>
                                        <GoogleMap latitude={this.state.product.business.latitude} longitude={this.state.product.business.longitude} />
                                        <p className="overview_address"><FaMapMarkerAlt className="overview-icon" /> {this.state.product.business.address}</p>
                                        <p className="overview_email"><FaRegEnvelope className="overview-icon" /> {this.state.product.business.email}</p>
                                        {/* // todo
                        // check if user logged in for phone number and hours */}
                                        <p className="overview_mobile_number"><FaPhone className="overview-icon" /> {this.state.product.business.mobile_number}</p>
                                        <p className="overview_website"><FaGlobeAsia className="overview-icon" /> {this.state.product.business.website}</p>
                                        {/* <div className='overview-rating'>
                                <Img src={star} className="overview_star" />
                                    <div className="average_rating">{this.state.product.business.rating_avg}</div>
                                    <p className="average_rating_text">Average Rating</p> 
                                    <p><Link to={`/business/${this.props.businessUrl}/reviews`} className="review_link">{this.state.product.business.review_count} reviews</Link></p>
                                </div> */}
                                    </div>
                        </React.Fragment>
                        : <Spinner />
                }
            </div>

        )
    }
}
export default ProductContainer