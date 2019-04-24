import React, { Component } from 'react'
import GoogleMapEdit from '../../common/GoogleMapEdit/GoogleMapEdit'
import { FaEdit } from 'react-icons/fa';
import KhozModal from '../../../UI/KhozModal'
import AddEditPhoto from '../../../UI/AddEditPhoto'
// import Overview from '../../BusinessView/Overview/Overview';
class OverviewEdit extends Component {
    state = {
        logoEdit: false
    }
    editLogo = () => {
        this.setState({ logoEdit: true })
    }
    toggleModal = stateVar => {
        this.setState({ [stateVar]: false,  })
    }
    onSelectFile = e => {
        this.setState({photo: e.target.files})
    }
    render() {
        const { business } = this.props
        console.log(this.state.photo)
        return (
            <div className='business_overview_edit'>
                <div className='business_logo_edit'>
                    <img src={business.logo} alt={business.name} className='business_logo'/>
                    {/* <FaEdit onClick={this.editLogo} /> */}

                <input onChange={this.onSelectFile} type="file" />
                    <KhozModal
                        showModal={this.state.photo}
                        title={business.logo ? `Edit ${business.name}'s Logo` : `Add ${business.name}'s Logo`}
                        toggleModal={e => this.toggleModal('photo')}
                    >
                    {
                        this.state.photo ?
                        <AddEditPhoto photoUrl={this.state.photo} name={business.slug} toggleModal={e => this.toggleModal('photo')} />
                        : null
                    }
                    </KhozModal>
                </div>

                {/* <GoogleMapEdit
                lat= {props.business.latitude}
                lng= {props.business.longitude}
                 /> */}
                <button onClick={e => this.handleChanges(e)}>Save</button>
            </div>
        )
    }

}
export default OverviewEdit