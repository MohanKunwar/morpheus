import React, {Component} from 'react'

class Requirements extends Component {
    state = {
        leads: [
            {
                id: 1,
                title: 'title',
                description: 'Description goes here',
                user: {
                    id: 2,
                    name: 'John Doe',
                    email: 'johndoe@email.com',
                    mobile_number: 123456789,
                },
                location_id: 1,
                attachment: 'blob',
                status: 2,
                created_at: '01/01/2011',
                closed_at: '02/02/2012',
                category_id: 3
            }
        ]
    }
    render() {
        return (
            <p>Create requirements sketch here!</p>
        )
    }
}

export default Requirements;