import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import axios from './../../axios';
import API from './../../api';
import Hoc from './../../hoc/Hoc';
import Overview from './Overview/Overview';
import Header from './Header/Header';
import DealsIn from './DealsIn/DealsIn';
import Photos from './Photos/Photos';
import Reviews from './Reviews/Reviews';
import './BusinessProfile.css';

class BusinessProfile extends Component {
    state = {
        isUserOwner: undefined,
        show: null,
        business: null
    }
    // static propTypes = {
    //     show: PropTypes.bool.isRequired
    // }
    componentWillMount() {
        console.log('comopnent will mount')
        // todo
        // check if user logged in
        // check if user is business owner
        this.setState({ isUserOwner: false });
        const { match: { params } } = this.props;

        axios.get(`${API.business.getBusinessUrl}/${params.id}`).then(response => {
            console.log('response business', response.data.data);
            this.setState({ business: response.data.data });
            console.log('state', this.state.business)
        });
    }
    // componentDidMount() {
    //     console.log('component did mount');
    //     console.log('state', this.state.business)
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log('nextProps');
    //     console.log('state', this.state.business)
    // }
    // shouldComponentUpdate() {
    //     console.log('should comopnent update')
    //     return true;
    // }
    // componentWillUpdate() {
    //     console.log('compponent will update')
    //     console.log('state', this.state.business)
    // }
    // componentDidUpdate() {
    //     console.log('component did update')
    //     console.log('state', this.state.business)
    // }
    changeTab = tab => {
        this.setState({ show: tab })
    }
    render() {
        const currUrl = this.props.match.url
        if (this.state.isUserOwner !== undefined) {
            if (this.state.isUserOwner) {
                // 
            } else {

            }
        } else {
            return (<div>Something went wrong! 404 page from Business Profile</div>);
        }
        return (
            <div className='business-page'>
                <div className='card-container'>
                    <Header business={this.state.business} />
                </div>
                <br />
                <div className='card-container card-business-body'>
                    <div className='side-bar'>
                        <ul>
                            <li><Link to={`${currUrl}/overview`}>Overview</Link></li>
                            <li><Link to={`${currUrl}/photos`}>Photos</Link></li>
                            <li><Link to={`${currUrl}/reviews`} >Reviews</Link></li>
                            <li><Link to={`${currUrl}/deals-in`}>Deals In</Link></li>
                        </ul>
                    </div>
                    <Switch>
                        <Route path={`${currUrl}/overview`} component={() => <Overview business={this.state.business} />} />
                        <Route path={`${currUrl}/photos`} component={() => <Photos photos={this.state.business.photos_url} />} />
                        <Route path={`${currUrl}/reviews`} component={() => <Reviews reviews={this.state.business.reviews_url} />} />
                        <Route path={`${currUrl}/deals-in`} component={() => <DealsIn dealsIn={this.state.business.dealsin_url} />} />
                        <Redirect to={`${currUrl}/overview`} />
                    </Switch>
                </div>
            </div>
            

        )
    }

}
export default BusinessProfile;