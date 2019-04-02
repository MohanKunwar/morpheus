import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../services/Axios';

class HotelRoomCard extends Component {
    state = {
        amenities: null,
        showAmenities: false
    }
    getAmenities = (e, url) => {
        e.preventDefault()
        if (!this.state.amenities) {
            Axios.instance.get(url).then(response => {
                if (response && response.data) {
                    this.setState({ amenities: response.data.data, showAmenities: true })
                }
            })
        } else {
            let toggle = this.state.showAmenities
            this.setState({ showAmenities: !toggle })
        }
    }
    render() {
        console.log('room is', this.props.room)
        let room = this.props.room
        return (
            <div className='hotel_room_card'>
                <img src={room.photo} alt={room.type} />
                <h4>{room.type}</h4>
                <h3 onClick={e => this.getAmenities(e, room.amenities_url)}>show amenities</h3>
                {
                    this.state.showAmenities
                        ?
                        this.state.amenities.map(amenity =>
                            <span key={amenity.id}>{amenity.amenity}</span>
                        )
                        : null
                }
                <h2>room type count: {room.room_count} </h2>
                <h2>max guest count: {room.max_capacity}</h2>
                {room.price_after_discount}
                {room.price} {room.discount}
                <Link to={`/room/${room.slug}`}>Book Now</Link>
            </div>
        )
    }

}
export default HotelRoomCard;