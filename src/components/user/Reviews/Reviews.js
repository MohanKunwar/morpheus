import React, { Component } from 'react'

import Axios from '../../../services/Axios'
import './reviews.css';
import Review from '../../../UI/Review';
import Spinner from '../../../helpers/Spinner';


// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid";

class UserReviews extends Component {
    state = {
        reviews: null
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.getUserReviewsUrl).then(response => {
            if (response.data) {
                this.setState({ reviews: response.data.data })
            }
        })
    }
    render() {

        return (
            <div className="card-container">
                <h4 className="card_header">My Reviews</h4>
                {
                    this.state.reviews ?
                        this.state.reviews.map((review, index) =>
                            <Review
                                key={index}
                                review={review} />
                        )
                        : <Spinner />
                }
            </div>
        );
    }
}

export default UserReviews;