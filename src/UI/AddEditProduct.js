import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import Error from '../helpers/FormError'
import { FaTrash } from 'react-icons/fa';
import Axios from '../services/Axios';
class AddEditProduct extends Component {
  state = {}
  photos = []
  componentWillMount() {
  }
  openLoader = () => {
    document.querySelector('#upload_image').click()
  }
  onSubmit = values => {
    values.photos = this.photos
    console.log(values)
  }
  deleteClicked = (id, openPopUp) => {
    if (openPopUp) {
      this.setState({ [`openPopUp${id}`]: true })
    } else {
      this.setState({[`openPopUp${id}`]: false })
    }
  }
  deleteItem = id => {
    this.setState({ [`deleting${id}`]: true })
    Axios.authInstance.delete(Axios.API.product.deleteProductPhotoUrl(this.props.businessSlug, id)).then(response => {
      if (response && response.status === 204) {
        this.props.refresh()
        console.log('product deleted')
      } else {
        console.log('product deleted?')
      }
    })
  }
  readFile = e => {
    for (let file of e.target.files) {
      if (file.size < 5000000) {
        let filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onloadend = () => {
          this.photos.push({
            file: file,
            src: filereader.result
          })
          // this.photos.push(file)
        }
      }
    }
    this.setState({addedPhotos: this.photos})
  }
deleteAdded = index => {
  this.photos.splice(index, 1)
  this.setState({addedPhotos: this.photos})
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
          if (!values.description) {
            errors.description = 'description is required'
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
                value={product ? product.name : null}
              />
              <Error classname="khoz_form_error" name="name" />
            </div>
            <div className="khoz_form_group">
              <label className="khoz_form_label">Price:</label>
              <Field
                name='price'
                component='input'
                placeholder={`Please enter Product's Price`}
                value={product ? product.price : null}
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
              <input id="upload_image" type="file" accept="image/*" hidden={true} multiple={true} onChange={this.readFile} />
              <img
                title="Click To Upload Images"
                className="upload-button"
                src={require('../assets/images/upload.ico')} alt="upload button"
                style={{ width: this.props.width || "90px", height: this.props.height || "90px" }}
                onClick={e => this.openLoader()} />
                
            </div>
            {
              this.state.addedPhotos && this.state.addedPhotos.length > 0 ?
              this.state.addedPhotos.map((photo, index) =>
                <div key={index} className='edit_product_photo'>
                      <img src={photo.src} alt={index} />
                      <FaTrash onClick={e => this.deleteAdded(index)} />
                </div>
              )
              : null
            }
            {
              photos ?
                <div className='edit_product_photos'>
                  {
                    photos.map(photo =>
                      <div key={photo.id} className='edit_product_photo'>
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