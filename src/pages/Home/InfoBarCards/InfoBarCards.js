import React, { Component } from 'react'
import './InfoBarCards.css';
class InfoBarCards extends Component {
    render() {
        return(
            <div className='info-bar'>
                <div className='info-card'>
                    <span><strong>{this.props.hotelBooked}</strong></span>
                    <span>Total hotels booked</span>
                </div>
                <div className='info-card'>
                    <span><strong>{this.props.foodOrdered}</strong></span>
                    <span>Total food ordered</span>
                </div>
                <div className='info-card'>
                    <span><strong>{this.props.servicesRequested}</strong></span>
                    <span>Total Products/Services Requested</span>
                </div>
            </div>
        )
    }
}
export default InfoBarCards;