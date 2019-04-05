import React, { Component } from 'react'
import Axios from '../../services/Axios'
import Spinner from '../../helpers/Spinner';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoogleMap } from '../../components/common/GoogleMap/GoogleMap';
import './RoomContainer.css';
import { FaMapMarkerAlt } from "react-icons/fa";



class RoomContainer extends Component {
    state = {
        room: null,
        photos: null,
        amenities: null
    }
    roomRules
    componentWillMount() {
        const { match: { params } } = this.props;
        Axios.instance.get(Axios.API.room.getRoomUrl(params.id)).then(response => {
            if (response && response.data) {
                this.roomRules = response.data.data.rule.split(/\n/)
                this.setState({ room: response.data.data })
            }
        })
        Axios.instance.get(Axios.API.room.getRoomPhotosUrl(params.id)).then(response => {
            if (response && response.data) {
                this.setState({ photos: response.data.data })
            }
        })
        Axios.instance.get(Axios.API.room.getRoomAmenitiesUrl(params.id)).then(response => {
            if (response && response.data) {
                this.setState({ amenities: response.data.data })
            }
        })
    }
    render() {
        console.log(this.state.room);
        let room = this.state.room
        return (
            <div className='card-container'>
                {
                    this.state.room
                        ?
                        <div className='room-container'>
                        <div className="room_container_header">
                        {room.type}
                        <span className="room_location"><FaMapMarkerAlt /> {room.business.address}</span>
                        </div>
                        <div>
                        
                            {
                                  this.state.photos
                                  ?
                                    <Carousel
                                       showArrows
                                       infiniteLoop
                                       autoPlay
                                       interval={3000} 
                                       emulateTouch
                                       className="room_carousel_container"
                                       showStatus={false}
                                    >
                                        {
                                            this.state.photos.map((photo, index) =>
                                                <div key={index}>
                                                    <img src={photo.src} alt={photo.title} />
                                                </div>
                                            )
                                        }
                                    </Carousel>
                                     :
                                     <span>Placeholder</span>
                             }

                                <div className="room_description">
                            <h3 className="room-description_head">About Room</h3>
                            <p className="room-description_text">{room.description}</p>



                            <h3 className="room_amenities">Amenities</h3>
                            <div className="amenities_body">
                            {
                                this.state.amenities
                                    ?
                                    this.state.amenities.map((amenity, index) =>
                                        <div key={index} className='amenities_container'>
                                            {/* amenities svg */}
                                            {amenity.amenity}
                                        </div>
                                    )
                                    :
                                    <span>loading amenities gif goes here</span>
                            }
                            </div>
                                </div>
                            <div className='details_selector_container'>
                            
                            </div>
                            </div>

                            <div>
                            <div className='room_price_container'>
                                <span className="room_total_price">Rs.{room.price_after_discount}</span>
                                <span className="room_price_a_discount">Rs.{room.price}</span>
                                <span className="room_discount_percent">{room.discount}% off</span><br />
                                <span className="room_discount_text">(inclusive of all taxes)</span><br />
                                <button className="room_book_button">Book Now</button>
                            </div>



                            <div className='hotel_rules_container'>
                                <h3 className="hotel_rules_header">Hotel Rules</h3>
                                <ul>
                                    {
                                        this.roomRules.map((rule, index) =>
                                            <li key={index}>{rule}</li>
                                        )
                                    }
                                </ul>
                            </div>


                            
                            <GoogleMap latitude={room.business.latitude} longitude={this.state.room.business.longitude} />
                            </div>
                        </div>
                        : <Spinner />
                }
            </div>
        )
    }
}

export default RoomContainer