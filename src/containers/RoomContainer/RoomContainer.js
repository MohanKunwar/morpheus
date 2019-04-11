import React, { Component } from 'react'
import Axios from '../../services/Axios'
import Spinner from '../../helpers/Spinner'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import GoogleMap from '../../components/common/GoogleMap/GoogleMap'
import './RoomContainer.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import BookRoom from './BookRoom';



class RoomContainer extends Component {
    state = {
        room: null,
        photos: null,
        amenities: null
    }
    roomRules
    componentWillMount() {
        const { match: { params } } = this.props
        Axios.instance.get(Axios.API.room.getRoomUrl(params.id)).then(response => {
            if (response && response.data) {
                if (response.data.data.rule) {
                    this.roomRules = response.data.data.rule.split(/\n/)
                }
                document.title = `${response.data.data.type}-${response.data.data.business.name}`
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
        // todo api endpoint ...get other rooms /room/other/:roomid
    }
    render() {
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
                                            verticalSwipe={'natural'}
                                            width='100%'
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

                                <div className='room_description'>
                                    <h3 className='room-description_head'>About Room</h3>
                                    <p className='room-description_text'>{room.description}</p>



                                    <h3 className='room_amenities'>Amenities</h3>
                                    <div className='amenities_body'>
                                        {
                                            this.state.amenities
                                                ?
                                                this.state.amenities.map((amenity, index) =>
                                                    <div key={index} className='amenities_container'>
                                                        <img className='amenities_icon_svg' src={amenity.icon_svg} alt={amenity.amenity} />
                                                        {amenity.amenity}
                                                    </div>
                                                )
                                                :
                                                <span>loading amenities gif goes here</span>
                                        }
                                    </div>

                                    <div className='other_listings'>
                                        <h3 className='room-description_head'>Other rooms in this hotel</h3>
                                        {/* carousel of other rooms */}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <BookRoom room={this.state.room} />
                                <div className='hotel_rules_container'>
                                    <h3 className='hotel_rules_header'>Hotel Rules</h3>
                                    <ul>
                                        {
                                            this.roomRules.map((rule, index) =>
                                                <li key={index}>{rule}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <GoogleMap
                                    center={
                                        {
                                            lat: this.state.room.business.latitude,
                                            lng: this.state.room.business.longitude
                                        }
                                    }
                                />
                            </div>
                        </div>
                        : <Spinner />
                }
            </div>
        )
    }
}

export default RoomContainer