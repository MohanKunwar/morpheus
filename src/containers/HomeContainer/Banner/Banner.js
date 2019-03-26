import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Axios from './../../../services/Axios';
// import image from './../../../assets/images/banner.png';
import './Banner.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';


class Banner extends Component {
  // state = {
  //           banners: null
  //       }
  //       componentWillMount() {
  //           if (!this.state.banners) {
  //               Axios.instance.get('/banners').then(response => {
  //                   if (response && response.data) {
  //                       this.setState({ banners: response.data.data })
  //                   }
  //               })
  //           }
  //       }
   render(){
  return (
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
      
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hotel Booking</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Food Order</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Facebook boosting</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
} 
}


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
