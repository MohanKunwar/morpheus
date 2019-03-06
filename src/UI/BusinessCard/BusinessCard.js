import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import star from './../../assets/images/ratings.svg';
import './BusinessCard.css';

const Star = (props) => {
    const rating = 5;
    let stars =[];
    for(let i=0; i<rating; i++){
        stars.push(<Image key={i} src={star} style={{width: '23px'}} />);
    }
    return(
        <span>{stars}</span>
    )
}

class BusinessCard extends Component {
    state = {
        // business data model
    }
    render() {
        console.log('business-card');
        return (
            <div className='business-card'>
            <div className="business_img_container">
                <Image src={this.props.business.logo} thumbnail alt={this.props.business.name} />
                    </div>
                <div className='business-card-info'>
                    <h6 
                    onClick={this.props.business.businessUrl}
                    className="budiness_heading">
                    {this.props.business.name}</h6>
                    <span className="business_address">{this.props.business.address}</span>
                    <p 
                    onClick={this.props.business.categoryUrl}
                    className="business_categories">{this.props.business.category_name}</p>
                    <p className="business_view">{this.props.business.view_count} views</p>
                    <p className="business_rating"><Star business={this.props.business.rating_avg}/></p>
                    <p className="business_review">{this.props.business.review_count} reviews</p>
                    
                </div>
            </div>
        )
    }
}
export default BusinessCard;