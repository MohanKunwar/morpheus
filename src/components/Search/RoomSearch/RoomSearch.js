import React, { Component } from "react";
import UserService from "../../../services/User";
import { Form } from "react-final-form";
import Axios from "../../../services/Axios";
import Error from "../../../helpers/FormError";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import * as moment from 'moment'
import './RoomSearch.css'
class RoomFilters extends Component {
    state = {
        checkIn: null,
        checkOut: null,
        showDateRange: undefined,
        pickedDate: 'Select Checkin-Checkout Date',
        location: null
    }
    componentWillMount() {

        UserService.setSessionItem('check_in', '2019-10-10')
        UserService.setSessionItem('check_out', '2019-10-12')
        UserService.setSessionItem('location', '1')
        let checkIn = UserService.getSessionItem("check_in");
        if (checkIn) {
            this.setState({ checkIn: checkIn });
        }
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response && response.data) {
                this.setState({ locations: response.data.data });
            }
        });

    }
    showDateRangePicker = () => {
        this.setState({ showDateRange: true })
    }
    handleDateSelect = range => {
        this.setState({
            showDateRange: false,
            pickedDate: `${moment(range.start).format('MMM Do YY')} - ${moment(range.end).format('MMM Do YY')}`,
            checkIn: range.start,
            checkOut: range.end
        })
    }
    handleLocationChange = e => {
        e.preventDefault()
        this.setState({ location: e.target.value })
    }
    initializeSearch = e => {
        e.preventDefault()
        UserService.setSessionItem('check_in', this.state.checkIn)
        UserService.setSessionItem('check_out', this.state.checkOut)
        UserService.setSessionItem('location', this.state.location)
        this.setState({ checkIn: this.state.checkIn })
    }
    render() {
        return (
            <div className="card-container">
                {
                    this.state.checkIn
                    ?
                    (
                        <RoomFilters locations={this.state.locations} />
                    )
                    :
                    (
                        <div className='search-room'>
                            <input type='text' defaultValue={this.state.pickedDate} onClick={this.showDateRangePicker} />
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
                }
            </div>
        );
    }
}
export default RoomFilters;
