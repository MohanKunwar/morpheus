import React, {Component} from 'react'

class Reviews extends Component {
    state = {
        reviews: [
            {
                id: 1,
                business_id: 1,
                reviewer_id: 1,
                rating: 5,
                body: 'text body',
                status: 1,
                created_at: '01/01/2011',
                updated_at: '01/02/2012'

            },
            {
                id: 2,
                business_id: 2,
                reviewer_id: 1,
                rating: 5,
                body: 'text body',
                status: 1,
                created_at: '01/01/2011',
                updated_at: '01/02/2012'

            }
        ]
    }
    render() {
        return (
            <p>Create reviews sketch here!</p>
        )
    }
}

export default Reviews;