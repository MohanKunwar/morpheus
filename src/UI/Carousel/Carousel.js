import React, { Component } from 'react';
import './Carousel.css';
import Spinner from '../../helpers/Spinner';
import { Carousel } from 'react-responsive-carousel';
import { propTypes } from 'react-image';


class Carousel1 extends Component {
    render(){
           let carouselitems = this.props.items.map((item, index) => {
                return (
                    <div className='carousels_container' key={index}>
                    {item}
                    </div>
                );
            })

        return (
            <Carousel
            infiniteLoop
            autoPlay
            interval={4000} 
            showStatus={false}
            emulateTouch
            onChange={this.setSelectedPage}
            centerMode 
            centerSlidePercentage={50}
            dynamicHeight={false}
            showIndicators={false}
            showThumbs={false}
            showArrows
            className="custom_carousel"
            >
                {carouselitems}
            </Carousel>
        );
    }
  };
  

// class Carousel1 extends Component {
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
//             (<div className='carousel1'>
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

export default Carousel1;