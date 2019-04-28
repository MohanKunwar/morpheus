import React from 'react';
import { Link } from 'react-router-dom'
import Img from 'react-image';
import star from './../../../assets/images/ratings.svg';
import SocialLinks from '../../../views/SocialLinks';

const Stars = () => {
    return (
        <Img src={star} className="star-css" />
    )
}

const BusinessHeader = (props) => {
    let header = null
    if (props.business !== null) {

       
        header = (
            <div className='business_header'>
                <div className='business_info'>
                    <h4>{props.business.name}</h4>
                    <h5>{props.business.address}</h5>
                    <Link 
                        to={`/search/business?category=${props.business.category.slug}`} 
                        className='business_category'><h5>{props.business.category.name}</h5></Link>
                    <h6>{props.business.view_count} views</h6>
                    <h6>
                        <Stars />
                        {props.business.rating_avg} rating
                        <Link to={`/business/${props.business.slug}#reviews`} className="review_link">{props.business.review_count} reviews</Link></h6>
                </div>
                <div className='business_social'>
                    <div className='social_links'>
                        <SocialLinks links={props.business.social_links} />
                    </div>
                    <p className="business_report">Report</p>
                </div>
            </div>
        )
    }
    return (
        header
    )
}
export default BusinessHeader