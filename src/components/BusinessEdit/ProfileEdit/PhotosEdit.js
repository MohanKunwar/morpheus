import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import Images from '../../common/ImagesPreview/ImagesPreview'
import { FaTrash } from 'react-icons/fa';
import Axios from '../../../services/Axios';
export default class PhotosEdit extends Component {
    state = {

    }
    deleteClicked = photoId => {
        this.setState({ [`deleting${photoId}`]: true })
        Axios.authInstance.delete(Axios.API.businessEdit.deletePhotoUrl(this.props.businessSlug, photoId)).then(response => {
            if (response) {
               // this.props.update('photos')
                let deletedPhotoIndex = this.props.photos.findIndex(photo => photo.id === photoId)
                this.props.photos.splice(deletedPhotoIndex, 1)
            }
        })
    }
    addPhotos = photo => {
        const formData = new FormData()
        formData.append('photo[]', photo)
        // photo.map((photon, index) => 
        //     formData.append(`photo[]`, photon)
        // )
        console.log(formData.values)
        Axios.authInstance.post(Axios.API.businessEdit.uploadImagesUrl(this.props.businessSlug), formData).then(response => {
            console.log('photos posted', response)
            this.props.update('photos')
        })
    }
    readFile = e => {
        // let uploadImages
        for (let file of e.target.files) {
            if (file.size < 5000000) {
                let filereader = new FileReader();
                filereader.readAsDataURL(file);
                filereader.onloadend = () => {
                    this.addPhotos(file)
                }
            }
        }
    }
    render() {
        return (
            this.props.photos
                ?
                <div className='business_photos_edit'>
                    <input id="upload_image" type="file" accept="image/*" hidden={true} multiple={true} onChange={this.readFile} />
                    <img
                        title="Click To Upload Images"
                        className="upload-button"
                        src={require('../../../assets/images/upload.ico')} alt="upload button"
                        style={{ width: this.props.width || "90px", height: this.props.height || "90px" }}
                        onClick={e => document.querySelector('#upload_image').click()} />
                    {/* <div className='business_photos_view'>  */}
                    {
                        this.props.photos.map((photo, index) =>
                            !this.state[`deleting${photo.id}`] ?
                                <div key={photo.id} className='business-image'>
                                    <FaTrash className='delete_btn' onClick={e => this.deleteClicked(photo.id)} />
                                    <img src={photo.src} alt={photo.description} />
                                </div>
                                : <span key={photo.id}>deleting photo</span> // todo deleting photo spinner
                        )
                    }
                    {/* </div> */}
                </div>
                : <Spinner />
        )
    }
}