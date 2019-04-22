import React, { Component } from 'react'
import Axios from '../../services/Axios'

import BusinessHeader from './containers/Header'
import BusinessNav from './containers/BusinessNav'
import BusinessContents from './containers/BusinessContents'

import './BusinessView.css'
import Spinner from '../../helpers/Spinner'
import BusinessDetails from './containers/BusinessDetails';


class BusinessView extends Component {
    state = {
        business: null,
        products: null,
        hotelAmenities: null,
        active: 'overview'
    }
    handleRedirect = () => {
        window.open(`https://www.google.com/maps/dir//${this.state.business.latitude},${this.state.business.longitude}/@${this.state.business.latitude},${this.state.business.longitude},17z`);
    }
    componentWillMount() {
        if (this.props.businessUrl) {
            Axios.instance.get(Axios.API.business.getBusinessUrl(this.props.businessUrl)).then(response => {
                if (response && response.data) {
                    document.title = `${response.data.data.name}-Khoz`
                    this.setState({
                        business: response.data.data
                    })
                    if (response.data.data.feature_enabled.includes('hotel')) {
                        this.getHotelAmenities(this.props.businessUrl)
                    }
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
    getHotelAmenities(businessUrl) {
        Axios.instance.get(Axios.API.room.getHotelAmenitiesUrl(businessUrl)).then(response => {
            if (response && response.data) {
                this.setState({ hotelAmenities: response.data.data })
            }
        })
    }
  
    render() {
        return (
            <div className='business_page card-container'>
                {this.state.business ?
                    <React.Fragment>
                        <BusinessHeader business={this.state.business} />
                        <BusinessNav
                            business={this.state.business}
                            products={this.state.products && this.state.products.length > 0 ? true : false}
                            hotel={this.state.business.feature_enabled.includes('hotel')}
                            active={this.active}
                        />

                        <img className='business_cover' src={this.state.business.cover} alt={this.state.business.name} />
                        <BusinessContents
                            business={this.state.business}
                            hotel={this.state.business.feature_enabled.includes('hotel')}
                            hotelAmenities={this.state.hotelAmenities}
                            products={this.state.products}
                        />
                        <BusinessDetails
                            business={this.state.business}
                        />
                    </React.Fragment>
                    : <Spinner />
                } </div>
        )
    }

}


export default BusinessView
