import React, { Component } from 'react'

import { FaMapMarkerAlt, FaRegEnvelope, FaGlobeAsia, FaPhone } from 'react-icons/fa'
import GoogleMap from '../../../components/common/GoogleMap/GoogleMap'
import Axios from '../../../services/Axios'
import * as moment from 'moment'

class BusinessDetails extends Component {
    state = {
        hours: null
    }
    // todo status check on all api calls
    componentWillMount() {
        if (!this.props.business.hours_always_open) {
        Axios.instance.get(Axios.API.business.getHoursUrl(this.props.business.slug)).then(response => {
            if (response && response.data) {
                this.setState({ hours: response.data.data })
            }
        })
    }
    }
    render() {
        const { business } = this.props
        let businessHours = null
        if (this.state.hours) {
            businessHours = this.state.hours.map((day, index) => 
                <div className='business_days' key={index}>
                    {day.day.slice(0,3).toUpperCase()}: {moment(day.start, 'HH:mm:ss').format('hh:mm A')} {moment(day.end, 'HH:mm:ss').format('hh:mm A')}
                </div>
            )
        }
        return (
            <div className='business_details'>
                <GoogleMap
                    center={
                        {
                            lat: business.latitude,
                            lng: business.longitude
                        }
                    }
                    zoom={16} />
                <button onClick={this.handleRedirect} className='get_direction'>Get </button>
                <div className='overview_des'>
                    <p style={business.address ?
                        { display: 'block' }
                        :
                        { display: 'none' }} className='overview_address'><FaMapMarkerAlt className='overview-icon' /> {business.address} {business.landmark}</p>
                    <p style={business.email ?
                        { display: 'block' }
                        :
                        { display: 'none' }} className='overview_email'><FaRegEnvelope className='overview-icon' /> {business.email}</p>
                    <p style={business.mobile_number ?
                        { display: 'block' }
                        :
                        { display: 'none' }} className='overview_mobile_number'><FaPhone className='overview-icon' /> {business.mobile_number}</p>
                    {/* <p style={business.website ?
                        { display: 'block' }
                        :
                        { display: 'none' }} className='overview_website'><FaGlobeAsia className='overview-icon' /> {business.website}</p> */}
                    <p style={business.establishment_year ?
                        {display: 'block'}
                        :
                        {display: 'none'}} className='overview_in_business'>In Business: Since {business.establishment_year}</p>
                    <div className='business_hours'>
                     {
                         this.props.business.hours_always_open ?
                         <span>Open 24 Hrs</span>
                         :
                         <span>{businessHours}</span>
                        
                     }
                    </div>
                </div>
            </div>
        )
    }
}
export default BusinessDetails