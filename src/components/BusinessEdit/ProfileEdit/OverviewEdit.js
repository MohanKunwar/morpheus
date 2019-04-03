import React, { Component } from 'react'

export default class OverviewEdit extends Component {
    state = {
        data: null
    }
    componentWillMount() {
        console.log(this.state.data)
    }
    componentWillUpdate() {
        console.log(this.state.data)
    }
    handleChanges() {
        this.setState({ data: 'abc'})
    }
    render() {
        return (
            <div className='business_overview_edit'>
                overview
            <button onClick={e => this.handleChanges(e)}>abc</button>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('abc')
    }
}