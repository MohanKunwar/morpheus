import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Axios from './../../../services/Axios';
// import image from './../../../assets/images/banner.png';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

class Banner extends Component {
  render() {
      return (
          <Carousel
          // showArrows
          infiniteLoop
          autoPlay
          interval={3000} 
          showThumbs={false}
          showStatus={false}
          emulateTouch
          stopOnHover= {false}
          >
              <div>
                  <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                  <p className="legend">Hotel Booking</p>
              </div>
              <div>
                  <img src="http://lorempixel.com/output/food-q-c-640-480-4.jpg" />
                  <p className="legend">Room Booking</p>
              </div>
              <div>
                  <img src="http://lorempixel.com/output/nightlife-q-c-640-480-8.jpg" />
                  <p className="legend">Facebook Boosting</p>
              </div>
          </Carousel>
      );
  }
};

// class Banner extends Component {
//     state = {
//         banners: null
//     }
//     componentWillMount() {
//         if (!this.state.banners) {
//             Axios.instance.get('/banners').then(response => {
//                 if (response && response.data) {
//                     this.setState({ banners: response.data.data })
//                 }
//             })
//         }
//     }

//     render() {
//         console.log(this.state.banners)
//         return (
//                 <banner>
//                     {
//                         this.props.banners.map((banner, index) =>
//                             <Carousel.Item key={index}>
//                                 <img src={banner.src} alt={banner.title} />
//                                 {/* <Carousel.Caption>
//                                     <p>{item.body}</p>
//                                 </Carousel.Caption> */}
//                             </Carousel.Item>
//                         )
//                     }
//                 </Carousel>
//         )
//     }
// }
export default Banner;
