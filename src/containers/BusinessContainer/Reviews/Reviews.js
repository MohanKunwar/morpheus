import React, { Component } from 'react'
import Axios from '../../../services/Axios';

import Review from './../../../UI/Review/Review'

class Reviews extends Component {

    state = {
        reviews: null
    }
    componentWillMount() {
        console.log('reviews url', this.props.reviews)
        // console.log('nextprops', nextProps)
        Axios.authInstance.get(this.props.reviews).then(response => {
            this.setState({ reviews: response.data.data })
            console.log('reviews', response.data.data)
        })
    }

    render() {
        console.log('review render')
        console.log('state', this.state.reviews)
        return (
            this.state.reviews ?
                (<div className='business-reviews'>
                    {
                        this.state.reviews.length > 0
                            ? this.state.reviews.map((review, index) =>
                                <Review review={review} key={index} />
                            )
                            : <div>no reviews found</div>
                    }
                </div>)
                : <div>loading</div>
        )
    }
}
export default Reviews;
