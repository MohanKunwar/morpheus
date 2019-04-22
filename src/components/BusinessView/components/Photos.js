import React, { Component } from 'react'
import Axios from '../../../services/Axios'
import { ScrollSpy } from 'organism-react-scroll-nav';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Photos.css'
class Photos extends Component {
    state = {
        photos: [],
        itemId: 0
    }
    componentWillMount() {
        Axios.instance.get(this.props.photos).then(response => {
            this.setState({ photos: response.data.data })
        })
    }
    
    handleCarousel= (index) => {
      let viewSliderWrapper= document.querySelector(".view_slider_wrapper");
      viewSliderWrapper.style.display= 'block';
      this.setState({itemId: index});
    }

    handleCancel= () => {
        let viewSliderWrapper= document.querySelector(".view_slider_wrapper");
        viewSliderWrapper.style.display= "none";
    }
    render() {
        let coreImages= []
        let images = []
        if (this.state.photos.length > 0) {
         this.state.photos.map((item, index) => {
                     coreImages.push(<img onClick={() => this.handleCarousel(index)} src={item.src} alt={item.description} />)
                      images.push({img: <img src={item.src} alt={item.description} />, id: index})
            })
        }
        return (
          <React.Fragment>
          <ScrollSpy>
                <div className='business_heading'>
                    Photos
                </div>
                <div className='photos'>
                {coreImages.map((image) => {
                  return image
                })}
                </div>
                <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        dragEnabled={false}
        currentSlide={this.state.itemId}
        className="view_slider_wrapper"
      >
          <Slider className="view_slider">
          {images.map((image) => {
                  return <Slide className="view_slides" index={image.id}>{image.img}</Slide>
                })}
        </Slider>
        <ButtonBack className="slider_button" id="slider_button_left">
        <img src={require("../../../assets/images/left-arrow.svg")} alt="left-arrow svg" /></ButtonBack>
        <ButtonNext className="slider_button" id="slider_button_right">
        <img src={require("../../../assets/images/right-arrow.svg")} alt="right-arrow svg" /></ButtonNext>
        <div className="images_preview_wrapper">
                {images.map((image, index) => {
                  return <Dot slide={index} className="images_preview">{image.img}</Dot>
                })} 
        </div>
        <button className="cancel_view_slider" onClick= {this.handleCancel}><img src={require("../../../assets/images/cancel.svg")} alt="cancel svg"/></button>
      </CarouselProvider>
         </ScrollSpy>
        </React.Fragment>
        )
    }
}
export default Photos