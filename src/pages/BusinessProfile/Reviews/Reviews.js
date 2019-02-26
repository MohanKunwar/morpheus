import React, { Component } from 'react'
import axios from './../../../axios-authenticated'
import PropTypes from 'prop-types'

import Review from './../../../UI/Review/Review'

class Reviews extends Component {
    static propTypes = {
        reviews: PropTypes.string.isRequired
    }
    state = {
        reviews: []
    }
    componentWillMount() {
        console.log('reviews url', this.props.reviews)
        // console.log('nextprops', nextProps)
        axios.get(this.props.reviews).then(response => {
            this.setState({ reviews: response.data.data })
            console.log('reviews', response.data.data)
        })
    }

    // componentWillUpdate(reviews) {
    //     if (this.state.reviews.length > 0) {
    //         console.log('review get')
    //     } else {
    //         console.log('get review')
    //     }
    // }

    componentDidMount() {
        console.log('component did mount')
        console.log('state', this.state.reviews)
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps')
        console.log('state', this.state.reviews)
    }
    shouldComponentUpdate() {
        console.log('should comopnent update')
        return true
    }
    componentWillUpdate() {
        console.log('compponent will update')
        console.log('state', this.state.reviews)
    }
    componentDidUpdate() {
        console.log('component did update')
        console.log('state', this.state.reviews)
    }
    render() {
        console.log('review render')
        console.log('state', this.state.reviews)
        return (
            <div className='business-reviews'>
                {
                    // this.getReviews(this.state.reviews
                    this.state.reviews.map((review, index) =>
                        <Review review={review} key={index} />
                    )
                }
            </div>
        )
    }
}
export default Reviews

Reviews.propTypes = {

}