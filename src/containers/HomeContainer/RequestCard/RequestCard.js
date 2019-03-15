import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RequestCard.css';
class RequestCard extends Component {
    render() {
        return (
            <div className='request-card'>
                <h4 className='request-heading'>Request Now</h4>
                <p className='request-info-text'>Request text</p>
                <button className='request-btn'>
                <Link to='/user/request' className="request_link">Request Products/Services</Link></button>
            </div>
        )
    }
}

export default RequestCard;