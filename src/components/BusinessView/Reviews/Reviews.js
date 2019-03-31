import React, { Component } from 'react'
import Axios from '../../../services/Axios';

import KhozContext from '../../../services/Context';
import Review from './../../../UI/Review/Review'
import Spinner from '../../../helpers/Spinner';

class Reviews extends Component {

    state = {
        reviews: null
    }
    componentWillMount() {
        console.log('reviews url', this.props.reviews)
        // console.log('nextprops', nextProps)
        if (!this.state.reviews) {
        Axios.authInstance.get(this.props.reviews).then(response => {
            console.log(this.props.context.user)
            // const userReviewIndex = response.data.data.findIndex(review => review.reviewer.id === this.props.context.user.id)
            // const reviews = userReviewIndex >= 0 ? response.data.data.splice(userReviewIndex, 1) : response.data.data
            this.setState({
                reviews: response.data.data,
                // userReview: userReviewIndex >= 0 ? response.data.data[userReviewIndex] : null
            })
            console.log('reviews state', this.state.reviews)
        })   
    }
    }

    render() {
        console.log(this.state.reviews)
        return (
            this.state.reviews ?
                (<div className='business-reviews'>
                    {
                        this.state.reviews.length > 0
                            ? this.state.reviews.map((review, index) =>
                                <Review review={review} key={index} edit={false} />
                            )
                            : <div>no reviews found</div>
                    }
                </div>)
                : <Spinner />
        )
    }
    componentWillUnmount() {
        console.log('unmounted reviews')
    }
}
export default KhozContext.withAppContext(Reviews);
