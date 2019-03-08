import React from 'react';
import './Review.css';
import Img from 'react-image';
import star from './../../assets/images/ratings.svg';
import DropdownToggle from './dropdown/dropdown'; 

const Star = (props) => {
    const starrating = props.rate;
    let stars =[];
    for(let i=0; i<starrating; i++){
        stars.push(<Img key={i} src={star} 
            className= "star-css" 
            />);
    }
    return(
        <span>{stars}</span>
    )
}

const ProfileImage = (props) => {
    return (
        <div className='review-image'>
            <Img src={props.photoUrl} alt={props.name} />
        </div>
    )
}
const Review = (props) => {
    // let photoUrl = null;
    let review = props.review
    let photoUrl
    let name
    if (review.reviewer) {
        photoUrl = review.reviewer.photo
        name = review.reviewer.name
    } else if (review.business) {
        photoUrl = review.business.logo
        name = `You reviewed on ${review.business.name}`
    }

    console.log('review props', props)
    return (
        <div className="review-container">
            <div className="review-header">
                {/* user review or business reviews check
                todo */}
                <div className="review_image">
                photo
                <ProfileImage photoUrl={photoUrl} />
                </div>
                <div className="review_on_name">
                <div classname="review_name">
                {name}</div>
                <div className="review_date">{props.review.created_at}</div>
                </div>
                <div className='review-crud'>
                <DropdownToggle />
                </div>
            </div>
            <div className='review-rating'>
            <Star rate={props.review.rating}/> {props.review.rating}
            {/* <Star review={props.review.rating}/> */}
            </div>
            <div className='review-body'>
                    {props.review.body}
            </div>
        </div>
    )
}
export default Review