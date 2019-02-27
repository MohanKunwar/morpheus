import React, { Component } from 'react'

import Axios from '../../../services/Axios'
import './reviews.css';
import Review from '../../../UI/Review';
import Inputfield from '../../../UI/Inputfield/inputfield';

// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid";

class Reviews extends Component {
    state = {
        reviews: []
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.getUserReviewsUrl).then(response => {
            this.setState({ reviews: response.data.data })
        })
    }
    render() {

        return (
            <div className="card-container">
                {
                    this.state.reviews ?
                    this.state.reviews.map((review, index) =>
                        <Review 
                            key={index} 
                            review={review} />
                    )
                    : <div>loading</div>
                }
            </div>
        );
    }
}

export default Reviews;