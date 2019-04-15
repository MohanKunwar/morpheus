import React, { Component } from 'react'
import Axios from '../../../../../services/Axios';
// import Spinner from '../../../..helpers/Spinner';
import HotelRoomCard from '../../../../../UI/HotelRoom/HotelRoomCard'
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
            <React.Fragment>
                <div className='business_section'>
                    <h4 className="business_heading">Rooms</h4>
                    {
                        this.state.rooms
                            ?
                            this.state.rooms.map((room, index) =>
                                <HotelRoomCard room={room} key={index} />
                            )
                            : null //todo loading room gif
                    }

                </div>
                <div className='business_section'>
                    <h3 className='business_heading'>Hotel Amenities</h3>
                    {this.props.hotelAmenities ?
                        <div className='amenities_body'>
                            {
                                this.props.hotelAmenities.map((amenity, index) =>
                                    <div key={index} className='amenities_container'>
                                        <img className='amenities_icon_svg' src={amenity.icon_svg} alt={amenity.amenity} />
                                        {amenity.amenity}
                                    </div>
                                )
                            }
                        </div>
                        :
                        null // to do loading amenities gif
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default Hotel;