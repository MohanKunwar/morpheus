import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import Images from '../../common/ImagesPreview/ImagesPreview'
import { FaTrash } from 'react-icons/fa';
import Axios from '../../../services/Axios';
export default class PhotosEdit extends Component {
    
    uploadImages = []
    componentWillMount() {
      console.log(this.props.photos)
    }
    
    deleteClicked = photoId => {
        Axios.authInstance.delete(Axios.API.businessEdit.deletePhotoUrl(this.props.businessSlug, photoId)).then(response => {
            if (response) {
                console.log('photo deleted', response)
                let deletedPhotoIndex = this.props.photos.findIndex(photo => photo.id === photoId)
                this.props.photos.splice(deletedPhotoIndex, 1)
            }
        })
    }
    addPhotos = photos => {

    }
    readFile = e => {
        for (let file of e.target.files) {
            if (file.size < 5000000) {
                let filereader = new FileReader();
                filereader.readAsDataURL(file);
                filereader.onloadend = () => {
                    this.uploadImages.push(file)
                }
            }
        }
        console.log(this.uploadImages)
        Axios.authInstance.post(Axios.API.businessEdit.uploadImagesUrl(this.props.businessSlug), this.uploadImages).then(response => {
            console.log(response)
        })
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
                    <div className="preview">
                    
                    </div>
                    {
                        this.props.photos.map((photo, index) =>
                            <div key={photo.id} className='business-image'>
                                <img src={photo.src} alt={photo.description} />
                                <FaTrash onClick={this.deleteClicked(photo.id)} />
                            </div>)
                    }
                </div>
                : <Spinner />
        )
    }
}