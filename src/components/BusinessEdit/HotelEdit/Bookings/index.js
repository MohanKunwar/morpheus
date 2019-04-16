import React, { Component } from 'react'
import Axios from '../../../../services/Axios';
import UserBooking from '../../../../UI/UserBooking';
class Bookings extends Component {
    state = {
        reservations: null
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.room.getHotelReservationsUrl(this.props.businessSlug)).then(response => {
            if (response && response.data) {
                this.setState({ reservations: response.data.data })
            }
        })
    }
    acceptBooking = (e, id) => {
        e.preventDefault()

    }
    cancelBooking = (e, id) => {
        e.preventDefault()
    }
    discardCancel = e => {
        e.preventDefault()
        this.setState({showPopup: false})
    }
    rejectBooking() {
        this.setState({ showPopup: true})
    }
    render() {
        console.log(this.state.reservations)
        return (
            this.state.reservations
                ?
                <div className='reservations'>
                    {
                        // this.state.reservations.map((booking, index) => 
                        //     <UserBooking booking={booking} key={index} source='business'>
                        //         <button onClick={e => this.acceptBooking(e, booking.id)}>Accept</button>
                        //         <button onClick={this.rejectBooking}>Reject</button>
                        //         {
                        //             this.state.showPopup
                        //                 ?
                        //                 <div className='sure_pop_up'>
                        //                     <span>Are you sure?</span>
                        //                     <button onClick={e => this.cancelBooking(e, booking.id)}>Yes</button>
                        //                     <button onClick={e => this.discardCancel(e)}>No</button>
                        //                 </div>
                        //                 : null
                        //         }
                        //     </UserBooking>
                        // )
                    }
                </div>
                : null // spinner for loading reservations todo
        )
    }
}
export default Bookings