import React, { Component } from "react";
import UserService from "../../../services/User"
import Axios from "../../../services/Axios";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import * as moment from 'moment'
import RoomFilters from './RoomFilters'
import './RoomSearch.css'
class RoomSearch extends Component {
    state = {
        checkIn: UserService.getSessionItem("check_in"),
        checkOut: UserService.getSessionItem('check_out'),
        showDateRange: undefined,
        pickedDate: 'Select Checkin-Checkout Date',
        location: UserService.getSessionItem('location'),
        
    }
    initSearch = false
    componentWillMount() {
        if (this.state.checkIn) {
            this.initSearch = true
        }
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response && response.data) {
                this.setState({ locations: response.data.data });
            }
        })
        Axios.instance.get(Axios.API.room.getAllHotelRoomAmenitiesUrl).then(response => {
            if (response && response.data) {
                this.setState({ hotelRoomsAmenities: response.data.data})
            }
        })
        Axios.instance.get(Axios.API.room.getAllHotelAmenitiesUrl).then(response => {
            if (response && response.data) {
                this.setState({ hotelAmenities: response.data.data})
            }
        })

    }
    showDateRangePicker = () => {
        this.setState({ showDateRange: true })
    }
    handleDateSelect = range => {
        this.setState({
            showDateRange: false,
            pickedDate: `${moment(range.start).format('MMM Do YY')} - ${moment(range.end).format('MMM Do YY')}`,
            checkIn: moment(range.start).format('YYYY-MM-DD'),
            checkOut: moment(range.end).format('YYYY-MM-DD')
        })
        UserService.setSessionItem('check_in', this.state.checkIn)
        UserService.setSessionItem('check_out', this.state.checkOut)
    }
    handleLocationChange = e => {

        UserService.setSessionItem('location', e.target.value) 
        this.setState({ location: e.target.value })
    }
    initializeSearch = e => {
        e.preventDefault()
        this.initSearch = true
        this.setState({checkIn: this.state.checkIn})
    }
    render() {
        return (
                
                    this.initSearch
                    ?
                    (
                        <RoomFilters 
                        locations={this.state.locations} 
                        hotelAmenities={this.state.hotelAmenities} 
                        hotelRoomsAmenities={this.state.hotelRoomsAmenities} />
                    )
                    :
                    (
                        <div className='search-room'>
                        <p className="filter_heading">Check In - Check Out</p>
                            <input type='text' value={this.state.pickedDate} onClick={this.showDateRangePicker} readOnly />
                            {
                                this.state.showDateRange
                                    ?
                                    <DateRangePicker
                                        numberOfCalendars={1}
                                        selectionType="range"
                                        minimumDate={new Date()}
                                        onSelect={this.handleDateSelect} />
                                    : null
                            }
                            {
                                this.state.locations
                                    ?
                                    <div className='location-filter'>
                                        <p className="filter_heading">Select Location</p>
                                        <select
                                            onChange={e => this.handleLocationChange(e)}
                                            className="search_filter_select"
                                            defaultValue={this.state.location ? this.state.location : 'All'}>
                                            <option value='All'>All Locations</option>
                                            {
                                                this.state.locations.map((location, index) => {
                                                    return (<option key={index} value={location.id}>{location.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>

                                    : null
                            }
                            <button onClick={e => this.initializeSearch(e)}>Search Rooms</button>
                        </div>
                    )
        )
    }
    componentWillUnmount() {
        console.log('abc')
    }
}
export default RoomSearch;
