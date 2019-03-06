import React, { Component } from 'react';
import './RequestCard.css';
class RequestCard extends Component {
    render() {
        return (
            <div className='request-card'>
                <p className='request-heading'>Request Now</p>
                <p className='request-info-text'>Request text</p>
                <p className='request-btn'>Request Products/Services</p>
            </div>
        )
    }
}

export default RequestCard;