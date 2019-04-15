import React, { Component } from 'react'
import Axios from './../../../../services/Axios'
import ImagesPreview from '../../../common/ImagesPreview/ImagesPreview'
import './AddRooms.css'
import { Form } from 'react-final-form'
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
        
      }
    

    render(){
        console.log(this.state.allhotelAmenities)
        return(
            <div className='room_add_container'>
            {/* hotels/{businessUrl}/rooms */}
            <div className='add_room_image'>
            {/* <span>Add New Room</span>
            <p className='upload_room_img'><ImagesPreview /></p> */}
            </div>
                <Form onSubmit={this.onSubmit}
                validate = {values => {
                    const errors = {};
                    if (!values.add_room_name) {
                        errors.add_room_name = 'Room name is required'
                      }
                      if (!values.add_room_price) {
                        errors.add_room_price = 'Price is required'
                      } else if(isNaN(values.add_room_price)){
                          errors.add_room_price ='Price must be number'
                      }
                      if (!values.add_room_count) {
                        errors.add_room_count = 'Room count is required'
                      }
                      if (!values.add_max_capacity) {
                        errors.add_max_capacity = 'Room maximum capacity is required'
                      }
                      if (!values.add_room_des) {
                        errors.add_room_des = 'Room description is required'
                      }
                      if (!values.add_room_rules) {
                        errors.add_room_rules = 'Room rules are required'
                      }
                      
                      return errors
                }}
                >
                {({ handleSubmit}) => (
                <form onSubmit ={handleSubmit}>
                <div className='add_room_name'>
                    <div className='add_room_form_group'>
                    <label>Room Type</label>
                    <Inputfield
                    type={'text'}
                    name={'add_room_name'}
                    placeholder={'add room type'}
                    />
                    <Error name='add_room_name' />
                    {/* {
                        this.add_room_name ? this.add_room_name : null
                    } */}
                    </div>

                    <div className='add_room_form_group'>
                    <label>Price(NRS.)</label>
                    <Inputfield
                    type={'text'}
                    name={'add_room_price'}
                    placeholder={'room price'}
                    />
                    <Error name='add_room_price' />
                    {
                        this.add_room_price ? this.add_room_price : null
                    }
                    </div>

                    <div className='add_room_form_group'>
                    <label>Discount %</label>
                    <Inputfield
                    type={'number'}
                    name={'add_room_price_discount'}
                    placeholder={'discount %'}
                    />
                    </div>

                    <div className='add_room_form_group'>
                    <label>Room Count</label>
                    <Inputfield
                    type={'number'}
                    name={'add_room_count'}
                    placeholder={'room count'}
                    />
                    <Error name='add_room_count' />
                    </div>

                    <div className='add_room_form_group'>
                    <label>Maximum Capacity</label>
                    <Inputfield
                    type={'number'}
                    name={'add_max_capacity'}
                    placeholder={'maximum capacity'}
                    />
                    <Error name='add_max_capacity' />
                    </div>
                </div>
                
                {
                    this.state.allhotelAmenities
                    ?
                    <div className='add_room_amenities'>
                    <h4 className='room_amenities_title'>Select the amenities</h4>
                    {
                        this.state.allhotelAmenities.map((addAmenity, index) => <div key={index}>
                             <input type='checkbox' />
                             <span>{addAmenity.amenity}</span>
                        </div>
                        )
                    }
                     </div>
                     :null
                }
                 <div className='add_room_description'>
                    <h4>Description</h4>
                   <textarea 
                   type='textarea' 
                   name='add_room_des'
                   cols='auto' 
                   rows='auto'>
                   Room description
                   </textarea>
                   <Error name = 'add_room_des' />
                    </div>
                    <div className='add_room_description'>
                    <h4>Rules</h4>
                   <textarea 
                   type='textarea'
                   name='add_room_rules' 
                   cols='auto' 
                   rows='auto'>
                   Rules
                   </textarea>
                   <Error name='add_room_rules' />
                    </div>
                    <div className='room_add_buttons'>
                        <button type='submit' className='room_cancel_btn'>cancel</button>
                        <button type='submit' className='room_save_btn'>Save</button>
                    </div>
                </form>
                )}
                </Form>
            </div>
        )
    }
}
export default AddRooms