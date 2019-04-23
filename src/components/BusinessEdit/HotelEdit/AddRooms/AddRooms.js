import React, { Component } from 'react'
import Axios from './../../../../services/Axios'
import ImagesPreview from '../../../common/ImagesPreview/ImagesPreview'
import './AddRooms.css'
import { Form, Field } from 'react-final-form'
import Inputfield from './../../../../UI/Inputfield/inputfield'
import Error from './../../../../helpers/FormError'

class AddRooms extends Component{
    state ={
        allhotelAmenities:[]
    }
    componentWillMount(){
            Axios.instance.get(Axios.API.room.getAllHotelRoomAmenitiesUrl).then(response => {
                if (response && response.data) {
                    this.setState({ allhotelAmenities: response.data.data})
                }
            })
    }

    onSubmit = values => {
        Axios.instance.post(Axios.API.room.createAddRoomUrl(this.props.business), values )
        .then(response => {
            console.log('confirm response', values)
          })
          .catch((error) => {
            console.log(error)
        });
      }



    render(){
        console.log(this.state.allhotelAmenities)
        console.log(this.props.business)
        return(
            <div className='room_add_container'>
            {/* hotels/{businessUrl}/rooms */}
            <div className='add_room_image'>
            {/* <span>Add New Room</span>
            <p className='upload_room_img'><ImagesPreview /></p> */}
            </div>
                <Form onSubmit={this.onSubmit}
                validate = {values => {
                    const errors = {}
                    if (!values.type) {
                        errors.type = 'Room name is required'
                      }
                      if (!values.price) {
                        errors.price = 'Price is required'
                      }else if (isNaN(values.price)) {
                        errors.price = "Must be a number";
                      } 
                      if (!values.room_count) {
                        errors.room_count = 'Room count is required'
                      }
                      if (!values.max_capacity) {
                        errors.max_capacity = 'Room maximum capacity is required'
                      }
                      if (!values.amenity) {
                        errors.amenity = 'Room amenities are not selected'
                      }
                      if (!values.description) {
                        errors.description = 'Room description is required'
                      }else if(values.description.length < 20){
                        errors.description = 'must be 20 characters'
                      }
                      if (!values.rules) {
                        errors.rules = 'Room rules are required'
                      } else if(values.rules.length < 20){
                        errors.rules = 'must be 20 characters'
                      }
                      
                      return errors
                }}
                >
                {({ handleSubmit, reset, submitting}) => (
                <form onSubmit ={handleSubmit}>
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
                    this.state.allhotelAmenities
                    ?
                    <div className='add_room_amenities'>
                    <h4 className='room_amenities_title'>Select the amenities</h4>
                    {
                        this.state.allhotelAmenities.map((addAmenity, index) => <div key={index}>
                             <Field
                                component='input' 
                                type='checkbox'
                                value={addAmenity.id}
                                name='amenity'
                                 />
                             <span>{addAmenity.amenity}</span>
                        </div>
                        )
                    }
                    <Error name='amenity' />
                     </div>
                     :null
                }
                 <div className='add_room_description'>
                    <h4>Description</h4>
                   <Field
                   type='textarea'
                   component='textarea'
                   name='description'
                   placeholder='room description'
                   className= 'textarea'
                   />
                   <Error name = 'description' />
                    </div>
                    <div className='add_room_description'>
                    <h4>Rules</h4>
                   <Field 
                   className= 'textarea'
                   component='textarea'
                   name='rules' 
                   placeholder='rules'
                   cols='auto' 
                   rows='auto' />
                   
                   <Error name='rules' />
                    </div>
                    <div className='room_add_buttons'>
                        <button type='button' 
                        className='room_cancel_btn'
                        onClick={reset}
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
export default AddRooms