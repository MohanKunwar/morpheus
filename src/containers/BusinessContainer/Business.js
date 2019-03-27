import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import KhozContext from '../../services/Context';
import Axios from '../../services/Axios';
import Overview from './Overview/Overview';
import Header from './Header/Header';
import DealsIn from './DealsIn/DealsIn';
import Photos from './Photos/Photos';
import Reviews from './Reviews/Reviews';
import { FaMapMarkerAlt, FaRegEnvelope, FaGlobeAsia, FaPhone } from 'react-icons/fa';

// import BusinessView from '../../components/BusinessView';

import Hotel from './features/Hotel';
import './Business.css';
import Spinner from '../../helpers/Spinner';
import Businessc from '../../components/Business/Business';


class Business extends Component {
    state = {
        isUserOwner: undefined,
        show: null,
        business: null
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    componentWillUpdate() {
        console.log(this.props, this.state)
    }
    componentWillMount() {
        console.log('container mounted')
        const { match: { params } } = this.props;
        Axios.instance.get(`${Axios.API.business.getBusinessUrl}/${params.id}`).then(response => {
            // if (this.props.context.user && this.props.context.user.businesses.length > 0) {
            //     this.props.context.user.businesses.forEach(business => {
            //         if (business.id === response.data.data.id) {
            //             this.setState({
            //                 business: response.data.data,
            //                 isUserOwner: true
            //             })
            //             return
            //         } else {
            //             this.setState({
            //                 business: response.data.data,
            //                 isUserOwner: false
            //             })
            //         }
            //     })
            // } else {
            //     this.setState({
            //         business: response.data.data,
            //         isUserOwner: false
            //     })
            // }
            this.setState({
                business: response.data.data,
                isUserOwner: false
            })
        });
    }

    render() {
        const currUrl = this.props.match.url

        return (
            <div className="business_container">
                <div className='card-container'>
                    {this.state.business ?
                        <React.Fragment>
                            <Header business={this.state.business} isUserOwner={this.state.isUserOwner} />
                            <br />
                            <div className='card-business-body'>
                                <div className='side-bar'>
                                    <ul>
                                        <li><NavLink to={`${currUrl}/overview`} className="sidebar_link">Overview</NavLink></li>
                                        <li><NavLink to={`${currUrl}/photos`} className="sidebar_link">Photos</NavLink></li>
                                        {/* <li><NavLink to={`${currUrl}/reviews`} className="sidebar_link" >Reviews</NavLink></li>
                                        <li><NavLink to={`${currUrl}/deals-in`} className="sidebar_link">Deals In</NavLink></li>
                                        {
                                            this.state.business.feature_enabled.length > 0
                                                ?
                                                this.state.business.feature_enabled.map((item, index) =>
                                                    <li key={index}><NavLink to={`${currUrl}/${item}`} className="sidebar_link">{item}</NavLink></li>)
                                                : null
                                        } */}
                                    </ul>
                                </div>
                                <Switch>
                                    <Route path={`${currUrl}/:id`} component={Businessc} />
                                    {/* <Route path={`${currUrl}/photos`} component={Photos} /> */}
                                    {/* <Route path={`${currUrl}/reviews`} component={() => <Reviews reviews={this.state.business.reviews_url} isUserOwner={this.state.isUserOwner} />} />
                                    <Route path={`${currUrl}/deals-in`} component={() => <DealsIn dealsIn={this.state.business.dealsin_url} isUserOwner={this.state.isUserOwner} />} />
                                    {
                                        this.state.business.feature_enabled.length > 0
                                            ?
                                            this.state.business.feature_enabled.map((item, index) =>
                                                <li key={index}><NavLink to={`${currUrl}/${item}`} className="sidebar_link">{item}</NavLink></li>)
                                            : null
                                    } */}
                                    {/* <Route path={`${currUrl}/restaurant`} component={() => <Restaurant dealsIn={this.state.business.dealsin_url} />} /> */}
                                    <Redirect to={`${currUrl}/overview`} />
                                </Switch>
                                <div className='overview-contact'>
                                    google api integration
                                <p className="overview_address"><FaMapMarkerAlt className="overview-icon" /> {this.state.business.address}</p>
                                    <p className="overview_email"><FaRegEnvelope className="overview-icon" /> {this.state.business.email}</p>
                                    {/* // todo
                        // check if user logged in for phone number and hours */}
                                    <p className="overview_mobile_number"><FaPhone className="overview-icon" /> {this.state.business.mobile_number}</p>
                                    <p className="overview_website"><FaGlobeAsia className="overview-icon" /> {this.state.business.website}</p>
                                    <div className='overview-rating'>
                                        <p>{this.state.business.rating_avg} rating {this.state.business.review_count} reviews</p>
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


export default Business;