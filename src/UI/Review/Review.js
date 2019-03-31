import React from 'react';
import './Review.css';
import Img from 'react-image';
import star from './../../assets/images/ratings.svg';
import DropdownToggle from './dropdown/dropdown';

export const Star = (props) => {
    const starrating = props.rate;
    let stars = [];
    for (let i = 0; i < starrating; i++) {
        stars.push(<Img key={i} src={star}
            className="star-css"
        />);
    }
    return (
        <span>{stars}</span>
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
    return (
        <div className="review-container">
            <div className="review-header">
                <div className='review-image'>
                    {
                        photoUrl
                            ? <Img className='review_image' src={photoUrl} alt='review image' />
                            : <Img className='review_image' src={require('../../assets/images/khoz-ph.jpg')} alt='placeholder image' />
                    }
                </div>
                <div className="review_on_name">
                    <div className="review_name">{name}</div>
                    <div className="review_date">{props.review.created_at}</div>
                </div>
                {
                    props.edit
                        ?
                        <div className='review-crud'>
                            <DropdownToggle />
                        </div>
                        :
                        null
                }
            </div>
            <div className='review-rating'>
                <Star rate={props.review.rating} /> {props.review.rating}
                {/* <Star review={props.review.rating}/> */}
            </div>
            <div className='review-body'>
                {props.review.body}
            </div>
        </div>
    )
}
export default Review