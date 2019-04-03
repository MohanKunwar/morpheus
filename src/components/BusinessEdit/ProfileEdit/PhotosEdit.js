import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';

export default class PhotosEdit extends Component {
    render() {
        return (
            this.props.photos
            ?
            <div className='business_photos_edit'>
                photos
            </div>
            : <Spinner />
        )
    }
}