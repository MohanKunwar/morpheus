import React, { Component } from 'react';
import './Carousel.css';
import Spinner from '../../components/common/Spinner';

class Carousel extends Component {
    // props.init
    // props.next
    // props.current
    // props.prev
    currIndex = 0
    state = {
        nextItem: null,
        currItem: null,
        itemCount: 0,
        limitTo: 0
        // disablePrev: false,
        // disableNext: false
    }
    componentWillMount() {
        this.setState({
            // items: this.props.items,
            itemCount: this.props.itemCount,
            limitTo: this.props.limitTo,
            currItem: this.props.items[0],
            nextItem: this.props.items[1]
        })
        console.log('items', this.props.items)
    }
    // componentWillReceiveProps() {
    //     if (this.props.items.length > 0) {
    //         this.setState({ currItem: this.props.items[0], nextItem: this.props.items[1] })
    //     }
    // }
    prevClicked(event) {
        event.preventDefault()
        this.currIndex -= 1
            this.setState({
                currItem: this.props.items[this.currIndex],
                nextItem: this.props.items[this.currIndex + 1]
            })
    }
    nextClicked(event) {
        event.preventDefault()
        this.currIndex += 1
            this.setState({
                currItem: this.props.items[this.currIndex],
                nextItem: this.props.items[this.currIndex + 1],
            })
    }

    render() {
        let carousel = null
        carousel = this.props.items.length > 0 && this.state.currItem ?
            (<div className='carousel'>
                <div className='curr-item'>
                    {
                        this.currIndex !== 0
                            ? <button className='prev-btn' onClick={e => this.prevClicked(e)}>Prev</button>
                            : null
                    }
                    {this.state.currItem}
                </div>
                <div className='next-item'>
                    {this.state.nextItem}
                    {
                        this.currIndex !== this.props.items.length - 2
                            ? <button className='next-btn' onClick={e => this.nextClicked(e)}>Next</button>
                            : null
                    }
                </div>

            </div>)
            : <Spinner />
        return (carousel)
    }
}

export default Carousel;