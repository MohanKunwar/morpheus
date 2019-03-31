import React, { Component } from 'react'

export default class ServicesEdit extends Component {
    render() {
        return (
            this.props.tab === 'Services'
            ? 
            <div className='business_services_edit'>
                Services
            </div>
            : null
        )
    }
}