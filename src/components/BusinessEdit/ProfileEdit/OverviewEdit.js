import React, { Component } from 'react'
import GoogleMapEdit from '../../common/GoogleMapEdit/GoogleMapEdit'
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
                <GoogleMapEdit
                lat= {this.props.business.latitude}
                lng= {this.props.business.longitude}
                 />
            <button onClick={e => this.handleChanges(e)}>Save</button>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('abc')
    }
}