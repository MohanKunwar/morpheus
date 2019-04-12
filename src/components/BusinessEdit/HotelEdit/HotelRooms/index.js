import React, { Component } from 'react'
import AddNewRoom from './AddNewRoom';
import Axios from '../../../../services/Axios';
class HotelRooms extends Component {
    state = {
        rooms: null
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.business.getRoomsUrl(this.props.businessSlug)).then(response => {
            if (response && response.data) {
                this.setState({
                    rooms: response.data.data
                })
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <AddNewRoom />
                {
                    this.state.rooms
                        ?
                        <div className='edit_rooms_container'>
                        </div>
                        : null
                }
            </React.Fragment>
        )
    }
}
export default HotelRooms   