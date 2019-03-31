import React, { Component } from 'react'

export default class PhotosEdit extends Component {
    render() {
        return (
            this.props.tab === 'Photos'
            ? 
            <div className='business_photos_edit'>
                photos
            </div>
            : null
        )
    }
}