import React, { Component } from 'react';
import './Carousel.css';
import Spinner from '../../helpers/Spinner';
import Carousel from 'nuka-carousel';


class KhozCarousel extends Component {
    _handleLoadImage = () => {
        this.carousel.setDimensions()
      }
    render(){
        return (
            <Carousel
            autoplay={true}
            autoplayInterval={5000}
            pauseOnHover={true}
            slideIndex= {0}
            slidesToShow= {2}
            cellSpacing={10}
            dragging={false}
            wrapAround={true}
            ref={c => this.carousel = c}
            className="custom_carousel"
            >
               {
                this.props.items.map((item, index) => 
                <div key={index} onLoad={this._handleLoadImage}>
                {item}
                </div>
                )
        }
            </Carousel>
        );
    }
  };
  

// class KhozCarousel extends Component {
//     currIndex = 0
//     state = {
//         nextItem: null,
//         currItem: null,
//         itemCount: 0,
//         limitTo: 0
//     }
//     componentWillMount() {
//         this.setState({
//             itemCount: this.props.itemCount,
//             limitTo: this.props.limitTo,
//             currItem: this.props.items[0],
//             nextItem: this.props.items[1]
//         })
//     }
//     prevClicked(event) {
//         event.preventDefault()
//         this.currIndex -= 1
//             this.setState({
//                 currItem: this.props.items[this.currIndex],
//                 nextItem: this.props.items[this.currIndex + 1]
//             })
//     }
//     nextClicked(event) {
//         event.preventDefault()
//         this.currIndex += 1
//             this.setState({
//                 currItem: this.props.items[this.currIndex],
//                 nextItem: this.props.items[this.currIndex + 1],
//             })
//     }

//     render() { 
//         let carousel = this.props.items.length > 0 && this.state.currItem ?
//             (<div className='KhozCarousel'>
//                 <div className='curr-item'>
//                     {
//                         this.currIndex !== 0
//                             ? <button className='prev-btn' onClick={e => this.prevClicked(e)}>Prev</button>
//                             : null
//                     }
//                     {this.state.currItem}
//                 </div>
//                 <div className='next-item'>
//                     {this.state.nextItem}
//                     {
//                         this.currIndex !== this.props.items.length - 2
//                             ? <button className='next-btn' onClick={e => this.nextClicked(e)}>Next</button>
//                             : null
//                     }
//                 </div>

//             </div>)
//             : <Spinner />
//         return (carousel)
//     }
// }

export default KhozCarousel;