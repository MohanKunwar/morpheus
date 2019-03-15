import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Axios from '../../../services/Axios';
import './createRequirement.css';
import Inputfield from './../../../UI/Inputfield/inputfield'

const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { error, touched } }) =>
            error && touched ? <span className="requirement_error">{error}</span> : null
        }
    </Field>
);
class CreateRequirement extends Component {
    state = {
        locations: null
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.common.getLocationsUrl).then(response => {
            if (response) {
                console.log('locations', response.data.data)
                this.setState({ locations: response.data.data })
            }
        })
    }
    onSubmit = values => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('description', values.description)
        formData.append('location_id', values.location)
        if (this.state.imagePreviewUrl) {
            formData.append('attachment', this.state.file)
        }
        Axios.authInstance.post(Axios.API.requirement.postUserRequirementUrl, formData).then(response => {
            if (response.data) {
                console.log(response.data)
                this.props.history.push('/user/requirements')
            }
        })
    }
    getFile = e => {
        e.preventDefault()
        if (e.target.files[0].size < 2000000) {
        let reader = new FileReader()
        let file = e.target.files[0]
            this.setState({ fileLarger: false })
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                })
            }
            reader.readAsDataURL(file)
        } else {
            this.setState({ fileLarger: true })
        }
    }
    render() {
        return (
            <div className="card-container">
            {
            this.state.locations ?
                (<div className='create-requirement'>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            const errors = {}
                            if (!values.title) {
                                errors.title = 'Title is required'
                            } else if (values.title.length < 5) {
                                errors.title = 'Title must be at least 5 characters'
                            }
                            if (!values.description) {
                                errors.description = 'Description is required'
                            } else if (values.description.length < 5 ) {
                                errors.description = 'Description must be at least 5 characters'
                            }
                            if (!values.location || values.location === 'none') errors.location = 'Please select a location'
                            return errors
                        }}>
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label className="requirement_create_label">Title</label>
                                    <Inputfield name="title" component='input' type='text' placeholder="Title for your request" />
                                    <Error name='title' />
                                </div>
                                <div className='form-group'>
                                    <label className="requirement_create_label">Description</label>
                                    <Inputfield name="description" component='textarea' type='text' placeholder="Describe your request/requirement in as detail as possible" />
                                    <Error name='description' />
                                </div>
                                <div className='form-group'>
                                    <label className="requirement_create_label">Location</label>
                                    <Field name="location" component='select' >
                                        <option value='none'>Select Location</option>
                                        {
                                            this.state.locations.map((location, index) =>
                                                <option key={index} value={location.id}>{location.name}</option>
                                            )
                                        }</Field>
                                    <Error name='location' />
                                </div>
                                <div className='form-group'>
                                    <label className="requirement_create_label">Attach relevant file, image</label>
                                    <input type='file' placeholder="Attachment" onChange={e => this.getFile(e)} className="attach_file" />
                                </div>
                                {
                                    this.state.imagePreviewUrl
                                        ? <img src={this.state.imagePreviewUrl} alt='attachment' />
                                        : null
                                }
                                {
                                    this.state.fileLarger
                                        ? <span>upload file cannot be larger than 2MB</span>
                                        : null
                                }
                                <button type='submit' className="requirement_button" >Submit</button>
                            </form>
                        )}</Form>
                </div>)
                : <div>Loading...</div>
            }
            </div>
        )
    }
}
export default CreateRequirement;
