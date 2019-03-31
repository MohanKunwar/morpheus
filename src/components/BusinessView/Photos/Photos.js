import React, { Component } from 'react';
import Axios from '../../../services/Axios';
import './Photos.css';

class Photos extends Component {
    state = {
        photos: []
    }
    componentWillMount() {
        Axios.instance.get(this.props.photos).then(response => {
            this.setState({ photos: response.data.data });
            console.log(response.data.data, 'photos');
        });
    }
    editBusinessImage = (id, payload) => {
        // open image edit modal
        console.log('e')
    }
    addBusinessImage = (id, payload) => {
        console.log('a')
    }
    deleteBusinessImage = (id) => {
        console.log('d')
    }
    render() {
        let images = null;
        console.log('user owner', this.props.isUserOwner)
        if (this.state.photos.length > 0) {
            images = this.state.photos.map((item) => {
                return (
                    <div key={item.id} className='business-image'>
                        {
                            this.props.isUserOwner
                                ? (
                                    <div className='image-crud'>
                                        <button onClick={e => this.editBusinessImage(e)}>edit</button>
                                        <button onClick={e => this.deleteBusinessImage(e)}>delete</button>
                                    </div>)
                                : null
                        }
                        <img src={item.src} alt={item.description} />
                    </div>
                )
            })
        }
        return (
            <div className='photos'>
                {
                    this.props.isUserOwner
                        ? <button onClick={e => this.addBusinessImage(e)}>add new image</button>
                        : null
                }
                {images}
            </div>
        );
    }
}
export default Photos;