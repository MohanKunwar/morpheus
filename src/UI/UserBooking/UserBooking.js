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
const UserBooking = ({booking, index, children}) => {
    return (
        booking
            ?
            <React.Fragment>
                {
                    index === 0
                        ? <HeaderText />
                        : null
                }
                <div className='booking_container'>
                    <div>
                        <img src={booking.room.photo} alt={booking.room.type} />
                    </div>
                    <div className='my_booking_details'>
                        <div><span className='my_booking_room_type'>{booking.room.type}</span>
                            <span className='my_booking_room_name'><FaHotel /> {booking.business.name}</span>
                        </div>
                        <div className='my_booking_date_details'>
                            <span className='my_booking_date'>From: {moment(booking.arrival).format('MMM DD YYYY')} To: {moment(booking.departure).format('MMM DD YYYY')}</span>
                            <span className='my_guest_room_count'><FaDoorOpen />{booking.room_count} {booking.room_count > 1 ? ' rooms ' : ' room '}</span>,
                <span className='my_guest_room_count'><FaUserFriends />{booking.no_of_guests} {booking.no_of_guests > 1 ? ' guests ' : ' guest '}</span>
                        </div>
                    </div>
                    <div className='my_booking_price'>
                        <span className='mybook_total_price'>
                            Rs.{booking.price}
                        </span>
                        <span className='room_price_a_discount'>
                            Rs.{booking.price_after_discount}
                        </span>
                        <span className='room_discount_percent'>
                            {booking.room.discount}% off
                    </span>
                        <span className='room_discount_text'>(inclusive of all taxes)</span>

                    </div>
                    <div className='my_booking_status'>
                        <span>{booking.booking_status}</span>
                        {
                            booking.booking_status === 'pending' || booking.booking_status === 'approved'
                                ?
                                children
                                : null
                        }
                    </div>
                </div>
            </React.Fragment>
            : null
    )
}
export default UserBooking