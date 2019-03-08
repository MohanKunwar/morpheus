import React, { Component } from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import star from './../../assets/images/ratings.svg';
import './BusinessCard.css';

const Star = (props) => {
    const rating = 5;
    let stars =[];
    for(let i=0; i<rating; i++){
        stars.push(<Img key={i} src={star} 
            className= "star-css" 
            />);
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
        console.log(this.props.business);
        return (
            <div className='business-card'>
            
            <div className="business_img_container">
                <Img src={this.props.business.logo}  alt={this.props.business.name} />
                    </div>
                <div className='business-card-info'>
                <Link className='search-item' key={this.props.index} to={`/business/${this.props.business.slug}`}>
                    <h5 
                    onClick={this.props.business.businessUrl}
                    className="budiness_heading">
                    {this.props.business.slug}</h5></Link>
                    <div className="business_address">
                    <Link className='search-item' key={this.props.index} to={`/business/${this.props.business.slug}`}>
                    {this.props.business.address}</Link></div>
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