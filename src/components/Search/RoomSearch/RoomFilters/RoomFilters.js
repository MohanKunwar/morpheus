import React, { Component } from 'react'
import UserService from '../../../../services/User'
import Axios from '../../../../services/Axios';
import Spinner from '../../../../helpers/Spinner';
import RoomCard from '../../../../UI/RoomCard'
import * as moment from 'moment'
class RoomFilters extends Component {
    componentWillMount() {
        this.setState({
            checkin: moment(UserService.getSessionItem('check_in')).format('YYYY-MM-DD'),
            checkout: moment(UserService.getSessionItem('check_out')).format('YYYY-MM-DD'),
            location: UserService.getSessionItem('location')
        })
        Axios.instance.get(Axios.API.search.getRoomsResults(this.state.checkin, this.state.checkout, this.state.location)).then(response => {
            if (response && response.data) {
                this.setState({ rooms: response.data.data})
            }
        })
        // get hotel amenities
        // get room amenities
    }
    render() {
        return (
            <React.Fragment>
                <div className='room_search_filters'>
                </div>
                <div className='room_search_results'>
                {
                    this.state.rooms
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