import React, { Component } from 'react';
import Axios from '../../services/Axios';
import "./RoomCard.css";
import { Link } from 'react-router-dom';
import Img from 'react-image';
import demoimage from './../../assets/images/business/concept.jpeg';
    class RoomCard extends Component {
        state = {
            room: []
        }
        componentWillMount() {
            Axios.instance.get('/businesses/nbn-mock/rooms').then(response => {
                if (response && response.data) {
                    this.setState({ room: response.data.data[0] })
                }
            });
        }
        render() {
            console.log(this.state.room)
            return (
            <div className="roomcard-container">
                 <div className="room_img_container">
                 
                 <div className="room_overlay">
                 <p className="room_after_discount">NRs. {this.state.room.price_after_discount}</p>
                 <p className="room_before_discount">NRs. {this.state.room.price}</p>
                <p className="room_discount">{this.state.room.discount} % off</p><br />
                 </div>
                 <Img src={demoimage} alt="room image" />
                 </div>
                 
            <div className='room-card-info'>
            <Link className='search-item' key={this.state.room.index} to={`/room/${this.state.room.slug}`}>
                    <p 
                    onClick={this.state.room.roomUrl}
                    className="room_heading">
                    {this.state.room.type}</p></Link>
                <p className="room_hotel_name">Hotel Avenue Pvt.Ltd</p>
                <p className="room_hotel_location">Sukkhanagar, Butwal</p>
                <button className="room_book_btn">Book Now</button>
            </div>
            </div>
            )
    }
    }
    
    export default RoomCard;