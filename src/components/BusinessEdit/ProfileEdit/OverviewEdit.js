import React, { Component } from 'react'
import GoogleMapEdit from '../../common/GoogleMapEdit/GoogleMapEdit'
import { FaEdit } from 'react-icons/fa';
import KhozModal from '../../../UI/KhozModal'
import AddEditPhoto from '../../../UI/AddEditPhoto'
import Axios from '../../../services/Axios';
import KhozTabs from '../../../UI/Tabs';
import { Form, Field } from 'react-final-form';
import Error from '../../../helpers/FormError';
import AddEditBusinessHours from '../../../UI/AddEditBusinessHours';
import * as moment from 'moment'
class OverviewEdit extends Component {
    state = {
        logoEdit: false
    }
    componentWillMount() {
        Axios.authInstance.get(this.props.business.hours_url).then(response => {
            if (response && response.data) {
                this.setState({ hours: response.data.data })
                console.log('hours', response.data.data)
            }
        })
    }
    openHoursEdit = stateVar => {
        this.setState({[stateVar]: true})
    }
    toggleModal = stateVar => {
        this.setState({ [stateVar]: false, })
    }
    onSelectFile = (e, stateVar) => {
        this.setState({ [stateVar]: e.target.files })
    }
    addCircularSectionClass = () => {

        let selection = document.getElementsByClassName('ReactCrop__crop-selection')
        console.log('selections', selection)
        if (selection.length > 0)
            selection[0].className += ' circular_crop_selecxtion'
    }
    updateGeoLocation = (lat, lng) => {
        this.geoLocation = { lat: lat, lng: lng }
        console.log(this.geoLocation)
    }
    validateBusinessEdit = values => {
        const errors = {}
        if (!values.name) {
            errors.name = 'name is required'
        }
        return errors
    }
    updateBusinessHours = response => {
        console.log('response', response)
        this.setState({hours: response})
    }
    onSubmit = values => {
        console.log('values', values)
    }
    render() {
        const { business, update, topLevelCategories } = this.props
        console.log('busines', business)
        return (
            <div className='business_overview_edit'>
                <div className='business_logo_edit' title='logo' icon='instagram.svg'>
                    <img src={business.logo} alt={business.name} className='business_logo' />
                    {/* <FaEdit onClick={this.editLogo} /> */}

                    <input onChange={e => this.onSelectFile(e, 'logo')} type="file" />
                    <KhozModal
                        showModal={this.state.logo}
                        title={business.logo ? `Edit ${business.name}'s Logo` : `Add ${business.name}'s Logo`}
                        toggleModal={e => this.toggleModal('logo')}
                    >
                        {
                            this.state.logo ?
                                <AddEditPhoto
                                    photoUrl={this.state.logo}
                                    name={business.slug}
                                    circularView={this.addCircularSectionClass}
                                    crop={{
                                        aspect: 1 / 1,
                                        width: 200,
                                        height: 200,
                                        x: 0,
                                        y: 0
                                    }}
                                    update={update}
                                    postUrl={Axios.API.businessEdit.editLogoUrl(business.slug)}
                                    toggleModal={e => this.toggleModal('logo')} />
                                : null
                        }
                    </KhozModal>
                </div>
                <div className='business_cover_edit' title='cover' icon='apple.svg'>
                    <img src={business.cover} alt={business.name} className='business_cover' />
                    <input onChange={e => this.onSelectFile(e, 'cover')} type='file' />
                    <KhozModal
                        showModal={this.state.cover}
                        title={business.cover ? `Edit ${business.name}'s Cover` : `Add ${business.name}'s Cover`}
                        toggleModal={e => this.toggleModal('cover')}
                    >
                        {
                            this.state.cover ?
                                <AddEditPhoto
                                    photoUrl={this.state.cover}
                                    name={business.slug}
                                    crop={{
                                        aspect: 3 / 1,
                                        width: 1042,
                                        height: 385,
                                        x: 0,
                                        y: 0
                                    }}
                                    update={this.props.update}
                                    postUrl={Axios.API.businessEdit.editCoverUrl(business.slug)}
                                    toggleModal={e => this.toggleModal('cover')} />
                                : null
                        }
                    </KhozModal>
                </div>

                <Form
                    onSubmit={this.onSubmit}
                    initialValues={business}
                    validate={this.validateBusinessEdit}>
                    {({ handleSubmit }) => (
                        <form className='edit_business_form' onSubmit={handleSubmit}>
                            <div className="khoz_form_group">
                                <label className="khoz_form_label">Business Name:</label>
                                <Field
                                    name='name'
                                    component='input'
                                    placeholder={`Please enter Business's Name`}
                                    value={business ? business.name : null}
                                />
                                <Error classname="khoz_form_error" name="name" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Email:</label>
                                <Field
                                    name='email'
                                    component='input'
                                    placeholder={`Please enter your Email`}
                                    value={business ? business.email : null}
                                />
                                <Error classname="khoz_form_error" name="email" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Landline Number:</label>
                                <Field
                                    name='phone_number'
                                    component='input'
                                    placeholder={`Please enter your Landline Number`}
                                    value={business ? business.phone_number : null}
                                />
                                <Error classname="khoz_form_error" name="phone_number" />
                            </div>

                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Mobile Number:</label>
                                <Field
                                    name='mobile_number'
                                    component='input'
                                    placeholder={`Please enter your Mobile Number`}
                                    value={business ? business.phone_number : null}
                                />
                                <Error classname="khoz_form_error" name="mobile_number" />
                            </div>
                            <div className='khoz_form_group'>

                                <label className='khoz_form_label'>Select Primary Category:</label>
                                <Field
                                    name='category_id'
                                    component='select'
                                    value={business ? business.category.id : null} >
                                    {
                                        topLevelCategories ?
                                            topLevelCategories.map(category =>
                                                <option key={category.id} value={category.id}>{category.name}</option>)
                                            : null
                                    }
                                </Field>
                                <Error classname="khoz_form_error" name="category_id" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Exact Location:</label>
                                <Field
                                    name='address'
                                    component='input'
                                    placeholder={`Please enter your exact location`}
                                    value={business ? business.address : null}
                                />
                                <Error classname="khoz_form_error" name="address" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Landmark:</label>
                                <Field
                                    name='landmark'
                                    component='input'
                                    placeholder={`Specify landmark around your establishment`}
                                    value={business ? business.landmark : null}
                                />
                                <Error classname="khoz_form_error" name="landmark" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Establishment Year:</label>
                                <Field
                                    name='establishment_year'
                                    component='input'
                                    placeholder={`Please enter your Establishment Year`}
                                    value={business ? business.establishment_year : null}
                                />
                                <Error classname="khoz_form_error" name="establishment_year" />
                            </div>
                            <div className='khoz_form_group'>
                                <label className='khoz_form_label'>Description:</label>
                                <Field
                                    name='description'
                                    component='textarea'
                                    placeholder={`Please describe your business`}
                                    value={business ? business.description : null}
                                />
                                <Error classname="khoz_form_error" name="description" />
                            </div>


                            <GoogleMapEdit
                                lat={business.latitude}
                                lng={business.longitude}
                                updateGeoLocation={this.updateGeoLocation}
                            />
                            <div className='buttons'>
                                <button type='submit'>Save</button>
                            </div>
                        </form>
                    )}
                </Form>
                {
                    this.state.hours ?
                        <div className='business_hours_edit'>
                            <span>Business Hours</span>
                            <button onClick={e => this.openHoursEdit('edit_hours')}>Edit</button>
                            {
                                business.hours_always_open ?
                                    <span>Open 24 Hrs</span>
                                    :
                                    <div className='business_hours'>
                                        {this.state.hours.map((day, index) =>
                                            <div className='business_days' key={index}>
                                                {day.day.slice(0, 3).toUpperCase()}: {moment(day.start, 'HH:mm:ss').format('hh:mm A')} {moment(day.end, 'HH:mm:ss').format('hh:mm A')}
                                            </div>)}
                                    </div>

                            }
                            <KhozModal
                                toggleModal={e => this.toggleModal('edit_hours')}
                                showModal={this.state.edit_hours}
                                title={'Edit Opening Hours'}
                            >
                            <AddEditBusinessHours 
                            business={business} 
                            hours={this.state.hours} 
                            update={this.updateBusinessHours}
                            toggleModal={e => this.toggleModal('edit_hours')} />
                            </KhozModal>


                        </div>
                        : null
                }
                {/* <button onClick={e => this.handleChanges(e)}>Save</button> */}
            </div>
        )
    }

}
export default OverviewEdit