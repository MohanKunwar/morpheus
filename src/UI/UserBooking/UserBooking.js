import React from 'react'
import * as moment from 'moment'
import { FaHotel, FaDoorOpen, FaUserFriends } from "react-icons/fa";
import './UserBooking.css'

const HeaderText = () => {
    return (
        <div className='booking_container header_text'>
            <div></div>
            <div className='my_booking_details'>
                <div>Name</div>
                <div>Stay Details</div>
            </div>
            <div className='my_booking_price'>Price</div>
            <div className='my_booking_status'>Status</div>
        </div>
    )
}
const UserBooking = props => {
    return (
        props.booking
            ?
            <React.Fragment>
                {
                    props.index === 0
                        ? <HeaderText />
                        : null
                }
                <div className='booking_container'>
                    <div>
                        <img src={props.booking.room.photo} alt={props.booking.room.type} />
                    </div>
                    <div className='my_booking_details'>
                        <div><span className='my_booking_room_type'>{props.booking.room.type}</span>
                            <span className='my_booking_room_name'><FaHotel /> {props.booking.business.name}</span>
                        </div>
                        <div className='my_booking_date_details'>
                            <span className='my_booking_date'>From: {moment(props.booking.arrival).format('MMM DD YYYY')} To: {moment(props.booking.departure).format('MMM DD YYYY')}</span>
                            <span className='my_guest_room_count'><FaDoorOpen />{props.booking.room_count} {props.booking.room_count > 1 ? ' rooms ' : ' room '}</span>,
                <span className='my_guest_room_count'><FaUserFriends />{props.booking.no_of_guests} {props.booking.no_of_guests > 1 ? ' guests ' : ' guest '}</span>
                        </div>
                    </div>
                    <div className='my_booking_price'>
                        <span className='mybook_total_price'>
                            Rs.{props.booking.price}
                        </span>
                        <span className='room_price_a_discount'>
                            Rs.{props.booking.price_after_discount}
                        </span>
                        <span className='room_discount_percent'>
                            {props.booking.room.discount}% off
                    </span>
                        <span className='room_discount_text'>(inclusive of all taxes)</span>

                    </div>
                    <div className='my_booking_status'>
                        <span>{props.booking.booking_status}</span>
                        {
                            props.booking.booking_status === 'pending' || props.booking.booking_status === 'approved'
                                ?
                                props.children
                                : null
                        }
                    </div>
                </div>
            </React.Fragment>
            : null
    )
}
export default UserBooking