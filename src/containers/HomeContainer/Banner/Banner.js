import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';

class Banner extends Component {
    // state = {
    //     banners: null
    // }
    // componentWillMount() {
    //     if (!this.state.banners) {
    //         Axios.instance.get('/banners').then(response => {
    //             if (response && response.data) {
    //                 this.setState({ banners: response.data.data })
    //             }
    //         })
    //     }
    // }

    render() {
        return (
                <Carousel>
                    {
                        this.props.banners.map((item, index) =>
                            <Carousel.Item key={index}>
                                <img src={item.src} alt={item.title} />
                                {/* <Carousel.Caption>
                                    <p>{item.body}</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    }
                </Carousel>
        )
    }
}
export default Banner;
