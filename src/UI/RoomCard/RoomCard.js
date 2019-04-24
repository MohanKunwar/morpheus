import React from 'react'
import './RoomCard.css'
import { Link } from 'react-router-dom'
import Img from 'react-image'
const RoomCard = props => {
  const { room } = props
  return (
    <div className='roomcard-container'>
      <div className='room_img_container'>
      {
          room.photo
          ? <Img src={room.photo} alt='room image' />
          : <Img src={require('../../assets/images/khoz-ph.jpg')} alt='room image' />
      }
      </div>

      <div className='room-card-info'>
        <Link
          className='search-item'
          key={room.index}
          to={`/room/${room.slug}`}
        >
          <p onClick={room.roomUrl} className='room_heading'>
            {room.type}
          </p>
        </Link>
        <div className='room_card_price'>
          <span className='room_after_discount'>
            Rs.{room.price_after_discount}
          </span>
          <span className='room_before_discount'>
            Rs.{room.price}
          </span>
          <span className='room_discount'>
            {room.discount}% off
          </span>
        </div>
        <div className='room_hotel_name_container'><span className='room_hotel_name'>{room.business.name}</span></div>

        <Link to={`/room/${room.slug}`} className='room_book_btn'>Book Now</Link>
        {/* <button className='room_book_btn'>Book Now</button> */}
      </div>
    </div>
  )
}

export default RoomCard
