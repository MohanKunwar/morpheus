import React, { Component } from 'react'
import Axios from '../../../services/Axios';

import KhozContext from '../../../services/Context';
import Review from './../../../UI/Review/Review'
import Spinner from '../../../helpers/Spinner';
import WriteReview from '../../../UI/WriteReview/WriteReview'

class Reviews extends Component {

    state = {
        reviews: null
    }
    componentWillMount() {
        if (!this.state.reviews) {
            Axios.authInstance.get(this.props.reviews).then(response => {
                if (response && response.data.data) {
                    let results = [...response.data.data]
                    const userReviewIndex = response.data.data.findIndex(review => review.reviewer.id === this.props.context.user.id)
                    if (userReviewIndex >= 0) {
                        results.splice(0, 1)
                        this.setState({
                            userReview: response.data.data[userReviewIndex],
                            reviews: results,
                        })
                    } else {
                        this.setState({ reviews: response.data.data })
                    }
                }
            })
        }
    }

    render() {
        return (
            <div className='business_section'>
                <div className='business_heading'>Reviews</div>
                {
                    this.state.reviews ?
                        this.state.reviews.map((review, index) =>
                            <Review review={review} key={index} edit={false} />
                        )
                        : <span>be the first one to review this business</span>
                }
                <WriteReview review={this.state.userReview} user={this.props.context.user} />
            </div>
        )
    }
}
export default KhozContext.withAppContext(Reviews);
