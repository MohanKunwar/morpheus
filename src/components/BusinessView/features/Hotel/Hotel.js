import React, { Component } from 'react'
import Axios from '../../../../services/Axios';
import Spinner from '../../../../helpers/Spinner';
import HotelRoomCard from '../../../../UI/HotelRoom/HotelRoomCard';
import './Hotel.css';

class Hotel extends Component {
    state = {
        rooms: null
    }
    componentWillMount() {
        if (this.props.businessSlug) {
            Axios.instance.get(Axios.API.business.getRoomsUrl(this.props.businessSlug)).then(response => {
                if (response && response.data) {
                    this.setState({ rooms: response.data.data })
                }
            })
        }
    }
    render() {
        return (
            <div className='hotel-container'>
            <h4 className="hotel_room_title">Rooms</h4>
            {
                this.state.rooms
                ? 
                this.state.rooms.map((room, index) => 
                    <HotelRoomCard room={room} key={index} />
                )
                :
                <Spinner />
            }
            </div>
        )
    }
}
export default Hotel;