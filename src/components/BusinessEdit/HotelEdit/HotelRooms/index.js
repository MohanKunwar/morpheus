import React, { Component } from 'react'
import Axios from '../../../../services/Axios'
import HotelRoomCard from '../../../../UI/HotelRoom/HotelRoomCard'
import AddEditRoom from '../../../../UI/AddEditRoom'
import KhozModal from '../../../../UI/KhozModal'
class HotelRooms extends Component {
    state = {
        rooms: null,
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.business.getRoomsUrl(this.props.business.slug)).then(response => {
            if (response && response.data) {
                this.setState({
                    rooms: response.data.data
                })
            }
        })
    }
    toggleModal = (stateVar, state) => {
        this.setState({ [stateVar]: state ? true : false })
    }
    render() {
        return (
            <React.Fragment>
                <button aria-label="show modal" onClick={e => this.toggleModal('add', 'open')} >
                    {
                        this.props.room ? 'Edit Room' : 'Add New Room'
                    }
                </button>
                <KhozModal
                    toggleModal={e => this.toggleModal('add')}
                    showModal={this.state.add}
                    title='Add New Room'
                >
                    <AddEditRoom business={this.props.business} toggleModal={this.toggleModal} />

                </KhozModal>
                {
                    this.state.rooms
                        ?
                        <div className='edit_rooms_container'>
                            {
                                this.state.rooms.map((room, index) =>
                                <div className='hotel_room_edit' key={index}>
                                    <HotelRoomCard  room={room} page='edit' />
                                    <button aria-label="show modal" onClick={() => this.toggleModal('edit', 'open')} >Edit</button>
                                    <KhozModal
                                        toggleModal={e => this.toggleModal('edit')}
                                        showModal={this.state.edit}
                                        title='Edit Room'
                                    >
                                        <AddEditRoom business={this.props.business} room={room} toggleModal={this.toggleModal} />
                                    </KhozModal>
                                    </div>
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