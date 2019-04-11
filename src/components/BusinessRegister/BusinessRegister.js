import React, { Component } from 'react'
import { Form } from 'react-final-form'
import './BusinessRegister.css'
import Inputfield from './../../UI/Inputfield/inputfield'
import Error from './../../helpers/FormError'

class BusinessRegister extends Component{
    state = {
        business_register: true
      }

      onSubmit = values => {}
    render(){
        return(
            <div className='card-container business_register_card'>
            <div className='business_register_form'>
            <Form
            onSubmit={this.onSubmit} 
            validate={values =>{
                const errors={}
                if(!values.businessname){
                    errors.businessname='Required business name'
                }
                if(!values.exact_address){
                    errors.exact_address='Required exact address'
                }
                if (values.mobile.toString().length !== 10) {
                    errors.mobile = "invalid phone number";
                  }
                  return errors
            }}
            >
             {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div className='business_register_form_group'>
                <label className='business_form_label'>What is the name of your business ?</label>
                <Inputfield 
                type={'text'}
                name={'businessname'}
                placeholder={'Enter your business'}
                />
                <Error className='business_Err' name='businessname'/>
                </div>
                <div className='business_register_form_group'>
                <label className='business_form_label'>Select your business category</label>
                <select className='search_filter_select' name='business_categories'>
                <option value='' disabled selected>Select categories</option>
                    <option>All Categories</option>
                </select>
                </div>
                <div className='business_register_form_group'>
                <label className='business_form_label'>Where is your business located ?</label>
                <div className='register_filter_location'>
                <select className='search_filter_select'>
                <option value='' disabled selected>Select Disrict</option>
                    <option>all</option>
                </select>
                <select className='search_filter_select'>
                <option value='' disabled selected>Select Location</option>
                    <option>All</option>
                </select>
                </div>
                <Inputfield 
                type={'text'}
                name={'exact_address'}
                placeholder={'Enter exact address'}
                />
                <Error name='exact_address'/>
                </div>
                <div className='business_register_form_group'>
                <label className='business_form_label'>How can customer contact you ?</label>
                <Inputfield 
                type={'text'}
                name={'mobile'}
                placeholder={'Example: 98XXXXXXXX'}
                />
                <Error name='mobile' />
                </div>
                <div className='buttons'>
                <button type='submit'>Register my business</button>
                </div>
            </form>
             )}
            </Form>
             </div>
             </div>
        )
    }
}
export default BusinessRegister