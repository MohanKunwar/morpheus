import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import Inputfield from './Inputfield/inputfield'
// import InputTextField from './Inputfield'
import Error from '../helpers/FormError'
import ImagesPreview from '../components/common/ImagesPreview/ImagesPreview';
// import './KhozForm.css'
import { FaTrash } from 'react-icons/fa';
import Axios from '../services/Axios';
class AddEditProduct extends Component {
  state = {

  }
  componentWillMount() {
  }
  onSubmit = values => {
    console.log(values)
  }
  deleteClicked = (id, openPopUp)  => {
    if (openPopUp) {
    this.setState({[`openPopUp${id}`]: true})
    } else {
      this.setState({[`openPopUp${id}`]: false})
    }
  }
  deleteItem = id => {
    Axios.authInstance.delete(Axios.API.product.deleteProductPhotoUrl(id)).then(response => {
      if (response && response.status === 204) {
        console.log('product deleted')
      } else {
        console.log('product deleted?')
      }
    })
  }
  render() {
    const { product, photos } = this.props
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={product}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = 'name is required'
          }
          if (!values.price) {
            errors.price = 'price is required'
          }
          return errors
        }}>

        {({ handleSubmit }) => (
          <form className="edit_product_form" onSubmit={handleSubmit}>

            <div className="khoz_form_group">
              <label className="khoz_form_label">Product Name:</label>
              <Field
                name='name'
                component='input'
                placeholder={`Please enter Product's Name`}
                value={product ? product.name: null}
              />
              <Error classname="khoz_form_error" name="name" />
            </div>
            <div className="khoz_form_group">
              <label className="khoz_form_label">Price:</label>
              <Field
                name='price'
                component='input'
                placeholder={`Please enter Product's Price`}
                value={product ? product.price: null}
              />

              <Error className="khoz_form_error" name="price" />
            </div>
            <div className="khoz_form_group">
              <label className="khoz_form_label">Description</label>
              <Field
                name='description'
                component='textarea'
                placeholder={"Please describe the product in few lines"}
                value={product ? product.description : null}
              />
              <Error className="khoz_form_error" name="description" />
            </div>
            <div className="khoz_form_group">
              <label className="khoz_form_label">Add Photos</label>
              <Field name="photos" component={ImagesPreview} />
              <Error className="khoz_form_error" name="photos" />
            </div>
            {
              photos ?
            <div className='edit_product_photos'>
              {
                photos.map(photo => 
                  <div key={photo.id} className='edit_product_photo'>
                  <img src={photo.src} alt={photo.id} />
                  <FaTrash onClick={e => this.deleteClicked(photo.id, true)} />
                  {
                    this.state[`openPopUp${photo.id}`] ?
                    <div className='sure_popup'>
                      <span>Are you sure?</span>
                      <button onClick={e => this.deleteItem(photo.id)}>Yes</button>
                      <button onClick={e => this.deleteClicked(photo.id, false)}>No</button>

                    </div>
                    : null
                  }
                  </div>
                )
              }
            </div>
              : null
            }
            <div className="buttons">
              <button type="submit">
                  {product ? 'Update' : 'Add'} Product
              </button>
            </div>
          </form>
        )}
      </Form>
    )
  }

}
export default AddEditProduct