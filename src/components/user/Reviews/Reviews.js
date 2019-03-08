import React, { Component } from 'react'

import Axios from '../../../services/Axios'
import './reviews.css';
import Review from '../../../UI/Review';


// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid";

class UserReviews extends Component {
    state = {
        reviews: []
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.getUserReviewsUrl).then(response => {
            this.setState({ reviews: response.data.data })
            console.log(response.data.data)
        })
    }
    render() {

        return (
            <div className="card-container">
            <h4 className="card_header">My Reviews</h4>
            {/* <Review review={this.state.reviews}/> */}
                {
                    this.state.reviews ?
                    this.state.reviews.map((review, index) =>
                        <Review 
                            key={index} 
                            review={review} />
                    )
                    : <div>loadin</div>
                }
            </div>
        );
    }
}

export default UserReviews;