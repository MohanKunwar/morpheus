import React, { Component } from 'react'

import axios from './../../axios-authenticated'
import API from './../../api'
import 'bootstrap/dist/css/bootstrap.css';
import './reviews.css';
import Review from './../../UI/Review/Review';

// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid";

class Reviews extends Component {
    state = {
        reviews: []
    }
    componentWillMount() {
        axios.get(API.user.getUserReviewsUrl).then(response => {
            console.log('user reviews', response.data.data)
            this.setState({ reviews: response.data.data })
        })
    }
    render() {

        return (
            <div className="card-container">
                {
                    this.state.reviews.map((review, index) =>
                        <Review 
                            key={index} 
                            review={review} />
                    )
                }
            </div>
        );
    }
}

export default Reviews;