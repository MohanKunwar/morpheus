import React, { Component } from 'react'
import Axios from '../../../../services/Axios';
import UserBooking from '../../../../UI/UserBooking';
import * as moment from 'moment'
class Bookings extends Component {
    state = {
        reservations: null
    }
    componentWillMount() {
        let activeBookings = []
        let pastBookings = []
        Axios.authInstance.get(Axios.API.room.getHotelReservationsUrl(this.props.business.slug)).then(response => {
            if (response && response.data) {
                response.data.data.map(booking => {
                    booking.business = this.props.business
                    if (moment().diff(booking.arrival, 'hours') > 0) {
                        pastBookings.push(booking)
                    } else {
                        activeBookings.push(booking)
                    }
                })
                this.setState({ activeBookings: activeBookings, pastBookings: pastBookings })
            }
        })
    }
    acceptBooking = (e, id) => {
        this.setState({ [`showPopup${id}`]: false })

    }
    cancelBooking = (e, id) => {
        this.setState({ [`showPopup${id}`]: false })
    }
    showPopup = (id, showPopup) => {
        if (showPopup) {
            this.setState({ [`showPopup${id}`]: true })
        } else {
            this.setState({ [`showPopup${id}`]: false })
        }
    }
    render() {
        console.log(this.state.reservations)
        return (
            <div className='business_bookings'>
                <h4>Active Bookings</h4>
                {
                    this.state.activeBookings
                        ?
                        <div className='active_reservations'>
                            {
                                this.state.activeBookings.map((booking, index) =>
                                    <UserBooking booking={booking} key={index} source='business'>
                                        <button onClick={e => this.acceptBooking(e, booking.id)}>Accept</button>
                                        <button onClick={e => this.showPopup(booking.id, true)}>Reject</button>
                                        {
                                            this.state[`showPopup${booking.id}`]
                                                ?
                                                <div className='sure_pop_up'>
                                                    <span>Are you sure?</span>
                                                    <button onClick={e => this.cancelBooking(e, booking.id)}>Yes</button>
                                                    <button onClick={e => this.showPopup(booking.id, false)}>No</button>
                                                </div>
                                                : null
                                        }
                                    </UserBooking>
                                )
                            }
                        </div>
                        : null // spinner for loading reservations todo
                }
                {
                    this.state.pastBookings
                        ?
                        <div className='active_reservations'>
                            <h4>Past Bookings</h4>
                            {
                                this.state.pastBookings.map((booking, index) =>
                                    <UserBooking booking={booking} key={index} source='business'>
                                        {/* <button onClick={e => this.acceptBooking(e, booking.id)}>Accept</button>
                                <button onClick={this.rejectBooking}>Reject</button> */}
                                        {/* {
                                    this.state.showPopup
                                        ?
                                        <div className='sure_pop_up'>
                                            <span>Are you sure?</span>
                                            <button onClick={e => this.cancelBooking(e, booking.id)}>Yes</button>
                                            <button onClick={e => this.discardCancel(e)}>No</button>
                                        </div>
                                        : null
                                } */}
                                    </UserBooking>
                                )
                            }
                        </div>
                        : null // spinner for loading reservations todo
                }
            </div>
        )
    }
}
export default Bookings