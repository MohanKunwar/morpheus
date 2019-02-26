import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from '../../../axios';
import './Photos.css';

class Photos extends Component {
    state = {
        photos: []
    }
    componentWillMount() {
        console.log('orops', this.props.photos);
        axios.get(this.props.photos).then(response => {
            this.setState({ photos: response.data.data });
            console.log(response.data.data, 'photos');
        });
    }
    render() {
        let images = null;
        if (this.state.photos.length > 0) {
            images = this.state.photos.map((item) => {
                console.log(item);
                return (
                    <Image key={item.id} src={item.src} alt={item.description} />
                )
            })
        }
        return (
            <div className='photos'>
                {images}
            </div>
        );
    }
}
export default Photos;