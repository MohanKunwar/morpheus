import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import KhozContext from '../../services/Context';
import Axios from '../../services/Axios';
import Overview from './Overview/Overview';
import Header from './Header/Header';
import DealsIn from './DealsIn/DealsIn';
import Photos from './Photos/Photos';
import Reviews from './Reviews/Reviews';

// import BusinessView from '../../components/BusinessView';

import Hotel from './features/Hotel';
import './Business.css';

class BusinessContainer extends Component {
    state = {
        isUserOwner: undefined,
        show: null,
        business: null
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        Axios.instance.get(`${Axios.API.business.getBusinessUrl}/${params.id}`).then(response => {
            if (this.props.context.user && this.props.context.user.businesses.length > 0) {
                this.props.context.user.businesses.forEach(business => {
                    if (business.id === response.data.data.id) {
                        this.setState({
                            business: response.data.data,
                            isUserOwner: true
                        })
                        return
                    } else {
                        this.setState({
                            business: response.data.data,
                            isUserOwner: false
                        })
                    }
                })
            } else {
                this.setState({
                    business: response.data.data,
                    isUserOwner: false
                })
            }
        });
    }
    render() {
        const currUrl = this.props.match.url
        // if (this.state.business) {
        //     if (!this.state.isUserOwner) {
        //         return (<BusinessView business={this.state.business} currUrl={this.props.match.url} />)
        //     } else {
        //         // return (<BusinessEdit business={this.state.business} currUrl={this.props.match.url} />)
        //     }
        // } else {
        //     return(<div>business loading</div>)
        // }
        // const currUrl = this.props.match.url
        // if (this.state.isUserOwner !== undefined) {

        // } else {
        //     return (<div>Something went wrong! 404 page from Business Profile</div>);
        // }
        return (
            this.state.business ?
                (<div className='business-page'>
                    <div className='card-container'>
                        <Header business={this.state.business} isUserOwner={this.state.isUserOwner} />
                    </div>
                    <br />
                    <div className='card-container card-business-body'>
                        <div className='side-bar'>
                            <ul>
                                <li><NavLink to={`${currUrl}/overview`} className="sidebar_link">Overview</NavLink></li>
                                <li><NavLink to={`${currUrl}/photos`} className="sidebar_link">Photos</NavLink></li>
                                <li><NavLink to={`${currUrl}/reviews`} className="sidebar_link" >Reviews</NavLink></li>
                                <li><NavLink to={`${currUrl}/deals-in`} className="sidebar_link">Deals In</NavLink></li>
                                {
                                    this.state.business.feature_enabled.length > 0
                                        ?
                                        this.state.business.feature_enabled.map((item, index) =>
                                            <li key={index}><NavLink to={`${currUrl}/${item}`}>{item}</NavLink></li>)
                                        : null
                                }
                            </ul>
                        </div>
                        <Switch>
                            <Route path={`${currUrl}/overview`} component={() => <Overview business={this.state.business} isUserOwner={this.state.isUserOwner} />} />
                            <Route path={`${currUrl}/photos`} component={() => <Photos photos={this.state.business.photos_url} isUserOwner={this.state.isUserOwner} />} />
                            <Route path={`${currUrl}/reviews`} component={() => <Reviews reviews={this.state.business.reviews_url} isUserOwner={this.state.isUserOwner} />} />
                            <Route path={`${currUrl}/deals-in`} component={() => <DealsIn dealsIn={this.state.business.dealsin_url} isUserOwner={this.state.isUserOwner} />} />
                            {
                                this.state.business.feature_enabled.includes('hotel')
                                    ? <Route path={`${currUrl}/hotel`} component={() => <Hotel dealsIn={this.state.business.dealsin_url} isUserOwner={this.state.isUserOwner} />} />
                                    : null
                            }
                            {/* <Route path={`${currUrl}/restaurant`} component={() => <Restaurant dealsIn={this.state.business.dealsin_url} />} /> */}
                            <Redirect to={`${currUrl}/overview`} />
                        </Switch>
                        <div className='overview-contact'>
                            google api integration
                                <p>{this.state.business.address}</p>
                            <p>{this.state.business.email}</p>
                            {/* // todo
                        // check if user logged in for phone number and hours */}
                            <p>{this.state.business.mobile_number}</p>
                            <p>{this.state.business.website}</p>
                            <div className='overview-rating'>
                                <p>{this.state.business.rating_avg} rating {this.state.business.review_count} reviews</p>
                            </div>
                        </div>

                    </div>
                </div>)
                : <div>loading</div>

        )
    }

}


export default KhozContext.withAppContext(BusinessContainer);

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