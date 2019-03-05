import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import './Review.css'
import { Image } from 'react-bootstrap'
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid"

const ProfileImage = (props) => {
    return (
        <div className='review-image'>
            <Image src={props.photoUrl} alt={props.name} />
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
        <div className="card review-container">
            <div className="review-header">
                {/* user review or business reviews check
                todo */}
                <ProfileImage photoUrl={photoUrl} />
                {name}
                {props.review.created_at}
                <div className='review-crud'>edit delete </div>
            </div>
            <div className='review-rating'>
                {props.review.rating}
            </div>
            <div className='review-body'>
                {props.review.body}
            </div>
        </div>
    )
}
export default Review