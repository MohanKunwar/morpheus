import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './BusinessCard.css';
class BusinessCard extends Component {
    render() {

        return (
            <div className='business-card'>
                <Image src={this.props.imageSrc} thumbnail alt={this.props.name} />

                <div className='business-card-info'>
                    <p onClick={this.props.businessUrl}>{this.props.name}</p>
                    <p onClick={this.props.categoryUrl}>{this.props.CategoryName}</p>
                    <p>{this.props.totalViews}</p>
                    <p>{this.props.totalReviews}</p>
                    <p>{this.props.reviewStars}</p>
                </div>
            </div>
        )
    }
}
export default BusinessCard;