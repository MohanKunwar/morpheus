import React, { Component } from 'react'
import UserService from '../../../../services/User'
import Axios from '../../../../services/Axios';
import Spinner from '../../../../helpers/Spinner';
import RoomCard from '../../../../UI/RoomCard'
import * as moment from 'moment'
import './RoomFilters.css'
class RoomFilters extends Component {
    state = {
        checkin: UserService.getSessionItem('check_in'),
        checkout: UserService.getSessionItem('check_out'),
        location: UserService.getSessionItem('location')
    }
    room_amenities = []
    hotel_amenities = []
    componentWillMount() {
        this.getResults()
    }

    toggleAmenity = (e, amenityId, type) => {
        let index = this[type].findIndex(id => amenityId === id)
        if (index >= 0) {
            this[type].splice(index, 1)
        } else {
            this[type].push(amenityId)
        }
        this.setState({ loading: true })
        // this.room_amenities[amenity.amenity] = this.room_amenities[amenity.amenity] ? null : amenity.id
        this.getResults()
    }
   handleLocationChange = e => {
       e.preventDefault()
       console.log(e.target.value)
       this.setState({
           loading: true,
           location: e.target.value
       })
       this.getResults()
   }

    getResults = () => {
        let params = `checkin=${this.state.checkin}&checkout=${this.state.checkout}`
        if (this.state.location) {
            params += `&location_id=${this.state.location}`
        }
        if (this.room_amenities.length > 0) {
            params += `&room_amenities=${this.room_amenities.join()}`
        }
        if (this.hotel_amenities.length > 0) {
            params += `&hotel_amenities=${this.hotel_amenities.join()}`
        }
        Axios.instance.get(Axios.API.search.getRoomsResults(params)).then(response => {
            if (response && response.data) {
                this.setState({ rooms: response.data.data, loading: false })
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className='search-filters'>
                    {
                        this.props.locations
                            ?
                            <select onChange={e => this.handleLocationChange(e)}>
                                {
                                    this.props.locations.map((location, index) =>
                                        <option key={index} value={location.id}>{location.name}</option>
                                    )
                                }
                            </select>
                            : null
                    }
                    {
                        this.props.hotelRoomsAmenities
                            ?
                            <div className='room_amenities'>
                                {
                                    this.props.hotelRoomsAmenities.map((roomAmenitiy, index) =>
                                        <div className='room_amenity' key={index}>
                                            <input type='checkbox' onChange={e => this.toggleAmenity(e, roomAmenitiy.id, 'room_amenities')} />
                                            {/* <img className='amenities_icon' src={roomAmenitiy.icon_svg} alt={roomAmenitiy.amenity} /> */}
                                            <span>{roomAmenitiy.amenity}</span>
                                        </div>)
                                }
                            </div>
                            : null


                    }
                    {
                        this.props.hotelAmenities
                            ?
                            <div className='room_amenities'>
                                {
                                    this.props.hotelAmenities.map((hotelAmenitiy, index) =>
                                        <div className='hotel_amenity' key={index}>
                                            <input type='checkbox' onChange={e => this.toggleAmenity(e, hotelAmenitiy.id, 'hotel_amenities')} />
                                            {/* <img className='amenities_icon' src={hotelAmenitiy.icon_svg} alt={hotelAmenitiy.amenity} /> */}
                                            <span>{hotelAmenitiy.amenity}</span>
                                        </div>)
                                }
                            </div>
                            : null
                    }
                </div>
                <div className='search-results-container'>
                    {
                        this.state.rooms && !this.state.loading
                            ?
                            this.state.rooms.map((room, index) =>
                                <RoomCard key={index} room={room} />
                            )
                            : <Spinner />
                    }
                </div>
            </React.Fragment>
        )
    }

}
export default RoomFilters