import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './BusinessCard.css';
class BusinessCard extends Component {
    state = {
        // business data model
    }
    render() {
        console.log('business-card');
        return (
            <div className='business-card'>
                <Image src={this.props.business.logo} thumbnail alt={this.props.business.name} />

                <div className='business-card-info'>
                    <p onClick={this.props.business.businessUrl}>{this.props.business.name}</p>
                    {/* <p onClick={this.props.business.categoryUrl}>{this.props.business.CategoryName}</p> */}
                    <p>{this.props.business.view_count} views</p>
                    <p>{this.props.business.review_count} reviews</p>
                    <p>{this.props.business.rating_avg}</p>
                </div>
            </div>
        )
    }
}
export default BusinessCard;