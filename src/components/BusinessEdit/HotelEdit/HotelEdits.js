import React, { Component } from 'react'
import KhozTabs from '../../../UI/Tabs'
import HotelRooms from './HotelRooms';

export default class HotelEdit extends Component {
    render() {
        return (
            <div className='business_hotel_edit'>
                <KhozTabs>
                    <div title='bookings' icon='apple.svg'>
                    bookings goes here
                    </div>
                     <div title='rooms' icon='apple.svg'>
                    <HotelRooms />
                    </div>
                   <div title='hotel amenities' icon='apple.svg'>
                        amenities goes here
                    </div>
                    <div title='book rooms from desk' icon='apple.svg'>
                        book rooms fromd esk
                    </div>
                    <div title='occupancy details' icon='apple.svg'>
                        occupancy details
                    </div>
                </KhozTabs>
            </div>
        )
    }
}