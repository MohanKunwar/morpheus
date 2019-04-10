import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../services/Axios';
import './HotelRoomCard.css';
import { FaListAlt, FaDoorOpen, FaUserFriends } from 'react-icons/fa';

class HotelRoomCard extends Component {
  state = {
    amenities: null,
    showAmenities: false
  };
  getAmenities = (e, url) => {
    e.preventDefault();
    if (!this.state.amenities) {
      Axios.instance.get(url).then(response => {
        if (response && response.data) {
          this.setState({ amenities: response.data.data, showAmenities: true });
        }
      });
    } else {
      let toggle = this.state.showAmenities;
      this.setState({ showAmenities: !toggle });
    }
  };
  render() {
    console.log('room is', this.props.room);
    let room = this.props.room;
    return (
      <div className='hotel_room_card'>
        <div className='hotel_room_img'>
          <img src={room.photo} alt={room.type} />
        </div>
        <div className='hotel_room_type'>
          <h3 className='hotel_room_name'>{room.type}</h3>
          <span
            className='hotel_show_amenities'
            onClick={e => this.getAmenities(e, room.amenities_url)}
          >
            <FaListAlt /> show amenities
          </span>
          {this.state.showAmenities
            ? this.state.amenities.map(amenity => (
                <div key={amenity.id} className='hotel_amenities_list'>
                  <img
                    className='amenities_icon_svg'
                    src={amenity.icon_svg}
                    alt={amenity.amenity}
                  />
                  <span>{amenity.amenity}</span>
                </div>
              ))
            : null}

          <p className='room_type_count'>
            <FaDoorOpen /> room type count: {room.room_count}{' '}
          </p>
          <p className='hotel_guest_count'>
            <FaUserFriends /> max guest count: {room.max_capacity}
          </p>
        </div>
        <div className='hotelroom_price'>
          <h3 className='hotel_room_after_dis'>
            Rs.{room.price_after_discount}
          </h3>
          <span className='hotel_room_before_dis'>Rs.{room.price}</span>
          <span className='hotel_room_discount'>{room.discount}% off</span>
          <Link to={`/room/${room.slug}`} className='hotel_room_btn'>
            Book Now
          </Link>
        </div>
      </div>
    );
  }
}
export default HotelRoomCard;
