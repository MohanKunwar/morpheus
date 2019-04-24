import React, { Component } from 'react'
import KhozTabs from '../../../UI/Tabs'
import HotelRooms from './HotelRooms';
import Bookings from './Bookings'
import Axios from '../../../services/Axios';


export default class HotelEdit extends Component {

    getBookings = () => {

    }

    getHotelAmenities(businessUrl) {
        Axios.instance.get(Axios.API.room.getHotelAmenitiesUrl(businessUrl)).then(response => {
            if (response && response.data) {
                this.setState({ hotelAmenities: response.data.data })
            }
        })
    }
    getAllHotelAmenities() {
        Axios.instance.get(Axios.API.room.getAllHotelAmenitiesUrl).then(response => {
            if (response && response.data) {
                this.setState({ allHotelAmenities: response.data.data})
            }
        })
    }
    render() {
        return (
            this.props.business ?
            <div className='business_hotel_edit'>
                <KhozTabs>
                    <div title='bookings' icon='apple.svg' switch='bookings'> 
                    {/* // active={this.activateTab('bookings')} */}
                        <Bookings business={this.props.business}/>
                    </div>
                    <div title='rooms' icon='apple.svg' switch='rooms'>
                        <HotelRooms businessSlug={this.props.business.slug} />
                    </div>
                    <div title='hotel amenities' icon='apple.svg' switch='hotel_amennities'>
                        {/* <HotelAmenities allAmenities={this.state.allHotelAmenities()} hotelAmenities={this.state.hotelAmenities} /> */}
                    </div>
                    <div title='book rooms from desk' icon='apple.svg' switch='book_rooms_from_desk'>
                        book rooms fromd esk
                    </div>
                    <div title='occupancy details' icon='apple.svg' switch='occupancy_details'>
                        occupancy details
                    </div>
                </KhozTabs>
            </div>
            : null
        )
    }
}