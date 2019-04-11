import React, { Component } from 'react'
import Axios from '../../../services/Axios';
import * as moment from 'moment'
import UserBooking from '../../../UI/UserBooking'

const MybookStyle = {
    color: '#112E51'
}

class MyBookings extends Component {
    state = {
        activeBookings: null,
        pastBookings: null,
        showPopup: false
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.userBookingsUrl).then(response => {
            if (response && response.data) {
                console.log(response.data.data)
                this.setState({
                    activeBookings: response.data.data.filter(booking => moment(booking.departure).isSameOrAfter(moment(new Date())))
                })
            }
        })
    }
   
    showPopup = e => {
        e.preventDefault()
        this.setState({ showPopup: true })
    }
    cancelBooking = (e, id) => {
        e.preventDefault()
        Axios.authInstance.post(Axios.API.room.cancelBookingUrl(id)).then(response => {
            if (response && response.status === 204) {
                let bookings = this.state.activeBookings
                let thisBookingIndex = this.state.activeBookings.findIndex( booking => booking.id === id)
                bookings[thisBookingIndex].booking_status = 'Cancelled'
                this.setState({showPopup: false, activeBookings: bookings})

            }
        })
        this.setState({ showPopup: false })
    }
    discardCancel = e => {
        e.preventDefault()
        this.setState({ showPopup: false })
    }
    render() {

        return (
            <div className='card-container'>
            <h4 style={MybookStyle}>My Booking</h4>
                {
                    this.state.activeBookings
                        ?
                        this.state.activeBookings.map((booking, index) =>
                            <UserBooking booking={booking} key={index} >
                                <button onClick={e => this.showPopup(e)}>cancel</button>
                                {
                                    this.state.showPopup
                                        ?
                                        <div className='sure_pop_up'>
                                            <span>Are you sure?</span>
                                            <button onClick={e => this.cancelBooking(e, booking.id)}>Yes</button>
                                            <button onClick={e => this.discardCancel(e)}>No</button>
                                        </div>
                                        : null
                                }

                            </UserBooking>
                        )

                        : null
                }
            </div>

        )
    }
}
export default MyBookings