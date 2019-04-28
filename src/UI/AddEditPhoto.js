import React, { Component } from 'react'
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import './AddEditPhoto.css'
import Axios from '../services/Axios';

class AddEditPhoto extends Component {
    state = {
        src: this.props.photo,
        crop: this.props.crop
    }
    componentWillMount() {
        this.onSelectFile(this.props.photoUrl)
        // this.addCircularSectionClass()
    }

    onSelectFile = photoUrl => {
        const reader = new FileReader()
        reader.readAsDataURL(photoUrl[0])
        reader.addEventListener("load", () =>
            this.setState({ src: reader.result })
        )
    };

    onImageLoaded = (image, crop) => {
        this.imageRef = image;
        if (this.props.circularView) {
            this.props.circularView()
        }
    };

    onCropComplete = crop => {
        this.getCroppedImg(this.imageRef, crop)
    };

    onCropChange = crop => {
        this.setState({ crop });
    };
    savePhoto = () => {
            let formData = new FormData()
            console.log('cropped', this.state.image)
            formData.append('_method', 'PUT')
            formData.append('file', this.state.image)
            Axios.authInstance.post(this.props.postUrl, formData).then(response => {
                if (response && response.status === 204) {
                    this.props.toggleModal()
                    this.props.update()
                }
            })
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
        // let imgUrl = canvas.toDataURL('image/jpeg', 1.0)
        // console.log('imgURl', imgUrl)
        // this.setState({ image: imgUrl })
         canvas.toBlob(blob => {
            blob.name = `${this.props.name}_logo`
            this.setState({image: blob})
            // window.URL.revokeObjectURL(this.fileUrl);
            // this.fileUrl = window.URL.createObjectURL(blob);
            // resolve(this.fileUrl);
            // return blob
        }, "image/jpeg", 1)
        // console.log(canvas)
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
                <button className='save_logo_edit' onClick={this.savePhoto}>Save</button>
                <button className='cancel_logo_edit' onClick={this.props.toggleModal}>Cancel</button>
            </div>
        )
    }
}
export default AddEditPhoto