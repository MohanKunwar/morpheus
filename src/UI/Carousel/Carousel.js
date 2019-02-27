import React, { Component } from 'react';

class Carousel extends Component {
    // props.init
    // props.next
    // props.current
    // props.prev
    currIndex = 0
    state = {
        nextItem: null,
        currItem: null,
        prevItem: null,
        itemCount: 0,
        limitTo: 0
        // disablePrev: false,
        // disableNext: false
    }
    componentWillMount() {
        this.setState({ items: this.props.items, itemCount: this.props.itemCount, limitTo: this.props.limitTo })
                this.setState({ currItem: this.props.items[0], nextItem: this.props.items[1] })
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
        if (this.currIndex === 1) {
            this.setState({
                currItem: this.props.items[this.currIndex],
                prevItem: null,
                nextItem: this.props.items[this.currIndex + 1],
                // disablePrev: true,
                // disableNext: false
            })
        } else {
            this.setState({
                currItem: this.props.items[this.currIndex],
                prevItem: this.props.items[this.currIndex - 1],
                nextItem: this.props.items[this.currIndex + 1],
                // disablePrev: false,
                // disableNext: false
            })
        }
    }
    nextClicked(event) {
        event.preventDefault()
        this.currIndex += 1
        if (this.currIndex === this.props.items.length-2) {
            this.setState({
                currItem: this.props.items[this.currIndex],
                prevItem: this.props.items[this.currIndex - 1],
                nextItem: null,
                // disablePrev: false,
                // disableNext: true
            })
        } else {
            this.setState({
                currItem: this.props.items[this.currIndex],
                prevItem: this.props.items[this.currIndex - 1],
                nextItem: this.props.items[this.currIndex + 1],
                // disablePrev: false,
                // disableNext: false
            })
        }
    }
    render() {
        let carousel = null
        carousel = this.props.items.length > 0 && this.state.currItem ?
        (<div className='carousel'>
            {
                this.state.prevItem
                    ? <button onClick={e => this.prevClicked(e)}>Prev</button>
                    : null
            }
            {/* <div className='prev-item'>
                <Item item={this.props.prevItem} />
            </div> */}
            <div className='curr-item'>
                <Item item={this.state.currItem} />
            </div>
            <div className='next-item'>
                <Item item={this.state.nextItem} />
            </div>
            {
                this.state.nextItem
                    ? <button onClick={e => this.nextClicked(e)}>Next</button>
                    : null
            }
        </div>)
        : (
            // todo
            // spinner
            null
        )
        return ( carousel)
    }
}
const Item = (props) => {
    const Item = props.item;
    if (Item) {
        return (Item)
    } else {
        return null
    }
}

export default Carousel;