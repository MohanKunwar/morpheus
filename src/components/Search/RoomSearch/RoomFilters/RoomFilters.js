import React, { Component } from 'react'
import UserService from '../../../../services/User'
import Axios from '../../../../services/Axios';
import Spinner from '../../../../helpers/Spinner';
import RoomCard from '../../../../UI/RoomCard'
import * as moment from 'moment'
class RoomFilters extends Component {
    state = {
        checkin: UserService.getSessionItem('check_in'),
        checkout: UserService.getSessionItem('check_out'),
        location: UserService.getSessionItem('location')
    }
    componentWillMount() {
        // this.setState({
        //     checkin: moment(UserService.getSessionItem('check_in')).format('YYYY-MM-DD'),
        //     checkout: moment(UserService.getSessionItem('check_out')).format('YYYY-MM-DD'),
        //     location: UserService.getSessionItem('location')
        // })

        if (this.state.checkin) {
            Axios.instance.get(Axios.API.search.getRoomsResults(this.state.checkin, this.state.checkout, this.state.location)).then(response => {
                if (response && response.data) {
                    this.setState({ rooms: response.data.data })
                }
            })
        }

        // get hotel amenities
        // get room amenities
    }
    render() {
        return (
            <React.Fragment>
                <div className='search-filters'>
                    
                </div>
                <div className='search-results-container'>
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