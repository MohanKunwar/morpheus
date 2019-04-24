import React, { Component } from 'react'
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { FaFileUpload } from 'react-icons/fa'
import Croppie from 'react-croppie'
import './AddEditPhoto.css'
import Axios from '../services/Axios';

class AddEditPhoto extends Component {
    state = {
        src: this.props.photo,
        crop: {
            aspect: 1 / 1,
            width: 200,
            height: 200,
            x: 0,
            y: 0
        }
    }
    componentWillMount() {
        this.onSelectFile(this.props.photoUrl)
        // this.addCircularSectionClass()
    }
    addCircularSectionClass = () => {
        
        let selection = document.getElementsByClassName('ReactCrop__crop-selection')
        console.log('selections', selection)
        if (selection.length > 0)
        selection[0].className += ' circular_crop_selection'
    }

    onSelectFile = photoUrl => {
            const reader = new FileReader()
            reader.readAsDataURL(photoUrl[0])
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result })
            );
            console.log('abc')
    };

    onImageLoaded = (image, crop) => {
        this.imageRef = image;
        this.addCircularSectionClass()
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = crop => {
        this.setState({ crop });
    };
    saveBusinessLogo = () => {
        if (!this.state.image){
            return
        }
        Axios.authInstance.post(Axios.API.businessEdit.editLogoUrl(this.props.name), {_method: 'PUT', file: this.state.image}).then(response => {
            console.log(response)
        })
    }
    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop
          );
          this.setState({ image: croppedImageUrl });
        }
      }
    
      getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        )
          canvas.toBlob(blob => {
            if (!blob) {
              //reject(new Error('Canvas is empty'));
              console.error("Canvas is empty");
              return;
            }
            blob.name = `${this.props.name}_logo`
          }, "image/jpeg", 1)
      }
    
    render() {
        const { crop, src } = this.state;
        return (
            // <Croppie url={this.props.photoUrl} ref='reactCroppie' />
            <div className="">
                {/* <label htmlFor="file_upload" className="custom-file-upload">
                    <FaFileUpload onClick={this.onSelectFile}/>Custom Upload
                </label> */}
                {/* <input onChange={this.onSelectFile} type="file" /> */}

                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                )}
                <button className='save_logo_edit' onClick={this.saveBusinessLogo}>Save</button>
                <button className='cancel_logo_edit' onClick={this.props.toggleModal}>Cancel</button>
            </div>
        )
    }
}
export default AddEditPhoto