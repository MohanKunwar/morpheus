import React from 'react'
import * as moment from 'moment'
import './UserBooking.css'

const UserBooking = props => {
        return (
            props.booking 
            ?
            <div className='booking_container'>
                <div>
                    <img src={props.booking.room.photo} alt={props.booking.room.type} />
                </div>
                <div>
                    <span>{props.booking.business.name}</span>
                    <span>{props.booking.room.type}</span>
                    <span>{props.booking.room_count} {props.booking.room_count > 1 ? ' rooms ' : ' room '}</span>,
                <span>{props.booking.no_of_guests}</span> {props.booking.no_of_guests > 1 ? ' guests ' : ' guest '}
                    <span>From: {moment(props.booking.arrival).format('MMM DD YYYY')} To: {moment(props.booking.departure).format('MMM DD YYYY')}</span>
                </div>
                <div>
                    <span className='room_total_price'>
                        Rs.{props.booking.price}
                    </span>
                    <span className='room_price_a_discount'>
                        {props.booking.price_after_discount}
                    </span>
                    <span className='room_discount_percent'>
                        {props.booking.room.discount}% off
                    </span><br />
                    <span className='room_discount_text'>(inclusive of all taxes)</span><br />
                    <span>{props.booking.booking_status}</span>
                    {
                        props.booking.booking_status === 'pending' || props.booking.booking_status === 'approved'
                            ?
                            props.children
                            : null
                    }
                </div>
            </div>
            : null
        )
}
export default UserBooking