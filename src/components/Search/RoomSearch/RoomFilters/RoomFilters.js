import React, { Component } from 'react'
import UserService from '../../../../services/User'
class RoomFilters extends Component {
    componentWillMount() {
        this.setState({
            checkin: UserService.getSessionItem('check_in'),
            checkout: UserService.getSessionItem('check_out'),
            location: UserService.getSessionItem('location')
        })
        // get hotel amenities
        // get room amenities
    }
    render() {
        return (
            <span>room filters</span>
        )
    }
}
export default RoomFilters