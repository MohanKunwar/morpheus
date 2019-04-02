import React, { Component } from 'react'
import Axios from '../../services/Axios'
import Spinner from '../../helpers/Spinner';
// import { Carousel } from 'react-responsive-carousel';
import { GoogleMap } from '../../components/common/GoogleMap/GoogleMap';

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
        let room = this.state.room
        return (
            <div className='card-container'>
                {
                    this.state.room
                        ?
                        <div className='room-container'>
                            {
                                this.state.photos
                                    ?
                                    <span>photo carousel goes here</span>
                                    // <Carousel
                                    //     // showArrows
                                    //     infiniteLoop
                                    //     autoPlay
                                    //     interval={2000}
                                    //     showThumbs={false}
                                    //     showStatus={false}
                                    //     emulateTouch
                                    //     stopOnHover={false}
                                    // >
                                    //     {
                                    //         this.state.photos.map((photo, index) =>
                                    //             <div key={index}>
                                    //                 <img src={photo.src} alt={photo.title} />
                                    //             </div>
                                    //         )
                                    //     }
                                    // </Carousel>
                                    :
                                    <span>loading photos gif goes here</span>
                            }


                            <h2>{room.type}</h2>
                            <h4>{room.description}</h4>



                            <h3>Room Amenities</h3>
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


                            <div className='details_selector_container'>

                            </div>



                            <div className='room_price_container'>
                                <span>Total Price</span>
                                <span>{room.price}</span>
                                <span>{room.discount} % off</span>
                                <span>{room.price_after_discount}</span>
                                <span>inclusive of all taxes</span>
                                <button>Book Now</button>
                            </div>



                            <div className='hotel_rules_container'>
                                <span>Hotel Rules</span>
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
                        : <Spinner />
                }
            </div>
        )
    }
}

export default RoomContainer