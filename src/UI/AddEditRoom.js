import React, { Component } from 'react'
import Axios from '../services/Axios'
// import ImagesPreview from '../../../common/ImagesPreview/ImagesPreview'
import './AddEditRoom.css'
import { Form, Field } from 'react-final-form'
import Inputfield from './Inputfield/inputfield'
import Error from '../helpers/FormError'
import { FaTrash } from 'react-icons/fa'
class AddEditRoom extends Component {
  state = {
    allhotelAmenities: []
  }
  amenities = []
  photos = []
  componentWillMount() {
    Axios.instance.get(Axios.API.room.getAllHotelRoomAmenitiesUrl).then(response => {
      if (response && response.data) {
        this.setState({ allhotelAmenities: response.data.data })
      }
    })

    if (this.props.room) {
      Axios.authInstance.get(Axios.API.room.getRoomAmenitiesUrl(this.props.room.id)).then(response => {
        if (response && response.data) {
          response.data.data.map(amenity => this.amenities.push(amenity.id))
          this.setState({ hotelAmenities: response.data.data })
        }
      })
      Axios.authInstance.get(Axios.API.room.getRoomPhotosUrl(this.props.room.id)).then(response => {
        if (response && response.data) {
          this.setState({photos: response.data.data})
        }
      })
    } else {
      this.setState({ hotelAmenities: [], photos: null })
    }
  }
  deleteClicked = (id, openPopUp) => {
    if (openPopUp) {
      this.setState({ [`openPopUp${id}`]: true })
    } else {
      this.setState({[`openPopUp${id}`]: false })
    }
  }

  deletePhoto = id => {
    this.setState({ [`deleting${id}`]: true })
    Axios.authInstance.delete(Axios.API.room.deleteRoomPhotoUrl(this.props.business.slug, id)).then(response => {
      if (response && response.status === 204) {
        this.props.refresh()
        console.log('product deleted')
      } else {
        console.log('product deleted?')
      }
    })
  }
  onSubmit = values => {
    values.rules = values.rule
    delete values.rule
    if (this.photos.length === 0) {
      this.setState({ noPhoto: true })
      return
    } else {
      this.setState({ noPhoto: false })
    }
    values.photos = this.photos
    values.amenity = this.amenities
    if (!this.props.room) {
      // create new room
      Axios.authInstance.post(Axios.API.room.createAddRoomUrl(this.props.business.slug), values)
        .then(response => {
          console.log('confirm response', values)
          this.props.toggleModal('add')
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      values._method = 'PUT'
      // update old room
      Axios.authInstance.post(Axios.API.room.updateRoomUrl(this.props.business.slug, this.props.room.id), values).then(response => {
        console.log('confirm response', response)
        this.props.toggleModal('edit')
      }).catch(error => {
        console.log('error while updating room', error)
      })
    }
  }

  checkAmenity = amenityId => {
    let amenityIndex = this.state.hotelAmenities.findIndex(hotelAmenity => hotelAmenity.id === amenityId)
    return amenityIndex >= 0 ? true : false
  }
  updateAmenity = e => {
    if (e.target.checked) {
      this.amenities.push(parseInt(e.target.value))
    } else {

      let amenityIndex = this.amenities.findIndex(amenityId => amenityId === e.target.value)
      this.amenities.splice(amenityIndex, 1)
    }
    console.log(this.amenities)
  }
  deleteAdded = index => {
    this.photos.splice(index, 1)
    this.setState({addedPhotos: this.photos})
  }
  addPhotos = photo => {
    // const formData = new FormData()
    // formData.append('photo[]', photo)
    // console.log(formData.values)
    // Axios.authInstance.post(Axios.API.businessEdit.uploadImagesUrl(this.props.businessSlug), formData).then(response => {
    //     console.log('photos posted', response)
    //     this.props.update('photos')
    // })
}
  readFile = e => {
    for (let file of e.target.files) {
      if (file.size < 5000000) {
        let filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onloadend = () => {
          // this.photos.push({
          //   file: file,
          //   src: filereader.result
          // })
        this.photos.push(file)
        }
      }
    }
    this.setState({ addedPhotos: this.photos })
  }
  render() {
    return (
      <div className='room_add_container'>
        <div className='add_room_image'>
          <input id="upload_image" type="file" accept="image/*" hidden={true} multiple={true} onChange={this.readFile} />
          <img
            title="Click To Upload Images"
            className="upload-button"
            src={require('../assets/images/upload.ico')} alt="upload button"
            style={{ width: this.props.width || "90px", height: this.props.height || "90px" }}
            onClick={e => document.querySelector('#upload_image').click()} />
          {
            this.state.addedPhotos && this.state.addedPhotos.length > 0 ?
              this.state.addedPhotos.map((photo, index) =>
                <div key={index} className='edit_room_photo'>
                  <img src={photo.src} alt={index} />
                  <FaTrash onClick={e => this.deleteAdded(index)} />
                </div>
              )
              : null
          }
          {
            this.state.photos ?
            this.state.photos.map(photo => 
              <div key={photo.id} className='edit_room_photo'>
              {
                !this.state[`deleting${photo.id}`] ?
                <React.Fragment>
                  <img src={photo.src} alt={photo.id} />
                  <FaTrash onClick={e => this.deleteClicked(photo.id, true)} />
                </React.Fragment>
                : <span>deleting image</span> // todo deleting photo spinner
              }
              {
                this.state[`openPopUp${photo.id}`] ?
                  <div className='sure_popup'>
                    <span>Are you sure?</span>
                    <button onClick={e => this.deletePhoto(photo.id)}>Yes</button>
                    <button onClick={e => this.deleteClicked(photo.id, false)}>No</button>

                  </div>
                  : null
              }
              </div>
              )
              : null
          }
        </div>
        <Form onSubmit={this.onSubmit} initialValues={this.props.room}
          validate={values => {
            const errors = {}
            if (!values.type) {
              errors.type = 'Room name is required'
            }
            if (!values.price) {
              errors.price = 'Price is required'
            } else if (isNaN(values.price)) {
              errors.price = "Must be a number";
            }
            if (!values.room_count) {
              errors.room_count = 'Room count is required'
            }
            if (!values.max_capacity) {
              errors.max_capacity = 'Room maximum capacity is required'
            }
            // if (!values.amenity) {
            //   errors.amenity = 'Room amenities are not selected'
            // }
            if (!values.description) {
              errors.description = 'Room description is required'
            } else if (values.description.length < 20) {
              errors.description = 'must be 20 characters'
            }
            if (!values.rule) {
              errors.rule = 'Room rules are required'
            } else if (values.rule.length < 20) {
              errors.rule = 'must be 20 characters'
            }

            return errors
          }}
        >
          {({ handleSubmit, reset, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className='add_room_name'>
                <div className='add_room_form_group'>
                  <label>Room Type</label>
                  <Inputfield
                    type={'text'}
                    name={'type'}
                    placeholder={'add room type'}
                  />
                  <Error name='type' />
                  {/* {
                        this.type ? this.type : null
                    } */}
                </div>

                <div className='add_room_form_group'>
                  <label>Price(NRS.)</label>
                  <Inputfield
                    type={'text'}
                    name={'price'}
                    placeholder={'room price'}
                  />
                  <Error name='price' />
                </div>

                <div className='add_room_form_group'>
                  <label>Discount %</label>
                  <Inputfield
                    type={'number'}
                    name={'discount'}
                    placeholder={'discount %'}
                  />
                </div>

                <div className='add_room_form_group'>
                  <label>Room Count</label>
                  <Inputfield
                    type={'number'}
                    name={'room_count'}
                    placeholder={'room count'}
                  />
                  <Error name='room_count' />
                </div>

                <div className='add_room_form_group'>
                  <label>Maximum Capacity</label>
                  <Inputfield
                    type={'number'}
                    name={'max_capacity'}
                    placeholder={'maximum capacity'}
                  />
                  <Error name='max_capacity' />
                </div>
              </div>

              {
                this.state.allhotelAmenities && this.state.hotelAmenities
                  ?
                  <div className='add_room_amenities'>
                    <h4 className='room_amenities_title'>Select the amenities</h4>
                    {
                      this.state.allhotelAmenities.map((amenity, index) => <div key={index}>
                        <input
                          component='input'
                          type='checkbox'
                          defaultChecked={this.props.room ? this.checkAmenity(amenity.id) : false}
                          onChange={e => this.updateAmenity(e)}
                          value={amenity.id}
                          name='amenity'
                        />
                        <span>{amenity.amenity}</span>
                      </div>
                      )
                    }
                  </div>
                  : null
              }
              <div className='add_room_description'>
                <h4>Description</h4>
                <Field
                  type='textarea'
                  component='textarea'
                  name='description'
                  placeholder='room description'
                  className='textarea'
                />
                <Error name='description' />
              </div>
              <div className='add_room_description'>
                <h4>Rules</h4>
                <Field
                  className='textarea'
                  component='textarea'
                  name='rule'
                  placeholder='rules'
                  cols='auto'
                  rows='auto' />

                <Error name='rule' />
              </div>
              <div className='room_add_buttons'>
                <button type='button'
                  className='room_cancel_btn'
                  onClick={e => this.props.toggleModal('edit')}
                  disabled={submitting}
                >cancel</button>
                <button type='submit'
                  className='room_save_btn'>
                  Save</button>
              </div>
            </form>
          )}
        </Form>
      </div>
    )
  }
}

export default AddEditRoom