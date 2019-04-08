import React, { Component } from 'react'
import DateRangePicker from 'react-daterange-picker'
import UserService from '../../services/User'
import * as moment from 'moment'
class BookRoom extends Component {
    state = {
        showCalendar: false,
        checkin: null,
        checkout: null,
        rooms_no: null,
        guests_no: null,
        pickDateText: 'Select checkin-checkout date',
        noOfRoomsError: null
    }

    componentWillMount() {
        let checkin = UserService.getSessionItem('check_in')
        if (checkin) {
            this.setState({
                checkin: checkin,
                checkout: UserService.getSessionItem('check_out')
            })
        }
    }
    openCalendar = () => {
        this.setState({ showCalendar: true })
    }
    handleDateSelect = range => {
        this.setState({
            showCalendar: false,
            pickDateText: `${moment(range.start).format('MMM Do YY')} - ${moment(range.end).format('MMM Do YY')}`,
            checkin: range.start,
            checkout: range.end
        })
    }
    roomCountChange = e => {
        e.preventDefault()
        if (e.target.value > this.props.room.room_count) {
            this.setState({
                rooms_no: e.target.value,
                noOfRoomsError: `Only ${this.props.room.room_count} rooms are available`
            })

        } else {
            this.setState({
                rooms_no: e.target.value,
                noOfRoomsError: null
            })
        }
    }
    guestCountChange = e => {
        e.preventDefault()
        if (e.target.value > this.state.rooms_no * this.props.room.max_capacity) {
            this.setState({
                guests_no: e.target.value,
                noOfGuestsError: `Only ${this.props.room.max_capacity} guests is allowed per room`
            })
        } else {
            this.setState({
                guests_no: e.target.value,
                noOfGuestsError: null
            })
        }
    }
    render() {
    const { room } = this.props
        return (
            <React.Fragment>
                <div className='booking_portal_container'>
                    <h3>Book this Room</h3>
                    <button onClick={this.openCalendar}>{this.state.pickDateText}</button>
                    {
                        this.state.showCalendar
                            ? <DateRangePicker
                                numberOfCalendars={1}
                                selectionType='range'
                                minimumDate={new Date()}
                                onSelect={this.handleDateSelect} />
                            : null
                    }
                    <span>Rooms:</span>
                    <input
                        type='number'
                        value={this.state.rooms_no ? this.state.rooms_no : 1}
                        min='1'
                        onChange={e => this.roomCountChange(e)} />
                    {this.state.noOfRoomsError}
                    <span>Guests:</span>
                    <input
                        type='number'
                        value={this.state.guests_no ? this.state.guests_no : this.props.room.max_capacity}
                        min='1'
                        onChange={e => this.guestCountChange(e)}
                    />
                    {this.state.noOfGuestsError}
                    <button >Book Now</button>
                </div>
                <div className='room_price_container'>
                    <span className='room_total_price'>
                        Rs.{this.state.rooms_no ? this.props.room.price_after_discount * this.state.rooms_no : this.props.room.price_after_discount}
                    </span>
                    <span className='room_price_a_discount'>
                        Rs.{this.state.rooms_no ? this.props.room.price * this.state.rooms_no : this.props.room.price}
                    </span>
                    <span className='room_discount_percent'>
                        {this.state.rooms_no ? this.props.room.discount * this.state.rooms_no : this.props.room.discount}% off
                    </span><br />
                    <span className='room_discount_text'>(inclusive of all taxes)</span><br />
                    <button
                        className='room_book_button'
                        onClick={this.bookRoom}
                        disabled={this.state.noOfRoomsError || this.state.noOfGuestsError ? true : false}>Book Now</button>
                </div>
            </React.Fragment>
        )
    }
}
export default BookRoom