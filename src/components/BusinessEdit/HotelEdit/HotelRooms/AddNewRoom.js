import React, { Component } from 'react'
import KhozModal from '../../../../UI/KhozModal'
import AddRooms from './../AddRooms'

class AddNewRoom extends Component {
    state = {
        showModal: false
    }
    toggleModal = (open) => {
        if (open) {
            this.setState({ showModal: true })
        } else {
            this.setState({ showModal: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                <button aria-label="show modal" onClick={() => this.toggleModal(true)} >
                {
                    this.props.room ? 'Edit Room' : 'Add New Room'
                }
                </button>
                    <KhozModal
                        toggleModal={this.toggleModal}
                        showModal={this.state.showModal}
                        title={this.props.room ? 'Edit Room' : 'Add New Room'}
                    >
                    <AddRooms business={this.props.business}/>
                        
                    </KhozModal>
            </React.Fragment>
        )
    }
}
export default AddNewRoom
