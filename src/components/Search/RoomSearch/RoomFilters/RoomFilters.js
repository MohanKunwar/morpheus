import React, { Component } from 'react'
import UserService from '../../../../services/User'
import Axios from '../../../../services/Axios'
import Spinner from '../../../../helpers/Spinner'
import RoomCard from '../../../../UI/RoomCard'
import DateRangePicker from 'react-daterange-picker'
import * as moment from 'moment'
import './RoomFilters.css'
class RoomFilters extends Component {
    state = {
        checkin: UserService.getSessionItem('check_in'),
        checkout: UserService.getSessionItem('check_out'),
        location: UserService.getSessionItem('location'),
        showDatePicker: false,
        datePickerText: UserService.getSessionItem('check_in')
            ? `${moment(UserService.getSessionItem('check_in')).format('MMM Do YY')} - ${moment(UserService.getSessionItem('check_out')).format('MMM Do YY')}`
            : 'Select Checkin Checkout Date'
    }
    room_amenities = []
    hotel_amenities = []
    componentWillMount() {
        this.getResults()
        document.addEventListener('scroll', this.trackScrolling)
    }

    toggleAmenity = (e, amenityId, type) => {
        let index = this[type].findIndex(id => amenityId === id)
        if (index >= 0) {
            this[type].splice(index, 1)
        } else {
            this[type].push(amenityId)
        }
        this.setState({ rooms: null }, () => this.getResults())
        // this.room_amenities[amenity.amenity] = this.room_amenities[amenity.amenity] ? null : amenity.id
    }
    handleLocationChange = e => {

        UserService.setSessionItem('location', e.target.value)
        this.setState({
            rooms: null,
            location: e.target.value
        }, () => this.getResults())
    }
    trackScrolling = () => {
        const wrappedElement = document.getElementById('end_of_search');
        if (this.isBottom(wrappedElement)) {
            if (this.state.nextResults && this.state.rooms.length > 0) {
                this.setState({ loadNewItems: true })
                this.getResults(this.state.nextResults.split('?')[1])
            } else {
                this.setState({ loadNewItems: false })
            }
        }
    }
    isBottom(el) {
        if (el) {
            return el.getBoundingClientRect().bottom <= window.innerHeight;
        }
    }
    getResults = next => {
        this.setState({ nextResults: null})
        let params = `checkin=${this.state.checkin}&checkout=${this.state.checkout}&rooms=1&guests=1`
        if (this.state.location) {
            params += `&location_id=${this.state.location}`
        }
        if (this.room_amenities.length > 0) {
            params += `&room_amenities=${this.room_amenities.join()}`
        }
        if (this.hotel_amenities.length > 0) {
            params += `&hotel_amenities=${this.hotel_amenities.join()}`
        }
        if (next) {
            params += `&${next}`
        }
        Axios.instance.get(Axios.API.search.getRoomsResults(params)).then(response => {
            if (response && response.data) {
                if (response.data.data.length > 0) {
                    let tempResults = this.state.rooms
                    if (tempResults) {
                        response.data.data.map(item => tempResults.push(item))
                    }
                    this.setState({
                        rooms: !this.state.rooms ? response.data.data : tempResults,
                        noResult: false,
                        nextResults: response.data.links.next
                    })
                } else {
                    this.setState({ noResult: true, rooms: [] })
                }
            }
            console.log(this.state.nextResults)
        })
    }
    showDateRangePicker = () => {
        this.setState({ showDatePicker: true })
    }
    handleRangeChange = range => {
        this.setState({ minPrice: range.min, maxPrice: range.max})
    }
    handleDateSelect = range => {
        let checkin = moment(range.start).format('YYYY-MM-DD')
        let checkout = moment(range.end).format('YYYY-MM-DD')
        UserService.setSessionItem('check_in', checkin)
        UserService.setSessionItem('check_out', checkout)
        this.setState({
            rooms: null,
            showDatePicker: false,
            checkin: checkin,
            checkout: checkout,
            datePickerText: `${moment(range.start).format('MMM Do YYYY')} - ${moment(range.end).format('MMM Do YYYY')}`
        }, () => this.getResults())
    }
    render() {
        return (
            <React.Fragment>
                <div className='search-filters'>
                    <div className="room_filter_container">
                        <div className='filter_room_date'>
                            <input type='text' onClick={this.showDateRangePicker} value={this.state.datePickerText} readOnly />
                            {
                                this.state.showDatePicker
                                    ?
                                    <DateRangePicker
                                        numberOfCalendars={1}
                                        selectionType='range'
                                        minimumDate={new Date()}
                                        onSelect={this.handleDateSelect} />
                                    : null
                            }
                        </div>
                        <div className='filter_room_location'>
                            {
                                this.props.locations
                                    ?
                                    <select onChange={e => this.handleLocationChange(e)}
                                        defaultValue={this.state.location ? this.state.location : 'All'}>
                                        {
                                            this.props.locations.map((location, index) =>
                                                <option key={index} value={location.id}>{location.name}</option>
                                            )
                                        }
                                    </select>
                                    : null
                            }
                        </div>
                        <div className='filter_room_price'>
                            Rs. { this.state.minPrice ? this.state.minPrice : 0 } - Rs. {this.state.maxPrice ? this.state.maxPrice : 20000 }
                            {/* <ReactDualRangeSlider
                                limits={[0,20000]}
                                onChange={(range) => 
                                    this.handleRangeChange(range)}
                            /> */}
                        </div>
                        {
                            this.props.hotelRoomsAmenities
                                ?
                                <div className='filter_room_amenities'>
                                    <h4>Room Amenities</h4>
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
                                <div className='filter_room_amenities'>
                                    <h4>Hotel Amenities</h4>
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
                </div>
                {
                    this.state.rooms
                        ?
                        this.state.noResult
                            ? <div>No results Found</div>
                            :
                            <div className='search-results-container'>
                                {this.state.rooms.map((room, index) => <RoomCard key={index} room={room} />)}
                                {
                                    this.state.loadNewItems
                                        ? <div>loading more results...</div>
                                        : <div>no more records</div>
                                }
                                <div id='end_of_search'></div>
                            </div>
                        : <Spinner />
                }
            </React.Fragment>
        )
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }
}
export default RoomFilters