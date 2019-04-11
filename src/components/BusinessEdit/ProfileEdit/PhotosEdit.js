import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import Images from '../../common/ImagesPreview/ImagesPreview'
export default class PhotosEdit extends Component {
    render() {
        return (
            this.props.photos
            ?
            <div className='business_photos_edit'>
                <Images />
            </div>
            : <Spinner />
        )
    }
}