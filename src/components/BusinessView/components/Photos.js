import React, { Component } from 'react'
import Axios from '../../../services/Axios'
import { ScrollSpy } from 'organism-react-scroll-nav';

class Photos extends Component {
    state = {
        photos: []
    }
    componentWillMount() {
        Axios.instance.get(this.props.photos).then(response => {
            this.setState({ photos: response.data.data })
        })
    }

    render() {
        let images = null
        if (this.state.photos.length > 0) {
            images = this.state.photos.map((item) => {
                return (
                    <div key={item.id} className='business-image'>
                        <img src={item.src} alt={item.description} />
                    </div>
                )
            })
        }
        return (
            <ScrollSpy id='photos'className='business_section'>
                <div className='business_heading'>
                    Photos
                </div>
                <div className='photos'>
                    {images}
                </div>
            </ScrollSpy>
        )
    }
}
export default Photos