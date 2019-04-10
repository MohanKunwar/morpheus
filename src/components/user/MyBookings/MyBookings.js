import React, { Component } from 'react'
import Axios from '../../../services/Axios';

class MyBookings extends Component {
    state = {
        bookings: null
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.userBookingsUrl).then(response => {
            if (response && response.data) {

                this.setState({ bookings: response.data.data })
            }
        })
    }
    render() {
        console.log('bookings', this.state.bookings)
        return (
            <div className='card-container'>
                {
                    this.state.bookings
                        ?
                        // this.state.bookings.map((booking,))
                        <span>bookings goes here</span>
                        : null
                }
            </div>

        )
    }
}
export default MyBookings