import React, { Component } from 'react'
import AddNewRoom from './AddNewRoom';
import Axios from '../../../../services/Axios'
import HotelRoomCard from '../../../../UI/HotelRoom/HotelRoomCard'
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
                            {
                                this.state.rooms.map((room, index) =>
                                    <React.Fragment>
                                        <HotelRoomCard key={index} room={room} page='edit' />
                                        <button>edit</button>
                                    </React.Fragment>
                                )
                            }
                        </div>
                        : null
                }
            </React.Fragment>
        )
    }
}
export default HotelRooms   