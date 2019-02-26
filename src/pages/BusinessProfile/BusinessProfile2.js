import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from './../../axios';
import API from './../../api';
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
            this.setState({business: response.data.data});
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
        this.setState({ show: tab });
    }
    render() {
        if (this.state.isUserOwner !== undefined) {
            if (this.state.isUserOwner) {
                // 
            } else {

            }
        } else {
            return (<div>Something went wrong! 404 page from Business Profile</div>);
        }
        let defaultView = null;
        switch (this.state.show) {
            case 'deals-in': {
                defaultView = (<DealsIn dealsIn={this.state.business.dealsin_url} />);
                break;
            }
            case 'reviews': {
                defaultView = (<Reviews reviews={this.state.business.reviews_url} />);
                break;
            }
            case 'photos': {
                defaultView = (<Photos photos={this.state.business.photos_url} />);
                break;
            }
            case 'overview': default: {
                defaultView = (<Overview business={this.state.business} />);
                break;
            }
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
                            <li onClick={() => this.changeTab('overview')}>Overview</li>
                            <li onClick={() => this.changeTab('photos')}>Photos</li>
                            <li onClick={() => this.changeTab('reviews')}>Reviews</li>
                            <li onClick={() => this.changeTab('deals-in')}>Deals In</li>
                        </ul>
                    </div>
                    {defaultView}
                </div>
            </div>
        )
    }

}
export default BusinessProfile;