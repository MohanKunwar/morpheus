import React, { Component } from "react";
import UserService from "../../../services/User";
import { Form } from "react-final-form";
import Axios from "../../../services/Axios";
import Error from "../../../helpers/FormError";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import * as moment from 'moment'
import './RoomFilters.css'
class RoomFilters extends Component {
    state = {
        checkIn: null,
        showDateRange: undefined,
        pickedDate: 'Select Checkin-Checkout Date',
        location: null
    }
    values = {
        start: null,
        end: null,
        location: null
    }
    componentWillMount() {
        let checkIn = UserService.getItem("check_in");
        if (checkIn) {
            this.setState({
                checkIn: checkIn,
                checkOut: UserService.getItem("check_out"),
                location: UserService.getItem("location")
            });
        }
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response && response.data) {
                this.setState({ locations: response.data.data });
            }
        });
    }
    onStayDetailsSubmit = values => {
        console.log("values");
    }
    showDateRangePicker = () => {
        this.setState({ showDateRange: true })
    }
    handleDateSelect = range => {
        this.setState({
            showDateRange: false,
            pickedDate: `${moment(range.start).format('MMM Do YY')} - ${moment(range.end).format('MMM Do YY')}`
        })
        this.values.start = range.start
        this.values.end = range.end
    }
    handleLocationChange = e => {
        e.preventDefault()
        this.values.location = e.target.value
        this.setState({ location: e.target.value })
    }
    initializeSearch = () => {
        UserService.setItem('check_in', this.values.start)
        UserService.setItem('check_out', this.values.end)
        UserService.setItem('location', this.values.location)
        this.setState({ checkIn: this.values.start })
    }
    render() {
        return (
            <div className="card-container">
                {this.state.checkIn
                    ?
                    (
                        <span>filters go here</span>
                    )
                    :
                    (
                        <div className='search-room'>
                            <input type='text' value={this.state.pickedDate} onClick={this.showDateRangePicker} />
                            {
                                this.state.showDateRange
                                    ?
                                    <DateRangePicker
                                        numberOfCalendars={2}
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
                                            value={this.state.location ? this.state.location : 'All'}>
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
                            <button onClick={this.initializeSearch}>Search Rooms</button>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default RoomFilters;
