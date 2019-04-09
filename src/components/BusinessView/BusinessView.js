import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Axios from '../../services/Axios'
import Overview from './Overview/Overview'
import Header from './Header/Header'
import DealsIn from './DealsIn/DealsIn'
import Photos from './Photos/Photos'
import Reviews from './Reviews/Reviews'
import Products from './Products/Products'
import { FaMapMarkerAlt, FaRegEnvelope, FaGlobeAsia, FaPhone } from 'react-icons/fa'
import GoogleMap from '../../components/common/GoogleMap/GoogleMap'

import Hotel from './features/Hotel'
import './BusinessView.css'
import Spinner from '../../helpers/Spinner'


class BusinessView extends Component {
    state = {
        business: null,
        currUrl: null,
        products: null
    }
    handleRedirect= () => {
        window.open(`https://www.google.com/maps/dir//${this.state.business.latitude},${this.state.business.longitude}/@${this.state.business.latitude},${this.state.business.longitude},17z`);
    }
    componentWillMount() {
        if (this.props.businessUrl) {
            Axios.instance.get(Axios.API.business.getBusinessUrl(this.props.businessUrl)).then(response => {
                if (response && response.data) {
                    this.setState({
                        business: response.data.data,
                        currUrl: `/business/${this.props.businessUrl}`
                    })
                }
            })
            Axios.instance.get(Axios.API.business.getBusinessProductsUrl(this.props.businessUrl)).then(response => {
                if (response && response.data) {
                    this.setState({
                        products: response.data.data
                    })
                }
            })
        }
    }
    render() {
        return (
            <div className="business_container">
                <div className='card-container'>
                    {this.state.business ?
                        <React.Fragment>
                            <Header business={this.state.business} />
                            <br />
                            <div className='card-business-body'>
                                {/* <div className='side-bar-mobile'>
                                    <ul>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/overview`} className="sidebar_link">Overview</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/photos`} className="sidebar_link">Photos</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/reviews`} className="sidebar_link" >Reviews</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/deals-in`} className="sidebar_link">Deals In</NavLink></li>
                                        {
                                            this.state.business.feature_enabled.includes('hotel') > 0
                                                ?
                                                this.state.business.feature_enabled.map((item, index) =>
                                                    <li key={index}><NavLink to={`/business/${this.props.businessUrl}/${item}`} className="sidebar_link">{item}</NavLink></li>)
                                                : null
                                        }
                                    </ul>
                                </div> */}
                                <div className='side-bar'>
                                    <ul>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/overview`} className="sidebar_link">Overview</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/photos`} className="sidebar_link">Photos</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/reviews`} className="sidebar_link" >Reviews</NavLink></li>
                                        <li><NavLink to={`/business/${this.props.businessUrl}/deals-in`} className="sidebar_link">Deals In</NavLink></li>
                                        {
                                            this.state.products && this.state.products.length > 0
                                            ?
                                            <li><NavLink to={`/business/${this.props.businessUrl}/products`} className="sidebar_link">Products</NavLink></li>
                                            : null
                                        }
                                        {
                                            this.state.business.feature_enabled.includes('hotel')
                                                ?
                                                <li><NavLink to={`/business/${this.props.businessUrl}/rooms`} className="sidebar_link">Rooms</NavLink></li>
                                                : null
                                        }
                                    </ul>
                                </div>
                                <div className="business_body">
                                    <Switch>
                                        <Route path={`/business/${this.props.businessUrl}/overview`} component={() => <Overview business={this.state.business} />} />
                                        <Route path={`/business/${this.props.businessUrl}/photos`} component={() => <Photos photos={this.state.business.photos_url} />} />
                                        <Route path={`/business/${this.props.businessUrl}/reviews`} component={() => <Reviews reviews={this.state.business.reviews_url} />} />
                                        <Route path={`/business/${this.props.businessUrl}/deals-in`} component={() => <DealsIn dealsIn={this.state.business.dealsin_url} />} />
                                        {
                                            this.state.products && this.state.products.length > 0
                                            ?
                                            <Route path={`/business/${this.props.businessUrl}/products`} component={() => <Products products={this.state.products} />} />
                                            : null
                                        }
                                        {
                                            this.state.business.feature_enabled.includes('hotel')
                                                ?
                                                <Route path={`/business/${this.props.businessUrl}/rooms`} component={() => <Hotel businessSlug={this.state.business.slug} />} />
                                                : null
                                        }
                                        <Redirect to={`/business/${this.props.businessUrl}/overview`} />
                                    </Switch>
                                    <div className='overview-contact'>
                                    <GoogleMap 
                                        center= {
                                            {
                                              lat: this.state.business.latitude,
                                              lng: this.state.business.longitude
                                            }
                                          } 
                                        />
                                    <button onClick= {this.handleRedirect} className="get_direction">
                                        Get Direction
                                    </button>
                                        <p className="overview_address"><FaMapMarkerAlt className="overview-icon" /> {this.state.business.address}</p>
                                        <p className="overview_email"><FaRegEnvelope className="overview-icon" /> {this.state.business.email}</p>
                                        {/* // todo
                                        // check if user logged in for phone number and hours */}
                                        <p className="overview_mobile_number"><FaPhone className="overview-icon" /> {this.state.business.mobile_number}</p>
                                        <p className="overview_website"><FaGlobeAsia className="overview-icon" /> {this.state.business.website}</p>
                                        {/* <div className='overview-rating'>
                                <Img src={star} className="overview_star" />
                                    <div className="average_rating">{this.state.business.rating_avg}</div>
                                    <p className="average_rating_text">Average Rating</p> 
                                    <p><Link to={`/business/${this.props.businessUrl}/reviews`} className="review_link">{this.state.business.review_count} reviews</Link></p>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        : <Spinner />
                    } </div>
            </div>
        )
    }

}


export default BusinessView
